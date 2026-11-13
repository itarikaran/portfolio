import { motion } from 'framer-motion';

export function Card({
  children,
  className = '',
  hover = true,
  padding = 'p-6',
  ...props
}) {
  return (
    <motion.div
      whileHover={
        hover
          ? { y: -4, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }
          : {}
      }
      className={`bg-white border border-gray-200 rounded-lg ${padding} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}