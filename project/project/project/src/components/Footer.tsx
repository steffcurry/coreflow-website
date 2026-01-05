function Footer() {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Example Automations', href: '#examples' },
    { label: 'Team', href: '#team' },
    { label: 'Pricing Model', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-black/60 border-t border-[#DAA520]/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 gold-gradient-text">Coreflow Automation</h3>
            <p className="text-gray-400 text-sm">
              Custom AI automation systems for real businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#DAA520] transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#privacy"
                  className="text-sm text-gray-400 hover:text-[#DAA520] transition-all duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-sm text-gray-400 hover:text-[#DAA520] transition-all duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#DAA520]/30 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Coreflow Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
