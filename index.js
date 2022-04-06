function book(name,beenRead, author, pages, rating){
this.name=name;
this.author=author;
this.pages=pages;
this.beenRead=beenRead;
this.rating=rating
}
function newBook(){
    book(
        prompt("What is the name of the book?"),
        prompt("have you read the book?"),
        prompt("What is the author of the book?"),
        prompt("how many pages are in the book?"),
        prompt("rating from 1 to 5:"),
        
        )
}