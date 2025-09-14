// src/components/AboutPage.tsx
import { motion } from "framer-motion";

const AboutPage = () => {
  const skills = {
    "Languages / Core Concepts": [
      "C++",
      "Python",
      "JavaScript",
      "TypeScript",
      "OOP",
      "GO",
    ],
    Frontend: ["HTML/CSS", "Tailwind CSS", "React"],
    Backend: ["Node.js", "Express.js"],
    Database: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"],
    "Problem Solving / Tools": [
      "DSA",
      "Problem Solving",
      "Pandas",
      "NumPy",
      "Git",
      "GitHub",
    ],
    "Deployment ": ["Vercel", "Netlify", "Render"],
  };

  return (
    <section className="w-full bg-[#FAF9EE] dark:bg-[#000000] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white">
            Ma!nur Islam Rahat
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Full-Stack Developer | AI & ML Enthusiast | Competitive Programmer
          </p>
        </motion.div>

        {/* Career Goals & Professional Drive */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Career Goals & Motivation
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
            I am passionate about building modern web applications with scalable
            backend solutions and intuitive UI. My focus is on leveraging AI/ML
            to solve real-world problems while continuing to grow as a
            Full-Stack Developer. I thrive in problem-solving, competitive
            programming, and mentoring others in tech.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Education
          </h2>
          <ul className="text-gray-700 dark:text-gray-300 text-lg md:text-xl list-disc list-inside space-y-2">
            <li>
              B.Sc. in Computer Science and Engineering – International Islamic
              University, Expected Graduation: 2026
            </li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12 px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-8">
            Technical Skills
          </h2>

          {Object.entries(skills).map(([category, list], idx) => (
            <div key={idx} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3 text-center md:text-left">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {list.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full font-medium text-sm md:text-base hover:scale-105 transition transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Personal Story / Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Personal Story & Values
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
            I love learning continuously, exploring new technologies, and
            mentoring others. Coding and problem-solving are my current
            passions, and I am eager to learn and grow in AI/ML. I believe in
            creating meaningful projects that combine technology with
            creativity, and I always strive to improve myself and help others
            grow in their journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
