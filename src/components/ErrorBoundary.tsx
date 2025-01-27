import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center p-8">
            <h2 className="text-2xl font-serif text-dark-600 mb-4">
              Une erreur est survenue
            </h2>
            <p className="text-dark-600/70 mb-6">
              Nous nous excusons pour la gêne occasionnée. Veuillez rafraîchir la page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Rafraîchir la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}