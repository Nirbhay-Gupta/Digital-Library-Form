console.log('hello people');
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
function Display() { }
Display.prototype.add = function (book) {
    let tablebody = document.getElementById('tablebody');
    let uistring = `<tr>

    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
</tr>`
    tablebody.innerHTML += uistring;

}
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libarayform');
    libraryForm.reset();
}


let libraryForm = document.getElementById('libarayform');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    let type;
    let fiction = document.getElementById('fiction');
    let literature = document.getElementById('literature');
    let programming = document.getElementById('programming');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (literature.checked) {
        type = literature.value;
    }
    else if (programming.checked) {
        type = programming.value
    }
    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    display.add(book);
    display.clear();

    e.preventDefault();


}
