import React, { useRef } from "react";
import { useGoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import action from "../actions";
import axiosClient from "../apis/axiosClient";
import constantAction from "../constansts";

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
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    add({ tokenId: res.tokenId }).then((res) => {
      createSetting({
        userId: res.user._id,
      }).then((data) => console.log("setting", data));
      localStorage.setItem("token", res.token);

      localStorage.setItem("user", JSON.stringify(res.user));

      dispatch(action(constantAction.ADD_USER, res.user));
      if (
        localStorage.getItem("token") &&
        localStorage.getItem("token") !== null
      ) {
        history.push("/main");
      }
    });
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
