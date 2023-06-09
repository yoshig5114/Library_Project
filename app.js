
// PROJECT Section
console.log("PROJECT:\n==========\n");
class Book{
    constructor(id, title, author, read){
        this.id = id
        this.title = title
        this.author = author
        this.read = read
    }
}
class Library{
    constructor(bookCount, books){
        this.bookCount = bookCount
        this.books = books 
    }
    markRead(checkbox, id){
        for (let book of this.books){
            if (id === Book.id){
                checkbox.checked = true
                checkbox.disabled = true
            }
        }
    }
    addBook(){
        let titleInput = document.querySelector("#titleInput")
        let titleValue = titleInput.value 
        let authorInput = document.querySelector("#authorInput")
        let authorValue = authorInput.value
        let readCheckboxInput = document.querySelector("#readCheckbox")
        let readCheckboxValue = readCheckboxInput.checked
        let NewBook = new Book(titleValue, authorValue, readCheckboxValue)
        this.books.push(NewBook)
        let newTr = document.createElement("tr")
        let titleCell = document.createElement("td")
        titleCell.textContent = titleValue
        let authorCell = document.createElement("td")
        authorCell.textContent = authorValue
        let readCell = document.createElement("td")
        let readCheckbox = document.createElement("input");
        readCheckbox.type = "checkbox";
        readCheckbox.checked = readCheckboxValue;
        readCheckbox.disabled = true;
        readCell.appendChild(readCheckbox);
        newTr.appendChild(titleCell)
        newTr.appendChild(authorCell)
        newTr.appendChild(readCell)
        let tableBody = document.querySelector("#tableBody")
        tableBody.appendChild(newTr)
        this.bookCount = this.books.length
    }
}
let newLibrary = new Library(1, [])
let addBookButton = document.querySelector("#addBookButton")
addBookButton.addEventListener("click", function(){newLibrary.addBook()})
