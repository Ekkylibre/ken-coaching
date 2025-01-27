import React from 'react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="https://player.vimeo.com/external/459389137.hd.mp4?s=865d2c0ec77b5d11f419a9a5b4f26e4ce4104b73&profile_id=175" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-6 sm:mb-8 tracking-wide">
          Révélez votre potentiel
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto font-light tracking-wide">
          Découvrez si mon accompagnement correspond à vos besoins
        </p>
        <button 
          className="btn-primary"
          onClick={() => {
            const videoSection = document.getElementById('video-presentation');
            if (videoSection) {
              videoSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Découvrir ma méthode
        </button>
      </div>
    </section>
  );
}