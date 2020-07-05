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
    padding: "25px"
  }
};

function BookResult() {
  return (
    <Container style={style.container}>
      <Row>
        <Col sm={8}>
          <h5>Harry Potter's Bookshelf</h5>
          <p>Written by:</p>
        </Col>
        <Col style={style.buttons} sm={4}>
          <Button variant="outline-dark">View</Button>{" "}
          <Button variant="outline-dark">Delete</Button>{" "}
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <img src="https://via.placeholder.com/150" alt="Book cover"></img>
        </Col>
        <Col sm={9}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default BookResult;
