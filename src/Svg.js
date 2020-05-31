import React from "react";

function Icon({ data, testMode }) {
  const isWaldo = () => {
    console.log("Waldo");
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <image href={data.img} height="100%" width="100%" />
      <circle
        cx={data.x}
        cy={data.y}
        r={data.size}
        fill={testMode ? "red" : "transparent"}
        onClick={isWaldo}
      />
    </svg>
  );
}

export default Icon;
