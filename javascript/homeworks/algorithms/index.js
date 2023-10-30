// function convertsToTimeString(second) {
//   const hourCount = Math.floor(second / 3600);
//   const minuteCount = Math.floor((second - hourCount * 3600) / 60);
//   const secondCount = second - hourCount * 3600 - minuteCount * 60;
//   // const secondCount = second % 60;
//   console.log(`${hourCount}h, ${minuteCount}m, ${secondCount}s`);
// }

// // 10_000
// // 2 - 7200
// // (10_000 - 7_200) / 60

// convertsToTimeString(3665);

// function getIsPalindrome(number) {
//   let numberStr = String(number);
//   let reversedNumberStr = numberStr.split("").reverse().join("");
//   return numberStr === reversedNumberStr;
// }

// console.log(getIsPalindrome(-121));

// function addOnlyNums(...params) {
//   console.log(params);
//   let total = 0;
//   params.forEach((param) => {
//     if (typeof param === "number") {
//       total += param;
//     }
//   });
//   return total;
// }

// console.log(addOnlyNums(2, 3, "hello", true, false, 77, 88, 2));

// function getIsEmpty(obj) {
//   return !Object.keys(obj).length;
// }

// console.log(getIsEmpty({}));
// console.log(getIsEmpty({ name: "Suleyman" }));

// function calculateSallary(obj) {
//   return Object.values(obj).reduce((prev, val) => prev + val, 0);
// }

// let salaries = { John: 100, Ann: 160, Pete: 130 };
// console.log(calculateSallary(salaries));

// let login = "asds";

// let message =
//   login === "Employee"
//     ? "Hello"
//     : (login == "Director"
//     ? "Greetings"
//     : (login == ""
//     ? "No Login"
//     : ""));

// console.log(message);



// function getIsEmpty(obj) {
//   return Object.keys(obj).length;
// }

  let john = { name: "John", age: 25 }; 
  let pete = { name: "Pete", age: 30 }; 
  let mary = { name: "Mary", age: 28 }; 
  let users = [ john, pete, mary ]; 
  let names = users.map(user=>user.name).join(", ")
  console.log( names ); // John, Pete, Mary