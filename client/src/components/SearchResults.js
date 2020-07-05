import React from "react";
import BookResult from "./BookResult";

function SearchResults() {
  const style = {
    header: {
      textAlign: "center",
      paddingBottom: "20px"
    }
  };
  return (
    <div>
      <h4 style={style.header}>Results</h4>
      <BookResult></BookResult>
    </div>
  );
}

export default SearchResults;
