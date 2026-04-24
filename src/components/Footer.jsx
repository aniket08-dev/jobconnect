import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-3">
      <div className="container text-center">
        <h5 className="text-info fw-bold mb-3">JobConnect</h5>
        <p className="mb-4">
          Connecting talents to top opportunities. Grow your career with us.
        </p>

        <div className="mb-3">
          <a href="#" className="text-light mx-2"><i className="bi bi-facebook fs-5"></i></a>
          <a href="#" className="text-light mx-2"><i className="bi bi-twitter fs-5"></i></a>
          <a href="#" className="text-light mx-2"><i className="bi bi-instagram fs-5"></i></a>
          <a href="#" className="text-light mx-2"><i className="bi bi-linkedin fs-5"></i></a>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-2 small">
          <a href="#" className="text-decoration-none text-light">Privacy Policy</a>
          <span className="text-light">|</span>
          <a href="#" className="text-decoration-none text-light">Terms of Service</a>
          <span className="text-light">|</span>
          <a href="#" className="text-decoration-none text-light">Contact</a>
        </div>

        <hr className="my-3 border-secondary" />
        <p className="small text-muted mb-0">&copy; 2025 JobConnect. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
