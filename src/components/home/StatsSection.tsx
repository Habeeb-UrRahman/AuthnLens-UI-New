
import { useEffect, useRef } from 'react';

const stats = [
  { value: '>90%', label: 'Average Detection Accuracy', delay: 0 },
  { value: '4', label: 'Media Types', delay: 0.2 },
  { value: '1', label: 'Click', delay: 0.4 },
  { value: '1', label: 'Platform', delay: 0.6 }
];

const StatsSection = () => {
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Animate stats when in view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statsCards = statsRef.current;
          statsCards.forEach((card, index) => {
            if (card) {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, index * 150);
            }
          });
        }
      });
    }, { threshold: 0.2 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">Trusted Technology</h2>
          <p className="text-center text-muted-foreground">Developed with cutting-edge research and expertise</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {stats.map((stat, i) => (
            <div 
              key={i}
              ref={el => statsRef.current[i] = el}
              className="text-center p-8 glassmorphism shadow-glass transition-all duration-500 hover:shadow-neon rounded-2xl min-w-[180px]"
              style={{ 
                opacity: 0, 
                transform: 'translateY(20px)', 
                transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)' 
              }}
            >
              <div className="text-5xl font-bold text-aurora-purple mb-3 animate-float">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
