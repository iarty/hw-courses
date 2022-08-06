import React from "react";

const Spinner = () => {
  return (
    <>
      <div
        className="spinner-border mt-5"
        role="status"
        style={{ position: "absolute", left: "50%" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default Spinner;
