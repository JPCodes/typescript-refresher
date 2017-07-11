"use strict"; // required for ES6 JS
// TypeScript Promises
// Mowing lawn scenarios:
// Start mowing -> Pending (Completion is pending)
// Complete mowing -> Resolve (Success)
// Did not complete mowing -> Reject (Fail)
// This function is a Promise
// Function will return a promise with an imgStatus attribute
let performUpload = function (imgStatus) {
    console.log('performUpload called');
    // Promise expects a callback function, called 'resolve' here (can be named anything)
    return new Promise((resolve) => {
        // once the callback is successfully run, run this function
        console.log(`Promise Resolved, Status: ${imgStatus}`); // Step 5: if 'resolve' is successful then run this function, performUpload() ends
        setTimeout(() => {
            // 'resolve' refers to the same callback function as passed into Promise
            resolve({ imgStatus: imgStatus }); // Step 4: resolve is returned (key:value)
        }, 1000);
    });
};
// variable names used to illustrate stages
var upload;
var compress;
var transfer;
// performUploadResponse is just a variable name, it is the response of the function called ('resolve' is received here)
performUpload('uploading...') // Step 1: Call the Promise Function
    .then((performUploadResponse) => {
    // upload refers to variable declared above
    upload = performUploadResponse;
    console.log('then');
    console.log(upload);
    return performUpload('compressing...'); // Steps restart, Step 1
})
    .then((performUploadResponse) => {
    // upload refers to variable declared above
    compress = performUploadResponse;
    console.log('then');
    console.log(compress);
    return performUpload('transferring...'); // Steps restart, Step 1
})
    .then((performUploadResponse) => {
    // upload refers to variable declared above
    transfer = performUploadResponse;
    console.log('then');
    console.log(transfer);
    return performUpload('compressing...'); // Steps restart, Step 1
});
//# sourceMappingURL=typescript-promises.js.map