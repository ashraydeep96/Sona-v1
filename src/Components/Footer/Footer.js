import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container-82">
      <img
        className="image-128-icon"
        loading="lazy"
        alt=""
        src="/image-128@2x.png"
      />
      <div className="legalframesgroup">
        <div className="company">Company</div>
        <div className="faqframe">
          <div className="privacypolicyframe">
            <div className="about-us">About Us</div>
          </div>
          <div className="privacypolicyframe1">
            <div className="faq">FAQ</div>
          </div>
          <div className="contact1">Contact</div>
        </div>
      </div>
      <div className="about-us-f-a-q">
        <div className="company-frame">
          <div className="legal-frame">
            <div className="legal">Legal</div>
          </div>
          <div className="terms-and-conditions-frame">
            <div className="cookie-policy-frame">
              <div className="privacy-policy">Privacy Policy</div>
            </div>
            <div className="terms-and-conditions">Terms and Conditions</div>
          </div>
          <div className="cookie-policy">Cookie Policy</div>
        </div>
        <div className="footer-frame">
          <div className="copyright-sona">Copyright @ Sona 2024</div>
        </div>
      </div>
      <div className="help-links-frame">
        <div className="help">Help</div>
        <div className="shipping-and-deliveryretums-container">
          <p className="shipping-and-delivery">Shipping and Delivery</p>
          <p className="retums-policy">Retums Policy</p>
          <p className="security-and-payment">Security and Payment</p>
        </div>
      </div>
      <div className="social-frames-container">
        <div className="facebook-image-frame">
          <div className="social">Social</div>
          <div className="twitter-image-frame">
            <div className="linked-in-image-frame">
              <img
                className="image-141-icon"
                loading="lazy"
                alt=""
                src="/image-141@2x.png"
              />
              <div className="social-icons">
                <img
                  className="image-124-icon"
                  loading="lazy"
                  alt=""
                  src="/image-124@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
