import React, { useContext } from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { dataContext } from "./context";

const Login = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(dataContext);
  const handleSignIn = () => {
    //sign in
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: actionTypes.SET_USER, payload: result.user });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.usepng.com/wp-content/uploads/2020/03/509-5094426_facebook-twitter-instagram-pinterest-facebook-logo-in-circle-1024x1024.png"
          alt=""
        />
        <img
          src="https://p.kindpng.com/picc/s/108-1081803_facebook-logo-type-png-transparent-png.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={handleSignIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
