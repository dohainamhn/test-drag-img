import React from "react";
import NavbarDesktop from "../Components/NavbarDesktop";
import Setting from "../features/Setting";
import Layout from "../HOC/Layout";
import CandidateList from "../features/CandidateList";

function Profile(props) {
  return (
    <div>
      {/* <NavbarDesktop />
      <Setting /> */}
      <Layout left={[NavbarDesktop, Setting]} right={[CandidateList]} />
    </div>
  );
}

export default Profile;
