
import { useEffect, useRef } from 'react';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-enter');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.2 });

    stepsRef.current.forEach(step => {
      if (step) observer.observe(step);
    });

    return () => {
      stepsRef.current.forEach(step => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  return (
    <section 
      id="howItWorks" 
      ref={sectionRef}
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A simple three-step process to detect AI-generated content
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connector lines */}
          <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-aurora-purple/20 hidden md:block transform -translate-y-1/2 z-0"></div>
          
          {[
            {
              number: "1",
              title: "Upload Content",
              description: "Upload your media file or paste your text that you want to analyze for authenticity"
            },
            {
              number: "2", 
              title: "Advanced Analysis",
              description: "Our specialized neural networks analyze the content for AI signatures and anomalies"
            },
            {
              number: "3",
              title: "Detailed Results",
              description: "Receive a comprehensive report indicating whether the content is AI-generated or authentic"
            }
          ].map((step, index) => (
            <div 
              key={index}
              ref={el => stepsRef.current[index] = el}
              className="opacity-0 glassmorphism p-8 border-2 border-white/10 shadow-glass hover:shadow-3d hover:-translate-y-2 transition-all duration-500 text-center relative z-10"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-aurora-purple to-aurora-blue text-white flex items-center justify-center mx-auto mb-6 transform transition-transform duration-500 hover:scale-110 shadow-neon">
                <span className="text-2xl font-bold">{step.number}</span>
                {/* Pulsing effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-aurora-purple to-aurora-blue opacity-50 animate-pulse-glow"></div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
