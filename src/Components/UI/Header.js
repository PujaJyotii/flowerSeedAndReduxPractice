import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

function Header() {
  const [show, setShow] = useState(false);
  const handlerShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const countArr = useSelector((state) => state.cart.arr);
  let totalAmount = countArr.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <>
      <Cart show={show} handleClose={handleClose} />
      <Navbar fixed="top" data-bs-theme="dark" className={classes.deco}>
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
            <Button onClick={handlerShow}>
              Cart <Badge bg="secondary">{totalAmount}</Badge>
            </Button>
          </Container>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
