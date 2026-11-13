export function GradientText({
  children,
  className = '',
  ...props
}) {
  return (
    <span
      className={`bg-gradient-to-br from-violet-600 via-violet-600 to-purple-700 bg-clip-text text-transparent ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}