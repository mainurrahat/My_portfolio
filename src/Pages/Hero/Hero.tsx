import { motion } from "framer-motion";
import myPhoto from "../../assets/rht.jpg";

// Import your social icons (or use react-icons)
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";

const Hero = () => {
  const socials = [
    { icon: <FaGithub />, link: "https://github.com/yourusername" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourusername" },
    { icon: <FaFacebook />, link: "https://facebook.com/yourusername" },
    { icon: <FaTwitter />, link: "https://twitter.com/yourusername" },
    { icon: <FaDiscord />, link: "https://discord.com/users/yourid" },
    { icon: <FaEnvelope />, link: "mailto:mainurrahat178@gmail.com" },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#FAF9EE] dark:bg-[#000000]">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center md:justify-between gap-24">
        {/* Left side - Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            H!, I'm <span className="text-blue-500">Mainur Islam Rahat</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-800 dark:text-gray-300">
            Full-Stack Developer | Problem Solver | Learner | AI & ML Enthusiast
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-400">
            I build modern web applications with beautiful UI and robust
            backend.
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <motion.a
              href="#projects"
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See My Work
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-6 gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full text-xl text-black dark:text-white hover:bg-blue-500 hover:text-white transition"
                whileHover={{ scale: 1.2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right side - Picture */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={myPhoto}
            alt="Mainur Rahat"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-500 shadow-xl"
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
