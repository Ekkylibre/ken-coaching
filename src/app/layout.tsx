import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: 'Coaching d\'Excellence | Transformez votre Vision en Réalité',
  description: 'Un accompagnement d\'exception pour les leaders et entrepreneurs ambitieux. Réservez votre entretien privilégié pour explorer vos objectifs.',
  keywords: 'coaching, excellence, leadership, transformation, développement personnel, entrepreneurs',
  openGraph: {
    title: 'Coaching d\'Excellence | Transformez votre Vision en Réalité',
    description: 'Un accompagnement d\'exception pour les leaders et entrepreneurs ambitieux.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Essence Coaching',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coaching d\'Excellence | Transformez votre Vision en Réalité',
    description: 'Un accompagnement d\'exception pour les leaders et entrepreneurs ambitieux.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.calendly.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}