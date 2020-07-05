import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

function Search() {
  return (
    <div>
      <NavBar />
      <Header />
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default Search;
