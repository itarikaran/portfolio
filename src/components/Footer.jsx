function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 py-8 mt-10" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <h2 className="font-bold text-red-500 text-xl">
          Ari Karan
        </h2>

        <p className="text-zinc-500 mt-4 md:mt-0">
          Java Full-Stack Developer
        </p>

        <p className="text-zinc-600 text-sm mt-4 md:mt-0">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;