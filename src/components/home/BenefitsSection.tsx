
import { useEffect, useRef } from 'react';
import { CheckCircle, ShieldCheck, Zap, Brain } from 'lucide-react';

const benefits = [
  {
    title: "Superior Accuracy",
    description: "Our algorithms achieve over 99% accuracy in detecting AI-generated content",
    icon: CheckCircle,
    color: "bg-aurora-purple text-white",
  },
  {
    title: "Enhanced Security",
    description: "Protect your organization from misinformation and synthetic media",
    icon: ShieldCheck,
    color: "bg-aurora-blue text-white",
  },
  {
    title: "Lightning Fast",
    description: "Get results in seconds, not minutes, with our optimized processing",
    icon: Zap,
    color: "bg-aurora-cyan text-white",
  },
  {
    title: "Constantly Learning",
    description: "Our models continuously improve to detect the latest generation techniques",
    icon: Brain,
    color: "bg-aurora-teal text-white",
  }
];

const BenefitsSection = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardsRef.current.findIndex(ref => ref === entry.target);
          if (index !== -1 && entry.target instanceof HTMLElement) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        }
      });
    }, { threshold: 0.1 });

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section 
      id="benefits" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-mesh-gradient"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Why Choose AuthenLens</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform offers unparalleled accuracy and security in detecting AI-generated content
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="glassmorphism p-6 shadow-glass interactive-card"
              style={{ 
                opacity: 0, 
                transform: 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transitionDelay: `${index * 150}ms` 
              }}
            >
              <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-4 transform transition-transform duration-500 hover:scale-110 hover:rotate-6`}>
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
