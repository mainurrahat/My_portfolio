import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/mainurrahat178",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/mainurrahat178/",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter size={24} />,
      href: "https://twitter.com/mainurrahat178",
      label: "Twitter",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer
      className="text-gray-800 dark:text-gray-200 py-12 transition-colors duration-300"
      style={{ backgroundColor: "var(--footer-bg)" }}
    >
      <style>
        {`
          :root {
            --footer-bg: #FAF9EE; /* Light mode */
          }
          .dark {
            --footer-bg: #000000; /* Dark mode */
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About / Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p className="flex items-center space-x-2">
            <FaEnvelope />
            <span>mainurrahat178@gmail.com</span>
          </p>
          <p className="flex items-center space-x-2 mt-2">
            <FaPhone />
            <span>+880 1234 567890</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink
                  to={link.path}
                  className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Follow Me</h2>
          <div className="flex space-x-4 mt-2">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Mainur Rahat. Built with React & Tailwind
        CSS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
