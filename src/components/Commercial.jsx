import React from "react";

function Commercial() {
  return (
    <div className="why-cre-section">
      <div className="container">
        <div className="content-row">
          <div className="left-column">
            <h2 className="section-title">Why Commercial Real Estate?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="icon-placeholder">☰</div>
                <p className="feature-label">Stable Asset Class</p>
              </div>
              <div className="feature-item">
                <div className="icon-placeholder">₹</div>
                <p className="feature-label">Monthly Cashflow</p>
              </div>
              <div className="feature-item">
                <div className="icon-placeholder">▶</div>
                <p className="feature-label">Capital Appreciation</p>
              </div>
              <div className="feature-item">
                <div className="icon-placeholder">▦</div>
                <p className="feature-label">Portfolio Diversification</p>
              </div>
            </div>
          </div>
          <div className="right-column">
            <h3 className="comparison-title">CRE vs. Other Asset Classes</h3>
            <div className="comparison-chart">
              <div className="chart-row">
                <div className="chart-item residential">Residential Properties</div>
                <div className="chart-item cre highlight">Commercial Real Estate</div>
              </div>
              <div className="chart-row">
                <div className="chart-item gold">Gold</div>
                <div className="chart-item stocks">Stocks & Mutual Funds</div>
              </div>
            </div>
            <div className="chart-labels">
              <p className="label-left">Lower Returns</p>
              <p className="label-bottom">Volatile</p>
              <p className="label-right">Higher Returns</p>
              <p className="label-top">Stable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commercial;
