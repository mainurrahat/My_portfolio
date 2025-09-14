import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full bg-[#FAF9EE] dark:bg-[#000000] py-20 px-6">
      <div className="max-w-5xl  mx-auto text-center md:-mt-28">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            About Me
          </h2>

          <p className="mt-6 text-gray-800 dark:text-gray-300 text-lg md:text-xl">
            Hi! I'm{" "}
            <span className="font-semibold text-blue-500">
              Mainur Islam Rahat
            </span>
            ,a passionate Full-Stack Developer, problem solver, learner, and AI
            & ML enthusiast. I love building modern web applications with
            beautiful UI and robust backend solutions.
          </p>

          <p className="mt-4 text-gray-800 dark:text-gray-300 text-lg md:text-xl">
            I have done competitive programming and served as a mentor at
            IIUCCPS, where I also received the{" "}
            <span className="font-semibold text-blue-500">
              Best Mentor Award
            </span>
            .
          </p>

          <p className="mt-4 text-gray-800 dark:text-gray-300 text-lg md:text-xl">
            I love mentoring, enjoy learning, and constantly crave to explore
            new things and improve myself.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
