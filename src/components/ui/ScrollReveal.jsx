import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ScrollReveal({
  children,
  className = '',
  variant = 'fadeUp',
  delay = 0,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const variants = {
    fadeUp: {
      initial: { opacity: 0, y: 30 },
      revealed: { opacity: 1, y: 0 },
    },
    fadeIn: {
      initial: { opacity: 0 },
      revealed: { opacity: 1 },
    },
    scaleUp: {
      initial: { opacity: 0, scale: 0.9 },
      revealed: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={{ ...variants[variant].revealed, transition: { duration: 0.6, delay } }}
      initial={{ ...variants[variant].initial }}
      className={`scroll-reveal ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}