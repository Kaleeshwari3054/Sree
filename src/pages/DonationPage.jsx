import { useState } from 'react';

const DonationPage = () => {
  const [amount, setAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleDonate = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const options = {
      key: 'rzp_test_xxxxx',
      amount: parseInt(amount || '0', 10) * 100,
      currency: 'INR',
      name: 'ஸ்ரீ வல்லி சித்தர் பீடம்',
      description: `அருள் மான்மார்கள் ${donorName} அவர்களின் செல்வந்தம்`,
      handler: function () {
        alert(
          'உங்கள் அருள் செல்வத்திற்கு மனமார்ந்த நன்றி 🙏\nஇறைவன் அருள் பொழிந்து வாழ்க!'
        );
        setIsLoading(false);
      },
      prefill: {
        name: donorName,
        contact: phone,
      },
      theme: {
        color: '#dc3545',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div
      className="min-vh-100 d-flex flex-column"
      style={{
        background:
          'radial-gradient(circle at top, #ffecd2 0%, #fcb69f 25%, #ff9a76 60%, #f3722c 100%)',
      }}
    >
      {/* Hero Section - Medium */}
      <section className="py-5 py-md-4">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="bg-dark bg-opacity-75 text-white rounded-4 p-4 p-md-5 shadow-lg">
                <h1 className="h3 h2-md fw-bold mb-3 d-flex align-items-center gap-2">
                  <span
                    className="d-inline-flex align-items-center justify-content-center rounded-circle bg-danger bg-opacity-25 p-2"
                    style={{ width: 48, height: 48 }}
                  >
                    <i className="bi bi-heart-pulse-fill text-danger fs-4"></i>
                  </span>
                  ஸ்ரீ வல்லி சித்தர் பீடம்
                </h1>
                <p className="lead fs-6 fs-md-5 mb-3">
                  உங்கள் அருள் செல்வத்தால் இறைவனின் அருள் பெறுவோம் 🙏
                </p>
                <p className="small mb-0 text-white-50">
                  ஒவ்வொரு ரூபாயும் அன்னை வல்லியின் அருட்கொடையாக மாற்றப்பட்டு,
                  தேவையானவர்களுக்கு சேவை செய்ய பயன்படும்.
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="bg-white rounded-4 shadow-lg p-3 p-md-4">
                <h2 className="h5 fw-bold mb-3 text-center text-primary">
                  விரைவான செல்வ அளவு
                </h2>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {['101', '501', '1001', '5001'].map((val, idx) => {
                    const labels = {
                      0: '₹101',
                      1: '₹501',
                      2: '₹1,001',
                      3: '₹5,001',
                    };
                    const colors = ['danger', 'warning', 'success', 'primary'];
                    const icons = ['heart-fill', 'gem', 'star-fill', 'crown'];
                    return (
                      <button
                        key={val}
                        type="button"
                        className={`btn btn-outline-${colors[idx]} px-3 py-2 rounded-3 fw-semibold`}
                        onClick={() => setAmount(val)}
                      >
                        <i className={`bi bi-${icons[idx]} me-1`}></i>
                        {labels[idx]}
                      </button>
                    );
                  })}
                </div>
                <p className="text-center small text-muted mt-2 mb-0">
                  கீழே உள்ள படிவத்தில் உங்கள் விவரங்களை பூர்த்தி செய்து
                  செல்வம் அளிக்கவும்.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Medium */}
      <section className="py-4 bg-white">
        <div className="container">
          <div className="row g-3 g-md-4 text-center">
            <div className="col-6 col-md-3">
              <div className="card border-0 shadow-sm h-100 rounded-4">
                <div className="card-body py-3">
                  <div className="fs-4 fw-bold text-primary mb-1">₹12.5L</div>
                  <div className="small fw-semibold text-success">
                    சேகரிக்கப்பட்ட செல்வம்
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card border-0 shadow-sm h-100 rounded-4">
                <div className="card-body py-3">
                  <div className="fs-4 fw-bold text-info mb-1">3,247</div>
                  <div className="small fw-semibold text-success">
                    அருள் மான்மார்கள்
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card border-0 shadow-sm h-100 rounded-4">
                <div className="card-body py-3">
                  <div className="fs-4 fw-bold text-warning mb-1">92%</div>
                  <div className="small fw-semibold text-success">
                    நோக்கு அடைந்தது
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card border-0 shadow-sm h-100 rounded-4">
                <div className="card-body py-3">
                  <div className="fs-5 fw-bold text-danger mb-1">
                    15 நாட்கள்
                  </div>
                  <div className="small fw-semibold text-success">
                    மீதமுள்ளது
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section - Medium */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body p-3 p-md-4">
                  <h3 className="h5 fw-bold mb-3 text-primary text-center">
                    நமது புனித பணி முன்னேற்றம்
                  </h3>
                  <div
                    className="progress mb-3"
                    style={{ height: '18px', backgroundColor: '#f3f4f6' }}
                  >
                    <div
                      className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: '92%' }}
                    ></div>
                  </div>
                  <div className="d-flex justify-content-between small fw-semibold text-muted">
                    <span>₹0</span>
                    <span className="text-primary">₹12.5L / ₹15L</span>
                    <span>₹15L</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form - Medium */}
      <section className="py-5 flex-grow-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card shadow-lg border-0 rounded-4">
                <div className="card-header bg-danger bg-gradient text-white py-3 text-center">
                  <h3 className="h5 fw-bold mb-1">
                    <i className="bi bi-pray-fill text-warning me-2"></i>
                    அருள் செல்வம் அளிக்க
                  </h3>
                  <p className="small mb-0 text-white-75">
                    உங்கள் பெயரால் இறைவன் அருள் பெறுவோம் 🙏
                  </p>
                </div>
                <div className="card-body p-4">
                  <form onSubmit={handleDonate}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold small text-dark">
                        உங்கள் பெயர் <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm rounded-3 border-2"
                        placeholder="முழு பெயர்"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold small text-dark">
                        தொடர்பு எண் <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control form-control-sm rounded-3 border-2"
                        placeholder="9999999999"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold small text-dark">
                        செல்வ அளவு (ரூ) <span className="text-danger">*</span>
                      </label>
                      <div className="row g-2 mb-2">
                        <div className="col-6">
                          <button
                            type="button"
                            className="btn btn-outline-danger w-100 py-2 rounded-3 fw-semibold"
                            onClick={() => setAmount('101')}
                          >
                            <i className="bi bi-heart-fill me-1"></i>₹101
                          </button>
                        </div>
                        <div className="col-6">
                          <button
                            type="button"
                            className="btn btn-outline-warning w-100 py-2 rounded-3 fw-semibold"
                            onClick={() => setAmount('501')}
                          >
                            <i className="bi bi-gem me-1"></i>₹501
                          </button>
                        </div>
                        <div className="col-6">
                          <button
                            type="button"
                            className="btn btn-outline-success w-100 py-2 rounded-3 fw-semibold"
                            onClick={() => setAmount('1001')}
                          >
                            <i className="bi bi-star-fill me-1"></i>₹1,001
                          </button>
                        </div>
                        <div className="col-6">
                          <button
                            type="button"
                            className="btn btn-outline-primary w-100 py-2 rounded-3 fw-semibold"
                            onClick={() => setAmount('5001')}
                          >
                            <i className="bi bi-crown me-1"></i>₹5,001
                          </button>
                        </div>
                      </div>
                      <input
                        type="number"
                        className="form-control form-control-sm rounded-3 border-2 text-center"
                        placeholder="விருப்ப செல்வ அளவு"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min="10"
                        required
                      />
                      <small className="text-muted d-block mt-1">
                        குறைந்தபட்சம் ₹10 அளிக்கலாம். உங்கள் வசதிக்கு ஏற்ப
                        தொகையை மாற்றிக் கொள்ளலாம்.
                      </small>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading || !amount}
                      className="w-100 btn btn-danger py-2 fw-bold rounded-3 shadow"
                      style={{
                        background:
                          'linear-gradient(45deg, #dc3545, #ff6b35)',
                      }}
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          ரேஸர்பே செய்து கொண்டிருக்கிறோம்...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-pray-fill me-2"></i>
                          இப்போது அருள் செல்வம் அளிக்க – ₹
                          {amount || '0'}
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-3 bg-dark text-white text-center mt-auto">
        <div className="container">
          <h6 className="fw-semibold mb-1">
            <i className="bi bi-check-circle-fill text-success me-2"></i>
            உங்கள் செல்வம் இறைவனின் அருளை பெறுவதற்கு உதவும் 🙏
          </h6>
          <p className="opacity-75 mb-0 small">
            ஸ்ரீ வல்லி சித்தர் பீடம் - அருள் மிகு இடம்
          </p>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;
