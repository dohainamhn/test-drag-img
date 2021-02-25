import React from "react";
import NavbarDesktop from "../Components/NavbarDesktop";
import Setting from "../features/Setting";
import Layout from "../HOC/Layout";
import CandidateList from "../features/CandidateList";

function Profile(props) {
  return (
    <div>
      <Layout left={[Setting]} right={[CandidateList]} />
    </div>
  );
}

export default Profile;
