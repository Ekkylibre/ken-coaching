import React from 'react';
import { Play } from 'lucide-react';

export function VideoPresentation() {
  return (
    <section id="video-presentation" className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-dark-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="text-center mb-16">
          <span className="inline-block text-gold-600 font-medium tracking-wider mb-4">
            COACHING D'EXCELLENCE
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-dark-600 mb-8">
            Transformez votre <span className="text-gold-600">Vision</span><br />
            en <span className="text-gold-600">Réalité</span>
          </h1>
          <p className="text-lg sm:text-xl text-dark-600/70 max-w-3xl mx-auto font-light">
            Une approche sur mesure pour les leaders et entrepreneurs ambitieux
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-gold-600/20 to-gold-600/30 blur-lg"></div>
          <div className="relative aspect-video bg-dark-600 rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-dark-600/90 flex items-center justify-center group cursor-pointer hover:bg-dark-600/80 transition-colors">
              <Play className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-transform" />
            </div>
            <iframe
              src="https://player.vimeo.com/video/123456789?h=abcdef123&title=0&byline=0&portrait=0"
              className="absolute inset-0 w-full h-full opacity-0"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-dark-600/70 mb-8 max-w-2xl mx-auto font-light text-lg">
            Découvrez si mon accompagnement d'exception correspond à vos ambitions
          </p>
          <button 
            className="group relative inline-flex items-center btn-primary overflow-hidden"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="relative z-10">Réserver un entretien privilégié</span>
            <div className="absolute inset-0 bg-gold-700 transform translate-y-full group-hover:translate-y-0 transition-transform"></div>
          </button>
        </div>
      </div>
    </section>
  );
}