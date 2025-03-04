import React from 'react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@essence-coaching.com' },
];

export function Footer() {
  return (
    <footer className="bg-dark-100 border-t border-gold-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <span className="text-xl font-serif text-dark-600">
              KEN COACHING
            </span>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-dark-600/60 hover:text-dark-600 transition-colors"
                  aria-label={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <p className="text-dark-600/40 text-sm">
            © {new Date().getFullYear()} Dany XIONG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}