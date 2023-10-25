// let myArr = [1,2,3,6,2];

// console.log(reverseArr(myArr));

// function reverseArr(numbers){
//   let reversedArr = [];

//   for(let i = numbers.length-1; i>=0; i--){
//     reversedArr[numbers.length-1-i] = numbers[i];
//   }

//   return reversedArr;
// }



// let myArr = [1,2,3,6,2];

// console.log(reverseArr(myArr));

// function reverseArr(numbers){
//   let reversedNumbers = []

//   for(let i = numbers.length - 1; i >= 0; i--){
//     reversedNumbers[reversedNumbers.length] = numbers[i];
//   }
//   return reversedNumbers;
// }


// let numbers = [1,2,3,3,2,1,8,9,8];

// function findUnique(nums){
//   for(let i = 0 ; i<nums.length;i++){
//     let count = 0;
//     for(let j= 0;j<nums.length;j++){
//       if(nums[i]===nums[j]){
//         count++;
//       }
//     }
//     if(count===1){
//       return nums[i]
//     }
//   }
// }
// console.log("unique", findUnique(numbers)); 


// let items = [1, 2, 3, 4, 5, 6, 7];

// function swapNeighboors(numbers){
//   for(let i =0; i< numbers.length -1; i+=2){
//     let temp = numbers[i];
//     numbers[i] = numbers[i+1];
//     numbers[i+1] = temp;
//   }
//   return numbers;
// }

// console.log(swapNeighboors(items)); 

function compareArrays(arr1,arr2){
  if(arr1.length!== arr2.length){ 
    return false;
  }

  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false
    }
  }

  return true;
}

function isSame(array1,array2){
   for(let i =0; i<array1.length;i++){
      for(let p=0; p<array2.length; p++){
         if(array1[i]===array2[p]){
            return true;
         }
         return false;
      }
   }
}
console.log(isSame([1,2,3],[1,3,2]));