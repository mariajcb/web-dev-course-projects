function printReverse(array) {
  for (var i = array.length-1; i >= 0; i--) {
    console.log('this is printReverse ' + array[i]);
  }
}

printReverse([1,2,3,4])

function isUniform(array) {
  var first = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] !== first) {
      return false;
    }
  }
  return true;
}

console.log(isUniform([1,1,1,2]));

function sumArray(array) {
  var sum = 0;
  array.forEach(function(element){
    sum += element;
  })
  return sum;
}

console.log('this is sumArray ' + sumArray([1,2,3]));

function max(array) {
  var max=array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

console.log('this is max ' + max([1,2,3]));

function myForEach(arr, func) {
  //loop through array
  for (var i = 0; i < arr.length; i++) {
    //call func for each item in array
    func(arr[i])
  }
}

var colors = ["red", "white", "blue"]

myForEach(colors, function(color){
  console.log(color);
})

var movies = [
  { name : "In Bruges",
    rating : "5",
    hasWatched : true },
  { name : "Frozen",
    rating : "4.5",
    hasWatched : false },
  { name : "Mad Max",
    rating : "5",
    hasWatched : false },
  { name : "Les Miserables",
    rating : "3.4",
    hasWatched : false }
  ]

movies.forEach(function(movie) {
  if (movie.hasWatched) {
  console.log(`You have watched "${movie.name}" - ${movie.rating} stars`);
  }
  else console.log(`You have not watched "${movie.name}" - ${movie.rating} stars`);
})
