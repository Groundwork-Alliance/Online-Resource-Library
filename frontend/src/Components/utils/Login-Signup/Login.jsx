import React from "react";
import LoginNavbar from "../Navbar/LoginNavbar";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let [userEmail, setUseremail] = React.useState("");
  let [userPassword, setPassword] = React.useState("");
  let [success, setSuccess] = React.useState([]);
  let [failed, setFailed] = React.useState([1, 2, 3, 4]);
  const history = useNavigate();
  React.useEffect(() => {
    if (success.length !== 0) {
      notify();
      history("/home");
      setSuccess([]);
    } else if (failed.length === 0) {
      notify();
      setFailed([1, 2, 3, 4]);
    }
  });

  const submitLoginForm = (e) => {
    const url = `http://localhost:8080/login`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        userEmail: userEmail,
        password: userPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.setItem("userData", JSON.stringify(data));
        setSuccess(data);
        setFailed(data);
      });
    e.preventDefault();
    e.target.reset();
  };

  const notify = () => {
    if (success.length !== 0) {
      toast(
        "Login successfull ! Wait for a moment we are redirecting you to our main page"
      );
    } else if (failed.length === 0) {
      toast("Login failed ! Please try again");
    }
  };

  const updateState = (e) => {
    if (e.target.name === "email") {
      setUseremail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

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
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        hideProgressBar={false}
      />
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
          <form action="" onSubmit={submitLoginForm}>
            <label htmlFor="" className="form-label mt-1">
              E-mail Address
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={updateState}
            />
            <label htmlFor="" className="form-label mt-1">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={updateState}
            />
            <button
              type="submit"
              className="btn search mt-3 mb-3"
              style={loginButton}
            >
              Login
            </button>
            <p className="text-center">
              <a href="/signup" style={{ textDecoration: "none" }}>
                Forgot passowrd ?
              </a>
            </p>
            <p className="text-center">
              <a href="/signup" style={{ textDecoration: "none" }}>
                New user maybe? click here to signup
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
