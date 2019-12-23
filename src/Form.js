import React, { useState } from "react";
import OriginInput from "./OriginInput";
import DestinationInput from "./DestinationInput";
import Button from "./Button";
import ResultDisplay from "./ResultDisplay";

export default function Form(props) {
  const [distance, setDistance] = useState("");
  const infoWindow = new window.google.maps.InfoWindow();
  const directionsService = new window.google.maps.DirectionsService();
  const directionsDisplay = new window.google.maps.DirectionsRenderer({
    suppressMarkers: true
  });

  const createMarker = (location, label, content, map) => {
    var marker = new window.google.maps.Marker({
      position: location,
      label: label,
      title: label,
      map: map
    });
    marker.addListener("click", () => {
      infoWindow.setContent(content);
      infoWindow.open(map, this);
    });
  };

  const initMap = () => new window.google.maps.Map(document.getElementById("map"));

  const mapDistanceWithMarkers = () => {
    const originValue = document.getElementById("origin-input").value
    const destinationValue = document.getElementById("destination-input").value
    
    if(originValue && destinationValue){
      const map = initMap();
      directionsDisplay.setMap(map);
  
      let request = {
        origin: originValue,
        destination: destinationValue,
        travelMode: window.google.maps.TravelMode.DRIVING,
        unitSystem: window.google.maps.UnitSystem.IMPERIAL
      };
  
      directionsService.route(request, (response, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          let distance = response.routes[0].legs[0].distance;
          let origin = response.routes[0].legs[0].start_location;
          let destination = response.routes[0].legs[0].end_location;
  
          directionsDisplay.setDirections(response);
          console.log(distance)
          setDistance(distance);
          createMarker(origin, "A", "Hi Sympler!", map, infoWindow);
          createMarker(destination, "B", "I'm Frank!", map, infoWindow);
        } else {
          setDistance("Please enter a valid origin and destination");
        }
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    mapDistanceWithMarkers();
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <OriginInput />
          <DestinationInput />
          <Button />
          <ResultDisplay distance={distance} />
        </form>
      </div>
      <div className="map-container" >
        <div style={{ width: "100%", height: "100%" }} id="map" />
      </div>
    </div>
  );
}
