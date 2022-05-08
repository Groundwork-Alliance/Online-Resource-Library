import React from "react";
import HeaderBwlowNav from "../utils/Navbar/HeaderBelowNav";
export default function Tutorials() {
  return (
    <div>
      <div className="p-5" style={{ position: "relative", left: "18%" }}>
        <p style={{ fontSize: "20px", color: "#001d42" }}>
          Search for the tutorial here
        </p>
        <form action="#">
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" />
            </div>
            <div className="col">
              <button type="submit" className="btn search">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <HeaderBwlowNav page={"Tutorials"} />
      {/* main section for all the tutorials */}
      <div className="mt-5">
        <div
          className="row gap-4 p-5"
          style={{ position: "relative", left: "10%" }}
        >
          <div
            className="col-md-3 border rounded border-1 border-dark p-3"
            style={{ textAlign: "center", backgroundColor: "#F4F7FA" }}
          >
            <div style={{ padding: "5%" }} className="h1">
              JAva
            </div>
            <button className="btn search">Watch Tutorial</button>
          </div>
          <div
            className="col-md-3 border rounded border-1 border-dark p-3"
            style={{ textAlign: "center", backgroundColor: "#F4F7FA" }}
          >
            <div style={{ padding: "5%" }} className="h1">
              Cloud Comp[uting]
            </div>
            <button className="btn search">Watch Tutorial</button>
          </div>
          <div
            className="col-md-3 border rounded border-1 border-dark p-3"
            style={{ textAlign: "center", backgroundColor: "#F4F7FA" }}
          >
            <div style={{ padding: "5%" }} className="h1">
              Python
            </div>
            <button className="btn search">Watch Tutorial</button>
          </div>
          <div
            className="col-md-3 border rounded border-1 border-dark p-3"
            style={{ textAlign: "center", backgroundColor: "#F4F7FA" }}
          >
            <div style={{ padding: "5%" }} className="h1">
              Python
            </div>
            <button className="btn search">Watch Tutorial</button>
          </div>
          <div
            className="col-md-3 border rounded border-1 border-dark p-3"
            style={{ textAlign: "center", backgroundColor: "#F4F7FA" }}
          >
            <div style={{ padding: "5%" }} className="h1">
              Python
            </div>
            <button className="btn search">Watch Tutorial</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* <div className="tutorialsContainer">
          <button
            style={{ textAlign: "center" }}
            className="border rounded border-1"
          >
            Python
          </button>
          </div> */
