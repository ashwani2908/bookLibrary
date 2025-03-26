
let books=[];
const url = 'https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech';
const options = { method: 'GET', headers: { accept: 'application/json' } };


async function fetchBooks() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        books = data.data.data;
        displayBooks(books);
        return books;
    } catch (error) {
        console.error(error);
    }
}

fetchBooks()

function displayBooks(bookList) {
    const container = document.getElementById("book-container");
    container.innerHTML = "";
    bookList.forEach(book => {
        // console.log(book.volumeInfo);
        container.innerHTML += `
            <div class="book">
                <img src="${book.volumeInfo.imageLinks.thumbnail}" alt="${book.volumeInfo.title}">
                <h3>${book.volumeInfo.title}</h3>
                <p>${book.volumeInfo.authors}</p>
                <button onclick="openBook('${book.volumeInfo.infoLink}')">View Details</button>
            </div>
        `;
    });
}

function openBook(url) {
    window.open(url, "_blank");
}

document.getElementById("search").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    //console.log(searchTerm);
    const filteredBooks = books.filter(book => {
        //console.log(book.volumeInfo.title.toLowerCase().includes(searchTerm))
        // book.volumeInfo.title.toLowerCase().includes(searchTerm) || 
        // book.volumeInfo.authors.toLowerCase().includes(searchTerm)

        const title = book.volumeInfo?.title?.toLowerCase() || "";
        const authors = book.volumeInfo?.authors ? book.volumeInfo.authors.join(", ").toLowerCase() : "";

        return title.includes(searchTerm) || authors.includes(searchTerm);
    });
    displayBooks(filteredBooks);
});


document.getElementById("toggle-view").addEventListener("click", function () {
    document.getElementById("book-container").classList.toggle("grid-view");
});

document.getElementById("sort-title").addEventListener("click", () => sortBooks("title"));
document.getElementById("sort-date").addEventListener("click", () => sortBooks("date"));

function sortBooks(type) {
    console.log(books)
    if (type === "title") {
        books.sort((a, b) => (a.volumeInfo.title || "").localeCompare(b.volumeInfo.title || ""));
    } else if (type === "date") {
        books.sort((a, b) => new Date(a.volumeInfo.publishedDate || 0) - new Date(b.volumeInfo.publishedDate || 0));
    }
    displayBooks(books);
}
