import React from "react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <button className="footer__button" type="button" onClick={scrollToTop}>
        Back to Top
      </button>

      <div className="footer__columns">
        <div className="footer__column">
          <strong>Get to Know Us</strong>
          <p>Carrers</p>
          <p>Blogs</p>
          <p>About Amazon</p>
          <p>Amazon Science</p>
        </div>
        <div className="footer__column">
          <strong>Make Money with Us</strong>
          <p>Sell products on Amazon</p>
          <p>Sell apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
        </div>
        <div className="footer__column">
          <strong>Amazon Payment Products</strong>
          <p>Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>
        <div className="footer__column">
          <strong>Let Us Help You</strong>
          <p>Amazon and COVID-19</p>
          <p>Shipping Rates & Policies</p>
          <p>Amazon Assistant</p>
          <p>Help</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
