import React, { useState, useRef } from 'react';
import {FaLinkedin, FaGithub } from 'react-icons/fa';
import Arrow from '../../assets/images/arrow.svg'
import './PopupTrayComponentStyles.scss';

const PopupTray = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef(null);
  
    const handleMouseEnter = () => {
      clearTimeout(timeoutRef.current);
      setIsOpen(true);
    };
  
    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 300); // Adjust the delay (in milliseconds) as needed
    };
  
    const handleTrayClick = (e) => {
      e.stopPropagation(); // Prevent closing the tray when clicking inside it
    };
  
    return (
      <div
        className={`popup-tray ${isOpen ? 'open' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleTrayClick}
      >
              {!isOpen && (
        <img src={Arrow} className="popup-arrow-icon" alt="Arrow" />
      )}
        <div className="icon-container">
          <a href="https://github.com/Robert-W-Ward">
            <FaGithub style={{color:'black'}} className='social-icons'/>
          </a>
          <a href="https://www.linkedin.com/in/robert-ward-ii/">
            <FaLinkedin style={{color:'black'}} className='social-icons'/>
          </a>
        </div>
        {children}
      </div>
    );
  };
export default PopupTray  
