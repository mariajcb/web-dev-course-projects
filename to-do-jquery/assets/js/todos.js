//check off specific to-dos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//click on x to delete toDo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
  if (event.which === 13) {
    //grab new to do text from input
    var toDoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append(`<li><span><i class='fa fa-trash'></i></span> ${toDoText}</li>`)
  }
})

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
})
