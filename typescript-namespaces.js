// Typescript Modules (known as namespaces)
var Blog;
(function (Blog) {
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
    Blog.Post = Post;
})(Blog || (Blog = {}));
// namespaces should be in separate files
var Content;
(function (Content) {
    var Post = (function () {
        function Post(post) {
            this.title = post.title;
            this.body = post.body;
            this.slug = post.slug;
            this.seoKeywords = post.seoKeywords;
        }
        Post.prototype.printPost = function () {
            console.log(this.title);
            console.log(this.body);
            console.log(this.slug);
            console.log(this.seoKeywords);
        };
        return Post;
    }());
    Content.Post = Post;
})(Content || (Content = {}));
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
//# sourceMappingURL=typescript-namespaces.js.map