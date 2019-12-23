import React from "react";

export default function DestinationInput(props) {
  const handleChange = e => {
    e.preventDefault();
    
    new window.google.maps.places.Autocomplete(
      document.getElementById("destination-input"),
      { types: ["establishment"] }
    );
  };

  return (
    <div className="origin-containter">
      <div className="label-container">
        <label>Destination: </label>
      </div>
      <div className="input-container">
        <input
          type="text"
          name="origin"
          id="destination-input"
          placeholder="Enter an origin"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
