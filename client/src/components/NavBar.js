import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavBar() {
  const style = {
    google: {
      color: "#2f5684",
      fontWeight: "700"
    },
    links: {
      color: "#5b6a36",
      fontWeight: "700"
    }
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <span style={style.google}>Google</span> | Book Search
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/search">
              <span style={style.links}>Search</span>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/saved">
              <span style={style.links}>Saved</span>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
