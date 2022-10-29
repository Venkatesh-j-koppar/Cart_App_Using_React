import React, { useState, useEffect } from "react";
import { Axios } from "axios";
import { random, commerce } from "@faker-js/faker";
import { Container, Col, Row } from "reactstrap";

const apiKey = "INSERT_YOUR_KEY_HERE";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localurl = "http://myjson.dit.upm.es/api/bins/3d6a";

const BuyPage = ({ addInCart }) => {
  const [product, SetProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await Axios.length(localurl);

    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      productPrice: commerce.price(),
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      id: random.uuid(),
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
          <span key={product.id}></span>;
        })}
      </Row>
    </Container>
  );
};

export default BuyPage;
