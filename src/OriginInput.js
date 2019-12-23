import React from "react";

export default function OriginInput(props) {
  const handleChange = e => {
    e.preventDefault();

    new window.google.maps.places.Autocomplete(
      document.getElementById("origin-input"),
      { types: ["establishment"] }
    );
  };

  return (
    <div className="origin-containter">
      <div className="label-container">
        <label>Origin: </label>
      </div>
      <span className="input-container">
        <input
          type="text"
          name="origin"
          id="origin-input"
          placeholder="Enter an origin"
          onChange={handleChange}
        />
      </span>
    </div>
  );
}
