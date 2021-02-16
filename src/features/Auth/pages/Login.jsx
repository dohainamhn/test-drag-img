import React from 'react';
import { useGoogleLogin, GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router"
import axiosClient from "../../../apis/axiosClient";
import constantAction from "../../../constansts";
import {Signin} from "../../../actions/auth.action"

import '../auth.scss'



function Login(props) {
    const auth = useSelector((state) => state.auth);
    console.log(auth)
    const dispatch = useDispatch();
    const history = useHistory();
    const responseSuccessGoogle = (res) => {
        console.log(res);
        dispatch(Signin(res.tokenId, res.profileObj.imageUrl))
    }
    const responseFailureGoogle = (res) => {
        console.log(res);
    }
    if (auth.authenticate === true) {
        history.push("/main");
    }
    return (
        <main class="main">
            <div class="container">
                <section class="wrapper">
                    <div class="heading">
                        <h1 class="text text-large">Sign In</h1>
                    </div>
                    <div class="striped">
                        <span class="striped-line"></span>
                        <span class="striped-text">Or</span>
                        <span class="striped-line"></span>
                    </div>
                    <div class="method">
                        <div class="method-control">
                            <a href="#" class="method-action">
                                <GoogleLogin
                                    clientId="554778092924-pdk065lnmfrp33vbv5mukdkike39ptup.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={responseSuccessGoogle}
                                    onFailure={responseFailureGoogle}
                                    cookiePolicy={'single_host_origin'}
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