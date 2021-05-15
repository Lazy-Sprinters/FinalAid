import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Navbar1(props) {
  const [colors, setColors] = React.useState([
    "white",
    "white",
    "white",
    "white",
    "white",
  ]);

  const activeColor = (x) => {
    // let currcolors=["#2D7B90","#2D7B90","#2D7B90","#2D7B90","#2D7B90"];
    // currcolors[x]="#5ACEB6";
    // setColors(currcolors);
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
            to="/admin"
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
            to="/admin"
            active
          >
            Register
          </Nav.Link>
          <Nav.Link
            style={{
              margin: "0 1vw",
              font: "normal normal 600 20px/27px Segoe UI",
              color: colors[2],
            }}
            onClick={() => activeColor(2)}
            as={Link}
            to="/volunteers"
            active
          >
            Volunteers
          </Nav.Link>
          <Nav.Link
            style={{
              margin: "0 1vw",
              font: "normal normal 600 20px/27px Segoe UI",
              color: colors[3],
            }}
            onClick={() => activeColor(3)}
            as={Link}
            to="/admin"
            active
          >
            Status
          </Nav.Link>
          <Nav.Link
            style={{
              margin: "0 1vw",
              font: "normal normal 600 20px/27px Segoe UI",
              color: colors[3],
            }}
            as={Link}
            to="/"
            active
          >
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar1;
