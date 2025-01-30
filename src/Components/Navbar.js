import React, { useState } from "react";
import { NavLink,useNavigate} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            {/* Logo */}
            <img className="navbar-logo" src={require("../assets/logo.png")}
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
            />

            {/* Desktop Links */}
            <ul className="navbar-links">
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

            {/* Hamburger Menu */}
            <div className="navbar-hamburger" onClick={toggleMenu}>
                {isOpen ? "✖" : "☰"}
            </div>

            {/* Mobile Menu */}
            <div className={`navbar-mobile-menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <li onClick={toggleMenu}>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li onClick={toggleMenu}>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            About
                        </NavLink>
                    </li>
                    <li onClick={toggleMenu}>
                        <NavLink
                            to="/service"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Services
                        </NavLink>
                    </li>
                    <li onClick={toggleMenu}>
                        <NavLink
                            to="/team"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Services
                        </NavLink>
                    </li>
                    <li onClick={toggleMenu}>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Overlay for mobile menu */}
            {isOpen && <div className="navbar-overlay" onClick={toggleMenu}></div>}
        </nav>
    );
};

export default Navbar;
