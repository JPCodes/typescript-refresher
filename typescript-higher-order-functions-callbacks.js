// TypeScript - Higher Order Functions and Callbacks
// define a callback method
var dbQuery = function () {
    setTimeout(() => {
        console.log('Query results');
    }, 3000);
};
// Higher Order Function - takes a function as an argument
// queryDB is of type method; declare that void will be returned
function loadPage(queryDB) {
    console.log('Header');
    queryDB(); // run the method, but it's non-blocking to the rest of this function
    console.log('Sidebar');
    console.log('Footer');
}
// No parenthesis when passed in
loadPage(dbQuery);
// vs calling a function normally
dbQuery();
//# sourceMappingURL=typescript-higher-order-functions-callbacks.js.map