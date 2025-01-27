import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleHashChange = () => {
      setIsHome(window.location.hash === '' || window.location.hash === '#home');
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const menuItems = [
    {
      label: 'Accueil',
      href: '#home'
    },
    {
      label: 'Méthode',
      href: '#video-presentation'
    },
    {
      label: 'Contact',
      href: '#contact'
    }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isHome && !isScrolled
          ? 'bg-transparent'
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className={`text-xl font-serif font-medium tracking-wide transition-colors duration-300 ${
              isHome && !isScrolled ? 'text-white' : 'text-dark-600'
            }`}>
              ESSENCE
            </span>
          </div>

          <nav className="hidden md:flex items-center">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-xs uppercase tracking-wider transition-colors duration-300 ${
                    isHome && !isScrolled
                      ? 'text-white/90 hover:text-white'
                      : 'text-dark-600/90 hover:text-dark-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <button
            className={`md:hidden relative w-6 h-6 flex items-center justify-center transition-colors duration-300 ${
              isHome && !isScrolled ? 'text-white' : 'text-dark-600'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`absolute transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
              <Menu className="w-5 h-5" />
            </span>
            <span className={`absolute transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`}>
              <X className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div 
        className={`md:hidden bg-white border-t border-black/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-[400px] opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col items-center space-y-4">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-center text-xs uppercase tracking-wider transform transition-all duration-300 ${
                isMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}