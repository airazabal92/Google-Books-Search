import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function Header() {
  const style = {
    text: {
      textAlign: "center"
    },

    header: {
      color: "#2f5684",
      textAlign: "center",
      fontWeight: "600"
    },

    jumbotron: {
      backgroundImage:
        'url("https://images.unsplash.com/photo-1510917087081-51e33cdcc51b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80")',
      backgroundSize: "cover",
      backgroundPosition: " center",
      height: "500px"
    },

    container: {
      paddingTop: "125px"
    }
  };

  return (
    <Jumbotron fluid style={style.jumbotron}>
      <Container style={style.container}>
        <h1 style={style.header}>Your Personal Library</h1>
        <h4 style={style.text}>Search for and Save Books of Interest.</h4>
      </Container>
    </Jumbotron>
  );
}

export default Header;
