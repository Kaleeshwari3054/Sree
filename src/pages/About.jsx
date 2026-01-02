import React from "react";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content">
                <h1 className="hero-title">About</h1>
                <p className="hero-subtitle">
                  Preserving Tradition, Serving Devotees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About TTD */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="section-title mb-4">
                Tirumala Tirupati Devasthanams
              </h2>
              <p className="lead">
                Tirumala Tirupati Devasthanams (TTD) is an independent trust
                which manages the Sri Venkateswara Swamy Temple at
                Thiruvannamalai. The trust oversees the operations and finances
                of the richest and most visited religious center in the world.
              </p>
              <p>
                Established with the noble mission of preserving the temple's
                ancient traditions while providing modern amenities to millions
                of devotees, TTD stands as a beacon of spiritual service and
                administrative excellence.
              </p>
              <p>
                Our commitment extends beyond temple management to include
                various philanthropic activities, educational institutions,
                hospitals, and social service initiatives that benefit society
                at large.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="about-image">
                <img
                  src="/assets/temple-main.jpg"
                  alt="TTD Temple"
                  className="img-fluid rounded shadow"
                  // onError={(e) => {
                  //   const target = e.target as HTMLImageElement;
                  //   target.src = 'https://picsum.photos/seed/ttd-temple/600/400.jpg';
                  // }}
                  onError={(e) => {
                    const target = e.target; // ✅ Remove 'as HTMLImageElement'
                    target.src =
                      "https://picsum.photos/seed/ttd-temple/600/400.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temple History */}
      {/* <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">Temple History</h2>
                <p className="text-muted">
                  A legacy spanning over a millennium
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <i className="bi bi-star-fill text-primary"></i>
                  </div>
                  <div className="timeline-content">
                    <h5>Ancient Origins</h5>
                    <p>
                      The temple's origins can be traced back to ancient times,
                      with references found in various Puranas and scriptures.
                      The exact date of establishment remains a subject of
                      scholarly research.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <i className="bi bi-building text-primary"></i>
                  </div>
                  <div className="timeline-content">
                    <h5>Temple Development</h5>
                    <p>
                      Over centuries, various dynasties contributed to the
                      temple's development, building the magnificent structure
                      we see today with its intricate architecture and spiritual
                      significance.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <i className="bi bi-people text-primary"></i>
                  </div>
                  <div className="timeline-content">
                    <h5>TTD Formation</h5>
                    <p>
                      The Tirumala Tirupati Devasthanams was formally
                      established to manage the temple affairs professionally,
                      ensuring transparency, efficiency, and better service to
                      millions of devotees.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <i className="bi bi-trophy text-primary"></i>
                  </div>
                  <div className="timeline-content">
                    <h5>Modern Era</h5>
                    <p>
                      Today, TTD stands as a model institution combining ancient
                      traditions with modern management practices, serving
                      crores of devotees annually while maintaining the temple's
                      spiritual sanctity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Vision and Mission */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card ttd-card h-100">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">
                    <i className="bi bi-eye me-2"></i>Our Vision
                  </h5>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="bi bi-check-circle text-primary me-2"></i>
                      To preserve and promote the ancient spiritual traditions
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle text-primary me-2"></i>
                      To provide excellent facilities to devotees
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle text-primary me-2"></i>
                      To maintain transparency and good governance
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle text-primary me-2"></i>
                      To contribute to societal welfare through charitable
                      activities
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card ttd-card h-100">
                <div className="card-header bg-success text-white">
                  <h5 className="mb-0">
                    <i className="bi bi-target-arrow me-2"></i>Our Mission
                  </h5>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="bi bi-arrow-right-circle text-success me-2"></i>
                      Ensure smooth darshan for all devotees
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-arrow-right-circle text-success me-2"></i>
                      Maintain temple rituals and traditions with authenticity
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-arrow-right-circle text-success me-2"></i>
                      Provide quality accommodation and services
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-arrow-right-circle text-success me-2"></i>
                      Promote education and healthcare initiatives
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="py-5 bg-light">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="text-center mb-5">
          <h2 className="section-title">Committee Members</h2>
          <p className="text-muted">
            Dedicated members serving with devotion and responsibility
          </p>
        </div>
      </div>
    </div>

    <div className="row g-4">

      {/* President */}
      <div className="col-lg-3 col-md-6">
        <div className="card text-center h-100 shadow-sm">
          <div className="card-body">
            <i className="bi bi-person-circle fs-1 text-primary mb-3"></i>
            <h5 className="card-title">S. Valli</h5>
            <p className="text-muted small mb-1">President & Founder</p>
          </div>
        </div>
      </div>

      {/* Secretary */}
      <div className="col-lg-3 col-md-6">
        <div className="card text-center h-100 shadow-sm">
          <div className="card-body">
            <i className="bi bi-person-circle fs-1 text-primary mb-3"></i>
            <h5 className="card-title">S. Rema Sushmitha</h5>
            <p className="text-muted small mb-1">Secretary (Advocate)</p>
          </div>
        </div>
      </div>

      {/* Treasurer */}
      <div className="col-lg-3 col-md-6">
        <div className="card text-center h-100 shadow-sm">
          <div className="card-body">
            <i className="bi bi-person-circle fs-1 text-primary mb-3"></i>
            <h5 className="card-title">S. Pooja Sri</h5>
            <p className="text-muted small mb-1">Treasurer</p>
          </div>
        </div>
      </div>

      {/* Committee Member */}
      <div className="col-lg-3 col-md-6">
        <div className="card text-center h-100 shadow-sm">
          <div className="card-body">
            <i className="bi bi-person-circle fs-1 text-primary mb-3"></i>
            <h5 className="card-title">A. Sathish</h5>
            <p className="text-muted small mb-1">Administrative Officer</p>
          </div>
        </div>
      </div>

      {/* Repeat Members */}
      <div className="col-lg-3 col-md-6">
        <div className="card text-center h-100 shadow-sm">
          <div className="card-body">
            <i className="bi bi-person-circle fs-1 text-primary mb-3"></i>
            <h5 className="card-title">P. Athish</h5>
            <p className="text-muted small mb-1">Supervisor</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card text-center h-100 shadow-sm">
          <div className="card-body">
            <i className="bi bi-person-circle fs-1 text-primary mb-3"></i>
            <h5 className="card-title">S. Kavin Keerthan</h5>
            <p className="text-muted small mb-1">Administrative Supervisor</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card text-center h-100 shadow-sm">
          <div className="card-body">
            <i className="bi bi-person-circle fs-1 text-primary mb-3"></i>
            <h5 className="card-title">P. Shalini</h5>
            <p className="text-muted small mb-1">Supervisor</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card text-center h-100 shadow-sm">
          <div className="card-body">
            <i className="bi bi-person-circle fs-1 text-primary mb-3"></i>
            <h5 className="card-title">A. Ramanadhan</h5>
            <p className="text-muted small mb-1">Priest</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Achievements */}
      {/* <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">Our Achievements</h2>
                <p className="text-muted">
                  Milestones of service and dedication
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="achievement-card text-center">
                <div className="achievement-icon mb-3">
                  <i className="bi bi-award fs-1 text-warning"></i>
                </div>
                <h4>ISO Certification</h4>
                <p>
                  First temple in India to achieve ISO 9001:2015 certification
                  for quality management
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="achievement-card text-center">
                <div className="achievement-icon mb-3">
                  <i className="bi bi-hospital fs-1 text-success"></i>
                </div>
                <h4>Healthcare Excellence</h4>
                <p>
                  Operating multi-specialty hospitals providing free medical
                  services to the needy
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="achievement-card text-center">
                <div className="achievement-icon mb-3">
                  <i className="bi bi-book fs-1 text-info"></i>
                </div>
                <h4>Education Pioneer</h4>
                <p>
                  Running numerous educational institutions from schools to
                  postgraduate colleges
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
