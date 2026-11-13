import { motion } from 'framer-motion';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  asChild = false,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-medium rounded-md transition-all disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary:
      'bg-gradient-to-br from-violet-600 via-violet-600 to-purple-700 text-white hover:opacity-90 shadow-sm',
    outline:
      'border border-black bg-black text-white hover:bg-white hover:text-black active:scale-[0.98]',
    text:
      'text-black hover:bg-gray-100 active:scale-[0.98]',
    ghost:
      'text-gray-600 hover:bg-gray-100 active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3 text-lg',
  };

  const btnClass = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (asChild) {
    return (
      <span className={btnClass} onClick={onClick}>
        {children}
      </span>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={btnClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}