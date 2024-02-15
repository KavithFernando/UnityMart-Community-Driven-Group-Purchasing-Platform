import React from "react";
import './Footer.css'
import { Link } from "react-router-dom"; 
import{InstagramOutlined,WhatsAppOutlined,FacebookOutlined, GithubOutlined   } from "@ant-design/icons";
const Footer = () => {
    return (
        <div className="footer">
            <h1 className="footerHeadder"><i>Unity Mart</i></h1>
            <p className="footerPharagraph">Unity Mart's ultimate goal is <br/>to consistently provide customers with high-quality products<br/> at prices that are significantly lower,<br/> ensuring accessibility without compromising on quality.</p>
            
            <div className="developTeam">
            <h2>Develop team</h2>
            <br/>
            <p className="name">Pabasara Ravindaka<br/>Kavith Fernando <br/>Sanjaya Perera <br/>Niketh Randil <br/>Subhavitha Dharmasiri </p>
            
            </div>
            <button className="aboutUsButton">About Us</button>
            <div className="footerIcon"> 
                <a href="" className="icon">{<InstagramOutlined />}</a>
                <a href="" className="icon">{<WhatsAppOutlined />}</a>
                <a href="" className="icon">{<FacebookOutlined />}</a>
                <a href="" className="icon">{<GithubOutlined />}</a>    
            
            </div>

            
          
        </div>
    );
};
//g-red-500 md:px-28

export default Footer;
