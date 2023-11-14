// // let musics = [];

// // setTimeout(() => {
// //   musics = ["Nurane", "Qemerim", "Heyvagul", "Dilberim"];
// // }, 1000);

// // const promise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     if (musics.length === 0) {
// //       reject(new Error("Mahni yoxdur!"));
// //     } else {
// //       resolve(musics);
// //     }
// //   }, 2000);
// // });

// // console.log(promise);

// // promise
// //   .then((data) => {
// //     console.log("cavab geldi", data);
// //   })
// //   .catch((err) => {
// //     console.log("error geldi", err);
// //   })
// //   .finally(() => {
// //     console.log("bitti");
// //   });

// function getPromise(result) {
//   return new Promise((resolve, reject) => {
//     if (result) {
//       resolve("Resolved");
//     } else {
//       reject("salam");
//     }
//   });
// }

// let gozleyen = getPromise(true);

// gozleyen
//   .then((result) => {
//     console.log(result);
//     return getPromise(true);
//   })
//   .then((data) => {
//     console.log("resolved", data);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// async function printSomething() {
//   try {
//     const promise = new Promise((res, rej) => {
//       setTimeout(() => {
//         rej("completed");
//       }, 3000);
//     });

//     let res = promise;
//     console.log("result", res);
//     return promise;
//   } catch (err) {
//     console.log("err", err);
//   }
// }

// try {
// let a = printSomething();
// a.catch((err) => {
//   console.log(err);
// });
// } catch (err) {
//   console.log(err);
// }
