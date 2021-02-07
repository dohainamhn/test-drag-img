import { get } from "http";
import React, { useRef } from "react";
import { GoogleLogin, useGoogleLogin } from "react-google-login";
import { useHistory } from "react-router";
import axiosClient from "../apis/axiosClient";

const clientId =
  "554778092924-pdk065lnmfrp33vbv5mukdkike39ptup.apps.googleusercontent.com";
const add = (data) => {
  const url = "/auth/signin";
  return axiosClient.post(url, data);
};

const createSetting = (id) => {
  const url = "/setting/addsetting";
  return axiosClient.post(url, id);
};

function Home(props) {
  const history = useHistory();
  let tokenRef = useRef(null);

  const onSuccess = (res) => {
    console.log("loop");
    console.log("[Login Success] current user: ", res.profileObj);
    console.log(window.localStorage.getItem("token"));

    add({ tokenId: res.tokenId }).then((res) => {
      console.log("ress");
      console.log(res);
      createSetting({
        userId: res.user._id,
      }).then((data) => console.log("setting", data));
      window.localStorage.setItem("token", res.token);
      window.localStorage.setItem("data", res.user._id);
      window.localStorage.setItem("status", res.user.status);

      tokenRef.current = res.token;
    });

    window.localStorage.setItem("token", tokenRef.current);
    if (window.localStorage.getItem("token")) {
      history.push("/main");
    }
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
