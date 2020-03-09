// var faker = require('faker');
//
// console.log(faker(fake.("{{ productName }}, {{ price }})" ));


function gradingStudents(grades) {
  grades.shift();
  return grades.map(
    // grade < 38 || (grade % 5 < 3) ? grade : grade + (5 - grade % 5));
    function(grade) {
          if ((grade<38) || (grade % 5 < 3)) {
          return grade;
        }
        return grade + (5 - grade % 5);
    })
}


console.log(gradingStudents([4,
73,
67,
38,
33,]));
