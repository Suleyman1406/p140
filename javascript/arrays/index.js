// let myArr = [
//   1,
//   "str",
//   true,
//   [1],
//   function () {
//     console.log("Hello");
//   },
// ];

// myArr[4]();

// let numbers = [1, 2, 3, 5];
// // console.log(numbers.at(-2));
// console.log("evvel", numbers); // 1
// // numbers.push(12, 77, 99);
// // numbers.unshift(88, 5, 0);

// numbers.pop();
// let res = numbers.pop(); // 3
// numbers.pop(); //
// console.log("silinen", res); // 3
// console.log("sonra", numbers); //1

// let numbers = [1, 2, 3, 5];

// numbers.shift();
// numbers.shift();
// let res = numbers.shift();
// console.log(res);

// console.log(numbers);

// [1,2,3,4]

// function change(b) {
//   b = 18;
// }

// let a = 12;

// change(a);

// console.log(a);

// function change(arr) {
//   arr[0] = 4;
// }

// let myArr = [1, 2, 3];

// change(myArr);

// console.log(myArr);

// let fruits = ["alma", "armud", "heyva"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// let fruits = ["alma", "heyva"];
// console.log(fruits.length);

// fruits.length = 12;
// console.log(fruits);

// let myArr = new Array(10).fill("hello");

// console.log(myArr);

// console.log(String([1, 2, 3]));

// --------------------------------------
// ARRAY METHODS

// let numbers = [3, 8, 9, 12, 1];

// let res = numbers.splice(2, 0);

// console.log("res", res);
// console.log(numbers);

// let numbers = [3, 8, 9, 12, 1];

// numbers.splice(2, 2, 66, 33, 44, 78, 22);

// console.log(numbers);

// let numbers = [3, 8, 9, 12, 1];

// console.log(numbers.includes(12));

// let myArr = [1, 2, 3];
// let myNewArr = [7, 8, 9, 12];

// let res = myArr.concat(myNewArr);
// console.log(res);
// console.log(myArr);
// console.log(myNewArr);

// let myArr = ["hello", "?", "how", "are", "you", "today", "?"];

// let index = myArr.indexOf("??");

// if (index !== -1) {
//   myArr.splice(index, 1);
//   console.log(myArr);
// } else {
//   console.log("element tapilmadi!");
// }

// console.log(myArr.indexOf("?", 3));
// console.log(myArr.lastIndexOf("?"));

// let items = [1, 2, 3, 4, 5];

// let res = items.join("nurane");
// console.log(res.split(""));

// let str = "055 555-55-55";
// let phoneItems = str.split(" ");
// console.log(phoneItems[1].split("-"));

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// for (let number of numbers) {
//   console.log((number * number) / 2);
// }

// numbers.forEach((value) => {
//   console.log((value * value) / 2);
// });

// let numbers = [1, 2, 3, 4];

// let res = numbers.forEach((value, idx, items) => {
//   console.log(value, idx, items);
// });

// console.log(res); // undefined

// let numbers = [1, 2, 3, 4];

// let res = numbers.map((item, idx, arr) => {
//   if (item == 2) {
//     return "hello";
//   }
//   // return item * 2;
// });
// console.log("res", res);

// console.log(numbers);

// let characters = ["1", "2", "3", "4"];

// let res = characters.map((item) => {
//   return +item;
// });

// console.log("res", res);
// console.log(characters);

// let numbers = [1, 2, 3, 4];

// let res = numbers.map((item, idx) => {
//   return item * item;
// });

// console.log("res", res);

// let names = ["suleyman", "zerbeli", "elnur", "cahandar"];

// let uppercaseNames = names.map((item, idx, arr) => {
//   return item.toUpperCase();
// });

// console.log(uppercaseNames);
// console.log(names);

// let numbers = [1, 2, 3, 4];

// let res = numbers.map((item) => item * item);
// let res = numbers.map((item, idx) => {
//   console.log(item)
//   return item * item;
//  });

// console.log("res", res);

// let arrFunc = (a) => a * 2;

// let res = arrFunc(12);
// console.log(res);

// let numbers = [0, 3, 5, 7, 8, 9, 10];

// let res = numbers.find((item, idx) => {
//   return item;
// });

// console.log(res);

// let numbers = [3, 5, 7, 8, 9, 10];

// let res = numbers.findIndex((item, idx) => {
//   return !item;
// });

// console.log(res);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let filteredNumbers = numbers.filter((item) => {
//   return true && false;
// });

// console.log(filteredNumbers);

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let result = numbers.every((item) => {
//   return item > 0;
// });

// console.log(result);

// let numbers = [1, 2, 3, 4, 5, 6, -7];

// let result = numbers.some((item) => {
//   return item < 0;
// });

// console.log(result);

// let myArr = [3, 7, 2, 1, 99, -2, 33];

// myArr.sort((a, b) => {
//   return b - a;
// });

// console.log(myArr);

// let myArr = [3, 7, 2, 1, 99, -2, 33];

// myArr.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// console.log(myArr);
