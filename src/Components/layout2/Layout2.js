import React from "react";
require('./layout2.css');

export const ElementLayout2 = () => {
  return (
    <div className="element-layout2">
      <div className="container2">
        <div className="row">
          <div className="col-md">
            <div className="fixed-width2-fixed" />
            <div className="section-title2">
              Packages that are <br />
              aprodable
            </div>
            <p className="paragraph2">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: <br />
              Newtonian mechanics
            </p>
            <div className="a">
              <div className="h">Learn More</div>
              <img className="icon-arrow-next" alt="Icon arrow next" src={require('./icon-arrow-next.svg').default} />
            </div>
          </div>
          <div className="div">
            <div className="col-md-2">
              <div className="card">
                <img className="fixed-width2" alt="Fixed width" src={require('./fixed-width.svg').default} />
                <div className="feature-title">Books Liberary</div>
                <div className="fixed-width2-fixed-2" />
                <p className="paragraph2-feature">
                  The gradual <br />
                  accumulation of <br />
                  information about
                </p>
              </div>
              <div className="card">
                <img className="fixed-width2" alt="Fixed width" src={require('./fixed-width-1.svg').default} />
                <div className="feature-title">Sales Planning</div>
                <div className="fixed-width2-fixed-2" />
                <p className="paragraph2-feature">
                  The gradual <br />
                  accumulation of <br />
                  information about
                </p>
              </div>
            </div>
            <div className="card-wrapper2">
              <div className="card">
                <img className="fixed-width2" alt="Fixed width" src={require('./fixed-width-2.svg').default} />
                <div className="h-feature-title">2,769 online courses</div>
                <div className="fixed-width2-fixed-2" />
                <p className="paragraph2-feature">
                  The gradual <br />
                  accumulation of <br />
                  information about
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
