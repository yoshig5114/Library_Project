
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
        let readCheckboxValue = readCheckboxInput.value
        let NewBook = new Book(titleValue, authorValue, readCheckboxValue)
        

    }
}
