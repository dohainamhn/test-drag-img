import React from "react";
import { useGoogleLogin, GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import axiosClient from "../../../apis/axiosClient";
import constantAction from "../../../constansts";
import { Signin } from "../../../actions/auth.action";

import "../auth.scss";

function Login(props) {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const responseSuccessGoogle = (res) => {
    console.log(res);
    dispatch(Signin(res.tokenId, res.profileObj.imageUrl));
  };
  const responseFailureGoogle = (res) => {
    console.log(res);
  };
  if (auth.authenticate === true) {
    history.push("/main");
  }
  return (
    <main className="main">
      <div className="container">
        <section className="wrapper">
          <div className="heading">
            <h1 className="text text-large">Sign In</h1>
          </div>
          <div className="striped">
            <span className="striped-line"></span>
            <span className="striped-text">Or</span>
            <span className="striped-line"></span>
          </div>
          <div className="method">
            <div className="method-control">
              <a href="#" className="method-action">
                <GoogleLogin
                  clientId="554778092924-pdk065lnmfrp33vbv5mukdkike39ptup.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseSuccessGoogle}
                  onFailure={responseFailureGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
