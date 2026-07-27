import './App.css'

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Achievements from "./pages/Achievements";
import ParentsCorner from "./pages/ParentsCorner";
import StudentsCorner from "./pages/StudentsCorner";
import Alumni from "./pages/Alumni";
import Career from "./pages/Career";

import { Routes, Route, Navigate } from "react-router-dom";
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/academics" element={<Academics />} />

          <Route path="/admissions" element={<Admissions />} />

          <Route path="/achievements" element={<Achievements />} />

          <Route path="/parents" element={<ParentsCorner />} />

          <Route path="/students" element={<StudentsCorner />} />

          <Route path="/alumni" element={<Alumni />} />

          <Route path="/career" element={<Career />} />

          {/* Redirecting unknown routes to home  */}
          <Route path="*" element={<Navigate to="/" replace />} />
          
        </Routes>
      </div>

      <Footer/>
    </>
  );
}

export default App;
