
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Image, FileText, Video, AudioLines } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const mediaIconsRef = useRef<HTMLDivElement>(null);

  // Particle animation effect for hero section
  useEffect(() => {
    if (!heroRef.current) return;
    
    const hero = heroRef.current;
    const createParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 8 + 2;
      const xPos = Math.random() * hero.offsetWidth;
      const duration = Math.random() * 15 + 5;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${xPos}px`;
      particle.style.bottom = '0';
      particle.style.opacity = '0';
      particle.style.position = 'absolute';
      particle.style.borderRadius = '50%';
      particle.style.backgroundColor = 'rgba(155, 135, 245, 0.5)';
      particle.style.boxShadow = '0 0 10px rgba(155, 135, 245, 0.3)';
      particle.style.transform = 'translateY(0)';
      particle.style.transition = `transform ${duration}s ease-out, opacity 2s ease-in-out`;
      
      hero.appendChild(particle);
      
      setTimeout(() => {
        particle.style.opacity = '0.7';
        particle.style.transform = `translateY(-${hero.offsetHeight * 0.8}px)`;
      }, 100);
      
      setTimeout(() => {
        if (particle.parentNode === hero) {
          hero.removeChild(particle);
        }
      }, duration * 1000);
    };
    
    const interval = setInterval(createParticle, 400);
    return () => clearInterval(interval);
  }, []);

  // 3D tilt effect for floating elements
  useEffect(() => {
    if (!mediaIconsRef.current) return;
    
    const mediaIcons = mediaIconsRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const iconsRect = mediaIcons.getBoundingClientRect();
      const x = e.clientX - iconsRect.left - iconsRect.width / 2;
      const y = e.clientY - iconsRect.top - iconsRect.height / 2;
      
      const icons = mediaIcons.querySelectorAll('.media-icon');
      icons.forEach((icon, index) => {
        const iconElement = icon as HTMLElement;
        const factor = 0.01 - (index * 0.002);
        
        iconElement.style.transform = `translate3d(${x * factor}px, ${y * factor}px, 0) rotate(${x * 0.03}deg)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="min-h-[100vh] flex items-center justify-center relative overflow-hidden bg-mesh-gradient py-16 md:py-0"
    >      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">AuthenLens</span> <span className="text-2xl md:text-3xl align-super">2.0</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-aurora-purple font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Advanced Multimodal AI-Generated Content Detection
          </p>
          <p className="text-lg mb-10 animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.3s' }}>
            Protect yourself from synthetic media with our cutting-edge detection system 
            that identifies AI-generated <span className="font-semibold text-primary">images</span>, <span className="font-semibold text-primary">videos</span>, <span className="font-semibold text-primary">audio</span>, and <span className="font-semibold text-primary">text</span> with industry-leading accuracy.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="bg-aurora-purple hover:bg-aurora-purple/90 shadow-neon">
              <Link to="/image">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-aurora-purple text-aurora-purple hover:text-aurora-purple/90 hover:border-aurora-purple/90">
              <a href="#features">Learn More</a>
            </Button>
          </div>

          {/* Floating Elements */}
          <div ref={mediaIconsRef} className="mt-20 mb-10 relative h-64 md:h-80 select-none">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56 glassmorphism shadow-neon flex items-center justify-center animate-float media-icon z-30">
              <div className="text-5xl md:text-6xl font-bold gradient-text">AL</div>
            </div>
            
            <div className="absolute left-[20%] top-[20%] w-16 h-16 md:w-20 md:h-20 glassmorphism shadow-glass rounded-lg animate-float media-icon z-20" style={{ animationDelay: '1s' }}>
              <Image className="w-full h-full p-4 text-aurora-purple" />
            </div>
            
            <div className="absolute right-[25%] top-[15%] w-14 h-14 md:w-16 md:h-16 glassmorphism shadow-glass rounded-lg animate-float media-icon z-20" style={{ animationDelay: '1.5s' }}>
              <Video className="w-full h-full p-3 text-aurora-blue" />
            </div>
            
            <div className="absolute left-[25%] bottom-[15%] w-12 h-12 md:w-16 md:h-16 glassmorphism shadow-glass rounded-lg animate-float media-icon z-20" style={{ animationDelay: '0.7s' }}>
              <AudioLines className="w-full h-full p-3 text-aurora-cyan" />
            </div>
            
            <div className="absolute right-[20%] bottom-[20%] w-14 h-14 md:w-18 md:h-18 glassmorphism shadow-glass rounded-lg animate-float media-icon z-20" style={{ animationDelay: '1.2s' }}>
              <FileText className="w-full h-full p-3 text-aurora-teal" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,53.3C672,53,768,75,864,80C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
