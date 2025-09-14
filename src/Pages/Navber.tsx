import { NavLink } from "react-router-dom";
import ThemeToggle from "../Pages/Home/ThemeToggle/ThemeToggle";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="text-gray-900 dark:text-white px-6 py-4 flex justify-between items-center shadow-md transition-colors duration-300"
      style={{
        backgroundColor: "var(--navbar-bg)",
      }}
    >
      {/* Dynamic background via CSS variables */}
      <style>
        {`
          :root {
            --navbar-bg: #FAF9EE; /* Light mode */
          }
          .dark {
            --navbar-bg: #000000; /* Dark mode */
          }
        `}
      </style>

      {/* Logo / Brand */}
      <h1 className="text-2xl font-bold tracking-wide">Mainur Rahat</h1>

      {/* Navigation Links */}
      <div className="space-x-6 hidden md:flex">
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
      </div>

      {/* Right Side: Theme Toggle + Resume */}
      <div className="flex items-center space-x-4">
        <ThemeToggle />

        <NavLink
          to="/resume"
          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors px-4 py-2 rounded-lg"
        >
          Resume
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
