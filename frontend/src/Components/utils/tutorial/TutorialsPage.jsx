import React from "react";
import { useParams } from "react-router-dom";
import HeaderBwlowNavbar from "../Navbar/HeaderBwlowNavbar";
import HeaderBelowNavForTutorial from "../Navbar/HeaderBelowNavForTutorial";
export default function TutorialsPage() {
  //   let { id } = useParams();

  return (
    <div className="mb-5">
      <HeaderBelowNavForTutorial page="python" />
      <div className="container w-75 mt-3" style={{ height: "500px" }}>
        {/* tutorial */}
        <iframe
          className="border rounded border-0"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/l185ClYWL4Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {/* caption and video courtesy */}
      </div>
      <div className="container w-75 mt-2">
        <p
          style={{
            textTransform: "capitalize",
            color: "rgb(0, 29, 66)",
            fontSize: "22px",
            fontWeight: "bolder",
            padding: "1% 1% 1% 1%",
            fontFamily: "Poppins,sans-serif ",
            letterSpacing: "1px",
          }}
          className="border border-2 rounded"
        >
          python-full course <br />
          <span style={{ fontWeight: "normal", fontSize: "15px" }}>
            video courtesy: Youtube
          </span>
        </p>
      </div>
      <div className="container w-75 mt-1 p-1">
        <div className="row gap-2 ms-2">
          <a
            href="https://books.goalkicker.com/DotNETFrameworkBook/DotNETFrameworkNotesForProfessionals.pdf"
            className="btn search"
            style={{ width: "22%" }}
            download
          >
            Download Free E-book
          </a>
          <a href="#" className="btn search" style={{ width: "20%" }}>
            Attempt Quiz
          </a>
        </div>
      </div>
    </div>
  );
}
