import React from "react";
import backgroundImage from '../assets/Back.jpg';

function Home() {
  return (
    <div
  className="hero-section d-flex flex-column justify-content-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    paddingTop: '100px',
    paddingBottom: '100px',
    color: '#fff',
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
  }}
>
  <div className="container text-center">
    <h1 className="display-4 fw-bold">Discover Your Dream Job</h1>
    <p className="lead">Thousands of opportunities waiting for you in top cities worldwide.</p>
    <a href="/jobs" className="btn btn-light btn-lg mt-3 shadow-sm">Explore Jobs</a>

    {/* Dummy Content Section */}
    <div className="row mt-5 g-4">
      <div className="col-md-4 d-flex">
        <div className="bg-white text-dark p-4 rounded shadow w-100">
          <h5 className="fw-bold">Remote Jobs</h5>
          <p>Work from anywhere with flexible opportunities in tech, design, and marketing.</p>
        </div>
      </div>
      <div className="col-md-4 d-flex">
        <div className="bg-white text-dark p-4 rounded shadow w-100">
          <h5 className="fw-bold">Top Companies</h5>
          <p>Browse listings from companies like Google, Amazon, and Microsoft.</p>
        </div>
      </div>
      <div className="col-md-4 d-flex">
        <div className="bg-white text-dark p-4 rounded shadow w-100">
          <h5 className="fw-bold">Quick Apply</h5>
          <p>Send your resume in seconds — no login required.</p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Home;
