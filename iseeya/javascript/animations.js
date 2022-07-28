function DropDown(el) {
   this.dd = el;
   this.initEvents();
}
DropDown.prototype = {
   initEvents: function () {
      var obj = this;
      obj.dd.on('click', function (event) {
         if (currentlyUsedData.length > 0) {
            $(this).toggleClass('active');
            event.stopPropagation();
         }
      });
   }
}

$(function () {
   var dd = new DropDown($('#table'));
   $(document).click(function () {
      // all dropdowns
      $('#table').removeClass('active');
   });
});
/*Dropdown Menu*/
$('.dropdown_table').on('click', function () {
   $(this).attr('tabindex', 1).focus();
   $(this).toggleClass('active');
   $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown_table').on('focusout', function () {
   $(this).removeClass('active');
   $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown_table').on('click', ' .dropdown-menu li', function () {
   $(this).parents('.dropdown_table').find('span').text($(this).text());
   $(this).parents('.dropdown_table').find('span').attr('data_names_tables', $(this).attr('data_names_tables'));
});