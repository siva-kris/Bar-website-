import React from "react";
import "../Header2/Head3.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Wine from "../Header/Head Banner/wine.jpg";
import Vodka from "../Header/Head Banner/vodka.jpg";
import Whiskey from "../Header/Head Banner/whiskey.jpg";

const BeerView = () => {
  return (
    <>
      <CardGroup className="container">
        <Row xs={1} md={3} className="g-4">
          <Card>
            <Card.Img variant="top" className="card-img" src={Vodka} />
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title className="text-center">Vodka</Card.Title>
              <Button variant="outline-info" href="/">
                View More
              </Button>
              <Button className="increase">+</Button>
              <label>{}</label>
              <Button className="decrease">-</Button>
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
        </Row>
      </CardGroup>
    </>
  );
};
export default BeerView;
