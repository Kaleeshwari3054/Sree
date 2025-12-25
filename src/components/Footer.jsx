import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Arjitha Sevas",
    "Daily Sevas",
    "Weekly Sevas",
    "Special Entry Darshan",
    "Accommodation",
    "Online Booking",
  ];

  const contactInfo = {
    address:
      "Sri Venkateswara Swamy Temple, Thiruvannamalai, Tamil Nadu 606601",
    phone: "+91-74187 03824",
    // email: 'info@ttd-thiruvannamalai.org',
    // website: 'www.ttd-thiruvannamalai.org'
  };

  return (
    <footer className="ttd-footer">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>About Sri valli siddhar peedam trust</h5>
            <p className="text-light">
              Sri Valli Siddhar Peedam Trust is the independent trust
              which manages the Sri Venkateswara Swamy Temple at
              Thiruvannamalai. We are dedicated to preserving the temple's
              heritage and providing excellent services to devotees.
            </p>
            <div className="social-links mt-3">
              <a href="#" className="text-white me-3">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-youtube fs-5"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-light text-decoration-none"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Our Services</h5>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="/services"
                    className="text-light text-decoration-none"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Contact Us</h5>
            <ul className="contact-info">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2 text-warning"></i>
                <span className="small">{contactInfo.address}</span>
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2 text-warning"></i>
                <span>{contactInfo.phone}</span>
              </li>
              {/* <li className="mb-2">
                <i className="bi bi-envelope me-2 text-warning"></i>
                <span>{contactInfo.email}</span>
              </li>
              <li className="mb-2">
                <i className="bi bi-globe me-2 text-warning"></i>
                <span>{contactInfo.website}</span>
              </li> */}
            </ul>
          </div>
        </div>
        {/* Map Section */}
    <div className="row mt-4">
  <div className="col-12">
    <div className="map-container">
      <h5 className="mb-3">Location</h5>
      <div className="google-map">
        <iframe
          title="Sri Valli Siddhar Peedam Trust Location"
          src="https://www.google.com/maps?q=12.2388371,79.0932019+(Sri+Valli+Siddhar+Peedam+Trust)&z=18&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</div>

       
        {/* Copyright */}
        <div className="row mt-4">
          <div className="col-12">
            <hr className="bg-light" />
            <div className="text-center">
              <p className="mb-0 small">
                Copyright © {currentYear} Sri valli siddhar peedam trust ,
                All Rights Reserved
              </p>
              <p className="mb-0 small">
                <a href="#" className="text-warning text-decoration-none me-3">
                  Privacy Policy
                </a>
                <a href="#" className="text-warning text-decoration-none me-3">
                  Terms of Service
                </a>
                <a href="#" className="text-warning text-decoration-none">
                  Sitemap
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
