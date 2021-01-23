import React from "react";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="App" style={{ color: "yellowgreen" }}>
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
  );
}

export default NotFound;
