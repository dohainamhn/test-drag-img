import React from "react";
import NavbarDesktop from "../Components/NavbarDesktop";
import NavMenu from "../features/NavMenu";
import CandidateList from "../features/CandidateList";
import Layout from "../HOC/Layout";

Main.propTypes = {};

function Main(props) {
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
