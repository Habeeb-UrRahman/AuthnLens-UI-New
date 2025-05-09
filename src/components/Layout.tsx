
import { ReactNode, useEffect } from 'react';
import Navigation from './Navigation';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  // Scroll restoration
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gta-dark text-gta-light">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* GTA 6-inspired decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNy45JSIgeTE9IjgxLjklIiB4Mj0iNzguNiUiIHkyPSIxOCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRjk3MzE2IiBzdG9wLW9wYWNpdHk9Ii4wNSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNFQzQ4OTkiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGgxNDQwdjc1MEgweiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')]"></div>
        
        {/* Neon blobs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gta-pink/5 blur-3xl"></div>
        <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-gta-blue/5 blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-gta-gold/5 blur-3xl"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 gta-grid-bg opacity-10"></div>
      </div>
      
      <Navigation />
      
      <main className={cn("flex-grow pt-16 relative z-10", className)}>
        {children}
      </main>
      
      <footer className="mt-auto py-8 px-4 relative z-10 border-t border-gta-pink/20 bg-black/70 backdrop-blur-lg">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-gta-pink to-gta-red rounded-md flex items-center justify-center text-white font-bold text-xs shadow-gta-neon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <span className="font-bold gta-text text-2xl tracking-wide">AuthenLens</span>
                <span className="text-sm align-super text-gta-gold font-mono">VI</span>
              </div>
              <p className="text-sm text-gta-light/70 mt-2 pl-12">
                Advanced AI Content Detection System
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="text-sm text-gta-light/60 mb-2">
                © {new Date().getFullYear()} AuthenLens. University Project.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gta-light/60 hover:text-gta-pink transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a href="#" className="text-gta-light/60 hover:text-gta-pink transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
