import "./App.css";
import Navbar from "./Components/utils/Navbar/Navbar";
import Footer from "./Components/utils/Footer/Footer";
import Home from "./Components/Home/Home";
import Tutorials from "./Components/Tutorials/Tutorials";
import Tests from "./Components/Tests/Tests";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="parent-body">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tutorials" element={<Tutorials />}></Route>
        <Route path="/tests" element={<Tests />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
