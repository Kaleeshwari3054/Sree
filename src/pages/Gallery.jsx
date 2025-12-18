import React, { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  // const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(null);


  const categories = [
    { id: 'all', name: 'All Photos', icon: 'bi-grid' },
    { id: 'temple', name: 'Temple', icon: 'bi-building' },
    { id: 'festivals', name: 'Festivals', icon: 'bi-stars' },
    { id: 'rituals', name: 'Rituals', icon: 'bi-droplet' },
    { id: 'architecture', name: 'Architecture', icon: 'bi-image' }
  ];

  const galleryImages = [
    { id: 1, category: 'temple', title: 'Main Temple View', description: 'Beautiful view of the main temple structure' },
    { id: 2, category: 'festivals', title: 'Brahmotsavam', description: 'Grand Brahmotsavam celebration' },
    { id: 3, category: 'rituals', title: 'Morning Abhishekam', description: 'Sacred morning abhishekam ceremony' },
    { id: 4, category: 'architecture', title: 'Temple Gopuram', description: 'Magnificent temple gopuram architecture' },
    { id: 5, category: 'temple', title: 'Sanctum Sanctorum', description: 'Garbha Griha of the temple' },
    { id: 6, category: 'festivals', title: 'Vaikunta Ekadasi', description: 'Vaikunta Ekadasi celebrations' },
    { id: 7, category: 'rituals', title: 'Deepalankarana', description: 'Lighting of thousand lamps' },
    { id: 8, category: 'architecture', title: 'Temple Pillars', description: 'Intricate stone carvings on pillars' },
    { id: 9, category: 'temple', title: 'Temple Complex', description: 'Aerial view of temple complex' },
    { id: 10, category: 'festivals', title: 'Rath Yatra', description: 'Grand chariot procession' },
    { id: 11, category: 'rituals', title: 'Kalyanotsavam', description: 'Celestial wedding ceremony' },
    { id: 12, category: 'architecture', title: 'Temple Entrance', description: 'Majestic temple entrance arch' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (imageId) => {
    setSelectedImage(imageId);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content">
                <h1 className="hero-title">Gallery</h1>
                <p className="hero-subtitle">Visual Journey of Divine Experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-center flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`btn ${selectedCategory === category.id ? 'btn-ttd' : 'btn-outline-ttd'} m-2`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <i className={`bi ${category.icon} me-2`}></i>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">
                  {selectedCategory === 'all' ? 'All Photos' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-muted">
                  {filteredImages.length} photos available
                </p>
              </div>
            </div>
          </div>
          
          <div className="row g-4">
            {filteredImages.map((image) => (
              <div className="col-lg-4 col-md-6" key={image.id}>
                <div className="gallery-item" onClick={() => openModal(image.id)}>
                  <img 
                    src={`https://picsum.photos/seed/ttd-${image.id}/400/300.jpg`}
                    alt={image.title}
                    className="img-fluid"
                  />
                  <div className="gallery-overlay">
                    <div className="text-center">
                      <i className="bi bi-zoom-in fs-1"></i>
                      <h5 className="mt-2">{image.title}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">Video Gallery</h2>
                <p className="text-muted">Watch divine ceremonies and celebrations</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="video-card">
                <div className="ratio ratio-16x9">
                  <div className="video-placeholder bg-dark d-flex align-items-center justify-content-center">
                    <i className="bi bi-play-circle fs-1 text-white"></i>
                  </div>
                </div>
                <div className="card-body">
                  <h6>Brahmotsavam 2024</h6>
                  <p className="small text-muted">Grand celebration highlights</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="video-card">
                <div className="ratio ratio-16x9">
                  <div className="video-placeholder bg-dark d-flex align-items-center justify-content-center">
                    <i className="bi bi-play-circle fs-1 text-white"></i>
                  </div>
                </div>
                <div className="card-body">
                  <h6>Temple Virtual Tour</h6>
                  <p className="small text-muted">Complete temple walkthrough</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="video-card">
                <div className="ratio ratio-16x9">
                  <div className="video-placeholder bg-dark d-flex align-items-center justify-content-center">
                    <i className="bi bi-play-circle fs-1 text-white"></i>
                  </div>
                </div>
                <div className="card-body">
                  <h6>Daily Rituals</h6>
                  <p className="small text-muted">Sacred temple ceremonies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 360° View Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">360° Temple View</h2>
                <p className="text-muted">Experience the temple in virtual reality</p>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card ttd-card">
                <div className="card-body text-center">
                  <div className="ratio ratio-16x9 bg-light">
                    <div className="d-flex align-items-center justify-content-center">
                      <div>
                        <i className="bi bi-badge-3d fs-1 text-primary mb-3"></i>
                        <h5>360° Virtual Tour</h5>
                        <p className="text-muted">Click here to explore the temple in 360°</p>
                        <button className="btn btn-ttd">
                          <i className="bi bi-headset-vr me-2"></i>Start Tour
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && selectedImageData && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} onClick={closeModal}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-dark border-0">
              <div className="modal-body p-0">
                <button 
                  type="button" 
                  className="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-index-1" 
                  onClick={closeModal}
                ></button>
                <img 
                  src={`https://picsum.photos/seed/ttd-${selectedImageData.id}/800/600.jpg`}
                  alt={selectedImageData.title}
                  className="img-fluid"
                />
              </div>
              <div className="modal-footer bg-dark border-0">
                <h5 className="text-white me-auto">{selectedImageData.title}</h5>
                <p className="text-white-50 mb-0">{selectedImageData.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Download Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">Download Resources</h2>
                <p className="text-muted">Get temple wallpapers and brochures</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="download-card text-center">
                <i className="bi bi-image fs-1 text-primary mb-3"></i>
                <h6>Wallpapers</h6>
                <p className="small text-muted">HD temple wallpapers</p>
                <button className="btn btn-ttd btn-sm">
                  <i className="bi bi-download me-2"></i>Download
                </button>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="download-card text-center">
                <i className="bi bi-file-earmark-pdf fs-1 text-danger mb-3"></i>
                <h6>Brochures</h6>
                <p className="small text-muted">Temple information brochures</p>
                <button className="btn btn-ttd btn-sm">
                  <i className="bi bi-download me-2"></i>Download
                </button>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="download-card text-center">
                <i className="bi bi-calendar fs-1 text-success mb-3"></i>
                <h6>Festival Calendar</h6>
                <p className="small text-muted">Annual festival schedule</p>
                <button className="btn btn-ttd btn-sm">
                  <i className="bi bi-download me-2"></i>Download
                </button>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="download-card text-center">
                <i className="bi bi-book fs-1 text-info mb-3"></i>
                <h6>Temple Guide</h6>
                <p className="small text-muted">Complete visitor guide</p>
                <button className="btn btn-ttd btn-sm">
                  <i className="bi bi-download me-2"></i>Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;