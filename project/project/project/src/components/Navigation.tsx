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
    <nav className="sticky top-0 z-50 bg-[#0E1116] backdrop-blur-md border-b-2 border-[#232A35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold text-[#E6E8EB] tracking-tight relative group">
            <span className="relative z-10">COREFLOW</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#4F7DF3] group-hover:w-full transition-all duration-300"></span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-wider uppercase relative transition-colors duration-200 ${
                  currentPage === link.href.slice(1)
                    ? 'text-[#4F7DF3]'
                    : 'text-[#9AA4B2] hover:text-[#E6E8EB]'
                }`}
              >
                {link.label}
                {currentPage === link.href.slice(1) && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#4F7DF3]"></span>
                )}
              </a>
            ))}
            <a href="#contact" className="btn-primary px-6 py-2 text-xs font-semibold tracking-wider uppercase">
              DEPLOY
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#E6E8EB] p-2 border border-[#232A35] hover:border-[#4F7DF3] transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-[#232A35]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-xs font-semibold tracking-wider uppercase transition-colors ${
                  currentPage === link.href.slice(1)
                    ? 'text-[#4F7DF3]'
                    : 'text-[#9AA4B2] hover:text-[#E6E8EB]'
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
