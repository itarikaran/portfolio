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

  const isActive = (href) => location.pathname === href;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      scrolled ? 'bg-white border-b border-gray-200 shadow-sm' : 'bg-white/80 backdrop-blur-md'
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
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href) ? 'text-black' : 'text-gray-600'
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
            className="md:hidden p-2 text-gray-600 hover:text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-white border-l border-gray-200 p-6 sm:px-8 lg:px-12 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 text-gray-600 hover:text-black"
              >
                <X className="h-5 w-5" />
              </button>
              <nav className="mt-12 space-y-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-medium transition-colors ${
                      isActive(item.href) ? 'text-black' : 'text-gray-600'
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
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;