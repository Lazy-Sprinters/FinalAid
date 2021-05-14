import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Navbar1() {
  const [colors, setColors] = React.useState([
    "white",
    "white",
    "white",
    "white",
    "white",
  ]);

  const activeColor = (x) => {
  };

  return (
    <Navbar
      style={{ backgroundColor: "black", width: "100%" }}
      sticky="top"
      collapseOnSelect
      expand="lg"
    >
      <Navbar.Brand onClick={() => activeColor(0)} as={Link} to="/homePage">
        <img style={{ width: "2vw" }} src="./images/Logo.svg" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        style={{ textAlign: "center", padding: "0 4vw" }}
        id="responsive-navbar-nav"
      >
        <Nav style={{ fontSize: "2vw" }}>
          <Nav.Link
            onClick={() => activeColor(0)}
            style={{
              marginLeft: "-5vw",
              textAlign: "left",
              font: "normal normal 600 20px/27px Segoe UI",
              color: "white",
            }}
            as={Link}
            to="/homePage"
            active
          ></Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link
            style={{
              margin: "0 1vw",
              font: "normal normal 600 20px/27px Segoe UI",
              color: colors[0],
            }}
            onClick={() => activeColor(0)}
            as={Link}
            to="/"
            active
          >
            Home
          </Nav.Link>
          <Nav.Link
            style={{
              margin: "0 1vw",
              font: "normal normal 600 20px/27px Segoe UI",
              color: colors[1],
            }}
            onClick={() => activeColor(1)}
            as={Link}
            to="/"
            active
          >
            About
          </Nav.Link>
          <Nav.Link
            style={{
              margin: "0 1vw",
              font: "normal normal 600 20px/27px Segoe UI",
              color: colors[2],
            }}
            onClick={() => activeColor(2)}
            as={Link}
            to="/"
            active
          >
            Donate
          </Nav.Link>
          <Nav.Link
            style={{
              margin: "0 1vw",
              font: "normal normal 600 20px/27px Segoe UI",
              color: colors[3],
            }}
            onClick={() => activeColor(3)}
            as={Link}
            to="/"
            active
          >
            Search
          </Nav.Link>
          <Nav.Link
            style={{
              margin: "0 1vw",
              font: "normal normal 600 20px/27px Segoe UI",
              color: colors[3],
            }}
            onClick={() => activeColor(3)}
            as={Link}
            to="/"
            active
          >
            Login as Admin
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar1;
