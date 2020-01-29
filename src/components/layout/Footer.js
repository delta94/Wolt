import React from "react";
import "../../assets/styles/Footer.scss";
import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";
import linkedin from "../../assets/icons/linkedin.png";
import twitter from "../../assets/icons/twitter.png";
import woltLogo from "../../assets/icons/wolt-logo.png";
import apple from "../../assets/icons/apple.png";
import android from "../../assets/icons/android.png";

// The Footer contain is not functional, it's just for styling
const Footer = () => {
    return (
        <div className="footer">
            <div className="download">
                <h2>Download the app</h2>
                <img src={android} alt="android" />
                <img src={apple} alt="apple" />
                <p>©Copyrighted 2020.</p>
            </div>
            <div className="about">
                <h2>Let's do this together</h2>
                <span>For couriers</span>
                <span>For restaurants</span>
                <span>For companies</span>
                <span>Jobs</span>
                <div>Terms and conditions</div>
            </div>
            <div className="socials">
                <img className="wolt-logo" src={woltLogo} alt="logo" />
                <h2>Find us on</h2>
                <div className="social-btns">
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={twitter} alt="twitter" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
