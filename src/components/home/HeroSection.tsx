
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Image, FileText, Video, AudioLines, Target, Shield } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const mediaIconsRef = useRef<HTMLDivElement>(null);
  
  // City lights animation effect
  useEffect(() => {
    if (!heroRef.current) return;
    
    const hero = heroRef.current;
    const colors = ['#F97316', '#EC4899', '#8B5CF6', '#3B82F6'];
    
    const createLight = () => {
      const light = document.createElement('div');
      const size = Math.random() * 4 + 2;
      const xPos = Math.random() * hero.offsetWidth;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 2;
      
      light.style.width = `${size}px`;
      light.style.height = `${size}px`;
      light.style.left = `${xPos}px`;
      light.style.bottom = '0';
      light.style.opacity = '0';
      light.style.position = 'absolute';
      light.style.borderRadius = '50%';
      light.style.backgroundColor = color;
      light.style.boxShadow = `0 0 ${size * 2}px ${color}`;
      light.style.transform = 'translateY(0)';
      light.style.transition = `transform ${duration}s ease-out, opacity 1s ease-in-out`;
      light.style.zIndex = '1';
      light.style.animationDelay = `${delay}s`;
      
      hero.appendChild(light);
      
      setTimeout(() => {
        light.style.opacity = '1';
        light.style.transform = `translateY(-${Math.random() * 100 + 50}px)`;
      }, delay * 1000);
      
      setTimeout(() => {
        if (light.parentNode === hero) {
          hero.removeChild(light);
        }
      }, (duration + delay) * 1000);
    };
    
    const interval = setInterval(createLight, 200);
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
        const factor = 0.015 - (index * 0.003);
        
        iconElement.style.transform = `translate3d(${x * factor}px, ${y * factor}px, 0) rotate(${x * 0.05}deg)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="min-h-[100vh] flex items-center justify-center relative overflow-hidden bg-gta-gradient"
    >
      {/* GTA-style cityscape */}
      <div className="absolute inset-0 gta-cityscape opacity-30" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 gta-grid-bg opacity-30" />
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-4">
            <h1 className="text-6xl md:text-8xl font-bold animate-fade-in relative z-10 tracking-tight">
              <span className="gta-text">AuthenLens</span> <span className="text-3xl md:text-4xl align-super text-gta-gold">VI</span>
            </h1>
            {/* Glitch effect */}
            <h1 className="text-6xl md:text-8xl font-bold absolute top-0 left-0 text-gta-pink/30 animate-glitch z-0 select-none opacity-70">
              AuthenLens
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-gta-pink font-medium animate-fade-in relative" style={{ animationDelay: '0.2s' }}>
            Advanced Multimodal AI-Generated Content Detection
          </p>
          
          <p className="text-lg mb-10 animate-fade-in max-w-3xl mx-auto text-white/80" style={{ animationDelay: '0.3s' }}>
            Protect yourself from synthetic media with our cutting-edge detection system 
            that identifies AI-generated <span className="font-semibold text-gta-gold">images</span>, <span className="font-semibold text-gta-gold">videos</span>, <span className="font-semibold text-gta-gold">audio</span>, and <span className="font-semibold text-gta-gold">text</span> with industry-leading accuracy.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="bg-gradient-to-r from-gta-pink to-gta-purple hover:from-gta-pink/90 hover:to-gta-purple/90 shadow-gta-neon border-none text-white font-bold py-6 px-8">
              <Link to="/image">START SCAN</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-gta-gold text-gta-gold hover:text-gta-gold/90 hover:border-gta-gold/90 py-6 px-8">
              <a href="#features">LEARN MORE</a>
            </Button>
          </div>

          {/* 3D Floating Elements */}
          <div ref={mediaIconsRef} className="mt-24 mb-10 relative h-64 md:h-96 select-none">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 gta-card border-gta-pink flex items-center justify-center animate-gta-float media-icon z-30">
              <div className="text-6xl md:text-7xl font-bold gta-text">AL</div>
              <div className="absolute inset-0 bg-gradient-to-br from-gta-pink/20 to-transparent opacity-40"></div>
            </div>
            
            <div className="absolute left-[20%] top-[20%] w-20 h-20 md:w-24 md:h-24 gta-card shadow-gta-box rounded-md animate-gta-float media-icon z-20" style={{ animationDelay: '1s' }}>
              <Image className="w-full h-full p-4 text-gta-pink" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gta-pink"></div>
            </div>
            
            <div className="absolute right-[25%] top-[15%] w-16 h-16 md:w-20 md:h-20 gta-card shadow-gta-box rounded-md animate-gta-float media-icon z-20" style={{ animationDelay: '1.5s' }}>
              <Video className="w-full h-full p-3 text-gta-blue" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gta-blue"></div>
            </div>
            
            <div className="absolute left-[25%] bottom-[15%] w-14 h-14 md:w-20 md:h-20 gta-card shadow-gta-box rounded-md animate-gta-float media-icon z-20" style={{ animationDelay: '0.7s' }}>
              <AudioLines className="w-full h-full p-3 text-gta-purple" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gta-purple"></div>
            </div>
            
            <div className="absolute right-[20%] bottom-[20%] w-16 h-16 md:w-22 md:h-22 gta-card shadow-gta-box rounded-md animate-gta-float media-icon z-20" style={{ animationDelay: '1.2s' }}>
              <FileText className="w-full h-full p-3 text-gta-gold" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gta-gold"></div>
            </div>
            
            <div className="absolute left-[10%] top-[50%] w-12 h-12 md:w-16 md:h-16 gta-card shadow-gta-box rounded-md animate-gta-float media-icon z-20" style={{ animationDelay: '1.8s' }}>
              <Target className="w-full h-full p-3 text-gta-red" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gta-red"></div>
            </div>
            
            <div className="absolute right-[10%] top-[50%] w-12 h-12 md:w-16 md:h-16 gta-card shadow-gta-box rounded-md animate-gta-float media-icon z-20" style={{ animationDelay: '2.2s' }}>
              <Shield className="w-full h-full p-3 text-gta-neon" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gta-neon"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
