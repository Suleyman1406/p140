// let musics = [];

// setTimeout(() => {
//   musics = ["Nurane", "Qemerim", "Heyvagul", "Dilberim"];
// }, 1000);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (musics.length === 0) {
//       reject(new Error("Mahni yoxdur!"));
//     } else {
//       resolve(musics);
//     }
//   }, 2000);
// });

// console.log(promise);

// promise
//   .then((data) => {
//     console.log("cavab geldi", data);
//   })
//   .catch((err) => {
//     console.log("error geldi", err);
//   })
//   .finally(() => {
//     console.log("bitti");
//   });

function getPromise(result) {
  return new Promise((resolve, reject) => {
    if (result) {
      resolve("Resolved");
    } else {
      reject("salam");
    }
  });
}

let gozleyen = getPromise(true);

gozleyen
  .then((result) => {
    console.log(result);
    return getPromise(true);
  })
  .then((data) => {
    console.log("resolved", data);
  })
  .catch((err) => {
    console.log("error", err);
  });
