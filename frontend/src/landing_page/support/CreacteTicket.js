import React from "react";

function CreateTicket() {
  return (
    <div className="container py-5">
      <h1 className="fs-4 mb-5">To create a ticket, select a relevant topic</h1>
      <div className="row">
        {/* Column 1 - Account Opening */}
        <div className="col-md-4 mb-4">
          <h5>
            <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
            Account Opening
          </h5>
          <ul className="list-unstyled mt-3">
            <li><a href="#" className="text-decoration-none d-block py-1">Resident individual</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Minor</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Non Resident Indian (NRI)</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Company, Partnership, HUF and LLP</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Glossary</a></li>
          </ul>
        </div>

        {/* Column 2 - Your Zerodha Account */}
        <div className="col-md-4 mb-4">
          <h5>
            <i className="fa fa-user me-2" aria-hidden="true"></i>
            Your Zerodha Account
          </h5>
          <ul className="list-unstyled mt-3">
            <li><a href="#" className="text-decoration-none d-block py-1">Your Profile</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Account modification</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Client Master Report (CMR) and Depository Participant (DP)</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Nomination</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Transfer and conversion of securities</a></li>
          </ul>
        </div>

        {/* Column 3 - Kite */}
        <div className="col-md-4 mb-4">
          <h5>
            <i className="fa fa-line-chart me-2" aria-hidden="true"></i>
            Kite
          </h5>
          <ul className="list-unstyled mt-3">
            <li><a href="#" className="text-decoration-none d-block py-1">IPO</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Trading FAQs</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Margin Trading Facility (MTF) and Margins</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Charts and orders</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Alerts and Nudges</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">General</a></li>
          </ul>
        </div>

        {/* Column 4 - Funds */}
        <div className="col-md-4 mb-4">
          <h5>
            <i className="fa fa-credit-card me-2" aria-hidden="true"></i>
            Funds
          </h5>
          <ul className="list-unstyled mt-3">
            <li><a href="#" className="text-decoration-none d-block py-1">Add money</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Withdraw money</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Add bank accounts</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">eMandates</a></li>
          </ul>
        </div>

        {/* Column 5 - Console */}
        <div className="col-md-4 mb-4">
          <h5>
            <i className="fa fa-cogs me-2" aria-hidden="true"></i>
            Console
          </h5>
          <ul className="list-unstyled mt-3">
            <li><a href="#" className="text-decoration-none d-block py-1">Portfolio</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Corporate actions</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Funds statement</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Reports</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Profile</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Segments</a></li>
          </ul>
        </div>

        {/* Column 6 - Coin */}
        <div className="col-md-4 mb-4">
          <h5>
            <i className="fa fa-dot-circle-o me-2" aria-hidden="true"></i>
            Coin
          </h5>
          <ul className="list-unstyled mt-3">
            <li><a href="#" className="text-decoration-none d-block py-1">Mutual funds</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">National Pension Scheme (NPS)</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Features on Coin</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">Payments and Orders</a></li>
            <li><a href="#" className="text-decoration-none d-block py-1">General</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;