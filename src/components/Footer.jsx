function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/8 py-10" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 items-center text-center md:text-left">
        <div>
          <h2 className="font-bold text-white text-xl">
            Ari Karan
          </h2>

          <p className="text-zinc-400 mt-2">
            Java Full-Stack Developer
          </p>
        </div>

        <p className="text-zinc-500 text-sm">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;