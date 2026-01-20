import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Publications from "./pages/Publications";


export default function App() {
  return (
    <div className="app-scale">
    <BrowserRouter>
      <Navbar />
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
