import axiosClient from "../apis/axiosClient";
import { authConstants } from "../constansts/index";

export const Signin = (tokenId, imgDefault) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });

    const res = await axiosClient.post("/auth/signin", {
      tokenId,
    });
    if (res.status !== 400) {
      console.log(res);
      const { token, user } = res;

      localStorage.setItem("token", token);
      localStorage.setItem("imgDefault", imgDefault);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};
