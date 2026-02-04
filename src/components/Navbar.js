import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { FiUser, FiFileText } from "react-icons/fi";
import { LuFolderKanban } from "react-icons/lu";
import { MdOutlineAutoStories } from "react-icons/md";
import "./Navbar.css";

export default function Navbar() {
  const links = [
    { to: "/", label: "Home", icon: <HiOutlineHome /> },
    { to: "/about", label: "About", icon: <FiUser /> },
    { to: "/projects", label: "Projects", icon: <LuFolderKanban /> },
    { to: "/resume", label: "Resume", icon: <FiFileText /> },
    { to: "/publications", label: "Conferences & Research", icon: <MdOutlineAutoStories /> },
  ];
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="nav-wrap" ref={containerRef}>
      <nav className="nav-inner">
       <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className={`hamburger ${open ? "open" : ""}`} aria-hidden="true"></span>
        </button>
       

        <div className="nav-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              <span className="nav-icon" aria-hidden="true">{l.icon}</span>
              <span className="nav-text">{l.label}</span>
            </NavLink>
          ))}
        </div>
        {/* centered brand/title (visible on mobile) */}
        <div className="nav-brand" aria-hidden={open ? "true" : "false"}>
          <NavLink to="/" className="nav-item nav-brand-link">
            <img src="/WebsiteLogo.png" alt="Nivi logo" className="nav-brand-logo" />
            <span className="nav-brand-text">Nivi</span>
          </NavLink>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="mobile-menu" role="menu">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `nav-item-mobile ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
              role="menuitem"
            >
              <span className="nav-icon" aria-hidden="true">{l.icon}</span>
              <span className="nav-text">{l.label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );



}
