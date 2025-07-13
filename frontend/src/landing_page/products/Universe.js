import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png"  style={{ width : "70px"}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\sensibullLogo.svg" style={{ width : "70px"}}/>
          <p className="text-small text-muted">sensibull Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/Streak.jpeg"  style={{ width : "70px"}}/>
          <p className="text-small text-muted">Streak platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/goldenpiLogo.png" style={{ width : "70px"}}/>
          <p className="text-small text-muted">goldenPi platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/zerodhaFundhouse.png"  style={{ width : "70px"}}/>
          <p className="text-small text-muted">zerodha Fund House Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/ditto.png"  style={{ width : "70px"}}/>
          <p className="text-small text-muted">ditoo platform</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;