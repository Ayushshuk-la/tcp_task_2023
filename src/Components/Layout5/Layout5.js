import React from "react";
require('./layout5.css');

export const ElementLayout5 = () => {
  return (
    <div className="element-layout5">
      <div className="container5">
        <div className="row">
          <div className="main-content">
            <div className="text-wrapper5">Practice Advice</div>
            <p className="section-title5">Each and every client is important.</p>
            <p className="paragraph5">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
        <div className="div">
          <div className="col-md">
            <div className="testimonials-card">
              <div className="card-content5">
                <img className="stars" alt="Stars" src={require('./stars-2.svg').default} />
                <p className="p">
                  Slate helps you see <br />
                  how many more days <br />
                  you need to work to <br />
                  reach your financial <br />
                  goal for the month <br />
                  and year.
                </p>
              </div>
              <div className="div-2">
                <div className="circle" />
                <div className="div-3">
                  <div className="text-wrapper5">Regina Miles</div>
                  <div className="h">Designer</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="testimonials-card">
              <div className="card-content5">
                <img className="stars" alt="Stars" src={require('./stars-2.svg').default} />
                <p className="p">
                  Slate helps you see <br />
                  how many more days <br />
                  you need to work to <br />
                  reach your financial <br />
                  goal for the month <br />
                  and year.
                </p>
              </div>
              <div className="div-2">
                <div className="circle-2" />
                <div className="div-3">
                  <div className="text-wrapper5">Regina Miles</div>
                  <div className="h">Designer</div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials-card-wrapper">
            <div className="testimonials-card-2">
              <div className="card-content5">
                <img className="stars" alt="Stars" src={require('./stars-2.svg').default} />
                <p className="p">
                  Slate helps you see <br />
                  how many more days <br />
                  you need to work to <br />
                  reach your financial <br />
                  goal for the month <br />
                  and year.
                </p>
              </div>
              <div className="div-2">
                <div className="circle-3" />
                <div className="div-3">
                  <div className="text-wrapper5">Regina Miles</div>
                  <div className="h">Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
