import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, children, className, ...props }: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Changer le hash
    window.location.hash = href.substring(1);

    // Si ce n'est pas une page spéciale, faire défiler jusqu'à la section
    const specialPages = ['#mentions-legales', '#politique-confidentialite', '#cgv', '#articles'];
    if (!specialPages.includes(href)) {
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}