// let student = {
//   name: "Suleyman",
//   surname: "Dadashov",
//   age: 18,
//   isNew: true,
//   for: "Code Academy",
//   "full-name": "Suleyman Dadashov",
// };

// console.log(student["age"]);
// console.log(student.age);

// let person = {
//   name: "suleumna",
// };

// person.surname = "Dadashov";
// delete person.name;
// delete person.surname;

// console.log(person);

// let teacher = {
//   name: "Suleyman",
//   age: 12,
//   isNew: true,
//   printHello: () => {
//     console.log("hello");
//   },
//   items: ["phone", "computer", "book"],
//   father: {
//     name: "Kimse",
//     surname: "Kimseyev",
//   },
// };

// teacher.printHello();
// console.log(teacher.items[2]);
// console.log(teacher.father);

// let person = {
//   name: "Suleyman",
//   student: {
//     surname: "Test",
//   },
// };

// if ("name" in person) {
//   console.log(person.name);
// }

// let person = {
//   name: "Suleymna",
//   surname: "Dadashov",
//   age: 12,
// };

// for (let abc in person) {
//   console.log(abc, person[abc]);
// }

// let student = {
//   name: "Vusal",
//   surname: "Yusufov",
//   car: {
//     model: "NIVA",
//     color: "AG",
//   },
// };

// if (student && student.car) {
//   console.log(student.car.model);
// }
// console.log(student?.car?.model);

let students = [
  {
    name: "Suleynman",
    surname: "Dada",
    age: 12,
  },
  {
    name: "Vusal",
    surname: "Hesenov",
    age: 20,
  },
  {
    name: "Vusal",
    surname: "Yusufov",
    age: 11,
  },
  {
    name: "Aysel",
    surname: "Abbasova",
    age: 4,
  },
  {
    name: "Rustem",
    surname: "Rzayev",
    age: 30,
  },
];

// console.log(students);
// console.log("-----------------------");

// students.forEach((item) => {
//   console.log(`${item.name} ${item.surname} - ${item.age}`);
// });

// let resultStudents = students.map((student) => {
//   return {
//     fullName: `${student.name} ${student.surname}`,
//     birthYear: new Date().getFullYear() - student.age,
//   };
// });
// console.log(resultStudents);

// let student = students.findIndex(
//   (student) => student.name.length > student.age
// );
// console.log(student);

// let filteredStudents = students.filter((student) => {
//   return student.name[1] === student.surname[1];
// });

// console.log(filteredStudents);

// let res = students.some((student) => {
//   return student.age > student.name.length;
// });

// console.log(res);

// let numbers = [3, 6, 9, 12, 15, 18];
// // (3+6+9+12+15)/5 = 9
// // 0 + 3/5 + 6/5 + 9/5 + 12/5 + 15/5 = 0.6 + 1.2 + 1.8 + 2.4 + 3 =  3 + 3 + 3 = 9

// let res = numbers.reduce((prev, item, idx, arr) => {
//   return prev + item / arr.length;
// }, 0);

// console.log(res);
