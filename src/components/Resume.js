import React from "react";
import Card from "./UI/Card";
import "./style.css";

function Resume() {
  return (
    <>
      <div className="download-content">
        <h1 className="title">Click here to download resume.</h1>
        <div className="title-content">
          <button type="button" className="btn bg-success p-3">
            Download Resume
          </button>
        </div>
      </div>
    </>
  );
}

export default Resume;
