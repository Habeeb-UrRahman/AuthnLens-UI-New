
import { useEffect, useRef } from 'react';
import { CheckCircle, ShieldCheck, Zap, Brain } from 'lucide-react';

const benefits = [
  {
    title: "Superior Accuracy",
    description: "Our algorithms achieve over 99% accuracy in detecting AI-generated content",
    icon: CheckCircle,
    color: "bg-gta-pink text-white",
  },
  {
    title: "Enhanced Security",
    description: "Protect your organization from misinformation and synthetic media",
    icon: ShieldCheck,
    color: "bg-gta-purple text-white",
  },
  {
    title: "Lightning Fast",
    description: "Get results in seconds, not minutes, with our optimized processing",
    icon: Zap,
    color: "bg-gta-blue text-white",
  },
  {
    title: "Constantly Learning",
    description: "Our models continuously improve to detect the latest generation techniques",
    icon: Brain,
    color: "bg-gta-gold text-white",
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
      className="py-20 md:py-28 bg-gta-dark relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gta-pink to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gta-gold to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gta-text">Why Choose AuthenLens</h2>
          <p className="text-lg text-gta-light/70 max-w-3xl mx-auto">
            Our platform offers unparalleled accuracy and security in detecting AI-generated content
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="gta-card p-6 backdrop-blur-sm"
              style={{ 
                opacity: 0, 
                transform: 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transitionDelay: `${index * 150}ms` 
              }}
            >
              <div className={`w-12 h-12 rounded-md ${benefit.color} flex items-center justify-center mb-4 transform transition-transform duration-500 hover:scale-110 hover:rotate-6`}>
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gta-light/70">{benefit.description}</p>
              
              {/* Interactive glow effect on hover */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-br from-gta-pink/10 to-transparent group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
