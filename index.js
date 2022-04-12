function book(name, author, pages, beenRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.beenRead = beenRead;
  }
  
  function newBook() {
  
  
  }
  
  function addCard(title, author, pages, read) {
    alert("")
    //toggle class
    document.querySelector(".popUp").classList.toggle("On")
  
    //create card
    var newCard = document.createElement("div")
    newCard.classList.add("card")
  
    //create book
    var newBook = new book(title, author, pages, read)
   
  
    //adding the name
    newCard.appendChild(document.createElement("a"))
    newCard.lastElementChild.textContent = `Title=${newBook.name}`
    newCard.lastElementChild.classList.add("name")
    newCard.append(document.createElement("br"))
  
    //adding the author
    newCard.appendChild(document.createElement("a"))
    newCard.lastElementChild.textContent = `Author= ${newBook.author}`
    newCard.lastElementChild.classList.add("author")
    newCard.append(document.createElement("br"))
  
    //adding the pages
    newCard.appendChild(document.createElement("a"))
    newCard.lastElementChild.textContent = `number of pages= ${newBook.pages}`
    newCard.lastElementChild.classList.add("pages")
    newCard.append(document.createElement("br"))
  
    //adding the been read
    newCard.appendChild(document.createElement("a"))
    newCard.lastElementChild.textContent = `have you read this book?= ${newBook.beenRead}`
    newCard.lastElementChild.classList.add("read")
    newCard.append(document.createElement("br"))
    document.querySelector(".library").appendChild(newCard)
  }
  
  document.querySelector(".submit").addEventListener("click", function() {
    addCard(document.getElementsByName("title")[0].value, document.getElementsByName("author")[0].value, document.getElementsByName("pages")[0].value, document.getElementsByName("read")[0].value)
  })
  function addClassOn(){
     
    document.querySelector(".popUp").classList.add("On")
  }