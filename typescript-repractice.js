// function nameFunction(name: string) : void {
//   var n : string = name;
//
//   function printName() {
//     console.log(n);
//   }
//   printName();
// }
//
// nameFunction('jim');
function nameFunction(name) {
    var n = name;
    return function () {
        console.log(n);
    };
}
var nameAgain = nameFunction('jim');
nameAgain();
var fullNameGenerator = function (f, l) {
    return f + " " + l;
};
// console.log(fullNameGenerator('j', 'p'));
function printAddressDef(street, streetTwo, state) {
    if (state === void 0) { state = 'AZ'; }
    console.log(street);
    if (streetTwo) {
        console.log(streetTwo);
    }
    console.log(state);
}
// printAddressDef('123 street');
// printAddressDef('123 street', 'suite 123');
// printAddressDef('123 street', 'suite 123', 'UT');
function printAddressOpt(street, streetTwo) {
    console.log(street);
    if (streetTwo) {
        console.log(streetTwo);
    }
}
// ...varName means it is a multiple arguments to accept, (rest argument) (similar to splat in ruby)
function lineupCard(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log("Team: " + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player = players_1[_a];
        console.log(player);
    }
}
// lineupCard('Astros', 'person1', 'person2', 'player3');
//
// printAddress('123 street');
// printAddress('123 street', 'suite 123');
//
// function hey_there() {
//   console.log('hey from typescript');
// }
//
// hey_there();
//
// var fullName : string = 'Jim Padilla';
// let paidAccount : boolean = true;
// const versionNumber : number = 1.3;
//
// console.log(fullName);
// console.log(paidAccount);
// console.log(versionNumber);
//
// function printName(f, l) {
//   var greeting : string = "Hello, ";
//   console.log(greeting + f + " " + l);
// }
//
// printName('jim', 'padilla');
//
// function password_check() {
//   if (5 === 5) {
//     console.log('hey');
//   } else if (true) {
//     console.log('hey again');
//   }
// }
//
// function fullNameMaker (f, l) {
//   return f + " " + l;
// }
//
// console.log(fullNameMaker('j', 'p'));
//
var gradeGenerator = function (grade) {
    if (grade < 60) {
        return 'f';
    }
    else if (grade >= 60 && grade < 70) {
        return 'd';
    }
    else if (grade >= 70 && grade < 80) {
        return 'c';
    }
    else if (grade >= 80 && grade < 90) {
        return 'b';
    }
    else {
        return 'a';
    }
};
// console.log(gradeGenerator(45));
// console.log(gradeGenerator(90));
// console.log(gradeGenerator(80));
//# sourceMappingURL=typescript-repractice.js.map