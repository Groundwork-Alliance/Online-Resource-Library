import React from "react";
import LoginNavbar from "../Navbar/LoginNavbar";
import Footer from "../Footer/Footer";
export default function Login() {
  const loginForm = {
    backgroundColor: "#FAF9FA",
    marginTop: "10%",
    marginBottom: "13%",
    width: "30%",
  };
  const loginButton = {
    marginLeft: "40%",
  };

  return (
    <div className="loginBackground">
      <LoginNavbar />
      <div>
        <div style={loginForm} className="container border rounded">
          <h1
            style={{ color: "#001d42", fontWeight: "700" }}
            className="text-center mt-1"
          >
            Login
          </h1>
          <h4 style={{ color: "#001d42" }} className="text-center">
            To access the Resources
          </h4>
          <form action="">
            <label htmlFor="" className="form-label mt-1">
              E-mail Address
            </label>
            <input type="text" className="form-control" />
            <label htmlFor="" className="form-label mt-1">
              Password
            </label>
            <input type="email" className="form-control" />
            <button
              type="submit"
              className="btn search mt-3 mb-3"
              style={loginButton}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
