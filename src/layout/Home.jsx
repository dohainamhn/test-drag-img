import { get } from "http";
import React from "react";
import { GoogleLogin, useGoogleLogin } from "react-google-login";
import axiosClient from "../apis/axiosClient";

const clientId =
  "554778092924-pdk065lnmfrp33vbv5mukdkike39ptup.apps.googleusercontent.com";

function Home(props) {
  const onSuccess = (res) => {
    // console.log("[Login Success] current user: ", res.profileObj);
    window.localStorage.setItem("token", res.tokenId);

    // console.log(window.localStorage.getItem("token"));
    const add = (data) => {
      const url = "/auth/signin";
      return axiosClient.post(url, data);
    };

    add({ tokenId: res.tokenId })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    props.history.push("/main");
  };

  const onFail = (res) => {
    console.log("[Login Failed] res: ", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFail,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <div>
      <button onClick={signIn} className="button">
        <span className="buttonText">Sign In with Google</span>
      </button>
    </div>
  );
}

export default Home;
