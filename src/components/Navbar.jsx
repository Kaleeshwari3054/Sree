import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: "bi-house-door" },
    { path: "/about", label: "About", icon: "bi-info-circle" },
    { path: "/services", label: "Services", icon: "bi-gear" },
    { path: "/gallery", label: "Gallery", icon: "bi-images" },
    { path: "/contact", label: "Contact", icon: "bi-envelope" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Flash News Section */}
      <div className="flash-news">
        <div className="container-fluid">
          <marquee behavior="scroll" direction="left">
            <i className="bi bi-broadcast"></i>
            <strong>Flash News:</strong> The Advance booking arjitha seva ticket
            holders of Sahasrakalasabhishekam, Vishesha pooja & Vasantotsavam
            are requested to avail Break Darshan or to get refund instead of
            seva for their booking made in advance. | Online booking for
            accommodation now available | Special darshan arrangements for
            elderly devotees |
          </marquee>
        </div>
      </div>

      {/* Header */}
      <header className="ttd-header py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="logo-container">
                <img
                  // src="/assets/logo.png"
                  src={Logo}
                  alt="TTD Logo"
                  className="ttd-logo img-fluid"
                  // onError={(e) => {
                  //   const target = e.target as HTMLImageElement;
                  //   target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiNkNGFmMzciLz4KPHR5cGUNCg0KCQkJCQkJCQkJCQkJaWQ9dDpkZWZhdWx0DQoJCQkJCQkJCQkJCWZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiINCgkJCQkJCQkJCQkJZm9udC1zaXplPSIxMnB4Ig0KCQkJCQkJCQkJCQlmaWxsPSIjMmMyZTUwIg0KCQkJCQkJCQkJCQl0ZXh0LWFuY2hvcj0ibWlkZGxlIg0KCQkJCQkJCQkJCQlkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCI+DQoJCQkJCQkJCQkJCVRURA0KCQkJCQkJCQkJCTwvdGV4dD4KPC9zdmc+';
                  // }}
                  onError={(e) => {
                    const target = e.target; // ✅ Works everywhere
                    target.src = "data:image/svg+xml;base64,...";
                  }}
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="text-center text-md-end">
                <h1 className="h4 mb-1 text-white">
                  Tirumala Tirupati Devasthanams
                </h1>
                <p className="mb-0 text-warning">
                  Sri Venkateswara Swamy Temple
                </p>
                <p className="mb-0 small text-light">Thiruvannamalai</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg ttd-navbar sticky-top">
        <div className="container">
          <Link className="navbar-brand text-white d-lg-none" to="/">
            TTD
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMobileMenu}
            aria-controls="navbarNav"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              isMobileMenuOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              {navItems.map((item) => (
                <li className="nav-item" key={item.path}>
                  <Link
                    className={`nav-link ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className={`bi ${item.icon} me-2`}></i>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
