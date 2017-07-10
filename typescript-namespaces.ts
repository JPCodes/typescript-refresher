// Typescript Namespaces

namespace Blog {
  // 'export' to make available outside of namespace
  export interface IPost {
    title: string;
    body: string;
  }

  export class Post implements IPost {
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
}

  // namespaces should be in separate files
    // namespaces helps with code organization, and is less brittle
namespace Content {
  // 'export' to make available outside of namespace
  export interface IPost {
    title: string;
    body: string;
    slug: string;
    seoKeywords: string;
  }

  export class Post implements IPost {
    title: string;
    body: string;
    slug: string;
    seoKeywords: string;

    constructor(post: IPost) {
      this.title = post.title;
      this.body = post.body;
      this.slug = post.slug;
      this.seoKeywords = post.seoKeywords;
    }

    printPost() {
      console.log(this.title);
      console.log(this.body);
      console.log(this.slug);
      console.log(this.seoKeywords);
    }
  }
}

var blogPost = new Blog.Post({
  title: 'A title',
  body: 'A body'
});

var contentPost = new Content.Post({
  title: 'A title',
  body: 'A body',
  slug: 'a-slug',
  seoKeywords: 'keywords, here'
});

blogPost.printPost();
contentPost.printPost();
