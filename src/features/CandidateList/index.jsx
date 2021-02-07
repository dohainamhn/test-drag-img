import React from "react";
import CardSwipe from "../../Components/CardSwipe/CardSwipe";

function CandidateList(props) {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardSwipe />
    </div>
  );
}

export default CandidateList;
