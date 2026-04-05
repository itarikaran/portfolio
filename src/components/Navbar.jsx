import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  const sections = ["home", "skills", "projects", "about", "contact"];

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="text-lg font-bold text-red-500">
          Ari Karan
        </a>

        {/* Links */}
        <div className="flex gap-8 text-sm">
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

      </div>
    </nav>
  );
}

export default Navbar;