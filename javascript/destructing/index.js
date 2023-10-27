// let items = [2, 4, 6, 8, 10];
// let first = items[0];
// let second = items[1];
// let third = items[2];
// let rest = items.slice(3, 5);
// console.log(first, second, third, rest);

// let items = [2, 4, 6, 8, 10, 22, 88, 99];
// let [first, second, third, ...rest] = items;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log("rest", rest);

// let people = [
//   { name: "Suleyman", age: 12 },
//   { name: "Elnur", age: 10 },
//   { name: "Nurane", age: 4 },
//   { name: "Huseynova", age: 40 },
// ];

// let [, , , , ...student] = people;

// console.log(student);

// function sum(...numbers) {
//   console.log(numbers.reduce((prev, val) => prev + val, 0));
// }

// sum(2, 8, 12, 17, 88, 99, 22, 33);

// let items = [2, 4, 6];

// let longItemsArr = [...items, 0, 8, 10, 12];

// console.log(longItemsArr);

// let items = [10, 12, 3, 99, 22, 176];

// console.log(Math.max(...items));

// let numbers1 = [4, 5, 6];
// let numbers2 = [...numbers1];

// numbers1[0] = 3;

// console.log(numbers2[0]);

// let items = [2, 4, 6];
// let newItems = [0, ...items, 55, 2, 0];
// let [test, hello, myHello, ...rest] = [...items, ...newItems];

// console.log(rest);

// let student = {
//   firstName: "Suleyman",
//   lastName: "Dadashow",
//   age: 12,
// };
// // let firstName = student.firstName;
// // let age = student.age;
// let { firstName, lastName, age } = student;

// console.log(firstName);
// console.log(lastName);
// console.log(age);

// let price = 50000;

// let car = {
//   model: "TOGG",
//   fuel: "Electric",
//   isNew: true,
//   price: {
//     value: 1000,
//     currency: "TL",
//   },
//   wheelCount: 4,
// };

// let { model, price: carPrice } = car;

// console.log(carPrice);

// let car = {
//   name: "car",
//   for: "drive",
// };

// let togCar = {
//   model: "TOGG",
//   ...car,
// };

// console.log(togCar);
// console.log(car);
