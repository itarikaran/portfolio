export function Badge({
  children,
  variant = 'default',
  className = '',
  ...props
}) {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    violet: 'bg-gradient-to-br from-violet-600 via-violet-600 to-purple-700 text-white',
    black: 'bg-black text-white',
    outline: 'border border-gray-200 bg-white text-gray-800',
    subtle: 'bg-gray-50 text-gray-600',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}