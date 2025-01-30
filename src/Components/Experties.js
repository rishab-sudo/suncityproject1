import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Experties.css"

const Experties = ({ pageTitle, expertiesData, }) => {
  return (
    <Container fluid className="home-experties-section section-gap g-0">
      <div className="experties-heading-div">
        <h2 className="homeabout-title">{pageTitle}</h2>
      </div>

      {expertiesData.map((data, index) => (
        <Row
          key={index}
          className={`align-items-center py-1 custom-Row ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
        >
             <Col lg={6} sm={12} className="text-center text-lg-start">
            <img
              src={data.image}
              alt={data.title}
              className={`hexperties-img img-fluid img-fluid ${index % 2 !== 0 ? "shift-right" : ""}`}

            />
          </Col>

          <Col lg={6} sm={12} className="text-start text-lg-start">
            <div className="hexperties_description_div">
              <h2 className="homeabout-title">{data.title}</h2>
              <p className="homeabout-description">{data.description}</p>
            </div>
          </Col>

         
        </Row>
      ))}
    </Container>
  );
};

export default Experties;
