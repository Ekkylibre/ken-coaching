'use client';

import React, { useEffect } from 'react';

interface CalendlyEmbedProps {
  url?: string;
}

export function CalendlyEmbed({ url = "https://calendly.com/soulcarftstudio-atelierdusage?hide_gdpr_banner=1" }: CalendlyEmbedProps) {
  useEffect(() => {
    const head = document.querySelector('head');
    if (!head) return;

    // Ajouter les préconnexions pour optimiser le chargement
    const preconnectCalendly = document.createElement('link');
    preconnectCalendly.rel = 'preconnect';
    preconnectCalendly.href = 'https://calendly.com';
    head.appendChild(preconnectCalendly);

    const preconnectAssets = document.createElement('link');
    preconnectAssets.rel = 'preconnect';
    preconnectAssets.href = 'https://assets.calendly.com';
    head.appendChild(preconnectAssets);

    // Charger le script Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Nettoyage
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (preconnectCalendly.parentNode) {
        preconnectCalendly.parentNode.removeChild(preconnectCalendly);
      }
      if (preconnectAssets.parentNode) {
        preconnectAssets.parentNode.removeChild(preconnectAssets);
      }
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url={url}
      style={{ 
        minWidth: '320px',
        height: '700px',
      }}
    />
  );
}