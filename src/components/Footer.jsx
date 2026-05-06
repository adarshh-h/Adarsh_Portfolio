// import React from "react";

// const Footer = () => {
//   return (
//     <div className="w-full py-20 px-8 bg-gray-800/50  h-full text-white">
//       <div className="max-w-4xl mx-auto bg-gray-950  font-mulish border rounded-lg p-6 flex flex-col md:flex-row justify-between">
//         <div className="logo flex flex-col justify-end mb-6 md:mb-0">
//           <p className="second-font text-5xl">
//             Adarsh
//             <br />
//             Gupta.
//           </p>
//         </div>
//         <div className="flex flex-row space-x-12">
//           <div className="menu mb-6 md:mb-0">
//             <h3 className="text-gray-200 font-medium font-mulish mb-4">Explore</h3>
//             <ul className="flex flex-col font-inter text-gray-400 font-light">
//               <li>
//                 <a href="/" className="hover:font-normal hover:underline hover:text-gray-200">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="hover:font-normal hover:underline hover:text-gray-200">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#projects" className="hover:font-normal hover:underline hover:text-gray-200">
//                   Projects
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="contacts">
//             <h3 className="text-gray-200 mb-4">Socials</h3>
//             <ul className="flex flex-col text-gray-400 font-inter font-light">
//               <li>
//                 <a href="mailto:adarshgupta0811@gmail.com" target="_blank" className="hover:underline hover:text-gray-200">
//                   Email
//                 </a>
//               </li>
//               <li>
//                 <a target="_blank" href="https://www.linkedin.com/in/adarsh-gupta-036bb2249" className="hover:underline hover:text-gray-200">
//                   LinkedIn
//                 </a>
//               </li>
//               <li>
//                 <a target="_blank" href="https://github.com/adarshh-h" className="hover:underline hover:text-gray-200">
//                   GitHub
//                 </a>
//               </li>
//               <li>
//                 <a target="_blank" href="https://x.com/adarshh___h" className="hover:underline hover:text-gray-200">
//                   Twitter
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="mt-4 max-w-4xl mx-auto text-gray-400 font-inter flex justify-between">
//         <p>© {new Date().getFullYear()}</p>
//         <p>Adarsh Gupta.</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 px-6 md:px-10 bg-gradient-to-b from-transparent to-black">
      <div className="max-w-5xl mx-auto border-t border-white/10 pt-12">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Adarsh Gupta
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed max-w-xs">
              Full Stack Developer building modern, scalable and user-focused web applications.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              {[{
                icon: <Mail size={18} />,
                href: "mailto:adarshgupta0811@gmail.com"
              }, {
                icon: <Github size={18} />,
                href: "https://github.com/adarshh-h"
              }, {
                icon: <Linkedin size={18} />,
                href: "https://linkedin.com"
              }].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Adarsh Gupta. All rights reserved.</p>

          <a
            href="#"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            Back to Top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;