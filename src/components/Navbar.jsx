import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-zinc-900">

      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        <a
          href="#"
          className="text-2xl font-bold"
        >
          Ari <span className="text-red-500">Karan</span>
        </a>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-zinc-400 hover:text-red-500 transition"
              >
                {link}
              </a>
            </li>
          ))}

          <a
            href="/resume.pdf"
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
          >
            Resume
          </a>

        </ul>

        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800">

          <ul className="flex flex-col p-6 gap-5">

            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-300"
                >
                  {link}
                </a>
              </li>
            ))}

            <a
              href="/resume.pdf"
              className="bg-red-600 px-5 py-3 rounded-lg text-center"
            >
              Resume
            </a>

          </ul>

        </div>
      )}

    </nav>
  );
}

export default Navbar;