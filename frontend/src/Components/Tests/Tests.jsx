import React from "react";
import HeaderBwlowNav from "../utils/Navbar/HeaderBelowNav";
export default function Tests() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 2, 33, 3, 4, 4, 4, 5];
  return (
    <div>
      <div className="p-5" style={{ position: "relative", left: "18%" }}>
        <p style={{ fontSize: "20px", color: "#001d42" }}>
          Search for the test here
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
      <HeaderBwlowNav page={"Tests"} />
      <div className="p-5">
        {arr.map((v) => {
          return (
            <div
              className="border border-1 rounded  w-75 p-3 container mt-3"
              style={{ backgroundColor: "#F4F7FA" }}
            >
              <div className="row">
                <div className="col-md-8 h3">Python</div>
                <div className="col-md-4">
                  <button
                    value={v}
                    className="btn btn-success float-end"
                    onClick={(e) => {
                      console.log(e.target.value);
                    }}
                  >
                    Attempt Test
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
