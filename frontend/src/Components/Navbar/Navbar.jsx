import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { scroller } from "react-scroll";

function Navbar1(props) {
  const [colors, setColors] = React.useState([
    "white",
    "white",
    "white",
    "white",
    "white",
  ]);

  const activeColor = (x) => {
    if(x==0){
      return;
    }
    scroller.scrollTo(x, {
      smooth: true,
      offset: -70,
      duration: 500,
  })
    // const anchor = document.querySelector(x)
    // anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
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
            onClick={() => activeColor("hm")}
            style={{
              marginLeft: "-5vw",
              textAlign: "left",
              font: "normal normal 600 20px/27px Segoe UI",
              color: "white",
            }}
            as={Link}
            to="/"
            active
          >FinalAid</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link
            style={{
              margin: "0 1vw",
              font: "normal normal 600 20px/27px Segoe UI",
              color: colors[0],
            }}
            onClick={() => activeColor("hm")}
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
            onClick={() => activeColor("abt")}
            as={Link}
            to="#abt"
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
            onClick={() => activeColor("dnt")}
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
            onClick={() => activeColor("srch")}
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
            onClick={() => props.setModalShow(true)}
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
