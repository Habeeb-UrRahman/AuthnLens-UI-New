
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useRef, useEffect } from 'react';

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return;
      
      const scrollPosition = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const distanceFromTop = scrollPosition - sectionTop;
      
      if (distanceFromTop > -window.innerHeight && distanceFromTop < window.innerHeight) {
        contentRef.current.style.transform = `translateY(${distanceFromTop * 0.1}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="cta" 
      className="py-24 md:py-32 text-white relative overflow-hidden"
    >
      {/* GTA 6-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gta-dark via-black to-gta-dark z-0">
        {/* Grid overlay */}
        <div className="absolute inset-0 gta-grid-bg opacity-30"></div>
        
        {/* Cityscape silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-48 gta-cityscape opacity-50"></div>
        
        {/* Animated light beams */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gta-pink/10 animate-pulse-glow"></div>
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gta-gold/10 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-full h-1 bg-gta-purple/10 animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div ref={contentRef} className="container mx-auto px-4 py-8 text-center relative z-10">
        <div className="inline-block mb-6">
          <h2 className="text-4xl md:text-6xl font-bold gta-text">Ready to identify <span className="text-white">AI-generated content?</span></h2>
          
          {/* Glitch effect */}
          <div className="absolute -top-1 -left-1 text-4xl md:text-6xl font-bold text-gta-red/10 animate-glitch select-none">
            Ready to identify AI-generated content?
          </div>
        </div>
        
        <p className="text-xl mb-10 max-w-2xl mx-auto text-white/80">
          Start using our advanced detection system today to verify the authenticity of digital content.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Button asChild size="lg" className="bg-gradient-to-r from-gta-pink to-gta-purple hover:opacity-90 shadow-gta-neon border-none text-white uppercase tracking-widest font-bold py-8 px-10">
            <Link to="/image">Try Image Detection</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2 border-gta-gold bg-transparent text-gta-gold hover:bg-gta-gold/10 uppercase tracking-widest py-8 px-10">
            <Link to="/text">Try Text Detection</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
