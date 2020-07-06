import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import GoogleBooks from "../utils/GoogleBooks";
import BookResult from "../components/BookResult";

const style = {
  header: {
    textAlign: "center",
    paddingBottom: "20px"
  }
};

function Search() {
  // Set initial component state for books
  const [books, setBooks] = useState({});
  const [searchNotDone, setSearchNotDone] = useState(true);
  const [searchQuery, setSearchQuery] = useState();

  // Get book info from Google Books API & set response to books variable
  function getBookInfo() {
    GoogleBooks.searchBooks(searchQuery.search)
      .then((res) => {
        console.log("Google Books API Response", res);
        setBooks(res);
        setSearchNotDone(false);
      })
      .catch((err) => console.log(err));
  }

  // Handles updating state of search query
  function handleInputChange(event) {
    const { name, value } = event.target;
    setSearchQuery({ [name]: value });
    console.log("Search Query", searchQuery);
  }

  // Function to handle click of search button
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Submitted!");

    getBookInfo();
  }

  return (
    <div>
      <Header />
      <SearchBar
        onInputChange={handleInputChange}
        onFormSubmit={handleFormSubmit}
      />

      {searchNotDone ? <div></div> : <h4 style={style.header}>Results</h4>}

      {searchNotDone ? (
        <div></div>
      ) : (
        books.data.items.map((book) => (
          <BookResult
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            thumb={book.volumeInfo.imageLinks.thumbnail}
            key={book.id}
          ></BookResult>
        ))
      )}
    </div>
  );
}

export default Search;
