import React from "react";

export default function Spinner() {
  return (
    <div className="spinner">
      <div style={{ width: "150px", height: "150px" }}>
        <div className="loading loading--full-height"></div>
      </div>
    </div>
  );
}