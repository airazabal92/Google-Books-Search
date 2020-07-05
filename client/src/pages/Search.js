import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import GoogleBooks from "../utils/GoogleBooks";

function Search() {
  // Set initial component state for books
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState();

  // Get book info from Google Books API
  function getBookInfo() {}

  // Handles updating state of search query
  function handleInputChange(event) {
    const { name, value } = event.target;
    setSearchQuery({ [name]: value });
    console.log("Search Query", searchQuery);
  }

  // Function to handle on click of search button
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Submitted!");
  }

  return (
    <div>
      <Header />
      <SearchBar onInputChange={handleInputChange} onClick={handleFormSubmit} />
      <SearchResults />
    </div>
  );
}

export default Search;
