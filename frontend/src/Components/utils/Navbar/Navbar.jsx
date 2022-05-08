import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
export default function Navbar() {
  const brandName = {
    color: "#001d42",
    textDecoration: "none",
    fontWeight: "700",
    position: "relative",
    fontSize: "50px",
    left: "9%",
  };
  const link = {
    color: "black",
    fontSize: "20px",
    fontWeight: "500",
  };
  return (
    <div className="sticky-top" style={{ backgroundColor: "#F4F7FA" }}>
      <div className="row">
        <div className="col-md-6">
          <Link to="/" className=" text-opacity-75" style={brandName}>
            ORL
            <span
              style={{
                fontWeight: "100",
                fontSize: "16px",
                position: "relative",
                bottom: "4px",
                left: "1px",
              }}
            >
              |Online Resource Library
            </span>
          </Link>
        </div>
        <div className="col-md-6 mt-2">
          <ul className="nav justify-content-end p-2 me-4">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/"
                style={link}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tutorials" style={link}>
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tests" style={link}>
                Tests
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={link}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={link}>
                Contact
              </Link>
            </li>
            <li>
              <div className="ms-2">
                <CgProfile size={"33px"} className="mt-1" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
