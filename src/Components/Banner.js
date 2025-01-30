import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
import { Container } from "react-bootstrap";

function UncontrolledExample() {
    return (
        <Container fluid className="g-0" >
        <Carousel indicators={false} controls={true} >
            <Carousel.Item>
                <img  className="img-fluid"  src={require("../assets/bannerhome.jpg")} alt="banner" />
                <div className="custom-caption">
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img  className="img-fluid" src={require("../assets/bannerhome.jpg")} alt="banner" />
                <div className="custom-caption">
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img  className="img-fluid" src={require("../assets/bannerhome.jpg")} alt="banner" />
                <div className="custom-caption">
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
            </Carousel.Item>
        </Carousel>
        </Container>
    );
}

export default UncontrolledExample;
