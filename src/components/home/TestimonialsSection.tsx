
import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    quote: "AuthenLens has transformed how we verify digital content. The accuracy is remarkable.",
    author: "Dr. Sarah Chen",
    role: "Digital Forensics Expert",
    avatar: "👩‍🔬",
    rating: 5
  },
  {
    quote: "As a journalist, I rely on AuthenLens daily to verify images and videos before publication.",
    author: "Michael Rodriguez",
    role: "Senior Editor, Global News",
    avatar: "👨‍💼",
    rating: 5
  },
  {
    quote: "The ability to detect AI-generated audio has been invaluable for our podcast verification process.",
    author: "Aisha Patel",
    role: "Audio Producer",
    avatar: "👩‍🎤",
    rating: 4
  },
  {
    quote: "We've integrated AuthenLens into our content moderation system with impressive results.",
    author: "Thomas Wright",
    role: "CTO, SocialStream",
    avatar: "👨‍💻",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    // Animation observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    testimonialRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      clearInterval(interval);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      testimonialRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // 3D tilt effect for cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="py-20 md:py-28 bg-gradient-to-b from-white to-secondary/30 dark:from-background dark:to-accent/10 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aurora-blob w-[30vw] h-[30vw] left-[-15vw] top-[20vh] opacity-10"></div>
        <div className="aurora-blob w-[40vw] h-[40vw] right-[-20vw] bottom-[-10vh] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-0" ref={el => testimonialRefs.current[0] = el}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">What Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how AuthenLens is helping professionals across industries verify digital content
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Featured testimonial */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                ref={el => testimonialRefs.current[index + 1] = el}
                className={`transition-all duration-700 ${
                  activeIndex === index 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 absolute inset-0 translate-x-32'
                }`}
              >
                <Card 
                  className="p-8 md:p-12 border-white/30 shadow-lg hover:shadow-xl transition-shadow dark:border-white/10 glassmorphism"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/20" />
                    
                    <div className="mb-8">
                      <p className="text-xl md:text-2xl italic leading-relaxed">"{testimonial.quote}"</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.author}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${
                              i < testimonial.rating 
                                ? 'text-amber-400 fill-amber-400' 
                                : 'text-muted-foreground'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Testimonial navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index 
                    ? 'bg-primary scale-110' 
                    : 'bg-primary/20 hover:bg-primary/50'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
