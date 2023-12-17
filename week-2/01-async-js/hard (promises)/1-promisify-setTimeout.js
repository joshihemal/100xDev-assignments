/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n > 5000) {
        resolve("Wait is over");
      } else {
        reject("please add more than n");
      }
    }, n);
  });
}

wait(5000)
  .then((info) => {
    console.log(info);
  })
  .catch((error) => console.log("error: ", error));
