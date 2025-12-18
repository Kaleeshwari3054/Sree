import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = {
    address: 'Sri Venkateswara Swamy Temple, Thiruvannamalai, Tamil Nadu 606601',
    phone: '+91-XXXX-XXXXXX',
    email: 'info@ttd-thiruvannamalai.org',
    website: 'www.ttd-thiruvannamalai.org',
    emergency: '+91-XXXX-XXXXXX'
  };

  const officeTimings = [
    { day: 'Monday - Saturday', time: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', time: '9:00 AM - 1:00 PM' },
    { day: 'Temple Office', time: '24/7' },
    { day: 'Emergency Helpline', time: '24/7' }
  ];

  const departments = [
    { name: 'Executive Officer', email: 'eo@ttd-thiruvannamalai.org', phone: '+91-XXXX-XXXXXX' },
    { name: 'Joint Executive Officer', email: 'jeo@ttd-thiruvannamalai.org', phone: '+91-XXXX-XXXXXX' },
    { name: 'Finance Department', email: 'finance@ttd-thiruvannamalai.org', phone: '+91-XXXX-XXXXXX' },
    { name: 'Public Relations', email: 'pr@ttd-thiruvannamalai.org', phone: '+91-XXXX-XXXXXX' },
    { name: 'Pilgrim Amenities', email: 'amenities@ttd-thiruvannamalai.org', phone: '+91-XXXX-XXXXXX' },
    { name: 'Donation Services', email: 'donations@ttd-thiruvannamalai.org', phone: '+91-XXXX-XXXXXX' }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content">
                <h1 className="hero-title">Contact Us</h1>
                <p className="hero-subtitle">Get in touch with Tirumala Tirupati Devasthanams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">Get in Touch</h2>
                <p className="text-muted">We're here to help and answer any questions you might have</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="contact-info-card text-center">
                <i className="bi bi-geo-alt fs-1 text-primary mb-3"></i>
                <h5>Address</h5>
                <p className="text-muted">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="contact-info-card text-center">
                <i className="bi bi-telephone fs-1 text-success mb-3"></i>
                <h5>Phone</h5>
                <p className="text-muted">
                  Office: {contactInfo.phone}<br />
                  Emergency: {contactInfo.emergency}
                </p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="contact-info-card text-center">
                <i className="bi bi-envelope fs-1 text-info mb-3"></i>
                <h5>Email</h5>
                <p className="text-muted">
                  General: {contactInfo.email}<br />
                  Website: {contactInfo.website}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form-card">
                <h4 className="mb-4">Send us a Message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Your Name *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <select 
                        className="form-select" 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="booking">Booking Related</option>
                        <option value="donation">Donation</option>
                        <option value="complaint">Complaint</option>
                        <option value="suggestion">Suggestion</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-ttd">
                    <i className="bi bi-send me-2"></i>Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="map-card">
                <h4 className="mb-4">Location</h4>
                <div className="ratio ratio-16x9">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.789678048714!2d79.07473671479043!3d12.228273791395295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacedf8b5f3b4b1%3A0x8b5b5b5b5b5b5b5b!2sThiruvannamalai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="TTD Location Map"
                  ></iframe>
                </div>
                
                <div className="mt-4">
                  <h5>Office Timings</h5>
                  <ul className="list-unstyled">
                    {officeTimings.map((timing, index) => (
                      <li key={index} className="mb-2">
                        <strong>{timing.day}:</strong> {timing.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">Department Contacts</h2>
                <p className="text-muted">Reach out to specific departments for dedicated assistance</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4">
            {departments.map((dept, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card ttd-card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{dept.name}</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="bi bi-envelope me-2 text-primary"></i>
                        <a href={`mailto:${dept.email}`} className="text-decoration-none">
                          {dept.email}
                        </a>
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-telephone me-2 text-success"></i>
                        <a href={`tel:${dept.phone}`} className="text-decoration-none">
                          {dept.phone}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <p className="text-muted">Quick answers to common questions</p>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      How can I book darshan tickets online?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      You can book darshan tickets through our official website by creating an account, selecting your preferred date and time, and making secure online payment.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      What are the temple timings?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      The temple is open from early morning (around 2:30 AM) until late night (around 1:00 AM). General darshan is available from 8:00 AM to 7:00 PM.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      How do I book accommodation?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Accommodation can be booked online through our website or by calling our booking helpline. You can also visit our booking counters at the temple premises.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      Is photography allowed inside the temple?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Photography is not allowed inside the main sanctum and certain restricted areas. However, you can take photos in permitted areas of the temple complex.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">Follow Us</h2>
                <p className="text-muted">Stay connected through social media</p>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-12">
              <div className="social-links justify-content-center d-flex gap-4">
                <a href="#" className="social-link">
                  <div className="social-icon facebook">
                    <i className="bi bi-facebook fs-2"></i>
                  </div>
                  <span>Facebook</span>
                </a>
                
                <a href="#" className="social-link">
                  <div className="social-icon twitter">
                    <i className="bi bi-twitter fs-2"></i>
                  </div>
                  <span>Twitter</span>
                </a>
                
                <a href="#" className="social-link">
                  <div className="social-icon instagram">
                    <i className="bi bi-instagram fs-2"></i>
                  </div>
                  <span>Instagram</span>
                </a>
                
                <a href="#" className="social-link">
                  <div className="social-icon youtube">
                    <i className="bi bi-youtube fs-2"></i>
                  </div>
                  <span>YouTube</span>
                </a>
                
                <a href="#" className="social-link">
                  <div className="social-icon whatsapp">
                    <i className="bi bi-whatsapp fs-2"></i>
                  </div>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;