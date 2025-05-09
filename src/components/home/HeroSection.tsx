import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Image, FileText, Video, AudioLines, Target, Shield, PartyPopper, Laugh, Cookie, Pizza, Candy, Banana } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const mediaIconsRef = useRef<HTMLDivElement>(null);
  const [wobbleTitle, setWobbleTitle] = useState(false);
  const [buttonText, setButtonText] = useState("START SCAN");
  const [titleClass, setTitleClass] = useState("gta-text");
  
  // Random fun button text options
  const funButtonTexts = [
    "CLICK ME!", 
    "PRESS ME!", 
    "OH YES!", 
    "PUSH IT!", 
    "I'M A BUTTON!",
    "DO IT!",
    "TRY ME!",
    "BOOP ME!",
    "PUSH ME!",
    "YES, HERE!"
  ];
  
  // Troll effect: Change button text on hover
  const handleButtonHover = () => {
    const randomText = funButtonTexts[Math.floor(Math.random() * funButtonTexts.length)];
    setButtonText(randomText);
  };
  
  // Troll effect: Restore button text when not hovering
  const handleButtonLeave = () => {
    setButtonText("START SCAN");
  };
  
  // City lights animation effect with extra craziness
  useEffect(() => {
    if (!heroRef.current) return;
    
    const hero = heroRef.current;
    const colors = ['#F97316', '#EC4899', '#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#EF4444'];
    
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
      
      // Random chance to make the light do something silly
      if (Math.random() < 0.2) {
        const animations = ['wiggle', 'spin-slow', 'bounce-crazy'];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        light.classList.add(randomAnimation);
      }
      
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
    
    // Trolling: Randomly change title style
    const titleInterval = setInterval(() => {
      // 20% chance to apply a silly effect to the title
      if (Math.random() < 0.2) {
        const effects = [
          "rainbow-text wiggle",
          "gta-text jello", 
          "gta-text pulse-grow", 
          "rainbow-text tilt-left-right",
          "gta-text flip-x"
        ];
        const randomEffect = effects[Math.floor(Math.random() * effects.length)];
        setTitleClass(randomEffect);
        
        // Reset after a short time
        setTimeout(() => {
          setTitleClass("gta-text");
        }, 2000);
      }
    }, 5000);
    
    // Randomly make the title wobble
    const wobbleInterval = setInterval(() => {
      if (Math.random() < 0.3) {
        setWobbleTitle(true);
        
        setTimeout(() => {
          setWobbleTitle(false);
        }, 1000);
      }
    }, 7000);
    
    return () => {
      clearInterval(interval);
      clearInterval(titleInterval);
      clearInterval(wobbleInterval);
    };
  }, []);

  // 3D tilt effect for floating elements with extra random movements
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
        
        // Add some random movement for trolling effect
        const randomX = (Math.random() - 0.5) * 10;
        const randomY = (Math.random() - 0.5) * 10;
        
        iconElement.style.transform = `translate3d(${x * factor + randomX}px, ${y * factor + randomY}px, 0) rotate(${x * 0.05}deg)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Trolling: Randomly apply effects to media icons
    const iconEffectInterval = setInterval(() => {
      const icons = mediaIcons.querySelectorAll('.media-icon');
      icons.forEach((icon) => {
        if (Math.random() < 0.2) {
          const effects = ['wiggle', 'jello', 'shake-horizontal', 'pulse-grow', 'tilt-left-right'];
          const randomEffect = effects[Math.floor(Math.random() * effects.length)];
          
          icon.classList.add(randomEffect);
          
          setTimeout(() => {
            icon.classList.remove(randomEffect);
          }, 2000);
        }
      });
    }, 5000);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(iconEffectInterval);
    };
  }, []);

  // Troll effect: Create random icons that fly across the screen
  useEffect(() => {
    const createFlyingIcon = () => {
      // Define icon components (simplified approach without direct Lucide usage)
      const iconTypes = ['banana', 'pizza', 'cookie', 'candy', 'laugh', 'party'];
      const randomIcon = iconTypes[Math.floor(Math.random() * iconTypes.length)];
      
      const flyingIcon = document.createElement('div');
      flyingIcon.style.position = 'fixed';
      flyingIcon.style.zIndex = '999';
      flyingIcon.style.color = `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`;
      flyingIcon.style.fontSize = `${Math.floor(Math.random() * 30) + 20}px`;
      
      // Random starting position (top, right, bottom, left)
      const positions = ['top', 'right', 'bottom', 'left'];
      const startPosition = positions[Math.floor(Math.random() * positions.length)];
      
      // Set random starting and ending positions
      switch (startPosition) {
        case 'top':
          flyingIcon.style.top = '-50px';
          flyingIcon.style.left = `${Math.random() * window.innerWidth}px`;
          break;
        case 'right':
          flyingIcon.style.right = '-50px';
          flyingIcon.style.top = `${Math.random() * window.innerHeight}px`;
          break;
        case 'bottom':
          flyingIcon.style.bottom = '-50px';
          flyingIcon.style.left = `${Math.random() * window.innerWidth}px`;
          break;
        case 'left':
          flyingIcon.style.left = '-50px';
          flyingIcon.style.top = `${Math.random() * window.innerHeight}px`;
          break;
      }
      
      // Add a random animation class
      const animations = ['move-around', 'spin-fast'];
      flyingIcon.classList.add(animations[Math.floor(Math.random() * animations.length)]);
      
      document.body.appendChild(flyingIcon);
      
      // Create a simple emoji instead of SVG to avoid potential issues
      flyingIcon.innerHTML = getRandomEmoji();
      
      // Animate the flying icon across the screen
      try {
        const animation = flyingIcon.animate([
          { transform: 'translate(0, 0)' },
          { transform: `translate(${Math.random() > 0.5 ? window.innerWidth + 100 : -window.innerWidth - 100}px, ${Math.random() > 0.5 ? window.innerHeight + 100 : -window.innerHeight - 100}px)` }
        ], {
          duration: Math.random() * 3000 + 2000,
          easing: 'ease-in-out',
          fill: 'forwards'
        });
        
        // Handle animation completion properly with type checking
        if (animation) {
          // Use addEventListener instead of the promise-based onfinish
          animation.addEventListener('finish', () => {
            if (flyingIcon.parentNode) {
              document.body.removeChild(flyingIcon);
            }
          });
        } else {
          setTimeout(() => {
            if (flyingIcon.parentNode) {
              document.body.removeChild(flyingIcon);
            }
          }, 5000);
        }
      } catch (error) {
        console.log("Animation error:", error);
        setTimeout(() => {
          if (flyingIcon.parentNode) {
            document.body.removeChild(flyingIcon);
          }
        }, 5000);
      }
    };
    
    // Helper function to get random emoji
    const getRandomEmoji = () => {
      const emojis = ['🍌', '🍕', '🍪', '🍬', '😂', '🎉'];
      return emojis[Math.floor(Math.random() * emojis.length)];
    };
    
    const interval = setInterval(createFlyingIcon, 5000);
    
    return () => {
      clearInterval(interval);
    };
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
          <div className={`relative inline-block mb-4 ${wobbleTitle ? 'wiggle' : ''}`}>
            <h1 className="text-6xl md:text-8xl font-bold animate-fade-in relative z-10 tracking-tight">
              <span className={titleClass}>AuthenLens</span> <span className="text-3xl md:text-4xl align-super text-gta-gold">VI</span>
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
            that identifies AI-generated <span className="font-semibold text-gta-gold bounce-crazy inline-block">images</span>, <span className="font-semibold text-gta-gold shake-horizontal inline-block">videos</span>, <span className="font-semibold text-gta-gold flip-y inline-block">audio</span>, and <span className="font-semibold text-gta-gold wiggle inline-block">text</span> with industry-leading accuracy.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              asChild 
              size="lg" 
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              className="bg-gradient-to-r from-gta-pink to-gta-purple hover:from-gta-pink/90 hover:to-gta-purple/90 shadow-gta-neon border-none text-white font-bold py-6 px-8 relative group"
            >
              <Link to="/image" className="overflow-hidden">
                {buttonText}
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gta-gold text-gta-gold hover:text-gta-gold/90 hover:border-gta-gold/90 py-6 px-8 move-around"
            >
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
            
            {/* Trolling extra elements that appear randomly */}
            <div className="absolute left-[30%] top-[70%] w-10 h-10 gta-card shadow-gta-box rounded-md animate-gta-float media-icon z-20 spin-slow" style={{ animationDelay: '0.5s' }}>
              <Pizza className="w-full h-full p-2 text-orange-500" />
            </div>
            
            <div className="absolute right-[35%] top-[30%] w-12 h-12 gta-card shadow-gta-box rounded-md animate-gta-float media-icon z-20 jello" style={{ animationDelay: '1.7s' }}>
              <PartyPopper className="w-full h-full p-2 text-yellow-500" />
            </div>
            
            <div className="absolute left-[15%] bottom-[35%] w-11 h-11 gta-card shadow-gta-box rounded-md animate-gta-float media-icon z-20 bounce-crazy" style={{ animationDelay: '1.3s' }}>
              <Cookie className="w-full h-full p-2 text-amber-700" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Trolling: Meme corner image that peeks from the corner */}
      <div className="fixed bottom-0 right-0 w-24 h-24 z-50 hover:w-48 hover:h-48 transition-all duration-500 cursor-pointer">
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-white rounded-tl-full overflow-hidden">
          <Candy className="absolute bottom-0 right-0 w-12 h-12 text-pink-500" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
