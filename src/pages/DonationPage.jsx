// import { useState } from 'react';

// const DonationPage = () => {
//   const [amount, setAmount] = useState('');
//   const [donorName, setDonorName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleDonate = (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const options = {
//       key: 'rzp_test_xxxxx',
//       amount: parseInt(amount || '0', 10) * 100,
//       currency: 'INR',
//       name: 'ஸ்ரீ வல்லி சித்தர் பீடம்',
//       description: `அருள் மான்மார்கள் ${donorName} அவர்களின் செல்வந்தம்`,
//       handler: function () {
//         alert(
//           'உங்கள் அருள் செல்வத்திற்கு மனமார்ந்த நன்றி 🙏\nஇறைவன் அருள் பொழிந்து வாழ்க!'
//         );
//         setIsLoading(false);
//       },
//       prefill: {
//         name: donorName,
//         contact: phone,
//       },
//       theme: {
//         color: '#dc3545',
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <div
//       className="min-vh-100 d-flex flex-column"
//       style={{
//         background:
//           'radial-gradient(circle at top, #ffecd2 0%, #fcb69f 25%, #ff9a76 60%, #f3722c 100%)',
//       }}
//     >
//       {/* Hero Section - Medium */}
//       <section className="py-5 py-md-4">
//         <div className="container">
//           <div className="row align-items-center g-4">
//             <div className="col-lg-7">
//               <div className="bg-dark bg-opacity-75 text-white rounded-4 p-4 p-md-5 shadow-lg">
//                 <h1 className="h3 h2-md fw-bold mb-3 d-flex align-items-center gap-2">
//                   <span
//                     className="d-inline-flex align-items-center justify-content-center rounded-circle bg-danger bg-opacity-25 p-2"
//                     style={{ width: 48, height: 48 }}
//                   >
//                     <i className="bi bi-heart-pulse-fill text-danger fs-4"></i>
//                   </span>
//                   ஸ்ரீ வல்லி சித்தர் பீடம்
//                 </h1>
//                 <p className="lead fs-6 fs-md-5 mb-3">
//                   உங்கள் அருள் செல்வத்தால் இறைவனின் அருள் பெறுவோம் 🙏
//                 </p>
//                 <p className="small mb-0 text-white-50">
//                   ஒவ்வொரு ரூபாயும் அன்னை வல்லியின் அருட்கொடையாக மாற்றப்பட்டு,
//                   தேவையானவர்களுக்கு சேவை செய்ய பயன்படும்.
//                 </p>
//               </div>
//             </div>

//             <div className="col-lg-5">
//               <div className="bg-white rounded-4 shadow-lg p-3 p-md-4">
//                 <h2 className="h5 fw-bold mb-3 text-center text-primary">
//                   விரைவான செல்வ அளவு
//                 </h2>
//                 <div className="d-flex flex-wrap gap-2 justify-content-center">
//                   {['101', '501', '1001', '5001'].map((val, idx) => {
//                     const labels = {
//                       0: '₹101',
//                       1: '₹501',
//                       2: '₹1,001',
//                       3: '₹5,001',
//                     };
//                     const colors = ['danger', 'warning', 'success', 'primary'];
//                     const icons = ['heart-fill', 'gem', 'star-fill', 'crown'];
//                     return (
//                       <button
//                         key={val}
//                         type="button"
//                         className={`btn btn-outline-${colors[idx]} px-3 py-2 rounded-3 fw-semibold`}
//                         onClick={() => setAmount(val)}
//                       >
//                         <i className={`bi bi-${icons[idx]} me-1`}></i>
//                         {labels[idx]}
//                       </button>
//                     );
//                   })}
//                 </div>
//                 <p className="text-center small text-muted mt-2 mb-0">
//                   கீழே உள்ள படிவத்தில் உங்கள் விவரங்களை பூர்த்தி செய்து
//                   செல்வம் அளிக்கவும்.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section - Medium */}
//       <section className="py-4 bg-white">
//         <div className="container">
//           <div className="row g-3 g-md-4 text-center">
//             <div className="col-6 col-md-3">
//               <div className="card border-0 shadow-sm h-100 rounded-4">
//                 <div className="card-body py-3">
//                   <div className="fs-4 fw-bold text-primary mb-1">₹12.5L</div>
//                   <div className="small fw-semibold text-success">
//                     சேகரிக்கப்பட்ட செல்வம்
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-6 col-md-3">
//               <div className="card border-0 shadow-sm h-100 rounded-4">
//                 <div className="card-body py-3">
//                   <div className="fs-4 fw-bold text-info mb-1">3,247</div>
//                   <div className="small fw-semibold text-success">
//                     அருள் மான்மார்கள்
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-6 col-md-3">
//               <div className="card border-0 shadow-sm h-100 rounded-4">
//                 <div className="card-body py-3">
//                   <div className="fs-4 fw-bold text-warning mb-1">92%</div>
//                   <div className="small fw-semibold text-success">
//                     நோக்கு அடைந்தது
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-6 col-md-3">
//               <div className="card border-0 shadow-sm h-100 rounded-4">
//                 <div className="card-body py-3">
//                   <div className="fs-5 fw-bold text-danger mb-1">
//                     15 நாட்கள்
//                   </div>
//                   <div className="small fw-semibold text-success">
//                     மீதமுள்ளது
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Progress Section - Medium */}
//       <section className="py-4 bg-light">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8">
//               <div className="card border-0 shadow-sm rounded-4">
//                 <div className="card-body p-3 p-md-4">
//                   <h3 className="h5 fw-bold mb-3 text-primary text-center">
//                     நமது புனித பணி முன்னேற்றம்
//                   </h3>
//                   <div
//                     className="progress mb-3"
//                     style={{ height: '18px', backgroundColor: '#f3f4f6' }}
//                   >
//                     <div
//                       className="progress-bar bg-success progress-bar-striped progress-bar-animated"
//                       role="progressbar"
//                       style={{ width: '92%' }}
//                     ></div>
//                   </div>
//                   <div className="d-flex justify-content-between small fw-semibold text-muted">
//                     <span>₹0</span>
//                     <span className="text-primary">₹12.5L / ₹15L</span>
//                     <span>₹15L</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Donation Form - Medium */}
//       <section className="py-5 flex-grow-1">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-6">
//               <div className="card shadow-lg border-0 rounded-4">
//                 <div className="card-header bg-danger bg-gradient text-white py-3 text-center">
//                   <h3 className="h5 fw-bold mb-1">
//                     <i className="bi bi-pray-fill text-warning me-2"></i>
//                     அருள் செல்வம் அளிக்க
//                   </h3>
//                   <p className="small mb-0 text-white-75">
//                     உங்கள் பெயரால் இறைவன் அருள் பெறுவோம் 🙏
//                   </p>
//                 </div>
//                 <div className="card-body p-4">
//                   <form onSubmit={handleDonate}>
//                     <div className="mb-3">
//                       <label className="form-label fw-semibold small text-dark">
//                         உங்கள் பெயர் <span className="text-danger">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control form-control-sm rounded-3 border-2"
//                         placeholder="முழு பெயர்"
//                         value={donorName}
//                         onChange={(e) => setDonorName(e.target.value)}
//                         required
//                       />
//                     </div>

//                     <div className="mb-3">
//                       <label className="form-label fw-semibold small text-dark">
//                         தொடர்பு எண் <span className="text-danger">*</span>
//                       </label>
//                       <input
//                         type="tel"
//                         className="form-control form-control-sm rounded-3 border-2"
//                         placeholder="9999999999"
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                         required
//                       />
//                     </div>

//                     <div className="mb-3">
//                       <label className="form-label fw-semibold small text-dark">
//                         செல்வ அளவு (ரூ) <span className="text-danger">*</span>
//                       </label>
//                       <div className="row g-2 mb-2">
//                         <div className="col-6">
//                           <button
//                             type="button"
//                             className="btn btn-outline-danger w-100 py-2 rounded-3 fw-semibold"
//                             onClick={() => setAmount('101')}
//                           >
//                             <i className="bi bi-heart-fill me-1"></i>₹101
//                           </button>
//                         </div>
//                         <div className="col-6">
//                           <button
//                             type="button"
//                             className="btn btn-outline-warning w-100 py-2 rounded-3 fw-semibold"
//                             onClick={() => setAmount('501')}
//                           >
//                             <i className="bi bi-gem me-1"></i>₹501
//                           </button>
//                         </div>
//                         <div className="col-6">
//                           <button
//                             type="button"
//                             className="btn btn-outline-success w-100 py-2 rounded-3 fw-semibold"
//                             onClick={() => setAmount('1001')}
//                           >
//                             <i className="bi bi-star-fill me-1"></i>₹1,001
//                           </button>
//                         </div>
//                         <div className="col-6">
//                           <button
//                             type="button"
//                             className="btn btn-outline-primary w-100 py-2 rounded-3 fw-semibold"
//                             onClick={() => setAmount('5001')}
//                           >
//                             <i className="bi bi-crown me-1"></i>₹5,001
//                           </button>
//                         </div>
//                       </div>
//                       <input
//                         type="number"
//                         className="form-control form-control-sm rounded-3 border-2 text-center"
//                         placeholder="விருப்ப செல்வ அளவு"
//                         value={amount}
//                         onChange={(e) => setAmount(e.target.value)}
//                         min="10"
//                         required
//                       />
//                       <small className="text-muted d-block mt-1">
//                         குறைந்தபட்சம் ₹10 அளிக்கலாம். உங்கள் வசதிக்கு ஏற்ப
//                         தொகையை மாற்றிக் கொள்ளலாம்.
//                       </small>
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={isLoading || !amount}
//                       className="w-100 btn btn-danger py-2 fw-bold rounded-3 shadow"
//                       style={{
//                         background:
//                           'linear-gradient(45deg, #dc3545, #ff6b35)',
//                       }}
//                     >
//                       {isLoading ? (
//                         <>
//                           <span className="spinner-border spinner-border-sm me-2"></span>
//                           ரேஸர்பே செய்து கொண்டிருக்கிறோம்...
//                         </>
//                       ) : (
//                         <>
//                           <i className="bi bi-pray-fill me-2"></i>
//                           இப்போது அருள் செல்வம் அளிக்க – ₹
//                           {amount || '0'}
//                         </>
//                       )}
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <section className="py-3 bg-dark text-white text-center mt-auto">
//         <div className="container">
//           <h6 className="fw-semibold mb-1">
//             <i className="bi bi-check-circle-fill text-success me-2"></i>
//             உங்கள் செல்வம் இறைவனின் அருளை பெறுவதற்கு உதவும் 🙏
//           </h6>
//           <p className="opacity-75 mb-0 small">
//             ஸ்ரீ வல்லி சித்தர் பீடம் - அருள் மிகு இடம்
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DonationPage;



import React, { useState } from 'react';
import '../styles/Donation.css';
const Donation = () => {
  const [selectedDonation, setSelectedDonation] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    panNumber: '',
    address: '',
    donationType: 'general'
  });

  const donationSchemes = [
    {
      id: 'srivani',
      name: 'ஸ்ரீவாணி அறக்கட்டளை',
      nameEn: 'Srivani Trust',
      description: 'கோயில் மேம்பாட்டுப் பணிகளுக்கான நன்கொடைகள்',
      descriptionEn: 'Donations for temple development works',
      minAmount: '₹1,000',
      benefits: 'ஸ்பெஷல் தர்ஷன் வசதி, பிரசாதம்',
      image: 'srivani'
    },
    {
      id: 'annaprasadam',
      name: 'ஸ்ரீ வெங்கடேஸ்வரா அன்னப்பிரசாத அறக்கட்டளை',
      nameEn: 'SV Annaprasadam Trust',
      description: 'பக்தர்களுக்கு இலவச அன்னதான திட்டம்',
      descriptionEn: 'Free food distribution to devotees',
      minAmount: '₹500',
      benefits: 'ஆசிர்வாதங்கள், அன்னதான பங்களிப்பு சான்றிதழ்',
      image: 'annaprasadam'
    },
    {
      id: 'pranadana',
      name: 'ஸ்ரீ வெங்கடேஸ்வரா பிரணதான அறக்கட்டளை',
      nameEn: 'SV Pranadana Trust',
      description: 'ஏழைகளுக்கு மருத்துவ உதவி',
      descriptionEn: 'Medical assistance for the poor',
      minAmount: '₹1,000',
      benefits: 'உதயஸ்தமான சேவை (பெரிய நன்கொடைகளுக்கு)',
      image: 'medical'
    },
    {
      id: 'vidyadana',
      name: 'ஸ்ரீ வெங்கடேஸ்வரா வித்யாதான அறக்கட்டளை',
      nameEn: 'SV Vidyadana Trust',
      description: 'ஏழை மாணவர்களுக்கு கல்வி உதவி',
      descriptionEn: 'Educational support for poor students',
      minAmount: '₹500',
      benefits: '80G வரிச் சலுகை, சான்றிதழ்',
      image: 'education'
    },
    {
      id: 'gosamrakshana',
      name: 'கோசம்ரக்ஷணா சாலை',
      nameEn: 'Gosamrakshana',
      description: 'பசுக்கள் பாதுகாப்பு மற்றும் பராமரிப்பு',
      descriptionEn: 'Cow protection and care',
      minAmount: '₹100',
      benefits: 'ஆன்மீக பலன்கள், ஆசிர்வாதங்கள்',
      image: 'cow'
    },
    {
      id: 'dharmaprachara',
      name: 'ஹிந்து தர்ம பிரசார பரிஷத்',
      nameEn: 'Hindu Dharma Prachara Parishad',
      description: 'இந்து மதச் சேவைகள் மற்றும் பிரசாரம்',
      descriptionEn: 'Hindu religious services and propagation',
      minAmount: '₹1,000',
      benefits: 'ஆன்மீக பலன்கள், தர்ம சேவை சான்றிதழ்',
      image: 'dharmam'
    }
  ];

  const emergencyServices = [
    {
      name: '102 ஆம்புலன்ஸ் சேவை',
      nameEn: '102 Ambulance Service',
      description: 'அவசர மருத்துவ உதவிக்கு 24/7 ஆம்புலன்ஸ் சேவை',
      descriptionEn: '24/7 ambulance service for emergency medical assistance',
      phone: '102',
    icon: 'bi-truck'
    },
    {
      name: 'தாய்க்குலைப்ரிள்ஸ் சேவை',
      nameEn: 'Mothers and Babies Care',
      description: 'தாய்மையின் பாதுகாப்பு மற்றும் குழந்தை பராமரிப்பு சேவைகள்',
      descriptionEn: 'Maternal safety and child care services',
      phone: '1800-123-4567',
      icon: 'bi-people'
    },
    {
      name: 'உடல் ஊனமுற்றோர் உதவி',
      nameEn: 'Differently Abled Assistance',
      description: 'உடல் ஊனமுற்றோருக்கு சிறப்பு உதவி மற்றும் வசதிகள்',
      descriptionEn: 'Special assistance and facilities for differently abled',
      phone: '1800-234-5678',
      icon: 'bi-universal-access'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('பக்தர் நன்கொடை செலுத்தியமைக்கு மிகவும் நன்றி! ஸ்ரீவெங்கடேஸ்வரா அருள் பெருகட்டும்!');
  };

  return (
    <div className="donation-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content">
                <h1 className="hero-title">நன்கொடைகள் / Donations</h1>
                <p className="hero-subtitle">இறைவனின் அருளைப் பெறுவதற்கு நன்கொடை தந்து ஆன்மீக பலன்களை அனுபவிக்கவும்</p>
                <p className="hero-subtitle-en">Donate to receive divine blessings and experience spiritual benefits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Schemes */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">நன்கொடைத் திட்டங்கள் / Donation Schemes</h2>
                <p className="text-muted">பல்வேறு ஆன்மீக மற்றும் சமூக நலன்களுக்கான நன்கொடை வாய்ப்புகள்</p>
                <p className="text-muted-en">Donation opportunities for various spiritual and social welfare activities</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4">
            {donationSchemes.map((scheme) => (
              <div className="col-lg-4 col-md-6" key={scheme.id}>
                <div className="donation-scheme-card h-100">
                  <div className="card-header text-white" style={{ backgroundColor: 'var(--ttd-primary)' }}>
                    <h5 className="card-title mb-0">
                      <div>{scheme.name}</div>
                      <small className="opacity-75">{scheme.nameEn}</small>
                    </h5>
                  </div>
                  <div className="card-body">
                    {/* <div className="scheme-icon mb-3">
                      <i className={`bi bi-heart-fill fs-1 text-danger`}></i>
                    </div> */}
                    <p className="card-text">
                      <strong className="tamil-text">{scheme.description}</strong><br/>
                      <small className="text-muted">{scheme.descriptionEn}</small>
                    </p>
                    <div className="scheme-details">
                      <p className="mb-2">
                        <strong>குறைந்த பட்ச நன்கொடை:</strong> {scheme.minAmount}
                      </p>
                      <p className="mb-2">
                        <strong>நன்மைகள்:</strong> {scheme.benefits}
                      </p>
                    </div>
                    <button 
                      className="btn btn-ttd w-100"
                      onClick={() => setSelectedDonation(scheme.id)}
                    >
                      <i className="bi bi-gift me-2"></i>
                      நன்கொடை / Donate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Donation Form */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="donation-form-card">
                <h3 className="text-center mb-4">ஆன்லைன் நன்கொடை படிவம் / Online Donation Form</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="donationType" className="form-label">
                        நன்கொடை வகை / Donation Type *
                      </label>
                      <select 
                        className="form-select" 
                        id="donationType" 
                        name="donationType"
                        value={formData.donationType}
                        onChange={handleChange}
                        required
                      >
                        <option value="general">பொது / General</option>
                        <option value="srivani">ஸ்ரீவாணி அறக்கட்டளை / Srivani Trust</option>
                        <option value="annaprasadam">அன்னப்பிரசாத அறக்கட்டளை / Annaprasadam Trust</option>
                        <option value="pranadana">பிரணதான அறக்கட்டளை / Pranadana Trust</option>
                        <option value="vidyadana">வித்யாதான அறக்கட்டளை / Vidyadana Trust</option>
                        <option value="gosamrakshana">கோசம்ரக்ஷணா / Gosamrakshana</option>
                        <option value="dharmaprachara">தர்ம பிரசாரம் / Dharma Prachara</option>
                      </select>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <label htmlFor="amount" className="form-label">
                        தொகை (₹) / Amount *
                      </label>
                      <input 
                        type="number" 
                        className="form-control" 
                        id="amount" 
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        min="100"
                        placeholder="1000"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">
                        பெயர் / Name *
                      </label>
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
                      <label htmlFor="email" className="form-label">
                        மின்னஞ்சல் / Email *
                      </label>
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
                      <label htmlFor="phone" className="form-label">
                        தொலைபேசி / Phone *
                      </label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <label htmlFor="panNumber" className="form-label">
                        PAN எண் / PAN Number (80G சலுகைக்கு)
                      </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="panNumber" 
                        name="panNumber" 
                        value={formData.panNumber}
                        onChange={handleChange}
                        placeholder="AAAAA0000A"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      முகவரி / Address *
                    </label>
                    <textarea 
                      className="form-control" 
                      id="address" 
                      name="address"
                      rows={3}
                      value={formData.address}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button type="submit" className="btn btn-ttd btn-lg">
                      <i className="bi bi-credit-card me-2"></i>
                      பாதுகாப்பாக கட்டணம் செய்யுங்கள் / Secure Payment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">அவசர சேவைகள் / Emergency Services</h2>
                <p className="text-muted">24/7 அவசர உதவி மற்றும் சிறப்பு சேவைகள்</p>
                <p className="text-muted-en">24/7 emergency assistance and special services</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4">
            {emergencyServices.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="emergency-service-card h-100">
                  <div className="card-body text-center">
                    <i className={`bi ${service.icon} fs-1 text-danger mb-3`}></i>
                    <h5 className="card-title">
                      <div>{service.name}</div>
                      <small className="text-muted">{service.nameEn}</small>
                    </h5>
                    <p className="card-text">
                      <span className="tamil-text">{service.description}</span><br/>
                      <small>{service.descriptionEn}</small>
                    </p>
                    <div className="emergency-contact">
                      <h4 className="text-danger mb-0">
                        <i className="bi bi-telephone-fill me-2"></i>
                        {service.phone}
                      </h4>
                    </div>
                    <button className="btn btn-outline-danger mt-3">
                      <i className="bi bi-telephone me-2"></i>
                      உடனடி அழைப்பு / Call Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Benefits */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="section-title">நன்கொடையாளர்களுக்கான சிறப்பு வசதிகள்</h2>
                <p className="text-muted">Special Privileges for Donors</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="benefit-card text-center">
                <i className="bi bi-eye fs-1 text-primary mb-3"></i>
                <h5>ஸ்பெஷல் தர்ஷனம்</h5>
                <p className="small text-muted">Special Darshan</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="benefit-card text-center">
                <i className="bi bi-gift fs-1 text-success mb-3"></i>
                <h5>பிரசாதம்</h5>
                <p className="small text-muted">Special Prasad</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="benefit-card text-center">
                <i className="bi bi-house-heart fs-1 text-info mb-3"></i>
                <h5>தங்குமிட வசதி</h5>
                <p className="small text-muted">Accommodation</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="benefit-card text-center">
                <i className="bi bi-file-earmark-text fs-1 text-warning mb-3"></i>
                <h5>80G வரிச் சலுகை</h5>
                <p className="small text-muted">Tax Benefit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Details */}
      {/* <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bank-details-card">
                <h3 className="text-center mb-4">வங்கி விவரங்கள் / Bank Details</h3>
                
                <div className="row">
                  <div className="col-md-6">
                    <h5>ஆன்லைன் பரிமாற்றம் / Online Transfer</h5>
                    <ul className="list-unstyled">
                      <li><strong>வங்கி:</strong> ஸ்டேட் பேங்க் ஆப் இந்தியா</li>
                      <li><strong>கணக்கு பெயர்:</strong> திருமல திருப்பதி தேவஸ்தானம்</li>
                      <li><strong>கணக்கு எண்:</strong> 1234567890</li>
                      <li><strong>IFSC:</strong> SBIN0001234</li>
                      <li><strong>கிளை:</strong> திருப்பதி</li>
                    </ul>
                  </div>
                  
                  <div className="col-md-6">
                    <h5>பிற பரிமாற்ற முறைகள் / Other Methods</h5>
                    <ul className="list-unstyled">
                      <li><strong>யூபிஐ:</strong>  Sri valli sidhar peedam@upi</li>
                      <li><strong>பே டிஎம்:</strong> Sri valli sidhar peedam DONATE</li>
                      <li><strong>கிரெடிட் கார்டு:</strong> வலைத்தளம் வழியாக</li>
                      <li><strong>டெபிட் கார்டு:</strong> வலைத்தளம் வழியாக</li>
                      <li><strong>நேரடி:</strong> கோயில் பிரிவுகளில்</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Donation;