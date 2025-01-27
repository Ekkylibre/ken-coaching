import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  whiteCloseButton?: boolean;
}

export function Modal({ isOpen, onClose, children, whiteCloseButton = false }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto pointer-events-none">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto" 
        onClick={onClose} 
      />
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white w-full max-w-3xl shadow-xl animate-fade-in pointer-events-auto">
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 z-10 ${
              whiteCloseButton 
                ? 'text-white/60 hover:text-white' 
                : 'text-dark-600/60 hover:text-dark-600'
            } transition-colors`}
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}