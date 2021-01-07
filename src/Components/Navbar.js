import React from "react";

import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import resume from "../Resume2021Winter.pdf";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedin, faGithub, faInstagram, faEnvelope);

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          James Chen
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/aboutMe">
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to={resume}>
              <strong>Resume</strong>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <a
              href="https://github.com/j769chen"
              target="_blank"
              rel="noreferrer"
              id="navbarLinks"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>

            <a
              href="https://www.linkedin.com/in/james23chen/"
              target="_blank"
              rel="noreferrer"
              id="navbarLinks"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>

            <a
              href="mailto:james.chen5@carleton.ca"
              target="_blank"
              rel="noreferrer"
              id="navbarLinks"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>

            <a
              href="https://www.instagram.com/jchen27_/"
              target="_blank"
              rel="noreferrer"
              id="navbarLinks"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
