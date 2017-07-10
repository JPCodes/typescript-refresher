// More Typescript Interfaces and Classes

  // Connecting interface and class, method 1
interface User {
  email: string;
  firstName? : string;
  lastName? : string;
}

class Admin {
  role : string;

  constructor(public email : string) {
    this.role = 'Administrator';
  }
}
  // user will adhere to 'User' rules described in the interface, loosely tying 'Admin class' and 'User interface' together
function profileGreet(user : User) : string {
 return `Welcome, ${user.email}`;
}
  // In this case, this Admin instance will adhere to the rules of User because of the function parameter constraint
var someUser = new Admin('test@test.com');
  // console.log(someUser);
  // console.log(someUser.email);


  // Connecting interface and class, method 2 (more common in Angular) direct implementation
  // Convention: interface connected to a class, start name with I
    // 'This is the interface for Post'
interface IPost {
  title: string;
  body: string;
}

  // 'implements' connects post to 'IPost' interface
class Post implements IPost {
  // class with 'implements' should match attributes to the interface
  title: string;
  body: string;

  constructor(post: IPost) {
    this.title = post.title;
    this.body = post.body;
  }

  printPost() {
    console.log(this.title);
    console.log(this.body);
  }
}
  // 'Post' instance creation
var somePost = new Post({
  title: 'A title',
  body: 'A body'
});
  // console.log(somePost.title);
  // console.log(somePost.body);
  // somePost.printPost();
