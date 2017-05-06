// alternate function syntax (arrow functions)
var fullName = function (firstName, lastName) {
    return "${firstName} ${lastName}";
};
console.log('James', 'Padilla');
// Functions
// function declaration, hoisting
console.log(functionName("declaration", "something"));
function functionName(firstName, lastName) {
    return firstName;
}
// function expression
var functionNameTwo;
functionNameTwo = function (firstName, lastName) {
    return firstName;
};
// function expression (combined)
var functionNameThree = function (firstName, lastName) {
    return firstName;
};
console.log(functionNameTwo("expression", "something"));
console.log(functionNameThree("expression", "something"));
// Immediately invoked functions
var randomNames = ['Bob', 'Billy', 'Joe'];
var counter = 0;
(function () {
    for (var randomName in randomNames) {
        counter++;
    }
})();
console.log(counter);
//# sourceMappingURL=typescript-refresherer.js.map