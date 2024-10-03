export default class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    publish(title, content) {
        console.log(`Published post: ${title}`);
        console.log(content);
    }
}