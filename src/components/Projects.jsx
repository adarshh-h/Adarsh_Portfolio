import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Github, ChevronLeft, ChevronRight, X, ExternalLink} from "lucide-react";

import WebIcon from "../assets/images/logos/web-icon.svg";

import Library1 from "../assets/images/projects/library1.png";
import Library2 from "../assets/images/projects/library2.png";
import Library3 from "../assets/images/projects/library.png";
import Ride from "../assets/images/projects/ride.png";
import Vote from "../assets/images/projects/vote.png";
import Blog from "../assets/images/projects/blog.png";

import ReactJs from "../assets/images/logos/react-js.svg";
import Javascript from "../assets/images/logos/javascript.svg";
import Nodejs from "../assets/images/logos/nodejs.svg";
import Mongodb from "../assets/images/logos/mongodb.svg";
import Express from "../assets/images/logos/express-js.svg";
import RabbitMQ from "../assets/images/logos/rabbitmq.png";

const projects = [
  {
    title: "HNBGU Library System",
    type: "Full Stack",
    description: "Production-ready library management system built for my college CSE department and used for real-world library operations.",
    detailedDescription: "Engineered a full-stack library management system for my college department based on real faculty requirements. Implemented secure authentication, admin dashboard, issue/return workflow, due-date tracking, and automated email reminders.",
    features: [
      "JWT Authentication with Refresh Tokens",
      "Role-Based Access Control (Admin / Student)",
      "Book Issue & Return Management",
      "Due Date Tracking + Borrowing History",
      "Automated Due-Date Reminder Emails",
      "Advanced Search / Filtering / Categorization",
    ],
    images: [Library1, Library2, Library3],
    WebLink: "https://hnbgu-library-portal-alpha.vercel.app/",
    GitLink: "https://github.com/adarshh-h/HNBGU-Library-Portal.git",
    technologies: [
      { imgSrc: ReactJs, bgClass: "bg-blue-400/30", borderClass: "border-blue-300", shadowClass: "hover:shadow-[0_0_5px_3px_rgba(59,130,246,0.5)]" },
      { imgSrc: Javascript, bgClass: "bg-yellow-400/50", borderClass: "border-yellow-400", shadowClass: "hover:shadow-[0_0_5px_3px_#7e6913]" },
      { imgSrc: Mongodb, bgClass: "bg-green-400/50", borderClass: "border-green-400", shadowClass: "hover:shadow-[0_0_5px_3px_#267249]" },
      { imgSrc: Express, bgClass: "bg-gray-300", borderClass: "border-gray-50", shadowClass: "hover:shadow-[0_0_5px_3px_#d1d5db]" },
      { imgSrc: Nodejs, bgClass: "bg-green-400/50", borderClass: "border-green-400", shadowClass: "hover:shadow-[0_0_5px_3px_#267249]" },
    ],
  },
  {
    title: "Ride Booking Microservices",
    type: "Backend",
    description: "Scalable ride booking backend built with microservices architecture, RabbitMQ, and API Gateway.",
    detailedDescription: "Architected a scalable microservices-based ride booking platform with separate User, Captain, and Ride services. Implemented API Gateway routing, RabbitMQ async communication, and complete ride lifecycle management.",
    features: [
      "Microservices Architecture",
      "RabbitMQ Async Messaging",
      "API Gateway with Express Proxy",
      "Ride Lifecycle Management",
      "Real-Time Ride Updates",
      "Loose Coupled Service Communication",
    ],
    images: [Ride],
    WebLink: null,
    GitLink: "https://github.com/adarshh-h/Ride-Booking-Microservice.git",
    technologies: [
      { imgSrc: Nodejs, bgClass: "bg-green-400/50", borderClass: "border-green-400", shadowClass: "hover:shadow-[0_0_5px_3px_#267249]" },
      { imgSrc: Express, bgClass: "bg-gray-300", borderClass: "border-gray-50", shadowClass: "hover:shadow-[0_0_5px_3px_#d1d5db]" },
      { imgSrc: Mongodb, bgClass: "bg-green-400/50", borderClass: "border-green-400", shadowClass: "hover:shadow-[0_0_5px_3px_#267249]" },
      { imgSrc: RabbitMQ, bgClass: "bg-orange-500/30", borderClass: "border-orange-400", shadowClass: "hover:shadow-[0_0_5px_3px_rgba(249,115,22,0.4)]" },
    ],
  },
  {
    title: "Share Your Vote",
    type: "Full Stack",
    description: "Secure MERN-stack online voting system with candidate management and result tracking.",
    detailedDescription: "Developed a secure online voting platform with JWT authentication, candidate management, real-time result tracking, and duplicate vote prevention.",
    features: [
      "JWT Authentication",
      "bcrypt Password Security",
      "Admin Candidate Management",
      "Real-Time Result Tracking",
      "Duplicate Vote Prevention",
    ],
    images: [Vote],
    WebLink: "https://online-voting-system-sepia.vercel.app/",
    GitLink: "https://github.com/adarshh-h/Online-Voting-System.git",
    technologies: [
      { imgSrc: ReactJs, bgClass: "bg-blue-400/30", borderClass: "border-blue-300", shadowClass: "hover:shadow-[0_0_5px_3px_rgba(59,130,246,0.5)]" },
      { imgSrc: Nodejs, bgClass: "bg-green-400/50", borderClass: "border-green-400", shadowClass: "hover:shadow-[0_0_5px_3px_#267249]" },
      { imgSrc: Mongodb, bgClass: "bg-green-400/50", borderClass: "border-green-400", shadowClass: "hover:shadow-[0_0_5px_3px_#267249]" },
    ],
  },
  {
    title: "Blog Platform",
    type: "Full Stack",
    description: "Modern full-stack blogging platform with authentication and rich content management.",
    detailedDescription: "Built a MERN stack blog platform featuring authentication, post creation/editing, image uploads, and user-specific content management.",
    features: [
      "JWT Authentication",
      "Rich Text Blog Editor",
      "Image Upload Support",
      "Edit/Delete Own Posts",
      "Responsive Design",
    ],
    images: [Blog],
    WebLink: "https://profound-sprinkles-22fdf2.netlify.app/",
    GitLink: "https://github.com/adarshh-h/BlogApp-backend.git",
    technologies: [
      { imgSrc: ReactJs, bgClass: "bg-blue-400/30", borderClass: "border-blue-300", shadowClass: "hover:shadow-[0_0_5px_3px_rgba(59,130,246,0.5)]" },
      { imgSrc: Nodejs, bgClass: "bg-green-400/50", borderClass: "border-green-400", shadowClass: "hover:shadow-[0_0_5px_3px_#267249]" },
      { imgSrc: Mongodb, bgClass: "bg-green-400/50", borderClass: "border-green-400", shadowClass: "hover:shadow-[0_0_5px_3px_#267249]" },
    ],
  },
];

const typeBadgeClass = {
  "Full Stack": "bg-blue-500/20 text-blue-300 border border-blue-500/30",
  "Backend": "bg-orange-500/20 text-orange-300 border border-orange-500/30",
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // ImageSlider defined inside Projects like Mayank — same exact style
  const ImageSlider = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = (e) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
      <div className="relative">
        <motion.div
          key={currentIndex}
          initial={{opacity: 0, x: 100}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: -100}}
          whileHover={{scale: 1.05}}
          transition={{duration: 0.5}}
          className="w-full h-48">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full h-full object-cover rounded-lg" loading="lazy" />
        </motion.div>

        {/* Only show controls if more than 1 image */}
        {images.length > 1 && (
          <>
            <button onClick={handlePrev} aria-label="Previous image" className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
              <ChevronLeft size={20} />
            </button>
            <button onClick={handleNext} aria-label="Next image" className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <section id="projects" className="py-20 px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-bold text-white mb-12"
            style={{textShadow: "0px 0px 20px rgba(59, 130, 246, 0.8)"}}>
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-950 rounded-xl shadow-lg p-2 md:p-4 overflow-hidden border border-gray-100 transform-gpu transition-all duration-500 cursor-pointer"
                style={{perspective: 1000}}
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                onClick={() => setSelectedProject(project)}>

                <motion.div
                  className="relative flex flex-col justify-between h-full rounded-xl"
                  whileHover={{
                    rotateX: 20,
                    rotateY: 10,
                    scale: 1.03,
                    boxShadow: "0 20px 50px rgba(59, 130, 246, 0.5)",
                  }}
                  transition={{duration: 0.6, ease: [0.25, 0.8, 0.25, 1]}}>

                  {/* Image / Slider */}
                  <div>
                    <ImageSlider images={project.images} />

                    <div className="p-3">
                      {/* Badge */}
                      <span className={`text-xs px-2 py-0.5 rounded-full font-inter font-medium mb-2 inline-block ${typeBadgeClass[project.type]}`}>
                        {project.type}
                      </span>

                      <motion.h3
                        className="text-2xl font-semibold font-mulish text-white mb-3"
                        whileHover={{scale: 1.1, translateZ: 20}}
                        transition={{duration: 0.3}}>
                        {project.title}
                      </motion.h3>

                      <motion.p
                        className="text-gray-400 font-inter text-sm mb-4"
                        whileHover={{translateZ: 15, scale: 1.03}}
                        transition={{duration: 0.3}}>
                        {project.description}
                      </motion.p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex items-center flex-wrap p-3 gap-2">
                    {project.technologies.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className={`p-2 w-fit rounded-lg border ${item.bgClass} ${item.borderClass} ${item.shadowClass}`}
                        whileHover={{scale: 1.2, translateZ: 10}}
                        transition={{duration: 0.3}}>
                        <img src={item.imgSrc} className="w-6 h-6 object-contain" alt="" loading="lazy" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Links */}
                  <div
                    className="flex items-center justify-between p-3"
                    onClick={(e) => e.stopPropagation()}>
                    <motion.a
                      className="flex items-center gap-2 bg-gray-100 text-black text-sm font-inter font-medium px-4 py-2 rounded-lg transition-all hover:bg-gray-300 duration-300"
                      href={project.GitLink}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{scale: 1.05, translateZ: 15}}
                      transition={{duration: 0.3}}>
                      <Github className="w-4 h-4" />
                      GitHub
                    </motion.a>

                    {project.WebLink && (
                      <motion.a
                        href={project.WebLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-gray-100 text-black text-sm font-inter font-medium px-4 py-2 rounded-lg transition-all hover:bg-gray-300 duration-300"
                        whileHover={{scale: 1.05, translateZ: 15}}
                        transition={{duration: 0.3}}>
                        <img src={WebIcon} alt="web-icon" className="w-4 h-4" />
                        Website
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={() => setSelectedProject(null)}>
            <motion.div
              className="bg-gray-950 border border-gray-700/60 rounded-2xl max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
              initial={{scale: 0.92, opacity: 0, y: 30}}
              animate={{scale: 1, opacity: 1, y: 0}}
              exit={{scale: 0.92, opacity: 0, y: 30}}
              transition={{duration: 0.3, ease: [0.25, 0.8, 0.25, 1]}}
              onClick={(e) => e.stopPropagation()}>

              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition p-1 rounded-lg hover:bg-gray-800">
                <X size={20} />
              </button>

              <motion.img
                src={selectedProject.images[0]}
                alt={selectedProject.title}
                className="w-full h-56 object-cover rounded-xl mb-5"
                initial={{opacity: 0, scale: 1.03}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.4}}
                loading="lazy"
              />

              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs px-2 py-0.5 rounded-full font-inter font-medium ${typeBadgeClass[selectedProject.type]}`}>
                  {selectedProject.type}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{selectedProject.title}</h3>

              <p className="text-gray-400 leading-relaxed mb-5 text-sm">{selectedProject.detailedDescription}</p>

              <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Key Features</h4>
              <ul className="space-y-1.5 text-gray-400 text-sm mb-5">
                {selectedProject.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-2"
                    initial={{opacity: 0, x: -10}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: idx * 0.05}}>
                    <span className="text-blue-400 mt-0.5">▸</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                <a
                  href={selectedProject.GitLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 bg-gray-100 text-black text-sm font-inter font-medium px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                {selectedProject.WebLink && (
                  <a
                    href={selectedProject.WebLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 bg-gray-100 text-black text-sm font-inter font-medium px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;