function hey_there() {
    console.log('hi typescript!');
}
hey_there();
var fullName = "James Padilla";
var userAdmin = true;
var versionNumber = 1.3;
console.log(fullName);
console.log(userAdmin);
console.log(versionNumber);
function printName(firstName, lastName) {
    var greeting = "Hi, ";
    console.log(greeting + firstName + " " + lastName);
}
printName("James", "Padilla");
// interpolation
var firstName = "James";
// concat
console.log("concatenating " + firstName);
// the typescript way
console.log("the typescript way: interpolation " + firstName);
// Data types (in addition to string, number, boolean)
// Arrays
var peopleNames = ["james", "joe", "jon"];
// Tuple, fixed number of elements and datatypes
var player;
player = [24, 'Bryant', 'shooting guard']; // jersey number, name, position
// Enum
var StageStatus;
(function (StageStatus) {
    StageStatus[StageStatus["Approved"] = 0] = "Approved";
    StageStatus[StageStatus["Pending"] = 1] = "Pending";
    StageStatus[StageStatus["Rejected"] = 2] = "Rejected";
})(StageStatus || (StageStatus = {}));
;
var job = StageStatus.Pending;
// Any
var apiData = [123, 'james', true];
// Void
// in this case, function returns void (nothing)
function consolePrintOut(msg) {
    console.log(msg);
}
var playersDodgersNames = ['Manny Ramirez', 'Mike Piazza'];
var playersDodgersNumbers = [99, 31];
console.log(playersDodgersNames);
console.log(playersDodgersNumbers);
var names;
names = ['james', 'jim'];
console.log(names);
names = 'someone else';
console.log(names);
// Arithmetic Operators
// ++, -- (increment, decrement) in addition to other standard operators
// Comparison Operators
// <, >, <=, >=, ==, !=, ===, !==
// Logical Operators
// &&, ||, !
// Loops
var players = [99, 31, 24, 1, 2, 3];
// for in
for (var player_1 in players) {
    console.log(player_1); // player is just a current count
}
// for of
for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
    var player_2 = players_1[_i];
    console.log(player_2); // player is array element
}
// Functions
// Takes in number, returns string
function gradeGenerator(grade) {
    if (grade < 60) {
        return 'F';
    }
    else if (grade >= 60 && grade < 70) {
        return 'D';
    }
    else {
        return 'abc';
    }
}
console.log(gradeGenerator(50));
console.log(gradeGenerator(65));
console.log(gradeGenerator(90));
// optional & default/overridable args; you can't have required value after optional values
function printAddress(street, streetTwo, state) {
    if (state === void 0) { state = 'CA'; }
    console.log(street);
    if (streetTwo) {
        console.log(streetTwo);
    }
    console.log(state);
}
console.log(printAddress('1st street', '2nd street'));
console.log(printAddress('main street'));
console.log(printAddress('main street', '123 st', 'OR'));
// rest/splat
// ...
function teamLineup(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log("team: ${team}");
    for (var _a = 0, players_2 = players; _a < players_2.length; _a++) {
        var player_3 = players_2[_a];
        console.log(player_3);
    }
}
console.log(teamLineup('Dodgers', 'Piazza', 'Ramirez', 'Puig')); // 2nd argument is converted to array
//# sourceMappingURL=typescript-refresher.js.map