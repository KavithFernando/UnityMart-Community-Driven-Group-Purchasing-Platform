import React from "react";
import './Footer.css'
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const Footer = () => {
    return (
        <div className="footer">
           <div className="section_padding">
             <div className="footer_links">
                <div className="footer_links_div">
                    <h4>for business</h4>
                    <a href="/employeer">
                        <p>employeer</p>
                    </a>
                    <a href="/healthplan">
                        <p>Health plan</p>
                    </a>
                    <a href="/individual">
                        <p>Individual</p>
                    </a>
                </div>
                <div className="footer_links_div">
                <h4>Resources</h4>
                    <a href="/resource">
                        <p>Resource center</p>
                    </a>
                    <a href="/resource">
                        <p>Testimonials</p>
                    </a>
                    <a href="/resource">
                        <p>Stv</p>
                    </a>
                </div>
                <div className="footer_links_div">
                <h4>Company</h4>
                    <a href="/about">
                        <p>About</p>
                    </a>
                    <a href="/press">
                        <p>Press</p>
                    </a>
                    <a href="/career">
                        <p>Career</p>
                    </a>
                    <a href="/contact">
                        <p>Contact</p>
                    </a>
                </div>
                {/* <div className="footer_links_dev">
                <h4>coming soon</h4>
                <div className="social media">
                    <p><img src = {fb} alt=""/></p>
                    <p><img src = {twitter} alt=""/></p>
                    <p><img src = {linkedin} alt=""/></p>
                    <p><img src = {instergram} alt=""/></p>
                </div>
                </div>                           */}
            </div> 
            {/* lineol */}
            <hr></hr>
            <div className="footer.below">
                 <div className="footer_copyright">
                    <p>
                        @{new Date().getFullYear()}CodeInn.All right reserved.
                    </p>
                </div> 
                 <div className="footer_below_links">
                    <a href="/terms"><div><p>Terms & conditions</p></div></a>
                    <a href="/privacy"><div><p>privacy</p></div></a>
                    <a href="/sequrity"><div><p>sequrity</p></div></a>
                    <a href="/cookie"><div><p>Cookie Declarations</p></div></a>
                </div> 
            </div>
           </div>
        </div>
    );
};
//g-red-500 md:px-28

export default Footer;
