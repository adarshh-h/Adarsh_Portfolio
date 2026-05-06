import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Menu, X} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed w-full z-50 top-4 px-4">
      <div className="max-w-5xl mx-auto relative">
        <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-400 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between h-16 px-6">
            {/* Logo */}
            <motion.a
              className="text-3xl font-cookie font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
              href="/"
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              whileHover={{scale: 1.1}}
              transition={{type: "spring", stiffness: 300}}>
              Adarsh Gupta
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 relative">
              {navItems.map((item, index) => (
                <motion.div key={item} className="relative group" initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} transition={{delay: index * 0.1, type: "spring", stiffness: 300}}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-100 hover:font-semibold hover:text-violet-700 transition-all duration-300 text-lg font-inter font-medium cursor-pointer"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{duration: 0.3}}>
                    {item}
                  </motion.a>
                </motion.div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div className="md:hidden" initial={{opacity: 0, height: 0}} animate={{opacity: 1, height: "auto"}} exit={{opacity: 0, height: 0}}>
                <div className="px-6 pt-2 pb-4 space-y-2">
                  {navItems.map((item) => (
                    <motion.div key={item} className="group" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="block py-2 text-lg font-inter font-medium text-gray-300 hover:text-violet-700 hover:font-semibold transition-all"
                        onClick={() => setIsMenuOpen(false)}>
                        {item}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
