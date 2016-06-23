class Repository {

    constructor(id, name="no name", author="unknown author", starCount=0) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.starCount = starCount;
    }

    getRaw () {
        const {id, name, author, starCount} = this;
        return {id, name, author, starCount};
    }

    toHtml () {
        return `<span>[${this.id}] ${this.author}: ${this.name} (${this.starCount})</span>`;
    }
}

export default Repository;