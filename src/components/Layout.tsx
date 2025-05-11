
import { ReactNode, useEffect, useState } from 'react';
import Navigation from './Navigation';
import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Scroll restoration and scroll-to-top button
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Enhanced background decorative elements with interactivity */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="aurora-blob interactive-blob w-[30vw] h-[30vw] left-[-10vw] top-[10vh] opacity-20"></div>
        <div className="aurora-blob interactive-blob w-[25vw] h-[25vw] right-[-5vw] top-[30vh] opacity-10"></div>
        <div className="aurora-blob interactive-blob w-[40vw] h-[40vw] left-[20vw] bottom-[-20vh] opacity-10"></div>
      </div>
      
      <Navigation />
      
      <main className={cn("flex-grow pt-16 relative z-10", className)}>
        {children}
      </main>
      
      <footer className="mt-auto py-8 px-4 relative z-10 border-t glassmorphism bg-white/50 dark:bg-black/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center text-white font-bold text-xs shadow-neon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <span className="font-bold gradient-text text-lg">AuthenLens</span>
                <span className="text-xs font-semibold bg-primary/10 text-primary px-1.5 py-0.5 rounded">3.0</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Advanced AI Content Detection System
              </p>
              <p className="text-sm mt-4 text-muted-foreground max-w-xs">
                Cutting-edge technology to protect against synthetic media and ensure digital authenticity
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 md:col-span-2">
              <div>
                <h4 className="font-semibold mb-3">Detection Tools</h4>
                <ul className="space-y-2">
                  <li><a href="/image" className="text-sm text-muted-foreground hover:text-primary animated-border">Image Detection</a></li>
                  <li><a href="/video" className="text-sm text-muted-foreground hover:text-primary animated-border">Video Analysis</a></li>
                  <li><a href="/audio" className="text-sm text-muted-foreground hover:text-primary animated-border">Audio Recognition</a></li>
                  <li><a href="/text" className="text-sm text-muted-foreground hover:text-primary animated-border">Text Verification</a></li>
                  <li><a href="/factcheck" className="text-sm text-muted-foreground hover:text-primary animated-border">Fact Checking</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Connect</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-primary animated-border">About Us</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-primary animated-border">Research</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-primary animated-border">Privacy Policy</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-primary animated-border">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            
            <div className="col-span-full border-t pt-6 mt-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm text-muted-foreground mb-4 md:mb-0">
                  © {new Date().getFullYear()} AuthenLens. Advanced AI Detection Technology.
                </div>
                <div className="flex space-x-6">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Layout;
