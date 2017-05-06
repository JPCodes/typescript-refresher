// Closures, class-like
function nameFunction(name) {
    var n = name; // outer scope
    function printName() {
        console.log(n); // inner
    }
    printName();
}
nameFunction('James Closures');
// Inner function maintains access to the out scope even after the values are returned
function nameFunctionTwo(name) {
    var n = name;
    return function () {
        console.log(n);
    };
}
var nameReturn = nameFunctionTwo('Hey');
nameReturn(); // Data
// Another Example
function teamLineupCard() {
    var nowBatting = 1; // First batter is up
    return {
        nextBatter: function () { nowBatting++; },
        currentBatter: function () { return nowBatting; }
    };
}
var batters = teamLineupCard(); // Will maintain its state
console.log(batters.currentBatter());
batters.nextBatter(); // Don't forget parenthesis
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
var pitchers = teamLineupCard();
console.log(pitchers.currentBatter());
//# sourceMappingURL=typescript-closures.js.map