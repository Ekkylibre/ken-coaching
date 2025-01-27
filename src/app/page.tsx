'use client';

import React from 'react';
import { VideoPresentation } from '@/components/VideoPresentation';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <VideoPresentation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}