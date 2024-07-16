import React from "react";
import "../assets/styles/Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { VscHeart } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <>
      <Navbar
        bg="myColor"
        data-bs-theme="dark"
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
      >
        <Navbar.Brand className="companyName" href="/">
          My Image Search
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3" id="navLinks">
            <Nav.Link style={{ color: "white" }} className="navLink" href="/">
              <VscHeart size={20} /> LightBoxes
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} className="navLink" href="/">
              <BsCart3 size={20} /> Cart
            </Nav.Link>
            <Button className="signInButton" variant="outline-light">
              {" "}
              Sign in{" "}
            </Button>
            {/* <Nav.Link className="signInButton" href="/">Sign in</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
