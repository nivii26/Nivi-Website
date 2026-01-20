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

  return (
    <header className="nav-wrap">
      <nav className="nav-inner">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <span className="nav-icon" aria-hidden="true">
              {l.icon}
            </span>
            <span className="nav-text">{l.label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
