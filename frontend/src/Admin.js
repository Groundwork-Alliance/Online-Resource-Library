import React from "react";
import { Routes, Route } from "react-router-dom";
import Summery from "./Components/Admin/Summery";
import AllTutorials from "./Components/Admin/AllTutorials";
import AllUsers from "./Components/Admin/AllUsers";
import AllTests from "./Components/Admin/AllTests";
import Alladmins from "./Components/Admin/Alladmins";
import AdminNavbar from "./Components/utils/Navbar/AdminNavbar";
import Footer from "./Components/utils/Footer/Footer";

export default function Admin() {
  return (
    <div className="parent-body d-flex flex-column min-vh-100">
      <AdminNavbar />
      <Routes>
        <Route path="/home" element={<Summery />}></Route>
        <Route path="/alltutorials" element={<AllTutorials />}></Route>
        <Route path="/allusers" element={<AllUsers />}></Route>
        <Route path="/alladmins" element={<Alladmins />}></Route>
        <Route path="/alltests" element={<AllTests />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
