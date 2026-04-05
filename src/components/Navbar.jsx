import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["home", "about", "skills", "projects", "contact"];

  // Active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="text-lg font-bold text-red-500">
          Ari
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`capitalize transition ${
                active === sec
                  ? "text-red-500"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {sec}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 pb-6">
          <div className="flex flex-col gap-4 mt-4 text-sm">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={() => setMenuOpen(false)}
                className={`capitalize ${
                  active === sec
                    ? "text-red-500"
                    : "text-gray-300"
                }`}
              >
                {sec}
              </a>
            ))}
          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;