const successCallback = (result) => {
  console.log("Success:", result);
};

const failureCallback = (error) => {
  console.log("Failure:", error);
};

let promise = new Promise((resolve, reject) => {
  // reject("Promise rejected");
  setTimeout(() => resolve("Done"), 2000);
})
  .then((result) => successCallback(result))
  .catch((error) => failureCallback(error));
