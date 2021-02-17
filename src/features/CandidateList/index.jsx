import React from "react";
import CardSwipe from "../../Components/CardSwipe/CardSwipe";

function CandidateList(props) {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <CardSwipe />
    </div>
  );
}

export default CandidateList;
