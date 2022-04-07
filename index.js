function book(name,beenRead, author, pages, rating){
this.name=name;
this.author=author;
this.pages=pages;
this.beenRead=beenRead;
this.rating=rating
return {author, pages, beenRead, rating}
}
function newBook(){
   
    
        var createNewBook=new book(
            prompt("what is the name of the book?"),
            prompt("have you read the book?"),
            prompt("What is the author of the book?"),
            prompt("How many pages are in the book?"),
            prompt("Rating from 1 to 5:"), 
            )
        var library= document.getElementsByClassName("library")[0]
        alert("1")
        var newBook= document.createElement("div")
        newBook.classList.add("book")
        alert("2")
         newBook.textContent=`Name=${createNewBook.name} Author=${createNewBook.author} Pages=${createNewBook.pages} Read=${createNewBook.read} Rating=${createNewBook.rating}`;
        alert("3")
        library.appendChild(newBook)
        alert("4")
}