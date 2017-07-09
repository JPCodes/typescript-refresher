function hey_there() {
  console.log('hi typescript!');
}

hey_there();

var fullName : string = "James Padilla";
let userAdmin : boolean = true;
const versionNumber : number = 1.3;

console.log(fullName);
console.log(userAdmin);
console.log(versionNumber);

function printName(firstName, lastName) {
  var greeting : string = "Hi, ";
  console.log(greeting + firstName + " " + lastName);
}

printName("James", "Padilla");

// interpolation
  var firstName : string = "James";
  // concat
  console.log("concatenating " + firstName);
  // the typescript way
  console.log(`the typescript way: interpolation ${firstName}`);

// Data types (in addition to string, number, boolean)
// Arrays
var peopleNames : string[] = ["james", "joe", "jon"];

// Tuple, fixed number of elements and datatypes
var player : [number, string, string];
player = [24, 'Bryant', 'shooting guard']; // jersey number, name, position

// Enum
enum StageStatus {Approved, Pending, Rejected};
let job : StageStatus = StageStatus.Pending;

// Any
var apiData : any[] = [123, 'james', true];

// Void
  // in this case, function returns void (nothing)
function consolePrintOut(msg: string) : void {
  console.log(msg);
}

// Custom types (alias type)
  // Type<type|type2|etc> <-- adding more this way is called a 'Union type'
type PlayerArray = Array<string|number>;
let playersDodgersNames : PlayerArray = ['Manny Ramirez', 'Mike Piazza'];
let playersDodgersNumbers : PlayerArray = [99, 31];
console.log(playersDodgersNames);
console.log(playersDodgersNumbers);

  // Allowing a variable to be assignable to multiple datatypes, also 'Union type'
var names: string[]|string;
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
let players : number[] = [99, 31, 24, 1, 2, 3]
  // for in
  for (let player in players) {
    console.log(player); // player is just a current count
  }
  // for of
  for (let player of players) {
    console.log(player); // player is array element
  }

// Functions
  // Takes in number, returns string
function gradeGenerator(grade: number) : string {
  if (grade < 60) {
    return 'F'
  } else if (grade >= 60 && grade < 70) {
    return 'D'
  } else {
    return 'abc';
  }
}

console.log(gradeGenerator(50));
console.log(gradeGenerator(65));
console.log(gradeGenerator(90));
// optional & default/overridable args; you can't have required value after optional values
function printAddress(street: string, streetTwo?: string, state = 'CA') {
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
  function teamLineup(team: string, ...players: string[]) {
    console.log("team: ${team}");
    for (let player of players) {
      console.log(player);
    }
  }

console.log(teamLineup('Dodgers', 'Piazza', 'Ramirez', 'Puig')); // 2nd argument is converted to array
