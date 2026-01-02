import React, { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('sevas');

  const services = {
    sevas: [
      {
        name: 'Sahasrakalasabhishekam',
        description: 'Abhishekam with 1000 kalashas of sacred water',
        timing: '6:00 AM - 8:00 AM',
        price: '₹5000',
        booking: 'Online/Offline'
      },
      {
        name: 'Vishesha Pooja',
        description: 'Special pooja with elaborate rituals',
        timing: '7:00 AM - 9:00 AM',
        price: '₹3000',
        booking: 'Online/Offline'
      },
      {
        name: 'Vasantotsavam',
        description: 'Spring festival celebration',
        timing: 'Seasonal',
        price: '₹2000',
        booking: 'Advance Booking'
      },
      {
        name: 'Kalyanotsavam',
        description: 'Celestial wedding ceremony',
        timing: '12:00 PM - 5:00 PM',
        price: '₹1000',
        booking: 'Online/Offline'
      },
      {
        name: 'Unjal Seva',
        description: 'Swing ceremony for the deity',
        timing: '5:00 PM - 6:00 PM',
        price: '₹500',
        booking: 'Online/Offline'
      },
      {
        name: 'Sahasra Deepalankarana',
        description: 'Lighting of 1000 lamps',
        timing: '5:30 PM - 6:30 PM',
        price: '₹200',
        booking: 'Online/Offline'
      }
    ],
    darshan: [
      {
        name: 'Sarvadarshanam',
        description: 'Free darshan for all devotees',
        timing: '8:00 AM - 7:00 PM',
        price: 'Free',
        notes: 'Queue time: 4-6 hours'
      },
      {
        name: 'Special Entry Darshan',
        description: 'Quick darshan with paid tickets',
        timing: '8:00 AM - 7:00 PM',
        price: '₹300',
        notes: 'Queue time: 1-2 hours'
      },
      {
        name: 'Divya Darshan',
        description: 'Special darshan for pedestrians',
        timing: '6:00 AM - 2:00 PM',
        price: 'Free',
        notes: 'For devotees walking by foot'
      },
      {
        name: 'VIP Darshan',
        description: 'Special arrangements for VIPs',
        timing: 'As per schedule',
        price: 'Special',
        notes: 'By recommendation only'
      }
    ],
    accommodation: [
      {
        name: 'VIP Suites',
        description: 'Luxury accommodation with modern amenities',
        price: '₹5000 - ₹10000',
        capacity: '2-4 persons',
        features: 'AC, TV, Hot Water, Room Service'
      },
      {
        name: 'AC Rooms',
        description: 'Comfortable air-conditioned rooms',
        price: '₹1000 - ₹3000',
        capacity: '2-3 persons',
        features: 'AC, TV, Attached Bathroom'
      },
      {
        name: 'Non-AC Rooms',
        description: 'Budget-friendly rooms',
        price: '₽300 - ₹1000',
        capacity: '2-4 persons',
        features: 'Basic amenities, Common bathrooms'
      },
      {
        name: 'Dormitories',
        description: 'Shared accommodation for groups',
        price: '₹100 - ₹300',
        capacity: '10-50 persons',
        features: 'Basic bedding, Common facilities'
      },
      {
        name: 'Kalyana Mandapams',
        description: 'Function halls for events',
        price: '₹10000 - ₹50000',
        capacity: '100-1000 persons',
        features: 'Full facilities, Catering available'
      }
    ],
    donations: [
      {
        name: 'Srivani Trust',
        description: 'Development of temple infrastructure',
        minimum: '₹1000',
        benefits: 'Special darshan privileges'
      },
      {
        name: 'Annaprasadam Trust',
        description: 'Free food distribution to devotees',
        minimum: '₹500',
        benefits: 'Blessings and acknowledgment'
      },
      {
        name: 'Pranadana Trust',
        description: 'Medical services for the poor',
        minimum: '₹1000',
        benefits: 'Udayasthamana seva for major donations'
      },
      {
        name: 'Vidyadana Trust',
        description: 'Educational support for needy students',
        minimum: '₹500',
        benefits: 'Tax benefits under 80G'
      },
      {
        name: 'Gosamrakshana',
        description: 'Cow protection and care',
        minimum: '₹100',
        benefits: 'Blessings and spiritual merit'
      }
    ]
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content">
                <h1 className="hero-title">Our Services</h1>
                <p className="hero-subtitle">Experience divine bliss through our spiritual services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav nav-pills justify-content-center" role="tablist">
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'sevas' ? 'active' : ''}`}
                    onClick={() => setActiveTab('sevas')}
                    type="button"
                  >
                    <i className="bi bi-stars me-2"></i>Sevas
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'darshan' ? 'active' : ''}`}
                    onClick={() => setActiveTab('darshan')}
                    type="button"
                  >
                    <i className="bi bi-eye me-2"></i>Darshan
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'accommodation' ? 'active' : ''}`}
                    onClick={() => setActiveTab('accommodation')}
                    type="button"
                  >
                    <i className="bi bi-house-heart me-2"></i>Accommodation
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === 'donations' ? 'active' : ''}`}
                    onClick={() => setActiveTab('donations')}
                    type="button"
                  >
                    <i className="bi bi-gift me-2"></i>Donations
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-5">
        <div className="container">
          {/* Sevas Tab */}
          {activeTab === 'sevas' && (
            <div className="tab-content">
              <div className="row mb-4">
                <div className="col-lg-12">
                  <div className="text-center mb-5">
                    <h2 className="section-title">Arjitha Sevas</h2>
                    <p className="text-muted">Special paid services for closer divine experience</p>
                  </div>
                </div>
              </div>
              
              <div className="row g-4">
                {services.sevas.map((seva, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="card ttd-card h-100">
                      <div className="card-header bg-primary text-white">
                        <h5 className="mb-0">{seva.name}</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">{seva.description}</p>
                        <ul className="list-unstyled">
                          <li><strong>Timing:</strong> {seva.timing}</li>
                          <li><strong>Price:</strong> {seva.price}</li>
                          <li><strong>Booking:</strong> {seva.booking}</li>
                        </ul>
                        <button className="btn btn-ttd btn-sm">
                          <i className="bi bi-calendar-check me-2"></i>Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Darshan Tab */}
          {activeTab === 'darshan' && (
            <div className="tab-content">
              <div className="row mb-4">
                <div className="col-lg-12">
                  <div className="text-center mb-5">
                    <h2 className="section-title">Darshan Services</h2>
                    <p className="text-muted">Various darshan options for devotees</p>
                  </div>
                </div>
              </div>
              
              <div className="row g-4">
                {services.darshan.map((darshan, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="card ttd-card h-100">
                      <div className="card-header bg-success text-white">
                        <h5 className="mb-0">{darshan.name}</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">{darshan.description}</p>
                        <ul className="list-unstyled">
                          <li><strong>Timing:</strong> {darshan.timing}</li>
                          <li><strong>Price:</strong> {darshan.price}</li>
                          {darshan.notes && <li><strong>Notes:</strong> {darshan.notes}</li>}
                        </ul>
                        <button className="btn btn-ttd btn-sm">
                          <i className="bi bi-person-check me-2"></i>Book Darshan
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Accommodation Tab */}
          {activeTab === 'accommodation' && (
            <div className="tab-content">
              <div className="row mb-4">
                <div className="col-lg-12">
                  <div className="text-center mb-5">
                    <h2 className="section-title">Accommodation Services</h2>
                    <p className="text-muted">Comfortable staying facilities for pilgrims</p>
                  </div>
                </div>
              </div>
              
              <div className="row g-4">
                {services.accommodation.map((accommodation, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="card ttd-card h-100">
                      <div className="card-header bg-info text-white">
                        <h5 className="mb-0">{accommodation.name}</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">{accommodation.description}</p>
                        <ul className="list-unstyled">
                          <li><strong>Price:</strong> {accommodation.price}</li>
                          <li><strong>Capacity:</strong> {accommodation.capacity}</li>
                          <li><strong>Features:</strong> {accommodation.features}</li>
                        </ul>
                        <button className="btn btn-ttd btn-sm">
                          <i className="bi bi-house-add me-2"></i>Book Room
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Donations Tab */}
          {activeTab === 'donations' && (
            <div className="tab-content">
              <div className="row mb-4">
                <div className="col-lg-12">
                  <div className="text-center mb-5">
                    <h2 className="section-title">Donation Services</h2>
                    <p className="text-muted">Contribute to noble causes and receive divine blessings</p>
                  </div>
                </div>
              </div>
              
              <div className="row g-4">
                {services.donations.map((donation, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="card ttd-card h-100">
                      <div className="card-header bg-warning text-dark">
                        <h5 className="mb-0">{donation.name}</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">{donation.description}</p>
                        <ul className="list-unstyled">
                          <li><strong>Minimum Donation:</strong> {donation.minimum}</li>
                          <li><strong>Benefits:</strong> {donation.benefits}</li>
                        </ul>
                        <button className="btn btn-ttd btn-sm">
                          <i className="bi bi-heart me-2"></i>Donate Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">Booking Information</h2>
                <p className="text-muted">How to book our services</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="text-center">
                <i className="bi bi-laptop fs-1 text-primary mb-3"></i>
                <h5>Online Booking</h5>
                <p>Book services through our official website with secure payment options</p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="text-center">
                <i className="bi bi-telephone fs-1 text-success mb-3"></i>
                <h5>Phone Booking</h5>
                <p>Call our helpline numbers for assistance with bookings</p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="text-center">
                <i className="bi bi-building fs-1 text-info mb-3"></i>
                <h5>Counter Booking</h5>
                <p>Visit our booking counters at temple premises for direct booking</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;