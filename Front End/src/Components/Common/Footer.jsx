import React from "react";
import './Footer.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer">
            <div class="logof ">
                <span>Unity Mart</span>
            </div>
            <p>419, 1, Ramakrishna Road, Wellawatte, Colombo 06, Sri Lanka. | Phone: +94 712872263 | Email:unitymart@gmail.com</p>
            <p>Unity Mart © 2023 All Rights Reserved</p>
            <div class="footer-col">
                <h4>Follow the Development Team</h4>
                <div className="dev-team">
                    <div className="dev-member">
                        <h4>Niketh Randil</h4>
                        <div class="social-links">
                            <Link to="/"><FaLinkedin/></Link>
                            <Link to="/"><FaGithub/></Link>
                            <Link to="/"><FaInstagram/></Link>
                        </div>
                    </div>
                    <div className="dev-member">
                        <h4>Sanjaya Perera</h4>
                        <div class="social-links">
                            <Link to="/"><FaLinkedin/></Link>
                            <Link to="/"><FaGithub/></Link>
                            <Link to="/"><FaInstagram/></Link>
                        </div>
                    </div>
                    <div className="dev-member">
                        <h4>Pabasara Ravindaka</h4>
                        <div class="social-links">
                            <Link to="/"><FaLinkedin/></Link>
                            <Link to="/"><FaGithub/></Link>
                            <Link to="/"><FaInstagram/></Link>
                        </div>
                    </div>
                    <div className="dev-member">
                        <h4>Kavith Fernando</h4>
                        <div class="social-links">
                            <Link to="/"><FaLinkedin/></Link>
                            <Link to="/"><FaGithub/></Link>
                            <Link to="/"><FaInstagram/></Link>
                        </div>
                    </div>
                    <div className="dev-member">
                        <h4>Susitha Subavitha</h4>
                        <div class="social-links">
                            <Link to="/"><FaLinkedin/></Link>
                            <Link to="/"><FaGithub/></Link>
                            <Link to="/"><FaInstagram/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
//g-red-500 md:px-28

export default Footer;
