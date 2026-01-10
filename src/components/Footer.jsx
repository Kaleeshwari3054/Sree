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
      "79/12 Perumal Kovil Street,  So. Kilnachipattu Village, Thiruvannamalai to Chennai Main Road, Thiruvannamalai-606601",
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
              Sri Valli Siddhar Peedam Trust is the independent trust which
              manages the Sri Venkateswara Swamy Temple at Thiruvannamalai. We
              are dedicated to preserving the temple's heritage and providing
              excellent services to devotees.
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
              {/* <div className="google-map">
                <iframe
                  title="Sri Valli Siddhar Peedam Trust Location"
                  src="https://www.google.com/maps?q=12.2388371,79.0932019+(Sri+Valli+Siddhar+Peedam+Trust)&z=18&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div> */}

              <div className="ratio ratio-16x9 shadow-lg rounded-4 border-0 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4867742999997!2d79.0932019!3d12.2388371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacc0b9369508af%3A0xffb43b1aa080331d!2sSri%20Valli%20Siddhar%20Peedam%20Trust!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Valli Siddhar Peedam Trust Location"
                />
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
                Copyright © {currentYear} Sri valli siddhar peedam trust , All
                Rights Reserved
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
