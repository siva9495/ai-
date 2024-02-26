import React from 'react'
import { useHistory } from 'react-router-dom';
// import Header from "./header";
import Footer from './footer';

const Login = () => {

  const history = useHistory();

  const hanldeToSubmit = () => {
    history.push('/details');
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "space-around",
          background:
            "linear-gradient(91deg, rgb(0, 63, 125) 0%, rgb(0, 2, 66) 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            maxWidth: "400px",
          }}
        >
          <div>
            <h1>SurgiView</h1>
            <h6 style={{ marginTop: "-25px" }}>
              Live Surgical Procedrue _____
            </h6>
            <p>
              Dive into the world of surgery with real-time procedures,
              providing an intimate view of the operating room, empowering
              medical education like never before.
            </p>
          </div>
        </div>
        <div className="signup-container">
          <form className="signup-form">
            {/* <h2>Login</h2> */}
            <img
              src="/kimslogo.jpg"
              alt="logo"
              height={150}
              style={{ margin: "-20px 0px" }}
            />
            <h3>Login </h3>
            <h4 style={{ marginTop: "-10px" }}>
              Welcome to SurgiView a live surgical procedure___
            </h4>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
              <button type="submit" onClick={hanldeToSubmit}>Login</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;