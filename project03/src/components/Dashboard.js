import React from "react";
import "./styles/Dashboard.css";

function Dashboard() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

function NavBar() {
  return (
    <div className="fixed-top">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-secondary p-4">
          <h5 className="text-white h4">Collapsed content</h5>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-secondary">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <h1>Title(TBD)</h1>
      </nav>
    </div>
  );
}

export default Dashboard;
