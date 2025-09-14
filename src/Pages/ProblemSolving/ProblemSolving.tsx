import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const platforms = [
  {
    name: "Codeforces",
    icon: <FaCode className="text-red-500 text-5xl" />,
    link: "https://codeforces.com/profile/mainurrahat47",
    stats: "910+ Problems | 68 Contests | Rating: 1147",
  },
  {
    name: "AtCoder",
    icon: <FaCode className="text-green-500 text-5xl" />,
    link: "https://atcoder.jp/users/mainurrahat47",
    stats: "23 Contests | Rating: 103",
  },
  {
    name: "CodeChef",
    icon: <FaCode className="text-orange-500 text-5xl" />,
    link: "https://www.codechef.com/users/mainurrahat47",
    stats: "130 Problems | 17 Contests",
  },
  {
    name: "LeetCode",
    icon: <FaCode className="text-yellow-500 text-5xl" />,
    link: "https://leetcode.com/u/mainurrahat47/",
    stats: "156 Problems | Rating: 1412",
  },
  {
    name: "CSES",
    icon: <FaCode className="text-blue-500 text-5xl" />,
    link: "https://cses.fi/user/136362",
    stats: "66+ Problems",
  },
  {
    name: "GeeksforGeeks",
    icon: <FaCode className="text-green-700 text-5xl" />,
    link: "https://www.geeksforgeeks.org/user/mainurrahat47/",
    stats: "Score: 86 | 52 Problems",
  },
  {
    name: "InterviewBit",
    icon: <FaCode className="text-indigo-500 text-5xl" />,
    link: "https://www.interviewbit.com/profile/mainur-rahat/",
    stats: "Total Score: 295",
  },
  {
    name: "HackerRank",
    icon: <FaCode className="text-emerald-500 text-5xl" />,
    link: "https://www.hackerrank.com/",
    stats: "Problem Solving & Certifications",
  },
  {
    name: "HackerEarth",
    icon: <FaCode className="text-purple-500 text-5xl" />,
    link: "https://www.hackerearth.com/",
    stats: "Practice & Contests",
  },
];

const ProblemSolving = () => {
  return (
    <section className="w-full bg-[#FAF9EE] dark:bg-[#000000] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-14"
        >
          Problem-Solving Activities
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {platforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center h-48"
            >
              {platform.icon}
              <h3 className="mt-5 text-lg font-semibold text-black dark:text-white">
                {platform.name}
              </h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                {platform.stats}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
