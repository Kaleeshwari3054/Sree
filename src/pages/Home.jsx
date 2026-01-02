import React from "react";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content fade-in">
                <h1 className="hero-title">
                  Welcome to Sri valli sidhar peedam
                </h1>
                <p className="hero-subtitle">
                  Thiruvannamalai - The Abode of Divine Grace
                </p>
                <div className="hero-buttons">
                  <button
                    className="btn btn-ttdd btn-lg me-3"
                    onClick={() => (window.location.href = "/donate")} // Donation page link
                  >
                    <i className="bi bi-wallet2 me-2"></i>
                    Donate Now
                  </button>

                  <button className="btn btn-ttd-outlines btn-lg">
                    <i className="bi bi-play-circle me-2"></i>
                    Virtual Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-item">
                <h3 className="text-primary">50,000+</h3>
                <p className="mb-0">Daily Devotees</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-item">
                <h3 className="text-primary">1000+</h3>
                <p className="mb-0">Years of History</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-item">
                <h3 className="text-primary">24/7</h3>
                <p className="mb-0">Temple Services</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="stat-item">
                <h3 className="text-primary">500+</h3>
                <p className="mb-0">Rooms Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">Our Services</h2>
                <p className="text-muted">
                  Experience divine bliss through our various services
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="card ttd-card h-100">
                <div className="card-body text-center">
                  <i className="bi bi-stars service-icon"></i>
                  <h5 className="card-title">Arjitha Sevas</h5>
                  <p className="card-text">
                    Special paid sevas for devotees seeking closer divine
                    experience
                  </p>
                  <a href="/services" className="btn btn-ttd btn-sm">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card ttd-card h-100">
                <div className="card-body text-center">
                  <i className="bi bi-eye service-icon"></i>
                  <h5 className="card-title">Special Darshan</h5>
                  <p className="card-text">
                    Quick darshan facilities for elderly, disabled, and special
                    needs
                  </p>
                  <a href="/services" className="btn btn-ttd btn-sm">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card ttd-card h-100">
                <div className="card-body text-center">
                  <i className="bi bi-house-heart service-icon"></i>
                  <h5 className="card-title">Accommodation</h5>
                  <p className="card-text">
                    Comfortable and affordable staying facilities for pilgrims
                  </p>
                  <a href="/services" className="btn btn-ttd btn-sm">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card ttd-card h-100">
                <div className="card-body text-center">
                  <i className="bi bi-gift service-icon"></i>
                  <h5 className="card-title">Donations</h5>
                  <p className="card-text">
                    Contribute to temple development and charitable activities
                  </p>
                  <a href="/services" className="btn btn-ttd btn-sm">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      {/* <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">Daily Schedule</h2>
                <p className="text-muted">Temple timings and rituals</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>Time</th>
                      <th>Ritual</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>02:30 - 03:00</td>
                      <td>Suprabhatam</td>
                      <td>Morning awakening ceremony</td>
                    </tr>
                    <tr>
                      <td>03:30 - 04:00</td>
                      <td>Thomala Seva</td>
                      <td>Floral decoration ceremony</td>
                    </tr>
                    <tr>
                      <td>04:15 - 05:00</td>
                      <td>First Archana</td>
                      <td>Sahasranama Archana</td>
                    </tr>
                    <tr>
                      <td>08:00 - 19:00</td>
                      <td>Darshanam</td>
                      <td>General darshan for devotees</td>
                    </tr>
                    <tr>
                      <td>17:30 - 18:30</td>
                      <td>Sahasra Deepalankarana</td>
                      <td>Lighting of 1000 lamps</td>
                    </tr>
                    <tr>
                      <td>21:00 - 01:00</td>
                      <td>Night Darshan</td>
                      <td>Evening darshan session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section> */}
 <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">Daily Schedule</h2>
                <p className="text-muted">Temple timings and rituals</p>
              </div>
            </div>
          </div>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Time</th>
                  <th>Ritual</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>06:00 - 06:30</td>
                  <td>Suprabhatam</td>
                  <td>Morning awakening ceremony</td>
                </tr>
                <tr>
                  <td>06:30 - 07:00</td>
                  <td>Thomala Seva</td>
                  <td>Floral decoration ceremony</td>
                </tr>
                <tr>
                  <td>07:00 - 08:00</td>
                  <td>First Archana</td>
                  <td>Sahasranama Archana</td>
                </tr>
                <tr>
                  <td>08:00 - 20:00</td>
                  <td>Darshanam</td>
                  <td>General darshan for devotees</td>
                </tr>
                <tr>
                  <td>19:30 - 20:00</td>
                  <td>Sahasra Deepalankarana</td>
                  <td>Lighting of 1000 lamps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Latest Updates */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">Latest Updates</h2>
                <p className="text-muted">
                  Stay informed about temple announcements
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card ttd-card h-100">
                <div className="card-body">
                  <span className="badge bg-primary mb-2">Announcement</span>
                  <h6 className="card-title">Online Booking Now Available</h6>
                  <p className="card-text small">
                    Devotees can now book accommodation and sevas online through
                    our portal.
                  </p>
                  <small className="text-muted">Posted 2 days ago</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card ttd-card h-100">
                <div className="card-body">
                  <span className="badge bg-success mb-2">Service Update</span>
                  <h6 className="card-title">
                    Special Arrangements for Festivals
                  </h6>
                  <p className="card-text small">
                    Special darshan arrangements made for upcoming festival
                    season.
                  </p>
                  <small className="text-muted">Posted 5 days ago</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card ttd-card h-100">
                <div className="card-body">
                  <span className="badge bg-warning mb-2">Maintenance</span>
                  <h6 className="card-title">Temple Renovation Schedule</h6>
                  <p className="card-text small">
                    Partial renovation work scheduled for next month with
                    minimal disruption.
                  </p>
                  <small className="text-muted">Posted 1 week ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4">Plan Your Visit</h2>
              <p className="mb-4">
                Experience the divine blessings of Lord Venkateswara. Book your
                visit today and immerse yourself in spiritual bliss.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-light btn-lg">
                  <i className="bi bi-calendar-plus me-2"></i>
                  Book Now
                </button>
                <button className="btn btn-outline-light btn-lg">
                  <i className="bi bi-info-circle me-2"></i>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
