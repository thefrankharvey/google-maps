import React from "react";

export default function Button(props) {
  const { text } = props.distance;

  const convertToNauticalMiles = text => {
    if (text) {
      var textToArray = text.split("");
      var mapNansAndNums = textToArray.map(a => parseInt(a, 10));
      var removeNans = mapNansAndNums.filter((item) => item >=0 || item >=9);
      var joinItems = removeNans.join("");
      var nauticalMiles = (parseInt(joinItems, 10) / 1.15078);

      return nauticalMiles.toFixed(2);
    }
  };

  return (
    <div className="result-display">
      Distance in Nautical Miles: {convertToNauticalMiles(text)}
    </div>
  );
}
