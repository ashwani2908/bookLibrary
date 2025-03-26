# Book Library Project

## Overview
This project is a simple **Book Library** that fetches book data from an API and displays it in a list format. Users can search, sort, and paginate through the books. The project also includes a toggle for switching between list and grid views.

## Features
- **Fetch Books**: Retrieves books from the Free API.
- **Display Books**: Books are displayed in a list format with a thumbnail, title, and author.
- **Search Functionality**: Users can search for books by title or author.
- **Sorting**: Books can be sorted by title or published date.
- **Pagination**: Implements infinite scrolling to load more books dynamically.
- **Toggle View**: Users can switch between list and grid views.

## Technologies Used
- **HTML**
- **CSS**
- **JavaScript** (Vanilla JS)
- **API** (Free API for book data)

## How It Works
1. The script fetches book data from the API when the page loads.
2. Books are displayed in a **list format** by default.
3. The **search bar** filters books based on user input.
4. Users can **sort** books by title or published date.
5. As the user scrolls, **more books** are loaded dynamically.
6. Clicking on a book opens its details in a **new tab**.
7. The user can switch between **list and grid view** using a toggle button.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ashwani2908/bookLibrary.git
   ```
2. Open the `index.html` file in a browser.

## API Endpoint
- The project uses the following endpoint:
  ```sh
  https://api.freeapi.app/api/v1/public/books
  ```

## Project Structure
```
/book-library
│── index.html      # Main HTML file
│── styles.css      # Styling for list/grid views
│── script.js       # JavaScript for fetching & displaying books
│── README.md       # Documentation
```

## Future Improvements
- Add **book categories** for filtering.
- Implement **user authentication** to save favorite books.
- Improve **UI design** with better responsiveness.

## License
This project is open-source and available under the **MIT License**.

