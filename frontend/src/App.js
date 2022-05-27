import "./App.css";
import Navbar from "./Components/utils/Navbar/Navbar";
import User from "./User";
import Login from "./Components/utils/Login-Signup/Login";
import Home from "./Components/Home/Home";
import Tutorials from "./Components/Tutorials/Tutorials";
import Tests from "./Components/Tests/Tests";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import FAQ from "./Components/utils/FAQ/FAQ";
import Profile from "./Components/utils/Profile/Profile";
import TutorialsPage from "./Components/utils/tutorial/TutorialsPage";
import Footer from "./Components/utils/Footer/Footer";
import AdminHome from "./Components/Admin/AdminHome";
import Summery from "./Components/Admin/Summery";
import AllTests from "./Components/Admin/AllTests";
import AllUsers from "./Components/Admin/AllUsers";
import AllTutorials from "./Components/Admin/AllTutorials";
import { Routes, Route } from "react-router-dom";
import AdminNavbar from "./Components/utils/Navbar/AdminNavbar";

function App() {
  return (
    <div className="parent-body">
      {/* <Navbar /> */}
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tutorials" element={<Tutorials />}></Route>
        <Route path="/tests" element={<Tests />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/tutorial/:id" element={<TutorialsPage />}></Route>
        {/* admin switch to index file */}
        <Route path="/admin" element={<AdminHome />}></Route>
        <Route path="/summery" element={<Summery />}></Route>
        <Route path="/alltutorials" element={<AllTutorials />}></Route>
        <Route path="/allusers" element={<AllUsers />}></Route>
        <Route path="/alltests" element={<AllTests />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
