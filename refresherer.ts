// alternate function syntax (arrow functions)
var fullName = (firstName, lastName) => {
  return "${firstName} ${lastName}";
}

console.log('James', 'Padilla');


// Functions

  // function declaration, hoisting
  console.log(functionName("declaration", "something"));
  function functionName(firstName: string, lastName : string) : string {
    return firstName;
  }

  // function expression
  var functionNameTwo : (firstName : string, lastName : string) => string;

  functionNameTwo = function(firstName : string, lastName : string) { //no need to redeclare return value
    return firstName;
  }

    // function expression (combined)
    var functionNameThree : (firstName : string, lastName : string) => string = function(firstName : string, lastName : string) {
      return firstName;
    }

console.log(functionNameTwo("expression", "something"));
console.log(functionNameThree("expression", "something"));

  // Immediately invoked functions
  var randomNames : string[] = ['Bob', 'Billy', 'Joe'];
  var counter : number = 0;

  (function() {
    for (let randomName in randomNames) {
      counter++;
    }
  })();

  console.log(counter);
