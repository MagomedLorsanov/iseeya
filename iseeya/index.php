<?php
// логирование ошибок и подключение к базе данных
require_once("./config.php");

session_start();

if (isset($_SESSION["user"])) {
   $user_session = preg_replace("/[^A-Za-z0-9]/", "", $_SESSION["user"]);
   $user_association = mysqli_query($conn, "SELECT * FROM `admin` WHERE login = '$user_session'");

   // ассоциация пользователя со значением в базе данных
   if (!mysqli_fetch_assoc($user_association)) {
      header("Location: login.php");
      exit();
   }
} else {
   header("Location: login.php");
   exit();
}

// включение/выключение уровней защиты
if (isset($_POST["setSecurityLevel"])) {
   $level = $_POST["setSecurityLevel"];
   $leveler = mysqli_query($conn, "SELECT status FROM `securitylevels` WHERE level = $level");
   $leveler = mysqli_fetch_array($leveler);

   if ($leveler[0] == 0) {
      mysqli_query($conn, "UPDATE `securitylevels` SET status = 1 WHERE level = $level");
   } else {
      mysqli_query($conn, "UPDATE `securitylevels` SET status = 0 WHERE level = $level");
   }
}

// проверка статуса уровней защиты
function checkSecurityLevelStatus($conn, $level) {
   $levelStatus = mysqli_query($conn, "SELECT status FROM `securitylevels` WHERE level = $level");
   $levelStatus = mysqli_fetch_array($levelStatus);

   return $levelStatus[0];
}

$checkboxState_1 = "checked disabled";
$checkboxState_2 = "";
$checkboxState_3 = "";
$checkboxState_4 = "";

// определение проверок под каждый из уровней защиты
if (checkSecurityLevelStatus($conn, 2) == 1) {
   $checkboxState_2 = "checked";
}
if (checkSecurityLevelStatus($conn, 3) == 1) {
   $checkboxState_3 = "checked";
}
if (checkSecurityLevelStatus($conn, 4) == 1) {
   $checkboxState_4 = "checked";
}

// вывод списка номеров
$allSites = "";

// вывод данных из всех таблиц
$tbn = mysqli_query($conn, "SHOW TABLES");
$tables;
$tableList = [];
$currentDate = date("Y-m-d");
while ($table_l = mysqli_fetch_array($tbn)) {
   if ($table_l[0] != "admin" && $table_l[0] != "securitylevels") {
      $tableList[] = $table_l[0];
   }
}

foreach ($tableList as $untables) {
   $allSites .= "SELECT *, '$untables' as 'tablename' FROM `$untables` UNION ALL ";
}

$total = [];
$allSites = preg_replace("/\s[a-z:]+\s[a-z]+\s+$/i", "", $allSites);
$query = mysqli_query($conn, $allSites);

while ($row = mysqli_fetch_assoc($query)) {
   $total[] = $row;
}
?>

<!DOCTYPE html>
<html lang="en-EN" translate="no">

<head>
   <!-- мета теги -->
   <meta charset="UTF-8">
   <meta http-equiv="Cache-Control" content="no-cache">
   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
   <!-- мета теги -->

   <title>STATISTIC</title>

   <!-- стили -->
   <link rel="stylesheet" href="./css/main.css">
   <!-- стили -->

   <!-- сторонние библиотеки -->
   <!-- font awesome -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

   <!-- jquery -->
   <script type="text/javascript" src="./javascript/libs/jquery/jquery-3.6.0.js"></script>
   <!-- сторонние библиотеки -->
</head>

<body class="allsites">
   <!-- контент -->
   <div class="wrapper">
      <article>
         <div class="container__article">
            <div class="user_info_table">
               <!-- фильтрация -->
               <div class="filters">
                  <!-- по периоду -->
                  <form action="">
                     <input class="filter-input dat" type="datetime-local" name="date_filter_from" value="<?php echo (date('Y-m-d\T', strtotime('-1 day'))); ?>00:00">

                     <i class="input-sep">⬌</i>

                     <input class="filter-input dat" type="datetime-local" name="date_filter_to" value="<?php echo (date('Y-m-d\TH:i')); ?>">

                     <button class="main-btn date-filter-btn" type="submit"><i class="fas fa-filter"></i></button>
                     <p class="error_form error_form_period">Нет данных за выбранный период!</p>
                  </form>

                  <!-- по таблицам -->
                  <form action="">
                     <button class="main-btn todays-visits-btn" type="submit" title="Показать активность за сегодняшний день"><i class="fas fa-calendar-day"></i><span class="today-visits-total"></span></button>
                     <div class="container">
                        <div class="dropdown_table">
                           <div class="select_all">
                              <i class="fa fa-chevron-left"></i>
                           </div>
                           <input type="hidden">
                           <ul class="dropdown-menu">
                           </ul>
                        </div>

                        <span class="msg"></span>
                     </div>
                     <button class="main-btn all-visits-btn" type="submit" title="Показать активность за всё время"><i class="fas fa-calendar-alt"></i><span class="allday-visits-total"></span></button>
                     <div id="table" class="dropdown-load main-btn" title="Скачать данные в csv">
                        <i class="fas fa-file-download"></i>
                        <ul class="dropdown">
                           <li><button class="main-btn csv-btn" title="Скачать данные в csv"><i class="fas fa-file-csv"></i></button></li>
                           <li><button class="main-btn xls-btn" title="Скачать данные в xls"><i class="fas fa-file-excel"></i></button></li>
                        </ul>
                     </div>
                     <button class="main-btn reload-data" title="Обновить данные"><i class="fas fa-redo-alt"></i></button>
                  </form>

                  <!-- по глобальным значениям -->
                  <form action="">
                     <span id="selected_rows">0</span>

                     <div class="levels" title="Функция находится в стадии разработки">
                        <input type="checkbox" id="1" <?php echo ($checkboxState_1); ?> title="1-й уровень. (md5 хэш в базе = md5 хэш клиента или ip в базе = ip клиента  И экран в базе = экран клиента или отпечаток в базе = отпечаток клиента И экран в базе = экран клиента)">
                        <input type="checkbox" id="2" <?php echo ($checkboxState_2); ?> title="2-й уровень. (ip в базе = ip клиента И юзер агент в базе = юзер агент клиента И экран в базе = экран клиента)">
                        <input type="checkbox" id="3" <?php echo ($checkboxState_3); ?> title="3-й уровень. (отпечаток в базе = отпечататок в базе = отпечаток клиента)">
                        <input type="checkbox" id="4" <?php echo ($checkboxState_4); ?> title="4-й уровень. (отпечок клиента И юзер агент в базе = юзер агент клиента И экран в базе = экран клиента)">
                     </div>
                     <div class="search_form">
                        <input class="filter-input filter-input-globalSearch" type="text" placeholder="Search" name="global_search">

                        <button class="main-btn filter-submit" type="submit"><i class="fas fa-filter"></i></button>
                        <p class="error_form error_form_search"></p>
                     </div>
                  </form>
               </div>
               <!-- фильтрация -->

               <!-- таблица данных -->
               <div id="scrollArea" class="main-wrapper">
                  <div class="table_titles">
                     <span>№</span>
                     <span>Действия</span>
                     <span>ID</span>
                     <span class="sort filter-visit">Визиты<i class="fas fa-sort"></i></span>
                     <span class="sort filter-datetime">Время визита<i class="fas fa-sort"></i></span>
                     <span>Текст</span>
                     <span class="sort filter-lock">Блок<i class="fas fa-sort"></i></span>
                     <span>IP адрес</span>
                     <span>Отпечаток</span>
                     <span>MD5 хеш</span>
                     <span>Referer</span>
                     <span>Экран</span>
                     <span>Идентификационная строка</span>
                  </div>
                  <div id="contentArea" class="data-area"></div>
                  <div class="empty">Нет данных за сегодня !</div>
                  <div class="loadingm">
                     <input class="filter-input setrowcount" type="number" placeholder="c 1" name="firstNumberOfLoadingRows">
                     <input class="filter-input setrowcount" type="number" onKeyDown="if(this.value.length==3) return false;" placeholder="100" name="numberOfLoadingRows">
                     <button class="main-btn loadMore"><i class="fas fa-caret-down"></i></button>
                  </div>
               </div>
               <!-- таблица данных -->
            </div>

         </div>
      </article>
   </div>
   <!-- контент -->

   <!-- модльное окно -->
   <div class="modalWrapper">
      <button class="main-btn modalCloseButton fas fa-times"></button>

      <div class="modalWind">
         <div class="main-wrapper">
            <div class="table_titles">
               <span>№</span>
               <span>Действия</span>
               <span>ID</span>
               <span class="sort filter-modal-visit">Визиты<i class="fas fa-sort"></i></span>
               <span class="sort filter-modal-datetime">Время визита<i class="fas fa-sort"></i></span>
               <span>Текст</span>
               <span class="sort filter-modal-lock">Блок<i class="fas fa-sort"></i></span>
               <span>IP адрес</span>
               <span>Отпечаток</span>
               <span>MD5 хеш</span>
               <span>Referer</span>
               <span>Экран</span>
               <span>Идентификационная строка</span>
            </div>

            <div class="table-date"></div>
         </div>
      </div>
   </div>

   <script>
      const allTables = <?php echo (json_encode($tableList)); ?>;
      const currentDate = <?php echo (json_encode($currentDate)); ?>;

      let allDataFromDB = <?php echo (json_encode($total)); ?>;
      let modalSave = [];
      let modalCount = 0;
      let searchValue = "";
      let searchResult = [];
      let userSites = [];
      let searchOrPeriod = 0;
      let periodResoult = [];
      let setRowCount = "";
      let firstRow = "";
      let pageRowCount = 100;
      let currentlyUsedData = [];
      let className = "";
      let blockSts = "";
      let nday = "";
      let dfrom = "";
      let countThisUser = "";
      let canvsThisUser = "";
      let dTo = "";
      let rowNumber = 0;
      let firstLoadedRows = 0;
      let numberOfLoadingRows = 100;
      let allVisitsArr = [];
      let modalFirstLoad = "";
      let arrayOfUserFingerprints = [];
   </script>

   <script src="./javascript/xls-export.js"></script>
   <script src='./javascript/form.js'></script>
   <script src="./javascript/main.js"></script>
   <script src="./javascript/animations.js"></script>

</body>

</html>