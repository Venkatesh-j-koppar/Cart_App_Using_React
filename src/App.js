import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import BuyPage from "./Components/BuyPage";
import Cart from "./Components/Cart";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast("already added in cart", {
        type: "error",
      });
    } else {
      setCartItem([...cartItem, item]);
    }
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Purchase Successfull", { type: "success" });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <Container fluid>
      <ToastContainer></ToastContainer>
      <Row>
        <Col md="8">
          <BuyPage addInCart={addInCart}></BuyPage>
        </Col>
        <Col md="4">
          <Cart
            cartItem={cartItem}
            removeItem={removeItem}
            buyNow={buyNow}
          ></Cart>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
