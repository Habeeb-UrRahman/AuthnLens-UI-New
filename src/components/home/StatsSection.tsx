
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

  // Glitch effect for number counters
  useEffect(() => {
    statsRef.current.forEach((card, index) => {
      if (!card) return;
      
      const valueElement = card.querySelector('.stat-value');
      if (!valueElement) return;
      
      const finalValue = valueElement.textContent || '';
      
      const animateValue = () => {
        let iterations = 0;
        const maxIterations = 10;
        const interval = setInterval(() => {
          if (iterations >= maxIterations) {
            clearInterval(interval);
            valueElement.textContent = finalValue;
            return;
          }
          
          // Random characters for glitch effect
          const chars = "0123456789>!@#$%^&*";
          valueElement.textContent = finalValue.split('').map((char, i) => {
            if (i < iterations) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          }).join('');
          
          iterations += 0.5;
        }, 100);
      };
      
      // Start animation when card becomes visible
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(animateValue, index * 200);
          observer.disconnect();
        }
      });
      
      observer.observe(card);
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="py-16 md:py-24 bg-gta-dark relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 gta-grid-bg opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gta-gold to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gta-text mb-2">Trusted Technology</h2>
          <p className="text-center text-gta-light/70">Developed with cutting-edge research and expertise</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {stats.map((stat, i) => (
            <div 
              key={i}
              ref={el => statsRef.current[i] = el}
              className="text-center p-8 gta-card transition-all duration-500 hover:shadow-gta-neon rounded-md min-w-[200px] group"
              style={{ 
                opacity: 0, 
                transform: 'translateY(20px)', 
                transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)' 
              }}
            >
              <div className="text-5xl font-bold text-gta-pink mb-3 stat-value relative">
                {stat.value}
                <div className="absolute -inset-2 bg-gta-pink/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md -z-10"></div>
              </div>
              <div className="text-sm text-gta-light/70 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
