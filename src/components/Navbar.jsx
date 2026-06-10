import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/55 backdrop-blur-2xl border-b border-white/5" aria-label="Main navigation">
      {/* Skip to main content link */}
      <a
        href="#main"
        className="absolute -top-12 left-4 bg-red-600 px-4 py-2 text-white focus:top-4 z-10 transition-all rounded-full"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold hover:text-red-500 transition focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full px-3 py-1"
          aria-label="Ari Karan - Home"
        >
          Ari <span className="text-red-500">Karan</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-zinc-400 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full px-3 py-1"
              >
                {label}
              </a>
            </li>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black hover:bg-zinc-200 px-5 py-2 rounded-full transition focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Download resume (opens in new window)"
          >
            Resume
          </a>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-2 hover:text-red-500 transition focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-zinc-950/95 border-t border-white/5"
          role="region"
          aria-label="Mobile navigation menu"
        >
          <ul className="flex flex-col p-6 gap-5">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="text-zinc-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full px-3 py-2 block"
                >
                  {label}
                </a>
              </li>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="bg-white text-black hover:bg-zinc-200 px-5 py-3 rounded-full text-center transition focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Download resume (opens in new window)"
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