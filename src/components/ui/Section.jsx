export function Section({
  children,
  className = '',
  padding = 'py-20',
  ...props
}) {
  return (
    <section className={`bg-white ${padding} ${className}`} {...props}>
      {children}
    </section>
  );
}