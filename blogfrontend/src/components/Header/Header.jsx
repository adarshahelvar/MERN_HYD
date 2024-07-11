import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { user, dispatch } = useContext(AuthContext);
  // const naviagte = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.reload();
  };
  return (
    // <Navbar bg="light" expand="lg" className=" fixed-top ">
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h1>LOGO</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {" "}
            {/* Use ms-auto to align items to the right */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/about">
              About
            </Nav.Link> */}
            <Nav.Link as={Link} to="/contactus">
              Contact us
            </Nav.Link>
            <Nav.Link as={Link} to="/createNewBlog">
              Create blog
            </Nav.Link>
            {user ? (
              <Nav.Link as={Link} onClick={logout}>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
