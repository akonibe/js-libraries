$(document).ready(function() {
  /*** selectie velden bij focus ***/
  var selectievelden = opvullenSelectionArray();
  setSelectFunctions(selectievelden);

  if (selectievelden.length > 0)
  {
    var veld = "#" + selectievelden[0];
    $(veld).focus();
    $(veld).select();
  }
  $("input[type='text']").click(function () {
    $(this).select();
  });
  /*** datepicker voor alle velden met datepicker als class **/
  $(".datepicker").each(function() {
    $(this).datepicker({
      dateFormat: 'dd/mm/yy',
      firstDay: 1,
    });
  });
  $(".datepicker").each(function() {
    $(this).datepicker({
      dateFormat: 'dd/mm/yy',
      firstDay: 1,
      showAnim: "slide"
    });
  });
  /*** selecteer volledige inhoud bij focus op veld ***/
  $("input:text").focus(function() { $(this).select(); } );
})
$.datepicker.setDefaults($.datepicker.regional['nl-BE']);


