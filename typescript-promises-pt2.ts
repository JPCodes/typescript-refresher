'use strict';
// typescript-higher-order-functions-callbacks.ts for simple example of async

// TypeScript Promises part 2

const hasError = false;

  // resolve, reject follow naming conventions
function doAsyncTask() {
  let somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Async task is calling callback');
      if (hasError) {
        console.log('hasError 1st Line');
        reject('Error (2nd Line)');
        console.log('hasError 3rd Line');
      } else {
        console.log('Success 1st Line');
        resolve('Success (2nd Line)');
        console.log('Success 3rd Line');
      }
    }, 1000)
  });
  return somePromise;
}

doAsyncTask().then(
  // parameter defined in reject/resolve argument
  (val) => console.log(`Then Block: ${val}`),
  (err) => console.error(`Then Block: ${err}`)
);

// function doAsyncTaskSimple(cb) {
//   setTimeout(() => {
//     console.log("Async Task Calling Callback");
//     cb();
//   }, 1000);
// }
//
// doAsyncTaskSimple(() => console.log("Callback Called"));
