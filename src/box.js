import React from "react";

export function Box({ text, backgroundColor }) {
  return (
    /* Set the background color for the div */
    <div
      className="box"
      style={{
        backgroundColor,
        margin: "1rem"
      }}
    >
      <p>{text}</p>
    </div>
  );
}
