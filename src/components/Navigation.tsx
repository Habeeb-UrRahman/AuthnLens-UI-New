
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, Search, X, Target } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Image Detection', path: '/image' },
    { name: 'Video Detection', path: '/video' },
    { name: 'Audio Detection', path: '/audio' },
    { name: 'Text Detection', path: '/text' },
    { name: 'Fact Verification', path: '/factcheck' }
  ];
  
  // Track scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-black/50 backdrop-blur-lg border-b border-gta-pink/20 shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-gta-pink to-gta-red rounded-md flex items-center justify-center text-white shadow-gta-neon transition-all duration-300 group-hover:scale-110">
                <Target className="h-5 w-5" />
              </div>
              <div className="flex items-center">
                <span className="text-xl font-bold hidden sm:inline-block gta-text">AuthenLens</span>
                <span className="text-xs align-super text-gta-gold font-mono ml-1">VI</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {links.map((link) => (
                  <NavigationMenuItem key={link.path}>
                    <Link 
                      to={link.path} 
                      className={cn(
                        "relative px-3 py-2 rounded-md font-medium uppercase tracking-wider transition-colors flex items-center text-sm", 
                        location.pathname === link.path 
                          ? "text-gta-pink" 
                          : "text-gta-light/70 hover:text-gta-light"
                      )}
                    >
                      {link.name}
                      {location.pathname === link.path && (
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-gta-pink to-gta-red" />
                      )}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
              className="text-gta-pink hover:text-gta-pink/90 hover:bg-gta-pink/10"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden fixed inset-0 z-50 bg-black/90 backdrop-blur-lg",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      style={{ transition: 'opacity 0.3s ease' }}
      >
        <div className="absolute top-4 right-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            aria-label="Close menu"
            className="text-gta-pink hover:text-gta-pink/90 hover:bg-gta-pink/10"
          >
            <X />
          </Button>
        </div>
        
        <nav className="container h-full flex flex-col justify-center items-center space-y-6 p-6">
          {links.map((link, index) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={cn(
                "px-6 py-3 text-xl rounded-md transition-all duration-500 w-full max-w-xs text-center uppercase tracking-widest", 
                location.pathname === link.path 
                  ? "bg-gradient-to-r from-gta-pink to-gta-red text-white font-medium shadow-gta-neon" 
                  : "bg-black/50 backdrop-blur-sm hover:bg-gta-pink/20 text-gta-light/80 hover:text-white"
              )}
              style={{ animationDelay: `${index * 100}ms` }} 
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="absolute bottom-10 w-full text-center text-sm text-gta-light/60">
            <span className="gta-text font-bold">AuthenLens</span> © {new Date().getFullYear()}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
