import React from "react";
// import "./layout3.css";
require('./layout3.css');

export const ElementLayout3 = () => {
  return (
    
    <div className="element-layout3">
      <div className="container3">
        <div className="row">
          <div className="col-md">
            <div className="thumb-concept">
              <div className="overlap-group">
                <div className="ellipse" />
                <img className="technology" alt="Technology" src={require('./technology-2.png')} />
                <img className="image" alt="ige" src={require('./image-5.png')} />
                <div className="group">
                  <img className="gridicons-stats" alt="Gridicons stats" src={require('./gridicons-stats.svg').default} />
                </div>
                <div className="icomoon-free-stats-wrapper">
                  <img className="icomoon-free-stats" alt="Icomoon free stats" src={require('./icomoon-free-stats-dots.svg').default} />
                </div>
                <div className="frame" />
                <img className="img" alt="ige" src={require('./image-2.png')} />
                <img className="image-2" alt="ige" src={require('./image-3.png')} />
              </div>
            </div>
          </div>
          <div className="div">
            <div className="fixed-width-fixed" />
            <div className="section-title3">Watch our Courses</div>
            <p className="paragraph2">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: <br />
              Newtonian mechanics
            </p>
            <div className="a3">
              <div className="h3">Learn More</div>
              <img className="icon-arrow-next" alt="Icon arrow next" src={require('./icon-arrow-next.svg').default} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
