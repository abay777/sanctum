import React from "react";
import Marquee from "react-fast-marquee";

function TrackRecord() {
  return (
    <div className="track-record-section">
      <div className="container">
        <h2 className="section-title">Our Track Record</h2>
        <div className="stats-row">
          <div className="stat-box">
            <h3 className="stat-value">1,00,000+</h3>
            <p className="stat-label">Trusted Users</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-value">₹ 1800+ Cr</h3>
            <p className="stat-label">AUM</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-value">4+ Mn</h3>
            <p className="stat-label">Sqft Managed</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-value">₹ 130+ Cr</h3>
            <p className="stat-label">Rent Disbursed</p>
          </div>
        </div>
        <div className="map-tenants-row">
          <div className="tenants-section">
            <h3 className="tenants-title">Our Tenants</h3>
            <Marquee gradient={false} speed={50}>
              <img
                src="https://via.placeholder.com/100x50"
                alt="Tenant Logo 1"
                className="tenant-logo"
              />
              <img
                src="https://via.placeholder.com/100x50"
                alt="Tenant Logo 2"
                className="tenant-logo"
              />
              <img
                src="https://via.placeholder.com/100x50"
                alt="Tenant Logo 3"
                className="tenant-logo"
              />
              <img
                src="https://via.placeholder.com/100x50"
                alt="Tenant Logo 4"
                className="tenant-logo"
              />
            </Marquee>
            <button className="sign-up-button">Sign Up</button>
          </div>
          <div className="map-placeholder">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Map Placeholder"
              className="map-image"
            />
          </div>
        </div>
        <div className="featured-section">
          <h3 className="featured-title">Featured In</h3>
          <Marquee gradient={false} speed={30} direction="right">
            <div className="featured-item">
              <img
                src="https://via.placeholder.com/100x100"
                alt="Featured Logo 1"
                className="featured-logo"
              />
            </div>
            <div className="featured-item">
              <img
                src="https://via.placeholder.com/100x100"
                alt="Featured Logo 2"
                className="featured-logo"
              />
            </div>
            <div className="featured-item">
              <img
                src="https://via.placeholder.com/100x100"
                alt="Featured Logo 3"
                className="featured-logo"
              />
            </div>
            <div className="featured-item">
              <img
                src="https://via.placeholder.com/100x100"
                alt="Featured Logo 4"
                className="featured-logo"
              />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default TrackRecord;
