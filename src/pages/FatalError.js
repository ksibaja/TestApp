import React from "react";
import "./pages.css";

const FatalError = () => (
  <div
    className="container p-4 text-center col-md-5 not-found-size"
    style={{
      color: "yellowgreen",
    }}
  >
    <div className="card" style={{ background: "black" }}>
      <div className="card-body">
        <h1>Error 500, page not working...</h1>
        <p style={{ fontSize: "16px" }}>Oops, try again :c</p>
      </div>
    </div>
  </div>
);

export default FatalError;
