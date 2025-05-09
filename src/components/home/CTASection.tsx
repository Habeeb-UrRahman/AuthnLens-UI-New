
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
      {/* Gradient background with animated blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-aurora-purple via-aurora-blue to-aurora-cyan z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNy45JSIgeTE9IjgxLjklIiB4Mj0iNzguNiUiIHkyPSIxOCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjM0I4MkY2IiBzdG9wLW9wYWNpdHk9Ii4wNSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMzQjgyRjYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGgxNDQwdjc1MEgweiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')]"></div>
        
        {/* Animated blobs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 animate-aurora" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-white/5 animate-aurora" style={{ animationDelay: "5s" }}></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-white/5 animate-aurora" style={{ animationDelay: "2.5s" }}></div>
      </div>
      
      <div ref={contentRef} className="container mx-auto px-4 py-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to identify <span className="text-white">AI-generated content?</span></h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
          Start using our advanced detection system today to verify the authenticity of digital content.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="default" className="bg-white text-aurora-purple hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8">
            <Link to="/image">Try Image Detection</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg px-8">
            <Link to="/text">Try Text Detection</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
