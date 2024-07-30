// src/components/pages/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>Radient Halls, Coimbatore</p>
          <p>2/2, Avinashi Rd, Opp CIT, Peelamedu, Civil Aerodrome Post, Coimbatore, Tamil Nadu - 641014</p>
          <p>
            <a href="mailto:booking@jenneyresidency.in">booking@Radient.in</a> | 
            <a href="tel:+919894055385">+91 9894055385</a> | Hotel Phone No
          </p>
          <p>
            <a href="tel:+917538888209">+91 7538888209</a> | 
            <a href="tel:+919894044833">9894044833</a> | Hall Enquiry
          </p>
          <p>
            <a href="tel:+919894055385">+91 9894055385</a> | Room Enquiry
          </p>
        </div>
        <div className="social-media">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
        </div>
      </div>
      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">Rooms</a>
        <a href="#">Promotions</a>
        <a href="#">Dining</a>
        <a href="#">Banquets</a>
        <a href="#">Spa</a>
        <a href="#">Facility</a>
        <a href="#">Club Membership</a>
        <a href="#">Gallery</a>
        <a href="#">Location</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
        <a href="#">Manage Booking</a>
      </div>
      <div className="footer-bottom">
        <p>Sitemap</p>
      </div>
    </footer>
  );
}

export default Footer;
