import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Functional from "./components/functional/Functional.jsx";
import FramerMotion from "./components/framermotion/FramerMotion.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/components/functional" element={<Functional />} />
      <Route path="/components/framermotion" element={<FramerMotion />} />
    </Routes>
  </Router>
);
