import React from "react";
import "./pages.css";

const NotFound = () => (
  <div
    className="container p-4 text-center col-md-5 not-found-size"
    style={{
      color: "yellowgreen",
    }}
  >
    <div className="card" style={{ background: "black" }}>
      <div className="card-body">
        <h1>Error, page not found...</h1>
        <p style={{ fontSize: "16px" }}>Oops, try another link :c</p>
        <div>
          <img
            className="img-size"
            src="https://www.vascon.com/images/404/hanging_404.gif"
            alt="err"
          ></img>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
