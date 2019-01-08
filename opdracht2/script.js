let aantal = 0;
$( "#add" ).click(function() {
  aantal++;
  $("#clickAmount").val(aantal);
});

$( "#subtract" ).click(function() {
  aantal--;
  $("#clickAmount").val(aantal);
});