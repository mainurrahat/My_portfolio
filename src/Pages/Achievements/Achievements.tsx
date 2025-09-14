// src/components/Achievements.jsx
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Completed Competitive Programming Bootcamp (Beginner) SP-23",
    desc: "Organized by IIUCCPS in Spring-23",
    img: "../../../src/assets/A1.jpg",
  },
  {
    title: "Best Solver & Top Performer in Bootcamp",
    desc: "Organized by IIUCCPS in Autumn-23",
    img: "../../../src/assets/A2.jpg",
  },
  {
    title: "6th Place in IIUC Intra Junior Programming Contest",
    desc: "Click to view standing",
    link: "https://example.com/standing",
    img: "../../../src/assets/A3.jpg",
  },
  {
    title: "Mentor - SP23 Bootcamp",
    desc: "Served as a mentor guiding juniors",
    img: "../../../src/assets/A4.jpg",
  },
  {
    title: "Best Mentor Badge (SP23)",
    desc: "",
    img: "../../../src/assets/A5.jpg",
  },
  {
    title: "Completed Frontend Course",
    desc: "From Edge Course",
    img: "../../../src/assets/A6.png",
  },
  {
    title: "Problem Solving Basic - HackerRank",
    desc: "",
    img: "../../../src/assets/A7.png",
  },
  {
    title: "Completed Go Programming",
    desc: "From Mind Luster",
    img: "../../../src/assets/A8.jpg",
  },
  {
    title: "AI+ Prompt Engineer Level 1™",
    desc: "From AI Certs",
    img: "../../../src/assets/A9.png",
  },
];

const Achievements = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <h2 className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
        Achievements 🏆
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative rounded-3xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg shadow-xl border border-white/20 overflow-hidden group"
          >
            {/* Image with zoom hover */}
            <div className="overflow-hidden">
              <a
                href={ach.link ? ach.link : ach.img} // if link exists, open link, else open image itself
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ach.img}
                  alt={ach.title}
                  className="w-full h-72 object-cover rounded-t-3xl transform group-hover:scale-110 transition duration-500"
                />
              </a>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-indigo-500 transition">
                {ach.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {ach.desc}
              </p>

              {ach.link && (
                <a
                  href={ach.link}
                  target="_blank"
                  className="mt-5 inline-block px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 transition"
                >
                  🔗 View More
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
