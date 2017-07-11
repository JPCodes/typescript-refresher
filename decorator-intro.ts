
class Post {
  // Decorating
  @processOne() // Called at runtime not object instantiation
  @processTwo()
  someFunction() {}
}
  // Define decorators
function processOne() {
  console.log('processOne has run');
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("ProcessOne has been called");
  }
}

function processTwo() {
  console.log('processTwo has run');
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("ProcessTwo has been called");
  }
}

// Sequence
// processOne has run
// processTwo has run
// ProcessTwo has been called
// ProcessOne has been called
