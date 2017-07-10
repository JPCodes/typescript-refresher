// More Typescript Interfaces and Classes
var Admin = (function () {
    function Admin(email) {
        this.email = email;
        this.role = 'Administrator';
    }
    return Admin;
}());
// user will adhere to 'User' rules described in the interface, loosely tying 'Admin class' and 'User interface' together
function profileGreet(user) {
    return "Welcome, " + user.email;
}
// In this case, this Admin instance will adhere to the rules of User because of the function parameter constraint
var someUser = new Admin('test@test.com');
// 'implements' connects post to 'IPost' interface
var Post = (function () {
    function Post(post) {
        this.title = post.title;
        this.body = post.body;
    }
    Post.prototype.printPost = function () {
        console.log(this.title);
        console.log(this.body);
    };
    return Post;
}());
// 'Post' instance creation
var somePost = new Post({
    title: 'A title',
    body: 'A body'
});
console.log(somePost.title);
console.log(somePost.body);
somePost.printPost();
//# sourceMappingURL=typescript-interface-classes.js.map