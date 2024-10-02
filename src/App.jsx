import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MeetMike from "./pages/MeetMike/MeetMike";
import Testimonials from "./pages/Testimonials/Testimonials";
import Programs from "./pages/Programs/Programs";
import Contact from "./pages/Contact/Contact";

import "./App.css";
import "./styles/fonts.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet-mike" element={<MeetMike />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
