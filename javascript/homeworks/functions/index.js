// function findSecondBiggestSmallest(numbers) {
//   numbers.sort((a, b) => a - b);
//   console.log(numbers[1]);
//   console.log(numbers.at(-2));
// }

// findSecondBiggestSmallest([-7, -71, 66, 11, 3, 8, 67]);

// function sumOfNumbers(numbers) {
//   let negativeSum = 0;
//   let positiveSum = 0;

//   for (let number of numbers) {
//     if (number > 0) positiveSum += number;
//     else negativeSum += number;
//   }
//   console.log("neagive ", negativeSum, "positive", positiveSum);
// }

// sumOfNumbers([-7, -71, 66, 11, 3, 8, 67]);

// function filterOverTheLimit(numbers, limit) {
//   let filteredNumbers = [];

//   for (let number of numbers) {
//     if (number > limit) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }

// function filterSameItems(items) {
//   let filteredItems = [];

//   for (let item of items) {
//     if (!filteredItems.includes(item)) filteredItems.push(item);
//   }
//   return filteredItems;
// }

// console.log(
//   filterSameItems([1, "salam", 1, true, true, false, false, false, 5, "5"])
// );
