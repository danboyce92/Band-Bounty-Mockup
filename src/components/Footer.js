import React from 'react';
import '../styles/index.css';

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div
        id="footer-text"
        className=" flex flex-row bg-white justify-center h-10 pt-2"
      >
        <div className="mx-2">bbounty@email.com |</div>
        <div className="mx-2">
          <a href="https://facebook.com">
            <FaFacebook size={24} />{' '}
          </a>
        </div>
        <div className="mx-2">
          <a href="https://twitter.com">
            <FaTwitter size={24} />{' '}
          </a>
        </div>
        <div className="mx-2">
          <a href="https://instagram.com">
            <FaInstagram size={24} />{' '}
          </a>
        </div>
        <div className="mx-2">
          | <Link to="/contact"> Contact us</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
