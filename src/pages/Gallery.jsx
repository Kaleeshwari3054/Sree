// import React, { useState } from 'react';
// import img1 from '../assets/gallery/temple1.jpeg';
// import img2 from '../assets/gallery/festival1.jpeg';
// import img3 from '../assets/gallery/ritual1.jpeg';
// import img4 from '../assets/gallery/architecture1.jpeg';
// import img5 from '../assets/gallery/temple2.jpeg';
// import img6 from '../assets/gallery/festival2.jpeg';
// import img7 from '../assets/gallery/ritual2.jpeg';
// import img8 from '../assets/gallery/architecture2.jpeg';
// import img9 from '../assets/gallery/temple3.jpeg';
// import img10 from '../assets/gallery/festival3.jpeg';
// import img11 from '../assets/gallery/ritual3.jpeg';
// import img12 from '../assets/gallery/architecture3.jpeg';
// const Gallery = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   // const [selectedImage, setSelectedImage] = useState<number | null>(null);
//   const [selectedImage, setSelectedImage] = useState(null);


//   // const categories = [
//   //   { id: 'all', name: 'All Photos', icon: 'bi-grid' },
//   //   { id: 'temple', name: 'Temple', icon: 'bi-building' },
//   //   { id: 'festivals', name: 'Festivals', icon: 'bi-stars' },
//   //   { id: 'rituals', name: 'Rituals', icon: 'bi-droplet' },
//   //   { id: 'architecture', name: 'Architecture', icon: 'bi-image' }
//   // ];

//   // const galleryImages = [
//   //   { id: 1, category: 'temple', title: 'Main Temple View', description: 'Beautiful view of the main temple structure' },
//   //   { id: 2, category: 'festivals', title: 'Brahmotsavam', description: 'Grand Brahmotsavam celebration' },
//   //   { id: 3, category: 'rituals', title: 'Morning Abhishekam', description: 'Sacred morning abhishekam ceremony' },
//   //   { id: 4, category: 'architecture', title: 'Temple Gopuram', description: 'Magnificent temple gopuram architecture' },
//   //   { id: 5, category: 'temple', title: 'Sanctum Sanctorum', description: 'Garbha Griha of the temple' },
//   //   { id: 6, category: 'festivals', title: 'Vaikunta Ekadasi', description: 'Vaikunta Ekadasi celebrations' },
//   //   { id: 7, category: 'rituals', title: 'Deepalankarana', description: 'Lighting of thousand lamps' },
//   //   { id: 8, category: 'architecture', title: 'Temple Pillars', description: 'Intricate stone carvings on pillars' },
//   //   { id: 9, category: 'temple', title: 'Temple Complex', description: 'Aerial view of temple complex' },
//   //   { id: 10, category: 'festivals', title: 'Rath Yatra', description: 'Grand chariot procession' },
//   //   { id: 11, category: 'rituals', title: 'Kalyanotsavam', description: 'Celestial wedding ceremony' },
//   //   { id: 12, category: 'architecture', title: 'Temple Entrance', description: 'Majestic temple entrance arch' }
//   // ];


//     const categories = [
//     { id: 'all', name: 'All Photos', icon: 'bi-grid' },
//     { id: 'temple', name: 'Temple', icon: 'bi-building' },
//     { id: 'festivals', name: 'Festivals', icon: 'bi-stars' },
//     { id: 'rituals', name: 'Rituals', icon: 'bi-droplet' },
//     { id: 'architecture', name: 'Architecture', icon: 'bi-image' }
//   ];

//   // ✅ YOUR REAL IMAGES - Replace filenames with your actual images
//   const galleryImages = [
//     { id: 1, category: 'temple', title: 'Main Temple View', description: 'Beautiful view of the main temple structure', src: img1 },
//     { id: 2, category: 'festivals', title: 'Brahmotsavam', description: 'Grand Brahmotsavam celebration', src: img2 },
//     { id: 3, category: 'rituals', title: 'Morning Abhishekam', description: 'Sacred morning abhishekam ceremony', src: img3 },
//     { id: 4, category: 'architecture', title: 'Temple Gopuram', description: 'Magnificent temple gopuram architecture', src: img4 },
//     { id: 5, category: 'temple', title: 'Sanctum Sanctorum', description: 'Garbha Griha of the temple', src: img5 },
//     { id: 6, category: 'festivals', title: 'Vaikunta Ekadasi', description: 'Vaikunta Ekadasi celebrations', src: img6 },
//     { id: 7, category: 'rituals', title: 'Deepalankarana', description: 'Lighting of thousand lamps', src: img7 },
//     { id: 8, category: 'architecture', title: 'Temple Pillars', description: 'Intricate stone carvings on pillars', src: img8 },
//     { id: 9, category: 'temple', title: 'Temple Complex', description: 'Aerial view of temple complex', src: img9 },
//     { id: 10, category: 'festivals', title: 'Rath Yatra', description: 'Grand chariot procession', src: img10 },
//     { id: 11, category: 'rituals', title: 'Kalyanotsavam', description: 'Celestial wedding ceremony', src: img11 },
//     { id: 12, category: 'architecture', title: 'Temple Entrance', description: 'Majestic temple entrance arch', src: img12 }
//   ]
//   const filteredImages = selectedCategory === 'all' 
//     ? galleryImages 
//     : galleryImages.filter(img => img.category === selectedCategory);

//   const openModal = (imageId) => {
//     setSelectedImage(imageId);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   const selectedImageData = galleryImages.find(img => img.id === selectedImage);

//   return (
//     <div className="gallery-page">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="hero-content">
//                 <h1 className="hero-title">Gallery</h1>
//                 <p className="hero-subtitle">Visual Journey of Divine Experiences</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Filter */}
//       <section className="py-4 bg-light">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="d-flex justify-content-center flex-wrap">
//                 {categories.map((category) => (
//                   <button
//                     key={category.id}
//                     className={`btn ${selectedCategory === category.id ? 'btn-ttd' : 'btn-outline-ttd'} m-2`}
//                     onClick={() => setSelectedCategory(category.id)}
//                   >
//                     <i className={`bi ${category.icon} me-2`}></i>
//                     {category.name}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Grid */}
//       <section className="py-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="text-center mb-5">
//                 <h2 className="section-title">
//                   {selectedCategory === 'all' ? 'All Photos' : categories.find(c => c.id === selectedCategory)?.name}
//                 </h2>
//                 <p className="text-muted">
//                   {filteredImages.length} photos available
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           <div className="row g-4">
//             {filteredImages.map((image) => (
//               <div className="col-lg-4 col-md-6" key={image.id}>
//                 <div className="gallery-item" onClick={() => openModal(image.id)}>
//                   <img 
//                     src={`https://picsum.photos/seed/ttd-${image.id}/400/300.jpg`}
//                     alt={image.title}
//                     className="img-fluid"
//                   />
//                   <div className="gallery-overlay">
//                     <div className="text-center">
//                       <i className="bi bi-zoom-in fs-1"></i>
//                       <h5 className="mt-2">{image.title}</h5>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Video Gallery Section */}
//       <section className="py-5 bg-light">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="text-center mb-5">
//                 <h2 className="section-title">Video Gallery</h2>
//                 <p className="text-muted">Watch divine ceremonies and celebrations</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="row g-4">
//             <div className="col-lg-4 col-md-6">
//               <div className="video-card">
//                 <div className="ratio ratio-16x9">
//                   <div className="video-placeholder bg-dark d-flex align-items-center justify-content-center">
//                     <i className="bi bi-play-circle fs-1 text-white"></i>
//                   </div>
//                 </div>
//                 <div className="card-body">
//                   <h6>Brahmotsavam 2024</h6>
//                   <p className="small text-muted">Grand celebration highlights</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="col-lg-4 col-md-6">
//               <div className="video-card">
//                 <div className="ratio ratio-16x9">
//                   <div className="video-placeholder bg-dark d-flex align-items-center justify-content-center">
//                     <i className="bi bi-play-circle fs-1 text-white"></i>
//                   </div>
//                 </div>
//                 <div className="card-body">
//                   <h6>Temple Virtual Tour</h6>
//                   <p className="small text-muted">Complete temple walkthrough</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="col-lg-4 col-md-6">
//               <div className="video-card">
//                 <div className="ratio ratio-16x9">
//                   <div className="video-placeholder bg-dark d-flex align-items-center justify-content-center">
//                     <i className="bi bi-play-circle fs-1 text-white"></i>
//                   </div>
//                 </div>
//                 <div className="card-body">
//                   <h6>Daily Rituals</h6>
//                   <p className="small text-muted">Sacred temple ceremonies</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 360° View Section */}
//       <section className="py-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="text-center mb-5">
//                 <h2 className="section-title">360° Temple View</h2>
//                 <p className="text-muted">Experience the temple in virtual reality</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="row">
//             <div className="col-lg-8 mx-auto">
//               <div className="card ttd-card">
//                 <div className="card-body text-center">
//                   <div className="ratio ratio-16x9 bg-light">
//                     <div className="d-flex align-items-center justify-content-center">
//                       <div>
//                         <i className="bi bi-badge-3d fs-1 text-primary mb-3"></i>
//                         <h5>360° Virtual Tour</h5>
//                         <p className="text-muted">Click here to explore the temple in 360°</p>
//                         <button className="btn btn-ttd">
//                           <i className="bi bi-headset-vr me-2"></i>Start Tour
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Image Modal */}
//       {selectedImage && selectedImageData && (
//         <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} onClick={closeModal}>
//           <div className="modal-dialog modal-lg modal-dialog-centered">
//             <div className="modal-content bg-dark border-0">
//               <div className="modal-body p-0">
//                 <button 
//                   type="button" 
//                   className="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-index-1" 
//                   onClick={closeModal}
//                 ></button>
//                 <img 
//                   src={`https://picsum.photos/seed/ttd-${selectedImageData.id}/800/600.jpg`}
//                   alt={selectedImageData.title}
//                   className="img-fluid"
//                 />
//               </div>
//               <div className="modal-footer bg-dark border-0">
//                 <h5 className="text-white me-auto">{selectedImageData.title}</h5>
//                 <p className="text-white-50 mb-0">{selectedImageData.description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Download Section */}
//       <section className="py-5 bg-light">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="text-center mb-5">
//                 <h2 className="section-title">Download Resources</h2>
//                 <p className="text-muted">Get temple wallpapers and brochures</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="row g-4">
//             <div className="col-lg-3 col-md-6">
//               <div className="download-card text-center">
//                 <i className="bi bi-image fs-1 text-primary mb-3"></i>
//                 <h6>Wallpapers</h6>
//                 <p className="small text-muted">HD temple wallpapers</p>
//                 <button className="btn btn-ttd btn-sm">
//                   <i className="bi bi-download me-2"></i>Download
//                 </button>
//               </div>
//             </div>
            
//             <div className="col-lg-3 col-md-6">
//               <div className="download-card text-center">
//                 <i className="bi bi-file-earmark-pdf fs-1 text-danger mb-3"></i>
//                 <h6>Brochures</h6>
//                 <p className="small text-muted">Temple information brochures</p>
//                 <button className="btn btn-ttd btn-sm">
//                   <i className="bi bi-download me-2"></i>Download
//                 </button>
//               </div>
//             </div>
            
//             <div className="col-lg-3 col-md-6">
//               <div className="download-card text-center">
//                 <i className="bi bi-calendar fs-1 text-success mb-3"></i>
//                 <h6>Festival Calendar</h6>
//                 <p className="small text-muted">Annual festival schedule</p>
//                 <button className="btn btn-ttd btn-sm">
//                   <i className="bi bi-download me-2"></i>Download
//                 </button>
//               </div>
//             </div>
            
//             <div className="col-lg-3 col-md-6">
//               <div className="download-card text-center">
//                 <i className="bi bi-book fs-1 text-info mb-3"></i>
//                 <h6>Temple Guide</h6>
//                 <p className="small text-muted">Complete visitor guide</p>
//                 <button className="btn btn-ttd btn-sm">
//                   <i className="bi bi-download me-2"></i>Download
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Gallery;







import React, { useState } from 'react';
import img1 from '../assets/gallery/temple1.jpeg';
import img2 from '../assets/gallery/festival1.jpeg';
import img3 from '../assets/gallery/ritual1.jpeg';
import img4 from '../assets/gallery/architecture1.jpeg';
import img5 from '../assets/gallery/temple2.jpeg';
import img6 from '../assets/gallery/festival2.jpeg';
import img7 from '../assets/gallery/ritual2.jpeg';
import img8 from '../assets/gallery/architecture4.jpeg';
import img9 from '../assets/gallery/temple3.jpeg';
import img10 from '../assets/gallery/festival3.jpeg';
import img11 from '../assets/gallery/ritual3.jpeg';
import img12 from '../assets/gallery/architecture3.jpeg';
import img13 from '../assets/gallery/temple4.jpeg';
import img14 from '../assets/gallery/ritual4.jpeg';
import img15 from '../assets/gallery/ritual5.jpeg';
import img16 from '../assets/gallery/temple4.jpeg';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Photos', icon: 'bi-grid' },
    { id: 'temple', name: 'Temple', icon: 'bi-building' },
    { id: 'festivals', name: 'Festivals', icon: 'bi-stars' },
    { id: 'rituals', name: 'Rituals', icon: 'bi-droplet' },
    { id: 'architecture', name: 'Architecture', icon: 'bi-image' }
  ];

  const galleryImages = [
    { id: 1, category: 'temple', title: 'Main Temple View', description: 'Beautiful view of the main temple structure', src: img1 },
    { id: 2, category: 'festivals', title: 'Brahmotsavam', description: 'Grand Brahmotsavam celebration', src: img2 },
    { id: 3, category: 'rituals', title: 'Morning Abhishekam', description: 'Sacred morning abhishekam ceremony', src: img3 },
    { id: 4, category: 'architecture', title: 'Temple Gopuram', description: 'Magnificent temple gopuram architecture', src: img4 },
    { id: 5, category: 'temple', title: 'Sanctum Sanctorum', description: 'Garbha Griha of the temple', src: img5 },
    { id: 6, category: 'festivals', title: 'Vaikunta Ekadasi', description: 'Vaikunta Ekadasi celebrations', src: img6 },
    { id: 7, category: 'rituals', title: 'Deepalankarana', description: 'Lighting of thousand lamps', src: img7 },
    { id: 8, category: 'architecture', title: 'Temple Pillars', description: 'Intricate stone carvings on pillars', src: img8 },
    { id: 9, category: 'temple', title: 'Temple Complex', description: 'Aerial view of temple complex', src: img9 },
    { id: 10, category: 'festivals', title: 'Rath Yatra', description: 'Grand chariot procession', src: img10 },
    { id: 11, category: 'rituals', title: 'Kalyanotsavam', description: 'Celestial wedding ceremony', src: img11 },
    { id: 12, category: 'architecture', title: 'Temple Entrance', description: 'Majestic temple entrance arch', src: img12 },
    { id: 13, category: 'temple', title: 'Temple Pond', description: 'Sacred temple pond at sunrise', src: img13 },
    { id: 14, category: 'festivals', title: 'Deepavali Celebrations', description: 'Festival of lights at temple', src: img14 },
    { id: 15, category: 'rituals', title: 'Evening Aarti', description: 'Majestic evening aarti ceremony', src: img15 },
    { id: 16, category: 'architecture', title: 'Carved Doorways', description: 'Intricate wooden carvings on temple doors', src: img16 }
];


  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (imageId) => {
    setSelectedImage(imageId);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
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
              <div className="d-flex justify-content-center flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`btn fw-medium px-4 py-2 ${selectedCategory === category.id ? 'btn-ttd shadow-sm' : 'btn-outline-ttd border-2'}`}
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

      {/* Gallery Grid - ✅ 250px x 250px SQUARE + FULL IMAGE VISIBLE */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title mb-3">
                  {selectedCategory === 'all' ? 'All Photos' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-muted lead fw-medium">
                  {filteredImages.length} photos available
                </p>
              </div>
            </div>
          </div>
          
          <div className="row g-4">
            {filteredImages.map((image) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={image.id}> {/* ✅ Smaller width */}
                <div 
                  className="gallery-item cursor-pointer overflow-hidden rounded-3 shadow-sm mx-auto"
                  style={{ 
                    width: '250px',    // ✅ 250px width
                    height: '250px'    // ✅ 250px height - PERFECT SQUARE
                  }}
                  onClick={() => openModal(image.id)}
                >
                  <div className="position-relative w-100 h-100 rounded-3">
                    <img 
                      src={image.src}
                      alt={image.title}
                      className="img-fluid w-100 h-100"
                      style={{ 
                        width: '100%',
                        height: '100%',
                        // objectFit: 'contain',     // ✅ FULL IMAGE VISIBLE - NO CROPPING!
                        objectPosition: 'center center',
                        backgroundColor: '#f8f9fa',  // ✅ Light background for letterbox
                        transition: 'transform 0.4s ease'
                      }}
                    />
                    <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center  hover-bg-opacity-85 transition-all">
                      <div className="text-center text-white p-3">
                        <i className="bi bi-zoom-in fs-3 mb-2 opacity-90"></i>
                        <h6 className="fw-bold mb-0 small">{image.title}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && selectedImageData && (
        <div 
          className="modal fade show d-block position-fixed top-0 start-0 w-100 h-100 p-3" 
          style={{ backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 1050 }} 
          onClick={closeModal}
        >
          <div className="modal-dialog modal-xl modal-dialog-centered modal-fullscreen-sm-down">
            <div className="modal-content bg-transparent border-0">
              <div className="position-relative">
                <button 
                  type="button" 
                  className="btn-close btn-close-white position-absolute top-0 end-0 m-4 z-3 shadow-lg" 
                  style={{ zIndex: 1060 }}
                  onClick={closeModal}
                />
                <img 
                  src={selectedImageData.src}
                  alt={selectedImageData.title}
                  className="img-fluid rounded-3 shadow-lg cursor-pointer"
                  style={{ 
                    maxHeight: '90vh',
                    width: '100%',
                    maxWidth: '95vw',
                    margin: '0 auto',
                    display: 'block',
                    objectFit: 'contain',    // ✅ Full image in modal too
                    objectPosition: 'center',
                    cursor: 'zoom-in'
                  }}
                />
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 px-4 py-3 bg-dark bg-opacity-90 rounded-top-4 text-center shadow-lg">
                  <h4 className="text-white mb-2 fw-bold">{selectedImageData.title}</h4>
                  <p className="text-white-50 mb-0">{selectedImageData.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Keep other sections same */}
    </div>
  );
};

export default Gallery;
