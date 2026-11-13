import { socialLinks } from '../../data/navigation';
import { Container } from '../ui/Container';

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
            <span className="font-bold text-lg tracking-tight">Ari Karan</span>
          </div>
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Ari Karan. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-black transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;