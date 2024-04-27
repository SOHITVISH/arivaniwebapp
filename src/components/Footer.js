import React from "react";
import footerLogo from '../img/ityo2.png'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer" style={{ backgroundColor: "#e7e7e7" }}>
        <div className="footer-content">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-12 footer-info">
                {/* Logo with lifted margin */}
                <Link to="/" className="logo d-flex align-items-center ">
                  <img src={footerLogo} alt="" title="" style={{ marginTop: "-10px" }} />
                </Link>
                {/* Footer information */}
                <p>
                  Arivani Technologies Private Limited. is a Software development company, we provide all the services related to software like ERP/CRM Software, Ecommerce Development, Mobile Development, Web & Mobile Design, and Web Development
                </p>
                {/* Social links */}
                <div className="social-links d-flex  mt-3">
                  <Link to="/" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </Link>
                  <Link to="/" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link to ="https://www.linkedin.com/company/arivani-technologies-pvt-ltd/mycompany/" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
              {/* Useful links */}
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bi bi-dash"></i><Link to="/">Home</Link></li>
                  <li><i className="bi bi-dash"></i><Link to="/about">About Us</Link></li>
                  <li><i className="bi bi-dash"></i><Link to="/services">Services</Link></li>
                  <li><i className="bi bi-dash"></i><Link to="/careers">Careers</Link></li>
                  <li><i className="bi bi-dash"></i><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
              {/* Our services */}
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bi bi-dash"></i><HashLink smooth to="/services/#Educational-content">CRM (Customer Relationship Manager)</HashLink></li>
                  <li><i className="bi bi-dash"></i><HashLink smooth to="/services/#Entertainment-content">Vision and Mission</HashLink></li>
                  <li><i className="bi bi-dash"></i><HashLink smooth to="/services/#Games">iAriv (360)</HashLink></li>
                  <li><i className="bi bi-dash"></i><HashLink smooth to="/services/#Sports">Why Choose Us</HashLink></li>
                  <li><i className="bi bi-dash"></i><HashLink smooth to="/services/#Sports">Virtual Tour</HashLink></li>
                </ul>
              </div>
              {/* Contact information */}
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <address>
                  Vikas Nagar <br />
                  Mama Chauraha <br />
                  Kursi Road, Lucknow - 226026. <br /> 
                  <br />
                  <strong>Phone:</strong> 9140501084 <br />
                  <strong>Email:</strong> <a href="mailto:hr@arivani.com">hr@arivani.com</a> <br />
                </address>
                {/* Map */}
                <div className="map-container">
                
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.290250478848!2d80.95219307450427!3d26.894282060884024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957b82ac0a337%3A0xd281894619ce9167!2sArivani%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1713454928205!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    title="map"
                    style={{ border: "2" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* Footer legal information */}
        <div className="footer-legal" style={{ color: "white"}}>
          <div className="container">
            <div className="copyright" >
              {/* Copyright notice with dynamic year */}
              <span id="copyright" style={{color:"white"}}>
                <script>
                  document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
                </script>
                <script>
                  document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
                </script>
              </span>
              &copy; 2024 Copyright <span>Arivani Technologies Private Limited</span>. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};   

export default Footer;
