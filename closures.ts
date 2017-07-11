// Closures, class-like
function nameFunction(name : string) : void {
  var n : string = name; // outer scope

  function printName() {
    console.log(n); // inner
  }
  printName();
}

nameFunction('James Closures');
  // Inner function maintains access to the out scope even after the values are returned
function nameFunctionTwo(name : string) {
  var n : string = name;

  return function() {
    console.log(n);
  }
}

var nameReturn = nameFunctionTwo('Hey');
nameReturn(); // Data

  // Another Example
  function teamLineupCard() {
    var nowBatting : number = 1; // First batter is up

    return {
      nextBatter() { nowBatting++ },
      currentBatter() { return nowBatting }
    }
  }

  let batters = teamLineupCard(); // Will maintain its state
  console.log(batters.currentBatter());
  batters.nextBatter(); // Don't forget parenthesis
  console.log(batters.currentBatter());
  batters.nextBatter();
  console.log(batters.currentBatter());

  let pitchers = teamLineupCard();
  console.log(pitchers.currentBatter());
