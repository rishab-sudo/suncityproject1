import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./TeamSection.css"

const TeamSection = ({ pageTitle, teamData, }) => {
    return (
        <Container fluid className="home-team-section section-gap g-0">
            <div className="experties-heading-div">
                <h2 className="homeabout-title">{pageTitle}</h2>
            </div>

            {teamData.map((data, index) => (
                <Row
                    key={index}
                    className={`align-items-center custom-Row ${index % 2 !== 0 ? "flex-row-reverse" : ""
                        }`}
                >
                    <Col lg={6} sm={12} className="text-start text-lg-start">
                        <div className="hteam_description_div">
                            <h2 className="homeabout-title">{data.title}</h2>
                            <p className="homeabout-description">{data.description}</p>
                        </div>
                    </Col>

                    <Col lg={6} sm={12} className="text-center text-lg-end">
                        <img
                            src={data.image}
                            alt={data.title}
                            className={`hteam-img img-fluid ${index % 2 !== 0 ? "shift-left" : ""}`}

                        />
                    </Col>
                </Row>
            ))}
        </Container>
    );
};

export default TeamSection;
