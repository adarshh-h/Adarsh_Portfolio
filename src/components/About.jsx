// import { motion } from "framer-motion";

// const stats = [
//   { value: "2+", label: "Years Experience" },
//   { value: "200+", label: "DSA Problems" },
//   { value: "4", label: "Projects Built" },
// ];

// const About = () => {
//   return (
//     <section id="about" className="relative">
//       <motion.section
//         className="z-10 py-20 px-8 bg-gray-800/50 w-full text-white"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="max-w-4xl mx-auto">
//           <h2
//             className="text-5xl text-white font-inter font-bold mb-8"
//             style={{ textShadow: "0px 0px 20px rgba(59, 130, 246, 0.8)" }}
//           >
//             About Me
//           </h2>

//           <div className="space-y-5 mb-10">
//             <p className="text-base text-gray-300 leading-relaxed font-mulish">
//               Hi, I'm{" "}
//               <span className="text-cyan-400 font-bold text-xl">Adarsh</span> — a
//               <span className="text-purple-400 font-bold text-xl"> Full Stack Developer </span>
//               specializing in the
//               <span className="text-green-400 font-bold text-xl"> MERN stack</span>.
//               I build responsive, scalable, and production-ready web applications
//               with a strong focus on clean architecture and user experience.
//             </p>

//             <p className="text-base text-gray-300 leading-relaxed font-mulish">
//               I'm passionate about creating
//               <span className="text-orange-400 font-bold"> modern</span>,
//               <span className="text-pink-400 font-bold"> robust</span> and
//               <span className="text-teal-400 font-bold"> user-friendly </span>
//               digital experiences — from microservices backends to polished frontends.
//             </p>
//           </div>

//           {/* Stat highlights */}
//           <motion.div
//             className="grid grid-cols-3 gap-4 max-w-sm"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//           >
//             {stats.map((stat) => (
//               <motion.div
//                 key={stat.label}
//                 className="bg-gray-900/60 border border-gray-700/50 rounded-xl p-4 text-center"
//                 whileHover={{ scale: 1.05, borderColor: "rgba(139,92,246,0.5)" }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <p className="text-2xl font-bold font-inter text-white">{stat.value}</p>
//                 <p className="text-xs text-gray-400 font-inter mt-1 leading-tight">{stat.label}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Background glows */}
//       <div className="absolute inset-0 z-0 grid grid-cols-2 pointer-events-none">
//         <div className="bg-gradient-to-tl from-transparent to-violet-500 opacity-25 blur-3xl" />
//         <div />
//         <div />
//         <div className="bg-gradient-to-br from-transparent to-blue-500 opacity-25 blur-3xl" />
//       </div>
//     </section>
//   );
// };

// export default About;


import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "DSA Problems" },
  { value: "10+", label: "Technologies" },
  { value: "4", label: "Projects Built" },
];

const About = () => {
  return (
    <section id="about" className="relative">
      <motion.section
        className="z-10 py-16 sm:py-20 px-4 sm:px-8 bg-gray-800/50 w-full text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl sm:text-5xl text-white font-inter font-bold mb-8"
            style={{ textShadow: "0px 0px 20px rgba(59, 130, 246, 0.8)" }}
          >
            About Me
          </h2>

          <div className="space-y-5 mb-10">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-mulish">
              Hi, I'm{" "}
              <span className="text-cyan-400 font-bold text-lg sm:text-xl">Adarsh</span> — a
              <span className="text-purple-400 font-bold text-lg sm:text-xl"> Full Stack Developer </span>
              specializing in the
              <span className="text-green-400 font-bold text-lg sm:text-xl"> MERN stack</span>.
              I build responsive, scalable, and production-ready web applications
              with a strong focus on clean architecture and user experience.
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-mulish">
              I'm passionate about creating
              <span className="text-orange-400 font-bold"> modern</span>,
              <span className="text-pink-400 font-bold"> robust</span> and
              <span className="text-teal-400 font-bold"> user-friendly </span>
              digital experiences — from microservices backends to polished frontends,
              actively seeking my first full-time developer role.
            </p>
          </div>

          {/* Stat highlights */}
          <motion.div
            className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xs sm:max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="bg-gray-900/60 border border-gray-700/50 rounded-xl p-3 sm:p-4 text-center"
                whileHover={{ scale: 1.05, borderColor: "rgba(139,92,246,0.5)" }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-xl sm:text-2xl font-bold font-inter text-white">{stat.value}</p>
                <p className="text-xs text-gray-400 font-inter mt-1 leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Background glows */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 pointer-events-none">
        <div className="bg-gradient-to-tl from-transparent to-violet-500 opacity-25 blur-3xl" />
        <div />
        <div />
        <div className="bg-gradient-to-br from-transparent to-blue-500 opacity-25 blur-3xl" />
      </div>
    </section>
  );
};

export default About;
