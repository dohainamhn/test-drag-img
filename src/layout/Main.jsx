import React, { useEffect } from "react";
import NavbarDesktop from "../Components/NavbarDesktop";
import NavMenu from "../features/NavMenu";
import CandidateList from "../features/CandidateList";
import Layout from "../HOC/Layout";
import axiosClient from "../apis/axiosClient";
import { useDispatch, useSelector } from "react-redux";

Main.propTypes = {};

const addLocation = (data) => {
  const url = "/location";
  return axiosClient.put(url, data);
};

function Main(props) {
  const data = useSelector((state) => state.user.currentUser);
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }
  console.log(props);
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

    if (data) {
      addLocation({
        userId: data._id,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }).then((res) => console.log(res, "location"));
    }
  }
  return (
    <div>
      <Layout left={[NavbarDesktop, NavMenu]} right={[CandidateList]} />
    </div>
  );
}

export default Main;
