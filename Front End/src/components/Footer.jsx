import React from "react";
import './Footer.css'
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const Footer = () => {
    return (
        <div>
            <section className="footer">
                <div className="container flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
                    <h2 className='md:text -4xl font-bold leading-tight text-center text-2xl text-whitemd:max-w-xl md:text-left'>Need to speak with an expert</h2>
                    <div>
                        <Link to="/contact">Contact us</Link> {/* Assuming "/contact" is the path to your contact page */}
                    </div> 
                </div>
            </section>
        </div>
    );
};
//g-red-500 md:px-28

export default Footer;
