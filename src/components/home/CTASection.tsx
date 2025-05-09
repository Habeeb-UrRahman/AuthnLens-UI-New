
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useRef, useEffect, useState } from 'react';
import { Pizza, Laugh, PartyPopper } from 'lucide-react';

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [buttonText, setButtonText] = useState("Try Image Detection");
  const [buttonClass, setButtonClass] = useState("bg-gradient-to-r from-gta-pink to-gta-purple hover:opacity-90 shadow-gta-neon border-none text-white uppercase tracking-widest font-bold py-8 px-10");
  
  // Parallax effect on scroll with extra wobble
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return;
      
      const scrollPosition = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const distanceFromTop = scrollPosition - sectionTop;
      
      if (distanceFromTop > -window.innerHeight && distanceFromTop < window.innerHeight) {
        // Add a random wobble for trolling effect
        const randomX = (Math.random() - 0.5) * 5;
        const randomRotate = (Math.random() - 0.5) * 2;
        contentRef.current.style.transform = `translateY(${distanceFromTop * 0.1}px) translateX(${randomX}px) rotate(${randomRotate}deg)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trolling: Button that runs away from the cursor
  useEffect(() => {
    if (!buttonRef.current) return;
    
    const button = buttonRef.current;
    
    const handleButtonMouseOver = () => {
      if (Math.random() < 0.7) {
        setIsRunning(true);
        
        // Change text sometimes
        if (Math.random() < 0.5) {
          const funnyTexts = [
            "Try to catch me!",
            "Too slow!",
            "Not today!",
            "Almost got me!",
            "You can't click me!",
            "Nope!",
            "Nice try!",
            "Too fast for you!",
            "Wheee!",
            "Can't touch this!"
          ];
          const randomText = funnyTexts[Math.floor(Math.random() * funnyTexts.length)];
          setButtonText(randomText);
        }
        
        // Make button run away
        const buttonRect = button.getBoundingClientRect();
        const parentRect = button.parentElement!.getBoundingClientRect();
        
        const maxX = parentRect.width - buttonRect.width;
        const maxY = parentRect.height - buttonRect.height;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        button.style.position = 'absolute';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
        
        // Add a funny animation class
        const animations = ['wiggle', 'shake-horizontal', 'jello'];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        setButtonClass(`bg-gradient-to-r from-gta-pink to-gta-purple hover:opacity-90 shadow-gta-neon border-none text-white uppercase tracking-widest font-bold py-8 px-10 ${randomAnimation}`);
        
        // Stop running after a short time
        setTimeout(() => {
          setIsRunning(false);
          setButtonText("Try Image Detection");
          setButtonClass("bg-gradient-to-r from-gta-pink to-gta-purple hover:opacity-90 shadow-gta-neon border-none text-white uppercase tracking-widest font-bold py-8 px-10");
          button.style.position = '';
          button.style.left = '';
          button.style.top = '';
        }, 2000);
      }
    };
    
    if (isRunning) {
      button.addEventListener('mouseover', handleButtonMouseOver);
    }
    
    return () => {
      button.removeEventListener('mouseover', handleButtonMouseOver);
    };
  }, [isRunning]);

  // Trolling: Add confetti explosion on button click
  const handleButtonClick = () => {
    // Create and display confetti elements
    for (let i = 0; i < 100; i++) {
      createConfetti();
    }
  };

  // Helper function to create confetti
  const createConfetti = () => {
    if (!sectionRef.current) return;
    
    const confetti = document.createElement('div');
    const size = Math.random() * 10 + 5;
    const section = sectionRef.current;
    
    confetti.style.position = 'absolute';
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confetti.style.zIndex = '10';
    
    const sectionRect = section.getBoundingClientRect();
    const centerX = sectionRect.width / 2;
    const centerY = sectionRect.height / 2;
    
    confetti.style.left = `${centerX}px`;
    confetti.style.top = `${centerY}px`;
    
    section.appendChild(confetti);
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 10 + 5;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    const rotateSpeed = (Math.random() - 0.5) * 20;
    
    let x = centerX;
    let y = centerY;
    let rotation = 0;
    let opacity = 1;
    
    const animate = () => {
      x += vx;
      y += vy - 0.5; // Gravity effect
      rotation += rotateSpeed;
      opacity -= 0.01;
      
      confetti.style.left = `${x}px`;
      confetti.style.top = `${y}px`;
      confetti.style.transform = `rotate(${rotation}deg)`;
      confetti.style.opacity = `${opacity}`;
      
      if (opacity > 0) {
        requestAnimationFrame(animate);
      } else {
        section.removeChild(confetti);
      }
    };
    
    requestAnimationFrame(animate);
  };

  // Trolling: Randomly add emojis that float up from the bottom
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const section = sectionRef.current;
    
    const createFloatingEmoji = () => {
      const emojiContainer = document.createElement('div');
      const emojis = ["😂", "🎉", "🤣", "🥳", "👽", "👾", "🤖", "👻", "💩", "🍕", "🍔", "🍿", "🌮"];
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      
      emojiContainer.textContent = emoji;
      emojiContainer.style.position = 'absolute';
      emojiContainer.style.fontSize = `${Math.random() * 20 + 20}px`;
      emojiContainer.style.left = `${Math.random() * 100}%`;
      emojiContainer.style.bottom = '0';
      emojiContainer.style.opacity = '0';
      emojiContainer.style.zIndex = '5';
      emojiContainer.style.pointerEvents = 'none';
      
      section.appendChild(emojiContainer);
      
      const animation = emojiContainer.animate([
        { transform: 'translateY(0)', opacity: 0 },
        { transform: 'translateY(-50px)', opacity: 1, offset: 0.2 },
        { transform: 'translateY(-200px)', opacity: 0 }
      ], {
        duration: Math.random() * 2000 + 3000,
        easing: 'ease-out'
      });
      
      animation.onfinish = () => {
        if (emojiContainer.parentNode) {
          section.removeChild(emojiContainer);
        }
      };
    };
    
    const emojiInterval = setInterval(createFloatingEmoji, 3000);
    
    return () => clearInterval(emojiInterval);
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
        
        {/* Trolling: Random emoji rain */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="absolute text-4xl" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `fall ${Math.random() * 10 + 5}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.7
              }}
            >
              {Math.random() < 0.33 ? <Pizza size={32} /> : 
               Math.random() < 0.67 ? <Laugh size={32} /> : 
               <PartyPopper size={32} />}
            </div>
          ))}
        </div>
      </div>
      
      <div ref={contentRef} className="container mx-auto px-4 py-8 text-center relative z-10">
        <div className="inline-block mb-6">
          <h2 className="text-4xl md:text-6xl font-bold gta-text">Ready to identify <span className="text-white rainbow-text">AI-generated content?</span></h2>
          
          {/* Glitch effect */}
          <div className="absolute -top-1 -left-1 text-4xl md:text-6xl font-bold text-gta-red/10 animate-glitch select-none">
            Ready to identify AI-generated content?
          </div>
        </div>
        
        <p className="text-xl mb-10 max-w-2xl mx-auto text-white/80 jello">
          Start using our advanced detection system today to verify the authenticity of digital content.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 relative h-32">
          <button
            ref={buttonRef}
            onClick={handleButtonClick}
            onMouseOver={() => setIsRunning(true)}
            className={buttonClass}
          >
            {buttonText}
          </button>
          
          <Button asChild size="lg" variant="outline" className="border-2 border-gta-gold bg-transparent text-gta-gold hover:bg-gta-gold/10 uppercase tracking-widest py-8 px-10 wiggle">
            <Link to="/text">Try Text Detection</Link>
          </Button>
        </div>
      </div>
      
      {/* Trolling: Easter egg - clicking anywhere in this section has a chance to trigger silly voice */}
      <div 
        className="absolute inset-0 z-5 cursor-pointer"
        onClick={() => {
          if (Math.random() < 0.2) {
            const funSounds = [
              "Boing!",
              "Wheee!",
              "Pop!",
              "Zing!",
              "Kapow!",
              "Bzzt!",
              "Woop woop!",
              "Zap!",
              "Splat!"
            ];
            
            const randomSound = funSounds[Math.floor(Math.random() * funSounds.length)];
            
            // Create a floating text that shows the sound
            const soundText = document.createElement('div');
            soundText.textContent = randomSound;
            soundText.style.position = 'absolute';
            soundText.style.left = `${Math.random() * 80 + 10}%`;
            soundText.style.top = `${Math.random() * 80 + 10}%`;
            soundText.style.fontSize = '2rem';
            soundText.style.fontWeight = 'bold';
            soundText.style.color = `hsl(${Math.random() * 360}, 80%, 60%)`;
            soundText.style.zIndex = '100';
            soundText.style.pointerEvents = 'none';
            soundText.className = 'bounce-crazy';
            
            if (sectionRef.current) {
              sectionRef.current.appendChild(soundText);
              
              // Remove after animation
              setTimeout(() => {
                if (soundText.parentNode) {
                  sectionRef.current?.removeChild(soundText);
                }
              }, 2000);
            }
          }
        }}
      ></div>
    </section>
  );
};

export default CTASection;
