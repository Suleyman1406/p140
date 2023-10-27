try {
  let myObj = { name: "asd", age: 20 };
  if (!myObj.age || myObj.age < 18) {
    throw new Error("Age deyerini dogru girin!");
  }

  // console.log(myObj.test.test);
} catch (err) {
  console.log(err.message);
} finally {
  console.log("bitti");
}
