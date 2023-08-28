import React from "react";
require('./layout7.css');

export const Footer = () => {
  return (
    <div className="footer">
      <div className="div">
        <div className="container7">
          <div className="row">
            <div className="col-md">
              <div className="h">Get In Touch</div>
              <p className="paragraph7">
                the quick fox jumps over the <br />
                lazy dog
              </p>
              <img className="social-media" alt="Social media" src={require('./social-media.svg').default} />
            </div>
            <div className="col-md-2">
              <div className="h">Company info</div>
              <div className="div-2">
                <div className="link">About Us</div>
                <div className="text-wrapper7">Carrier</div>
                <div className="text-wrapper7">We are hiring</div>
                <div className="text-wrapper7">Blog</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="h">Features</div>
              <div className="div-2">
                <div className="link">Business Marketing</div>
                <div className="text-wrapper7">User Analytic</div>
                <div className="text-wrapper7">Live Chat</div>
                <div className="text-wrapper7">Unlimited Support</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="h">Resources</div>
              <div className="div-2">
                <div className="link">IOS &amp; Android</div>
                <div className="text-wrapper7">Watch a Demo</div>
                <div className="text-wrapper7">Customers</div>
                <div className="text-wrapper7">API</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container7-wrapper">
        <div className="row-wrapper">
          <div className="col-md-wrapper">
            <div className="div-wrapper">
              <p className="p">Made With Love By Figmaland All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
