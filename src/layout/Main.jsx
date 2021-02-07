import React from "react";
import NavbarDesktop from "../Components/NavbarDesktop";
import NavMenu from "../features/NavMenu";
import CandidateList from "../features/CandidateList";
import Layout from "../HOC/Layout";

Main.propTypes = {};

function Main(props) {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  function showPosition(position) {
    console.log(
      "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude
    );
  }

  return (
    <div>
      {/* <NavbarDesktop />
      <NavMenu />
      <CandidateList /> */}
      <Layout left={[NavbarDesktop, NavMenu]} right={[CandidateList]} />
    </div>
  );
}

export default Main;
