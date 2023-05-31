import React from "react";
import './FooterComponentStyles.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">Robert Ward II 2023 &copy;</p>

            <div className="social-media">
                <a href="https://github.com/Robert-W-Ward" className="social-icons">
                    <FaGithub style={{ color: 'white' }} />
                </a>
                <a href="https://www.linkedin.com/in/robert-ward-ii/" className="social-icons">
                    <FaLinkedin style={{ color: 'white' }} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;
