import React from "react";
import "../Header2/Head3.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import Beer from "../Header/Head Banner/beer.jpg";
import Wine from "../Header/Head Banner/wine.jpg";
import Rum from "../Header/Head Banner/rum.jpg";
import Vodka from "../Header/Head Banner/vodka.jpg";
import Whiskey from "../Header/Head Banner/whiskey.jpg";
import Gin from "../Header/Head Banner/gin.jpg";
import { useState } from "react";
const Head2 = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(() => count + 1);
  };
  const decrease = () => {
    setCount(() => count - 1);
  };

  return (
    <CardGroup className="container">
      <Row xs={1} md={3} className="g-4">
        <Card>
          <Card.Img variant="top" className="card-img" src={Beer} />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="text-center">Beer'S</Card.Title>
            <Button variant="outline-info" to="./Beer-view">
              View More
            </Button>
            <div className="set">
              <Button className="decrease" onClick={() => decrease()}>
                -
              </Button>
              <label>{count}</label>
              <Button className="increase" onClick={() => increase()}>
                +
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" className="card-img" src={Rum} />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="text-center">Rum</Card.Title>
            <Button variant="outline-info" href="/">
              View More
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" className="card-img" src={Vodka} />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="text-center">Vodka</Card.Title>
            <Button variant="outline-info" href="/">
              View More
            </Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" className="card-img" src={Whiskey} />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="text-center"> Whiskey</Card.Title>
            <Button variant="outline-info" href="/">
              View More
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" className="card-img" src={Wine} />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="text-center">Wine</Card.Title>
            <Button variant="outline-info" href="/">
              View More
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" className="card-img" src={Gin} />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="text-center">Gin</Card.Title>
            <Button variant="outline-info" className="text-center" href="/">
              View More
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </CardGroup>
  );
};

export default Head2;
