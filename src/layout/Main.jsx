import React from "react";
import NavbarDesktop from "../Components/NavbarDesktop";
import NavMenu from "../features/NavMenu";
import CandidateList from "../features/CandidateList";
import Layout from "../HOC/Layout";
import axiosClient from "../apis/axiosClient";
// import { get } from "http";

Main.propTypes = {};
console.log(window.localStorage.getItem("data"));
console.log(window.localStorage.getItem("status"));

const addLocation = (data) => {
  const url = "/location";
  return axiosClient.post(url, data);
};

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

    addLocation({
      userId: window.localStorage.getItem("data"),
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }).then((res) => console.log(res));

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
