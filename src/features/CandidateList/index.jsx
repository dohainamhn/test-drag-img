import React from "react";
import PropTypes from "prop-types";
import CardSwipe from "../../Components/CardSwipe/CardSwipe";

CandidateList.propTypes = {};

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
