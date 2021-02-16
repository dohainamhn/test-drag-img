import React, { useEffect } from "react";
import NavbarDesktop from "../Components/NavbarDesktop";
import NavMenu from "../features/NavMenu";
import CandidateList from "../features/CandidateList";
import Layout from "../HOC/Layout";
import axiosClient from "../apis/axiosClient";
import { useDispatch, useSelector } from "react-redux";
import action from "../actions";
import constantAction from "../constansts";

Main.propTypes = {};

const addLocation = (data) => {
  const url = "/location";
  return axiosClient.put(url, data);
};

function Main(props) {
  const auth = useSelector((state) => state.auth);
  console.log(auth)
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }
  useEffect(() => {
    getLocation();
  }, []);
  function showPosition(position) {
    console.log(
      "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude
    );

    if (auth) {
      addLocation({
        userId: auth.user._id,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }).then((res) => console.log(res, "location"));
    }
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
