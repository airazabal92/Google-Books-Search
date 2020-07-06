import React from "react";
import BookResult from "./BookResult";

function SavedBooks() {
  const style = {
    header: {
      textAlign: "center",
      paddingBottom: "20px"
    }
  };
  return (
    <div>
      <h4 style={style.header}>Saved Books</h4>
    </div>
  );
}

export default SavedBooks;
