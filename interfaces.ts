// TypeScript Interface


// Define User interface
interface User {
  email : string;
  firstName : string;
  lastName : string;
  // Optional attribute denoted by the question mark
  contactInfo? : string;
}

  // a function 'profileGreet' with a user parameter of type 'User'
function profileGreet(user: User) : string {
  return `Welcome, ${user.firstName} ${user.lastName}`;
}

var realUser = {
  email: 'test@test.com',
  firstName: 'James',
  lastName: 'Padilla'
};

console.log(profileGreet(realUser));
