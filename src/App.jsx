import React from "react";
import "./App.css";
import Bg from "./assets/bg.png";
import Logo from "./assets/logo.png";

export default function App() {
  return (
    <div className="mainn">
      <img src={Bg} alt="" className="leftDiv" />
      <div className="rightDiv">
        <img src={Logo} alt="" className="logo" />
        <form action="">
          <div className="formLabel">
            <h1>Sign Up</h1>
            <p>
              OR <a href="">SignIn</a>
            </p>
          </div>

          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="text" name="" placeholder="Re-enter password" />

          <div className="forgetDiv">
            <div className="checkbox">
              <input type="checkbox" />
              <label htmlFor="">RememberMe</label>
            </div>

            <a href="">Forgot Password?</a>
          </div>

          <button>Log In</button>
        </form>
      </div>
    </div>
  );
}
