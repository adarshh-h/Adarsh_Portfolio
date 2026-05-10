// import { motion } from "framer-motion";
// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const formRef = useRef();
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState("");

//   const sendEmail = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setStatus("");

//     try {
//     await emailjs.sendForm(
//   import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//   import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//   formRef.current,
//   import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
// );

//       setStatus("success");
//       formRef.current.reset();
//     } catch (error) {
//       console.error(error);
//       setStatus("error");
//     }

//     setLoading(false);
//   };

//   return (
//     <motion.section
//       id="contact"
//       className="py-20 px-8 bg-gray-900/50 relative overflow-hidden"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 z-0">
//         <motion.div
//           className="bg-gradient-to-tl from-purple-600 to-blue-600 opacity-30 blur-3xl absolute top-0 left-0 w-80 h-80"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 0.25, scale: 1 }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="bg-gradient-to-br from-cyan-600 to-green-600 opacity-30 blur-3xl absolute bottom-0 right-0 w-80 h-80"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 0.25, scale: 1 }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//         />
//       </div>

//       {/* Contact Section Content */}
//       <div className="relative z-10 max-w-4xl mx-auto">
//         <motion.h2
//           className="text-5xl font-bold text-white mb-4"
//           style={{
//             textShadow: "0px 0px 20px rgba(59, 130, 246, 0.8)",
//           }}
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           Get In Touch
//         </motion.h2>

//         <motion.p
//           className="text-gray-300 mb-12 text-lg"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           I’m always open to new opportunities and collaborations. Feel free to
//           drop a message below!
//         </motion.p>

//         {/* Contact Form */}
//         <motion.form
//           ref={formRef}
//           onSubmit={sendEmail}
//           className="mt-12 bg-gray-950/50 border border-gray-400 p-4 rounded-lg shadow-md w-lg mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//             <div>
//               <label className="block text-sm font-medium font-inter text-gray-300 mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="user_name"
//                 required
//                 placeholder="Your Name"
//                 className="w-full px-4 py-3 bg-gray-900 text-sm font-inter text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-inter font-medium text-gray-300 mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="user_email"
//                 required
//                 placeholder="Your Email"
//                 className="w-full text-sm font-inter px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm font-inter font-medium text-gray-300 mb-2">
//               Message
//             </label>
//             <textarea
//               name="message"
//               rows="5"
//               required
//               placeholder="Your Message"
//               className="w-full text-sm font-inter px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="inline-flex w-full animate-shimmer font-inter items-center gap-1 justify-center rounded-lg border bg-[linear-gradient(110deg,#000103,45%,#4a6080,55%,#000103)] bg-[length:200%_100%] p-3 text-xs md:text-base md:font-medium text-gray-100 transition-colors disabled:opacity-60"
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>

//           {status === "success" && (
//             <p className="text-green-400 mt-4 text-sm">
//               Message sent successfully!
//             </p>
//           )}

//           {status === "error" && (
//             <p className="text-red-400 mt-4 text-sm">
//               Failed to send message. Please try again.
//             </p>
//           )}
//         </motion.form>
//       </div>
//     </motion.section>
//   );
// };

// export default Contact;

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <motion.section
      id="contact"
      className="py-16 sm:py-20 px-4 sm:px-8 bg-gray-900/50 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="bg-gradient-to-tl from-purple-600 to-blue-600 opacity-30 blur-3xl absolute top-0 left-0 w-60 h-60 sm:w-80 sm:h-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.div
          className="bg-gradient-to-br from-cyan-600 to-green-600 opacity-30 blur-3xl absolute bottom-0 right-0 w-60 h-60 sm:w-80 sm:h-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
          style={{ textShadow: "0px 0px 20px rgba(59, 130, 246, 0.8)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-3 text-sm sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm always open to new opportunities and collaborations. Feel free to drop a message below!
        </motion.p>

        {/* Direct email link */}
        <motion.a
          href="mailto:adarshgupta0811@gmail.com"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-inter mb-8 transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Mail size={15} />
          adarshgupta0811@gmail.com
        </motion.a>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="mt-4 bg-gray-950/50 border border-gray-400 p-4 sm:p-6 rounded-lg shadow-md w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 sm:mb-6">
            <div>
              <label className="block text-sm font-medium font-inter text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-900 text-sm font-inter text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-inter font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email"
                className="w-full text-sm font-inter px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          <div className="mb-4 sm:mb-6">
            <label className="block text-sm font-inter font-medium text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your Message"
              className="w-full text-sm font-inter px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full animate-shimmer font-inter items-center gap-1 justify-center rounded-lg border bg-[linear-gradient(110deg,#000103,45%,#4a6080,55%,#000103)] bg-[length:200%_100%] p-3 text-sm md:text-base md:font-medium text-gray-100 transition-colors disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          <AnimatePresence>
            {status === "success" && (
              <motion.p
                className="text-green-400 mt-4 text-sm border border-green-500/30 bg-green-500/10 px-4 py-2 rounded-lg"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                ✓ Message sent successfully!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                className="text-red-400 mt-4 text-sm border border-red-500/30 bg-red-500/10 px-4 py-2 rounded-lg"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                ✗ Failed to send message. Please try again.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
