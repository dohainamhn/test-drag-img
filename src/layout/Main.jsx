import React from "react";
import NavbarDesktop from "../Components/NavbarDesktop";
import NavMenu from "../features/NavMenu";
import CandidateList from "../features/CandidateList";
import Layout from "../HOC/Layout";
import { get } from "http";

Main.propTypes = {};

function Main(props) {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }
  getLocation();
  function showPosition(position) {
    console.log(
      "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude
    );

    window.localStorage.getItem("token");
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
