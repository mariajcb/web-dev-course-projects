$('document').ready(function() {

var todos = ["Walk a dog"];
var input = prompt("What would you like to do?");

while(input !== "quit"){
  if (input === "list") {
    listTodos();
  } else if(input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteToDo();
  }
  input = prompt("What would you like to do?");
}
console.log("You quit!");

function listTodos() {
  console.log("*********");
  todos.forEach(function(todo, i){
    console.log(i + ": " +todo);
  });
  console.log("*********");
}

function addTodo() {
  var newToDo = prompt("Enter new to do");
  todos.push(newToDo);
  console.log("Added todo");
}

function deleteToDo() {
  //as for index of todo to be deleted
  var index = prompt("Enter index of todo to delete");
  //delete that todo
  todos.splice(index, 1);
  console.log("Deleted todo");
}

});
