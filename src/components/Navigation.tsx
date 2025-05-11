
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, Search, X, ChevronDown, Sparkles } from 'lucide-react';
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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  
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
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  // Close menu when clicking outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);
  
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  return (
    <header 
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white shadow-neon transition-all duration-300 group-hover:scale-110 relative overflow-hidden">
                <Search className="h-5 w-5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-aurora-purple to-aurora-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Sparkles className="absolute top-0.5 right-0.5 h-2 w-2 text-yellow-200 opacity-0 group-hover:opacity-100" />
              </div>
              <span className="text-xl font-bold hidden sm:inline-block gradient-text">
                AuthenLens
                <span className="text-xs align-super ml-0.5 bg-primary/10 text-primary px-1 py-0.5 rounded">3.0</span>
              </span>
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
                        "relative px-3 py-2 rounded-md font-medium transition-colors flex items-center", 
                        location.pathname === link.path 
                          ? "text-primary bg-primary/10" 
                          : "text-foreground/70 hover:text-foreground hover:bg-accent/50"
                      )}
                      onMouseEnter={() => setHoveredItem(link.path)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      {link.name}
                      {location.pathname === link.path && (
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-aurora-purple to-aurora-blue rounded-full" />
                      )}
                      {hoveredItem === link.path && link.path !== location.pathname && (
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-aurora-purple to-aurora-blue rounded-full animate-fade-in" />
                      )}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Version badge */}
            <div className="ml-3 px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full animate-pulse-subtle">
              v3.0
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
              className="aurora-glow-hover rounded-full"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Mobile menu */}
      <div className={cn(
        "md:hidden fixed inset-0 z-50 glassmorphism",
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
            className="aurora-glow-hover rounded-full bg-white/10"
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
                "px-6 py-3 text-xl rounded-md transition-all duration-500 w-full max-w-xs text-center relative overflow-hidden group", 
                location.pathname === link.path 
                  ? "bg-primary text-white font-medium shadow-neon" 
                  : "bg-white/10 backdrop-blur-sm hover:bg-primary/20"
              )}
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: 'translateY(20px)',
                opacity: 0,
                animation: 'fade-up 0.5s forwards',
                animationDelay: `${index * 0.1}s`
              }} 
            >
              {link.name}
              {location.pathname !== link.path && (
                <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              )}
            </Link>
          ))}
          
          <div className="absolute bottom-10 w-full text-center text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <span className="gradient-text font-bold">AuthenLens</span> 
            <span className="text-xs align-super ml-0.5 bg-primary/10 text-primary px-1 py-0.5 rounded">3.0</span> 
            © {new Date().getFullYear()}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
