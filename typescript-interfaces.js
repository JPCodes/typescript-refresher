// TypeScript Interface
// a function 'profileGreet' with a user parameter of type 'User'
function profileGreet(user) {
    return "Welcome, " + user.firstName + " " + user.lastName;
}
var realUser = {
    email: 'test@test.com',
    firstName: 'James',
    lastName: 'Padilla'
};
console.log(profileGreet(realUser));
//# sourceMappingURL=typescript-interfaces.js.map