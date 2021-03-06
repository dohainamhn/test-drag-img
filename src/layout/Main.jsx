import React, { useEffect } from "react";
import NavbarDesktop from "../Components/NavbarDesktop";
import NavMenu from "../features/NavMenu";
import CandidateList from "../features/CandidateList";
import Layout from "../HOC/Layout";
import axiosClient from "../apis/axiosClient";
import { useSelector } from "react-redux";

const createLocation = (data) => {
  const url = "/location";
  return axiosClient.post(url, data);
};
const addLocation = (data) => {
  const url = "/location";
  return axiosClient.put(url, data);
};

function Main(props) {
  const auth = useSelector((state) => state.auth);
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }
  useEffect(() => {
    getLocation();
  }, []);
  function showPosition(position) {
    // console.log(
    //   "Latitude: " +
    //     position.coords.latitude +
    //     "<br>Longitude: " +
    //     position.coords.longitude
    // );

    if (!auth) return;

    if (auth.user.status === 1) {
      console.log("1");
      addLocation({
        userId: auth.user._id,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }).then((res) => console.log(res, "location"));
    } else {
      createLocation({
        userId: auth.user._id,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }).then((res) => console.log(res, "location add"));
    }
  }
  return (
    <div>
      <Layout left={[NavMenu]} right={[CandidateList]} />
    </div>
  );
}

export default Main;
