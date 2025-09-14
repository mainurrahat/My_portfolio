import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "../Pages/Home/ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutPage" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="text-gray-900 dark:text-white px-6 py-4 flex justify-between items-center shadow-md relative transition-colors duration-300"
      style={{ backgroundColor: "var(--navbar-bg)" }}
    >
      <style>
        {`
          :root {
            --navbar-bg: #FAF9EE;
          }
          .dark {
            --navbar-bg: #000000;
          }
        `}
      </style>

      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">Ma!nur Islam Rahat</h1>

      {/* Desktop Links */}
      <div className="space-x-6 hidden md:flex items-center">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "hover:text-blue-500 dark:hover:text-blue-300"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
        <NavLink
          to="/resume"
          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors px-4 py-2 rounded-lg"
        >
          Resume
        </NavLink>
      </div>

      {/* Right Side: Theme + Hamburger */}
      <div className="flex items-center md:hidden space-x-4">
        <ThemeToggle />
        <button
          className="text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FAF9EE] dark:bg-[#000000] shadow-lg flex flex-col items-center py-4 space-y-4 z-50">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "hover:text-blue-500 dark:hover:text-blue-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/resume"
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors px-4 py-2 rounded-lg"
          >
            Resume
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
