import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar data-bs-theme="dark" className={classes.deco}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Whispering Meadows
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/data">
            Flowers
          </Nav.Link>
        </Nav>
        <Container className={classes.btn}>
          <Button>
            Cart <Badge bg="secondary">9</Badge>
          </Button>
        </Container>
      </Container>
    </Navbar>
  );
}

export default Header;
