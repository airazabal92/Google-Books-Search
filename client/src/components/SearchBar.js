import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

function SearchBar() {
  const style = {
    searchContainer: {
      width: "65%",
      margin: "auto"
    }
  };
  return (
    <div style={style.searchContainer}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for book"
          aria-label="Search for book"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default SearchBar;
