import React from "react";
import spinner from "../asset/35.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="is Loading..."
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;
