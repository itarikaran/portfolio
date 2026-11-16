import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { navigation } from '../../data/navigation';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const isActive = (href) => location.pathname === href;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white border-b border-gray-200 shadow-sm' : 'bg-white/80 backdrop-blur-md'
        }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              <span className="font-bold text-xl tracking-tight">Ari Karan</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${isActive(item.href) ? 'text-black' : 'text-gray-600'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="outline" size="sm" asChild>
                <Link to="/resume" className="flex items-center gap-1.5">
                  <Download className="h-4 w-4" /> Download Resume
                </Link>
              </Button>
            </div>

            <button
              type="button"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden p-2 text-gray-600 hover:text-black"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 top-20 bottom-0 z-[60] bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="absolute inset-y-0 right-0 w-full max-w-sm overflow-y-auto border-l border-gray-200 bg-white px-6 pb-8 pt-6 shadow-2xl sm:px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                className="absolute right-4 top-4 p-2 text-gray-600 hover:text-black sm:right-6"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="mt-12 space-y-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-medium transition-colors ${isActive(item.href) ? 'text-black' : 'text-gray-600'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/resume" className="flex justify-center items-center gap-1.5">
                    <Download className="h-4 w-4" /> Download Resume
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;