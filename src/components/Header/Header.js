import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/Group1329.png";
import "./Header.css";
const Header = () => {
  const styles = {
    color: "black",
  };
  return (
    <Nav className="justify-content-between">
      <Nav.Item>
        <img
          alt=""
          src={logo}
          width="250px"
          height="150px"
          className="d-inline-block align-top"
        />
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/home" style={styles}>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="donation" style={styles}>
          Donation
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="events" style={styles}>
          Events
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="blog" style={styles}>
          Blog
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Link to="/register">
          <Button variant="primary">Register</Button>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/admin">
          <Button variant="dark">Admin</Button>
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default Header;
