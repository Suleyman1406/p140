// console.log("hello world");
// console.log("hello");
// console.log("again");

// int a =12;
// string b = "15";

// let surname = "dadashov";
// let fullname = 'suleyman dadashov';
// let age = 11;
// let weight = 44.3;
// let isNew = false;

// console.log(surname);
// console.log(fullname);
// console.log(weight);
// console.log(isNew);
// console.log(age);

// let a = 12;
// console.log(a);

// a= "suleyman";

// console.log(a);

// let hello;

// hello = 'as';

// let a = 12;
// let b = 15;

// if (a > b) {
//   console.log("A boyukdur");
// } else if (a < b) {
//   console.log("B boyukdur");
// } else {
//   console.log("beraberdirler");
// }

// console.log(2>3 || 3>1);

// let command= "start";

// switch(command){
//   case "start":
//     console.log("Game is starting");
//   case "stop":
//     console.log("Game is stopped");
//   default: 
//     console.log("Command not found.");
//     break;
// }

// while  ~ for ~ do while


// let a = 12;

// a = a +1; 

// console.log(a);


// let  a = 12; // 1 2 ... 9

// while(a > 10){
//   console.log(a);
//   a = a + 1; 
// }

// let b = 20; // 19 ... 0

// while (b>0) {
  //   console.log(b); 
  //   b = b - 1;
// }


// console.log(6%3);

// let a = 0;

// while(a<=100){
//   if(a%3==0){
//     console.log(a);
//   }
//   a= a+1;
// }



// let num = 0;


// while(num<=100){
//   if(num % 3 == 0 && num % 5 == 0){
//     console.log(num);
//   }
//   num = num + 1;
// }


// for


// let a = 5;  // 2  4

// a+=1; // a = a + 1
// a *= 8; // a = a * 8
// a -= 3; // a= a - 3;
// a *= 2; // a= a * 2;
// a/=5; // a = a / 5;
// console.log(a);

// a= 0; // 1 2 1
// a++; // a+=1;
// a++; // a+=1;
// a--;  // a-=1;

// console.log(a);

// for

// for(let a = 0; a<100; a++){
//   console.log(a);
// }

// console.log("hello");

// for(let a = 20; a>0; a--){
//   console.log(a);
// }
// for(let a = 20; a>0; a +=2){
//   console.log(a);
// }

// console.log("Bitti");

// 1 2 3 5 7 11 13

// let number = 14;
// let isPrime = true;

// for(let i = 2; i <number; i++){
//   if(number%i==0){
//     isPrime = false;
//   }
// }

// if(isPrime){
//   console.log("Sade ededdir");
// }else{
//   console.log("Murekkeb ededdir");
// }

// for(let i =0; i<100; i++){
//   if(i==3){
//     break;
//   }
//   console.log(i);
// }

// for(let i = 0; i< 10; i++){
//   if(i>2 && i<5){
//     continue;
//   }
//   console.log(i);
// }

// let a = 0;

// while (a<14) {
//   a++;
//   if(a==4){
//     continue;
//   }
//   console.log(a);
// }

// let a = 100;

// do{
//   console.log(a);
//   a++;
// }while(a<10);

// let a = 100;

// while(a<10){
//   console.log(a);
//   a++;
// }

/*
		1. Bir 'value' adlı integer dəyişən tanımlayın. Bu dəyişkənə dəyər mənimsədin.
		2. Döngüləri istifadə edərək 1'dən verilən value dəyərinə qədər example'da veriləni ekrana yazdıran algoritma hazırlayın.
		Example:
		  value = 4;
		  print => 
		  1 
		  1 2
		  1 2 3
		  1 2 3 4

*/

// let value = 15;
// let text = "" // "1" "12" "123" "1234" "12345"

// for(let i = 1; i<= value; i++){
//   text += i+" ";
//   console.log(text);
// }



let emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;



const re = new RegExp(emailRegex);

console.log(re.test("s 123@gmail.com")); 