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
  }
};

function BookResult(props) {
  if (props.numBooks == 0) {
    return null;
  } else {
    return (
      <div>
        <Container style={style.container}>
          <Row>
            <Col sm={8}>
              <h5>{props.title}</h5>
              <p>
                Written by:{" "}
                {props.authors.length >= 2 ? (
                  props.authors.map((author) => <span>{author}, </span>)
                ) : (
                  <span>{props.authors}</span>
                )}
              </p>
            </Col>
            <Col style={style.buttons} sm={4}>
              <Button variant="outline-dark">View</Button>{" "}
              <Button
                onClick={() => props.onSaveClick(props.bookId)}
                variant="outline-dark"
              >
                Save
              </Button>{" "}
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <img src={props.thumb} alt="Book cover"></img>
            </Col>
            <Col sm={9}>
              <p>{props.description}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BookResult;
