import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Footer() {
  const [showTop, setShowTop] = useState(false);

  // Show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white py-10 px-6 border-t border-white/10">

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left */}
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Ari Karan. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-lg">
          <a
            href="https://github.com/itarikaran"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/itarikaran"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>

      {/* Back to Top Button */}
      {showTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 p-3 rounded-full 
                     bg-red-600 shadow-lg shadow-red-600/30 
                     hover:scale-110 transition"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </footer>
  );
}

export default Footer;