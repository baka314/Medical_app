import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">


            <p className="phoneNum">
                <img src={`${process.env.PUBLIC_URL}/phoneIcon.png`} alt="Phone" className="icon"/>
                (048) 750-43-53</p>

            <p className="email">
                <img src={`${process.env.PUBLIC_URL}/email-icon.png`} alt="Phone" className="icon"/>
                oookb@ukr.net</p>

            <p className="location">
                <img src={`${process.env.PUBLIC_URL}/locationIcon.png`} alt="location-icon" className="icon"/>
                вул. Академіка Заболотного 26/32</p>

        </div>)
}
export default Footer;