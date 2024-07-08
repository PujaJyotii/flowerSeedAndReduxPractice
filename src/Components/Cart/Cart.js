import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Cart.module.css";
import { CartAction } from "../Store/CartSlice";

function Cart({ show, handleClose }) {
  const output = useSelector((state) => state.cart.arr);
  const dispatch = useDispatch();
  const addHandler = (fl) => {
    dispatch(CartAction.add({ ...fl, quantity: 1 }));
  };

  const reduceHandler = (fl) => {
    dispatch(CartAction.reduce(fl));
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={show} onHide={handleClose} bg="dark">
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body className={classes.bigger}>
          <ul className={classes.ul}>
            {output.map((fl) => (
              <li key={fl.id}>
                <div className={classes.box}>
                  <div className={classes.inner}>
                    <h3>{fl.name}</h3>
                    <h4>Color:{fl.color}</h4>
                    <p>Price:{fl.price}</p>
                  </div>
                  <div className={classes.btn}>
                    <div
                      className={classes.btn2}
                      onClick={() => addHandler(fl)}
                    >
                      +
                    </div>
                    <div className={classes.quantity}>X{fl.quantity}</div>
                    <div
                      className={classes.btn1}
                      onClick={() => reduceHandler(fl)}
                    >
                      -
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Purchase</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;
