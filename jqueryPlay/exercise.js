$("div").css("background", "purple");
var firstDiv = $("div")[0];
$(firstDiv).css("color", "pink");
//you can also do
$("div:first-of-type").css("color", "pink");
//OR - but this is slower
$("div:first").css("color", "pink");
$(".highlight").css("width", "200px");
$("#third").css({
  border: "3px solid orange"
});
