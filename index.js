function book(name,author, pages,beenRead){
this.name=name;
this.author=author;
this.pages=pages;
this.beenRead=beenRead;
}
function newBook(){
document.querySelector(".popUp").classList.add("On")

    var newBook=new book()
    var newCard=document.createElement("div")
    newCard.classList.add("card")
}
function addCard(){
    //adding the name
    newCard.appendChild(document.createElement("a"))
    newCard.lastElementChild.textContent=`Title=${newBook.name}`
    newCard.lastElementChild.classList.add("name")
    newCard.append(document.createElement("br"))
    
    //adding the author
    newCard.appendChild(document.createElement("a"))
    newCard.lastElementChild.textContent=`Author= ${newBook.author}`
    newCard.lastElementChild.classList.add("author")
    newCard.append(document.createElement("br"))
    
    //adding the pages
    newCard.appendChild(document.createElement("a"))
    newCard.lastElementChild.textContent=`number of pages= ${newBook.pages}`
    newCard.lastElementChild.classList.add("pages")
    newCard.append(document.createElement("br"))
    
    //adding the been read
    newCard.appendChild(document.createElement("a"))
    newCard.lastElementChild.textContent=`have you read this book?= ${newBook.beenRead}`
    newCard.lastElementChild.classList.add("read")
    newCard.append(document.createElement("br"))
    document.querySelector(".library").appendChild(newCard)
    }