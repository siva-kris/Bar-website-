import React from "react";
import C1 from "../Banner/c1.jpg";
import C2 from "../Banner/c2.jpg";
import C3 from "../Banner/c3.jpg";
import Carousel from "react-bootstrap/Carousel";
import "../Header/Head.css";

function DarkVariantExample() {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={C1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={C2} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={C3} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default DarkVariantExample;
