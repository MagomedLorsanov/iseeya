window.addEventListener("load", function () {
   // функция определения посещений пользователя
   function visitsPeriodFunc(arrBase, items, Vif = 1) {
      if (!arrayOfUserFingerprints.includes(items.sameUser) && Vif) {
         arrayOfUserFingerprints.push(items.sameUser);
         arrBase.push(items);

         items.visitsPeriod = 1;
      } else {
         arrBase.forEach(function (items1) {
            if (items1.sameUser == items.sameUser) {
               items1.visitsPeriod += 1;
            }
         });
      }
   }
   // обработка и сортировка данных перед отрисовкой таблицы
   // searchOrPeriod = 0 (today)    searchOrPeriod = 1 (search)    searchOrPeriod = 2 (period)    searchOrPeriod = 3 (all time)
   function initialTableRendering(searchOrPeriod0 = 0) {
      searchOrPeriod = searchOrPeriod0;
      allVisitsArr = [];
      currentlyUsedData = [];
      arrayOfUserFingerprints = [];
      allDataFromDB.sort(funcSortDateASC);

      allDataFromDB.forEach(function (items) {
         if (!allVisitsArr.includes(items.sameUser)) {
            allVisitsArr.push(items.sameUser)
         }
         if (items.last_visit.includes(currentDate)) {
            visitsPeriodFunc(currentlyUsedData, items);
         }
      });

      if (arrayOfUserFingerprints.length < 1) {
         $(".todays-visits-btn").attr("disabled", "disabled");
      } else {
         $(".todays-visits-btn").removeAttr("disabled");
      }

      $(".today-visits-total").text(arrayOfUserFingerprints.length);
      $(".allday-visits-total").text(allVisitsArr.length);
      renderDataLimit(0, 0, 100);
   } initialTableRendering();

   // функция выбора пользователей по сегодня или за все ремя в выбранной таблице
   function todayOrAllVisits(searchOrPeriod1, e, todayorall = "") {
      if(e) e.preventDefault();

      allDataFromDB.sort(funcSortDateASC);
      searchOrPeriod = searchOrPeriod1;
      currentlyUsedData = [];
      arrayOfUserFingerprints = [];

      allDataFromDB.forEach(function (items) {
         if (items.last_visit.includes(todayorall)) {
            visitsPeriodFunc(currentlyUsedData, items);
         }
      });

      $(".data-area").html("");
      renderDataLimit(0, 0, 100);
   }

   // выбор пользователей по сегодня
   $(".todays-visits-btn").on("click", (e) => {
      todayOrAllVisits(0, e, currentDate);
   })
   // выбора пользователей за все ремя
   $(".all-visits-btn").on("click", (e) => {
      todayOrAllVisits(3, e,);
   })

   // стееть ошибки фокусом на body
   $("body").on("focusout", function () {
      $(".error_form_period, .error_form_search").css("display", "none");
   });

   // отрисовка данных с ограничением в 100 строк
   function renderDataLimit(firstLoadedRows1 = firstLoadedRows,
      rowNumber1 = rowNumber,
      numberOfLoadingRows1 = numberOfLoadingRows) {
      if (currentlyUsedData.length == 0) {
         $("body").addClass("no-today-data");
      } else {
         $("body").removeClass("no-today-data");
         firstLoadedRows = firstLoadedRows1;
         rowNumber = rowNumber1;
         numberOfLoadingRows = numberOfLoadingRows1;
         className = $("body").hasClass("windMod") ? ".table-date" : ".data-area";
         pageRowCount = rowNumber ? pageRowCount : 0;

         if (currentlyUsedData.length < firstLoadedRows + numberOfLoadingRows) {
            firstLoadedRows += (currentlyUsedData.length - firstLoadedRows - 1);
         } else if (firstLoadedRows == 0) {
            firstLoadedRows += numberOfLoadingRows - 1;
         } else {
            firstLoadedRows += numberOfLoadingRows;
         }

         currentlyUsedData.forEach(function (items, i) {
            items.id = ++i;
            if (rowNumber <= firstLoadedRows && rowNumber <= i) {
               pageRowCount++;
               initialDataStructure(currentlyUsedData[rowNumber].visitsPeriod,
						currentlyUsedData[rowNumber].last_visit,
						currentlyUsedData[rowNumber].tablename,
						currentlyUsedData[rowNumber].user_text,
						currentlyUsedData[rowNumber].status,
						currentlyUsedData[rowNumber].ip,
						currentlyUsedData[rowNumber].canvasfingerprint,
						currentlyUsedData[rowNumber].usr_hash,
						currentlyUsedData[rowNumber].scrn_sz,
						currentlyUsedData[rowNumber].usr_agent,
						currentlyUsedData[rowNumber].sameUser,
						currentlyUsedData[rowNumber].Referer,
						++rowNumber,
						className);
            }
         });
      }
   }

   // подгрузка данных количеством 100 строк
   $(".loadMore").on("click", function (event) {
      event.preventDefault();

      setRowCount = +$("input[name='numberOfLoadingRows']").val() ? +$("input[name='numberOfLoadingRows']").val() : 100;
      firstRow = +$("input[name='firstNumberOfLoadingRows']").val();

      if (firstRow ? (setRowCount - firstRow > 1000) : (setRowCount + pageRowCount > 1000)) {
         alert("Вы привысили лимит, пожалуйста не подгружайте на одну страницу более 1000 строк")
      } else {
         numberOfLoadingRows = setRowCount;

         if (firstRow) {
            $(".data-area").html("");
            rowNumber = firstRow - 1;
            firstLoadedRows = rowNumber;
            $("input[name='firstNumberOfLoadingRows']").attr("placeholder", `c ${firstRow}`);
         }
         renderDataLimit();
      }
      $("input[name='firstNumberOfLoadingRows']").val("");
   });
   // ===============================================================================================
   // вывод названий таблиц в поле выборки сайта
   function ShowTables(allTables) {
      $(".select_all").prepend(`
	  <span data_names_tables = "${allTables}">Все сайты</span>
	  `);
      $(".dropdown-menu").prepend(`
	  <li data_names_tables = "${allTables}" name="allsites"> Все сайты</li>
	  `);
      allTables.forEach(function (onetable) {
         $(".dropdown-menu").append(`
		  <li data_names_tables="${onetable}" name="onetable""> ${onetable}</li>
		  `);
      });
   }
   ShowTables(allTables);

   // отрисовка таблицы в соответствии с выбранным сайтом
   function reloadData(el, fun) {
      currentlyUsedData = [];
      $(".data-area").html("");
      $.ajax({
         url: "./actions.php",
         type: "get",
         data: {
            table_name: el.attr("data_names_tables")
         },
         success(data) {
            allDataFromDB = JSON.parse(data);
            if (fun) fun();
         }
      });
   }

   // обновление страницы
   $(".reload-data").on("click", (e) => {
      e.preventDefault();
      reloadData($(".select_all span"), function () {
         initialTableRendering(searchOrPeriod);
         switch (searchOrPeriod) {
            case 1:
               searchFunc()
               break;
            case 2:
               filterPeriod()
               break;
            case 3:
               todayOrAllVisits(3);
               break;
         }
      });
   })

   $(".dropdown_table").on("click", "li", function () {
      if ($(this).attr("name") == "allsites") {
         $("body").addClass("allsites");
      } else {
         $("body").removeClass("allsites");
      }
      reloadData($(".select_all span"), initialTableRendering)
   });

   // ===============================================================================================
   // ===============================================================================================
   // вывод данных одинаковых пользователей
   $(".data-area").on("click", ".userList", function (event) {
      event.preventDefault();
      $("body").addClass("windMod");
      modalFirstLoad = firstLoadedRows;
      modalCount = rowNumber;
      userSites = [];
      modalSave = currentlyUsedData;
      countThisUser = $(event.currentTarget).attr("data_count");
      canvsThisUser = $(event.currentTarget).attr("data_cnvs");
      currentlyUsedData = [];

      function userCountSites(items) {
         if (!userSites.includes(items.tablename)) {
            userSites.push(items.tablename);

            items.visitsPeriod = 1;
         } else {
            currentlyUsedData.forEach(function (items1) {
               if (items1.tablename == items.tablename) {
                  items1.visitsPeriod += 1;
                  items.visitsPeriod = items1.visitsPeriod;
               }
            });
         }
         currentlyUsedData.push(items);
      }

      allDataFromDB.forEach(function (items) {
         if (items.sameUser == canvsThisUser) {
            if (searchOrPeriod == 1 || searchOrPeriod == 3 ||
               (searchOrPeriod == 0 && items.last_visit.includes(currentDate))) {
               userCountSites(items);
            } else if (searchOrPeriod == 2) {
               nday = new Date(items.last_visit);
               if (+dfrom <= +nday && +dTo >= +nday) {
                  userCountSites(items);
               }
            }
         }
      });
      renderDataLimit(allDataFromDB.length, 0, 300);

   });

   $(".modalCloseButton").on("click", function (event) {
      event.preventDefault();

      $("body").removeClass("windMod");

      modalSave.forEach(function (items) {
         if (items.sameUser == canvsThisUser) {
            items.visitsPeriod = countThisUser;
         }
      });

      firstLoadedRows = modalFirstLoad;
      currentlyUsedData = modalSave;
      rowNumber = modalCount;

      $(".modalWind .table_data").remove();
   });
   // ===============================================================================================
   // ===============================================================================================
   // фильтрация по периоду
   function filterPeriod() {
      dTo = new Date(($("input[name='date_filter_to']").val()).replace("T", " "));
      dfrom = new Date(($("input[name='date_filter_from']").val()).replace("T", " "));
      arrayOfUserFingerprints = [];
      periodResoult = [];
      allDataFromDB.sort(funcSortDateASC);

      allDataFromDB.forEach(function (items) {
         nday = new Date(items.last_visit);
         if (+dfrom <= +nday && +dTo >= +nday) {
            visitsPeriodFunc(periodResoult, items);
         }
      });

      if (periodResoult.length == 0) {
         $(".error_form_period").css("display", "block");
      } else {
         $(".filter-input-globalSearch").val("");
         $(".data-area").html("");

         currentlyUsedData = periodResoult;
         searchOrPeriod = 2;

         renderDataLimit(0, 0, 100);
      }
   }

   $(".date-filter-btn").on("click", function (event) {
      event.preventDefault();
      filterPeriod()
   });
   // ===============================================================================================
   // ===============================================================================================
   // выбор нескольких пользователей
   $(document).on("change", ".data-area input[type='checkbox']", function () {
      $("#selected_rows").text($(".data-area input[type='checkbox']:checked").length);
   });

   let lastChecked = null;

   $(".data-area, .modalWind").on("click", "input[type='checkbox']", function (event) {
      const chkboxes = $(".data-area input[type='checkbox']");
      if (!lastChecked) {
         lastChecked = this;
         return;
      }
      if (event.shiftKey) {

         const start = chkboxes.index(this);
         const end = chkboxes.index(lastChecked);
         chkboxes.slice(Math.min(start, end), Math.max(start, end) + 1).prop("checked", lastChecked.checked);
      }
      lastChecked = this;
   });

   // обработчики событий блок/разб
   $(".data-area, .modalWind").on("click", ".remindBtn", function (event) {
      event.preventDefault();
      let table_names = $(".select_all span").attr("data_names_tables");
      let checkSmUsers = [];
      const checkArr = $(".data-area input[type='checkbox']:checked");
      const u_sts = $(this).attr("data-name");
      const result = confirm("Are you sure to block/unblock this user(s)?");
      if (checkArr.length <= 1) {
         checkSmUsers = $(this).attr("data-u_hash");
      } else {
         checkArr.each(function () {
            checkSmUsers.push($(this).attr("data-u_hash"));
         });
      }

      if (table_names.includes("SELECT")) {
         table_names = allTables;
      }
      blockSts = (u_sts == 1) ? "Да" : "Нет";
      if (result) {
         $.ajax({
            type: "get",
            url: "./actions.php",
            data: {
               table_name: table_names,
               sts: u_sts,
               sameUser: checkSmUsers
            },
            success() {
               checkArr.prop("checked", false);
               $("#selected_rows").text(0);
               allDataFromDB.forEach(function (items) {
                  if (checkSmUsers.includes(items.sameUser)) {
                     items.status = u_sts;
                  }
               });
               if (Array.isArray(checkSmUsers)) {
                  checkSmUsers.forEach(function (checkSmUser) {
                     $(`span[data_u_sameUser="${checkSmUser}"]`).siblings("#u_status").text(blockSts);
                  });
               } else {
                  $(`span[data_u_sameUser="${checkSmUsers}"]`).siblings("#u_status").text(blockSts);
               }
            }
         });
      } else {
         return false;
      }
   });
   // ===============================================================================================
   // ===============================================================================================
   // сортировка
   function filterData(sortingSelector, funcSortDesc, funcSortAsc) {
      className = $("body").hasClass("windMod") ? ".table-date" : ".data-area";

      $(className).html("");
      $(sortingSelector).toggleClass("revers");

      if ($(sortingSelector).hasClass("revers")) {
         currentlyUsedData.sort(funcSortDesc);
      } else {
         currentlyUsedData.sort(funcSortAsc);
      }
      renderDataLimit(0, 0, 100);
   }

   // по дате
   // по возрастанию
   function funcSorDateDESC(firstSortingObject, secondSortingObject) {
      const a = new Date(firstSortingObject.last_visit);
      const z = new Date(secondSortingObject.last_visit);

      return a - z;
   }

   // по убыванию
   function funcSortDateASC(firstSortingObject, secondSortingObject) {
      const a = new Date(firstSortingObject.last_visit);
      const z = new Date(secondSortingObject.last_visit);

      return z - a;
   }

   // сортировка по дате
   $(".filter-datetime, .filter-modal-datetime").on("click", function (event) {
      event.preventDefault();

      if ($(this).hasClass("filter-modal-datetime")) {
         filterData(".filter-modal-datetime", funcSorDateDESC, funcSortDateASC);
      } else {
         filterData(".filter-datetime", funcSorDateDESC, funcSortDateASC);
      }
   });

   // общая функция сортировки по числам
   function SortsNum(filterEl, SortGlobalEl,e) {
      e.preventDefault();
      if ($(this).hasClass(filterEl)) {
         filterData(filterEl, (a, z) => a[SortGlobalEl] - z[SortGlobalEl], (a, z) => z[SortGlobalEl] - a[SortGlobalEl]);
      } else {
         filterData(filterEl, (a, z) => a[SortGlobalEl] - z[SortGlobalEl], (a, z) => z[SortGlobalEl] - a[SortGlobalEl]);
      }
   }

   $(".filter-visit, .filter-modal-visit").on("click", function (e) {
      SortsNum(".filter-visit", "visitsPeriod",e);
   });
   $(".filter-click, .filter-modal-click").on("click", function (e) {
      SortsNum(".filter-click", "user_text",e);
   });
   $(".filter-lock, .filter-modal-lock").on("click", function (e) {
      SortsNum(".filter-lock", "status",e);
   });
   // ===============================================================================================
   // ===============================================================================================
   // поиск по базе данных

   function searchFunc() {

      searchValue = ($(".filter-input-globalSearch").val()).trim();
      searchResult = [];
      arrayOfUserFingerprints = [];

      if (searchValue != "") {
         allDataFromDB.sort(funcSortDateASC);
         allDataFromDB.forEach(function (items) {
            visitsPeriodFunc(searchResult, items,
               (items.ip.includes(searchValue) ||
                  items.canvasfingerprint.includes(searchValue) ||
                  items.usr_hash.includes(searchValue) ||
                  items.scrn_sz.includes(searchValue) ||
                  items.usr_agent.includes(searchValue) ||
                  items.last_visit.includes(searchValue) ||
                  items.user_text.includes(searchValue) ||
                  items.Referer.includes(searchValue)));
         });

         if (searchResult.length > 0) {
            searchOrPeriod = 1;
            $(".data-area").html("");

            currentlyUsedData = searchResult;
            renderDataLimit(0, 0);
         } else {
            $(".error_form_search").text("Нет результатов по поиску");
            $(".error_form_search").css("display", "block")
         }
      } else {
         $(".error_form_search").text("Вы ничего не ввели");
         $(".error_form_search").css("display", "block");
      }
   }


   $(".filter-submit").on("click", function (event) {
      event.preventDefault();

      if (event.key === "Enter" || event.keyCode === 13 || $(".filter-submit")[0] == $(this)[0]) {
         searchFunc()
      }
   });
   // ===============================================================================================
   // ===============================================================================================
   // обработчик состояния переключателей уровней защиты
   $(".levels").on("change", "input[type='checkbox']", function () {
      const confirmSecurityStatusSet = confirm(`Вы уверены, что хотите включить/выключить уровень ${$(this).attr("id")}?`);

      if (confirmSecurityStatusSet) {
         $.ajax({
            type: "post",
            data: {
               setSecurityLevel: $(this).attr("id")
            }
         });

         if ($(this).is(":checked")) $(this).prop("checked", true);
      } else {
         if ($(this).is(":checked")) {
            $(this).prop("checked", false);
         } else {
            $(this).prop("checked", true);
         }
      }
   });

   // загрузка данных в xls
   $(".xls-btn").on("click", function (e) {
      e.preventDefault()
      new XlsExport(currentlyUsedData, "Example WB").exportToXLS("data-users.xls")
   });
   // загрузка данных в csv
   $(".csv-btn").on("click", function (e) {
      e.preventDefault()
      new XlsExport(currentlyUsedData, "Example WB").exportToCSV("data-users.csv")
   });
});