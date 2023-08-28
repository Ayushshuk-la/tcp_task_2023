import React from "react";
require('./navbar.css');

export const Header = () => {
  return (
    <>
    <div className="header">
      <div className="container">
        <div className="navbar-style">
          <div className="navbar-brand">
            <div className="text-wrapper">BrandName</div>
          </div>
          <div className="navbar-toggler" />
          <div className="collapse-navbar">
            <div className="navbar-nav">
              <div className="li">
                <div className="a">
                  <div className="link">Home</div>
                </div>
              </div>
              <div className="a-wrapper">
                <div className="a">
                  <div className="link">Product</div>
                </div>
              </div>
              <div className="div-wrapper">
                <div className="a">
                  <div className="link">Pricing</div>
                </div>
              </div>
              <div className="div">
                <div className="a">
                  <div className="link">Contact</div>
                </div>
              </div>
            </div>
            <div className="navbar-nav-2">
              <div className="nav-item">
                <button className="btn-text-wrapper">
                  <button className="btn-text">Login</button>
                </button>
              </div>
              <div className="button-btn-primary-wrapper">
                <div className="button-btn-primary">
                  <div className="btn-text-2">JOIN US</div>
                  <img className="icn-arrow-right-icn" alt="Icn arrow right icn" src={require('./icn-arrow-right-icn-xs.svg').default} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md">
            <div className="header-tag">Join Us</div>
            <div className="headline">Highly Distinguished Courses</div>
            <p className="sub-headline">
              We know how large objects will act, <br />
              but things on a small scale
            </p>
            <div className="cta">
              <div className="button-md">
                <div className="btn-text-3">Get Quote Now</div>
              </div>
              <button className="button">
                <button className="btn-text-4">Learn More</button>
              </button>
            </div>
          </div>
          <div className="hero-cover-wrapper">
            <div className="hero-cover">
              <div className="none">
                <div className="overlap-group">
                  <div className="ellipse" />
                  <img className="technology" alt="Technology" src={require('./tech-2.png')}  />
                  <img className="image" alt="ige" src={require('./image-5.png')} />
                  <div className="group">
                    <img className="gridicons-stats" alt="Gridicons stats" src={require('./gridicons-stats.svg').default} />
                  </div>
                  <div className="icomoon-free-stats-wrapper">
                    <img className="icomoon-free-stats" alt="Icomoon free stats" src={require('./icomoon-free-stats-dots.svg').default} />
                  </div>
                  <div className="frame" />
                  <img className="img" alt="ige" src={require('./image-2.png')} />
                  <img className="image-2" alt="ige" src={require('./image-3.png')}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
