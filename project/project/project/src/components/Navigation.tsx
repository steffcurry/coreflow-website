import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
}

function Navigation({ currentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Example Automations', href: '#examples' },
    { label: 'Team', href: '#team' },
    { label: 'Pricing Model', href: '#pricing' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#DAA520]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold text-white tracking-tight relative group">
            <span className="relative z-10 gold-gradient-text">COREFLOW</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#DAA520] to-[#FFD700] group-hover:w-full transition-all duration-500"></span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-wider uppercase relative transition-all duration-300 ${
                  currentPage === link.href.slice(1)
                    ? 'text-[#DAA520]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                {currentPage === link.href.slice(1) && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DAA520] to-[#FFD700] animate-border-glow"></span>
                )}
              </a>
            ))}
            <a href="#contact" className="btn-primary px-6 py-2 text-xs font-semibold tracking-wider uppercase">
              DEPLOY
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 border border-[#DAA520]/30 hover:border-[#DAA520] transition-all duration-300 rounded-sm"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-[#DAA520]/30">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-xs font-semibold tracking-wider uppercase transition-colors ${
                  currentPage === link.href.slice(1)
                    ? 'text-[#DAA520]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full btn-primary text-xs font-semibold tracking-wider uppercase text-center"
            >
              DEPLOY
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
