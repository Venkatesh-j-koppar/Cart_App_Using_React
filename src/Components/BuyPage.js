import React, { useState, useEffect } from "react";
import Axios from "axios";
import { faker } from "@faker-js/faker";
import { Container, Col, Row } from "reactstrap";
import CartItem from "./CartItem";

const apiKey = "INSERT_YOUR_KEY_HERE";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localurl = "http://myjson.dit.upm.es/api/bins/3d6a";

const BuyPage = ({ addInCart }) => {
  const [product, SetProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await Axios.get(localurl, {});

    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      productPrice: faker.finance.amount(),
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: faker.commerce.product(),
      id: faker.datatype.uuid(),
    }));

    SetProduct(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">BuyPage</h1>
      <Row>
        {product.map((product) => {
          return (
            <Col md={4} key={product.id}>
              <CartItem product={product} addInCart={addInCart}></CartItem>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BuyPage;
