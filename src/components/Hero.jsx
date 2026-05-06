import {motion} from "framer-motion";
import {Github, Linkedin, Twitter, MapPin, Send} from "lucide-react";
import MyPhoto from "../assets/images/avatar/Adarshphoto.jpeg";

const Hero = () => {
  const IconData = [
    {icon: <Github size={20} />, href: "https://github.com/adarshh-h", label: "GitHub"},
    {icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/adarsh-gupta-036bb2249", label: "LinkedIn"},
    {icon: <Twitter size={20} />, href: "https://x.com/adarshh___h", label: "Twitter"},
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-file-user">
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M15 18a3 3 0 1 0-6 0" />
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
          <circle cx="12" cy="13" r="2" />
        </svg>
      ),
      href: "https://drive.google.com/file/d/1RSyRk8LXKdN4aU29oduO-_YW8EVK4y9m/view?usp=drivesdk",
      label: "Resume",
    },
  ];

  return (
    <motion.header className="min-h-screen relative flex flex-col items-center justify-center bg-gray-950/50 text-white" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
      {/* Hero Content */}
      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Profile Section */}
        <motion.div className="mb-4 flex items-center gap-3 w-fit mx-auto" initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}}>
          <img src={MyPhoto} alt="Profile" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gray-200 shadow-lg object-cover" />
          <div>
            <motion.h2
              className="font-mulish text-2xl sm:text-3xl text-gray-50 font-bold mb-1"
              whileHover={{scale: 1.05, color: "rgb(184 0 255)", textShadow: "0px 0px 20px rgba(59, 130, 246, 0.8)"}}
              transition={{duration: 0.3}}>
              Adarsh Gupta
            </motion.h2>
            <motion.div className="flex items-center gap-2 text-gray-400" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.4}}>
              <MapPin size={16} className="text-green-400" />
              <span className="text-xs sm:text-sm font-mulish">Based in New Delhi, India</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-8xl font-bold font-inter bg-gradient-to-r via-purple-700 from-cyan-600 to-pink-600 animate-gradient-x bg-clip-text text-transparent tracking-tight"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          style={{backgroundSize: "200% 200%"}}
          transition={{delay: 0.2}}>
          FULLSTACK
        </motion.h1>
        <motion.div className="flex items-center gap-1 md:gap-4 mb-8" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3}}>
          <h1 className="text-4xl md:text-8xl font-bold font-inter text-gray-50 tracking-wide">DEVELOPER</h1>
          <motion.a
            className="inline-flex animate-shimmer font-inter items-center gap-1 justify-center rounded-2xl border bg-[linear-gradient(110deg,#000103,45%,#4a6080,55%,#000103)] bg-[length:200%_100%] px-2 py-1 text-xs md:text-base md:font-medium text-gray-100 transition-colors"
            href="#contact"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}>
            <Send size={18} className="w-4 h-4" />
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div className="flex justify-center gap-6" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.5}}>
          {IconData.map((item, index) => (
            <motion.div key={index} className="relative group w-12 h-12">
              <motion.a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="w-12 h-12 rounded-full bg-gray-900/20 border border-gray-200 shadow-lg flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transform transition-all duration-300"
                whileHover={{scale: 1.2, rotate: -12}}
                whileTap={{scale: 0.95}}>
                {item.icon}
              </motion.a>

              {/* Tooltip */}
              <div className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 bg-transparent border text-white text-xs font-semibold py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Glow */}
      <motion.div className="absolute inset-0 z-0" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
        <div className="absolute w-[300px] h-[300px] bg-blue-500 rounded-full blur-3xl opacity-20 left-16"></div>
        <div className="absolute w-[250px] h-[250px] bg-purple-500 rounded-full blur-3xl opacity-20 bottom-16 right-16"></div>
      </motion.div>
    </motion.header>
  );
};

export default Hero;