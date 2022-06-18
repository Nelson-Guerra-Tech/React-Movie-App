import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }

      return () => {
        window.removeEventListener('scroll');
      };
    });
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className='netflix-logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158'
        alt='Netflix Logo'
      />
      <img
        className='user-logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='user-avatar'
      />
    </div>
  );
}
