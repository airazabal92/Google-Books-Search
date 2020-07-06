import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const style = {
  buttons: {
    textAlign: "right"
  },
  container: {
    border: "1px solid darkgrey",
    padding: "25px",
    marginBottom: "20px"
  },
  header: {
    textAlign: "center",
    paddingBottom: "20px"
  }
};

function BookResult(props) {
  console.log("BOOKS IN RESULT", props.books);
  if (Object.keys(props.books) == 0) {
    return null;
  } else {
    console.log(props.books.data.items);
    return (
      <div>
        <h4 style={style.header}>Results</h4>
        {props.books.data.items.map((book) => (
          <Container style={style.container}>
            <Row>
              <Col sm={8}>
                <h5>{book.volumeInfo.title}</h5>
                <p>
                  Written by:{" "}
                  {book.volumeInfo.authors.length >= 2 ? (
                    book.volumeInfo.authors.map((author) => (
                      <span>{author}, </span>
                    ))
                  ) : (
                    <span>{book.volumeInfo.authors}</span>
                  )}
                </p>
              </Col>
              <Col style={style.buttons} sm={4}>
                <Button variant="outline-dark">View</Button>{" "}
                <Button variant="outline-dark">Delete</Button>{" "}
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt="Book cover"
                ></img>
              </Col>
              <Col sm={9}>
                <p>{book.volumeInfo.description}</p>
              </Col>
            </Row>
          </Container>
        ))}
      </div>
    );
  }
}

export default BookResult;
