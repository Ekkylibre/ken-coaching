import React from 'react';
import { Calendar, Shield, Clock, Users } from 'lucide-react';
import { CalendlyEmbed } from './CalendlyEmbed';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-dark-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-gold-600 font-medium tracking-wider mb-4">
            PREMIÈRE RENCONTRE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-dark-600 mb-4">
            Entretien Découverte Privilégié
          </h2>
          <p className="text-lg text-dark-600/70 font-light">
            Un échange exclusif pour définir vos objectifs et explorer notre compatibilité
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Clock,
              title: "20 Minutes",
              description: "Un entretien approfondi pour comprendre vos enjeux"
            },
            {
              icon: Shield,
              title: "Confidentiel",
              description: "Un espace sécurisé pour partager vos ambitions"
            },
            {
              icon: Users,
              title: "Personnalisé",
              description: "Une approche adaptée à votre situation unique"
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center p-6">
                <Icon className="w-8 h-8 text-gold-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-dark-600 mb-2">{item.title}</h3>
                <p className="text-dark-600/70 font-light">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white border border-gold-600/20 rounded-lg shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-gold-600/10 to-transparent transform rotate-45 translate-x-32 -translate-y-24"></div>
          
          <CalendlyEmbed />
        </div>
      </div>
    </section>
  );
}