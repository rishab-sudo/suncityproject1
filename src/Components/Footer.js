import React from 'react'
import { Container } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
    return (
        <Container fluid className='footer_containerFluid section-gap '>
            <Container className="footer_content_container">
            <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>
             <img src={require("../assets/logo.png")} alt='' />
         </div>
                <div>
                    <ul className='footer-links'>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/service"
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/team"
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                Our Team
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </Container>
    )
}

export default Footer