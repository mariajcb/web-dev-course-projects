// var answer = prompt("are we there yet?")
//
// while(answer.indexOf("yes") === -1) {
//   var answer = prompt("are we there yet?");
// }
//
// alert("Yay, we made it!")
//
// if(answer === "yes") {
//   alert("Yay, we made it!")
// } else {
//   var answer = prompt("are we there yet?");
// }

//all numbers b/tw -10 and 19
// for (var i = -10; i <= 19; i++) {
//   console.log(i);
// }

//all even between 10 and 40
// for (var i = 10; i <= 40; i++) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }

//all odd b/tw 300 and 333
// for (var i = 300; i <= 333; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

//all divisible by 5 AND 3 between 5 and 50
// for (var i = 5; i <= 50; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log(i);
//   }
// }

// let factorialize = function(num) {
//   var result = num;
//   if (num === 0 || num ===1)
//   return 1;
//   while (num >1) {
//     num--;
//     result = result * num;
//   }
//   return result;
// }
// 5!= 5*4*3*2*1
// console.log(factorialize(5))

let kebabToSnake = function(str){
  return str.replace(/-/g, "_");
}
