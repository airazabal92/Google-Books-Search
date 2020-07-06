import React from "react";
import BookResult from "./BookResult";

function SearchResults(props) {
  return (
    <div>
      <BookResult books={props.books}></BookResult>
    </div>
  );
}

export default SearchResults;
