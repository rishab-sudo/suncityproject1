import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../Components/Banner";
import TeamSection from "../Components/TeamSection";
import Experties from "../Components/Experties";
import { teamData } from "../constants/data";
import { expertiesData } from "../constants/data";

import "./Home.css";

const Home = () => {
    const aboutData = [
        {
            title: "About Us",
            description1:
                "At Typical Tones Pvt. Ltd., we are dedicated to empowering businesses with innovative solutions, unmatched expertise, and a commitment to excellence in Business Advisory Services. Over the years, we have expanded into multiple domains, delivering transformative results for our clients across industries.",
            description2:
                "From our registered office in Bangalore to our operating hub in Bareilly, Uttar Pradesh, we serve a diverse clientele, offering strategic, operational, and creative solutions that drive measurable success. Whether you're looking for comprehensive business advisory, creative design expertise, or innovative product development, Typical Tones Pvt. Ltd. is your trusted partner.",
            image: require("../assets/homeabout.png"),
        },
    ];


    return (
        <>
        <div>
          <Banner />
        </div>
            {/* Home-About Section */}
            <Container fluid className="homeabout-section section-gap">
                <div className="homeabout-content-container">
                    {aboutData.map((data, index) => (
                        <Row className="align-items-center" key={index}>
                            <Col lg={6} sm={12} className="text-start text-lg-start">
                                <h2 className="homeabout-title">{data.title}</h2>
                                <p className="homeabout-description">{data.description1}</p>
                                <p className="homeabout-description">{data.description2}</p>
                            </Col>

                            <Col
                                lg={6}
                                sm={12}
                                className="text-center text-lg-end mt-lg-0 mt-3"
                            >
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className="homeabout-image img-fluid"
                                />
                            </Col>
                        </Row>
                    ))}
                </div>
            </Container>

            {/* Experties Section */}
            <Experties
                pageTitle="OUR EXPERTIES"
                expertiesData={expertiesData}
            />

            {/* Our Team Member */}
            <TeamSection
                pageTitle="Our Key Team Members"
                teamData={teamData}
            />
        </>
    );
};

export default Home;
