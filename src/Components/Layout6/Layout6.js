import React from "react";
require('./layout6.css');

export const ElementLayout6 = () => {
  return (
    <div className="element-layout6">
      <div className="container6">
        <div className="row">
          <div className="main-content">
            <div className="section-tag6">Practice Advice</div>
            <div className="section-title6">JOIN US</div>
            <p className="paragraph">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
        <div className="col-md-wrapper">
          <div className="col-md">
            <div className="subscribe">
              <div className="input-group">
                <div className="overlap-group">
                  {/* <div className="form-control-input"> */}
                    {/* <div className="text-wrapper">Your Email</div> */}
                    <input type="email" placeholder="Email" className="text-wrapper form-control-input"></input>
                  {/* </div> */}
                  <button className="input-group-append">
                    <button className="btn">
                      <div className="input-group-text">Subscribe</div>
                    </button>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
