import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import HowItWorks from '@/components/home/HowItWorks';
import CTASection from '@/components/home/CTASection';
import StatsSection from '@/components/home/StatsSection';
import { Banana, Bomb, Bug, BugOff, Cake, Cookie, EggFried, Laugh, LucideIcon, PartyPopper, Pizza, Candy } from 'lucide-react';

// Array of fun icons that will randomly appear
const funIcons: LucideIcon[] = [
  Banana, Bomb, Bug, BugOff, Cake, Cookie, EggFried, Laugh, PartyPopper, Pizza, Candy
];

// Array of goofy CSS classes
const goofyClasses = [
  'wiggle', 'spin-slow', 'bounce-crazy', 'shake-horizontal', 'shake-vertical',
  'flip-x', 'flip-y', 'jello', 'pulse-grow', 'tilt-left-right'
];

const Index = () => {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showTrollingIcon, setShowTrollingIcon] = useState(false);
  const [currentIcon, setCurrentIcon] = useState<LucideIcon>(Laugh);
  const [currentClass, setCurrentClass] = useState('wiggle');
  const [trollingMessages, setTrollingMessages] = useState<{id: number, text: string, x: number, y: number, effect: string}[]>([]);
  const [nextId, setNextId] = useState(0);
  
  // Random messages that will pop up
  const funnyMessages = [
    "Click me again, I dare you!",
    "Ouch! That tickles!",
    "Stop poking me!",
    "I'm getting dizzy!",
    "Are we having fun yet?",
    "Wheeeee!",
    "Now you've done it!",
    "Oh no, not again!",
    "You found the secret button!",
    "Error 404: Seriousness not found",
    "Why so clicky?",
    "That's not a bug, it's a feature!",
  ];

  // Function to get a random item from an array
  const getRandomItem = <T,>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
  };
  
  // Cursor effect for GTA 6 style
  useEffect(() => {
    // Cursor effect for GTA 6 style
    const createCursorEffect = () => {
      const cursor = document.createElement('div');
      cursor.classList.add('custom-cursor');
      document.body.appendChild(cursor);
      
      const handleMouseMove = (e: MouseEvent) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        // Random chance to make the cursor do something silly
        if (Math.random() < 0.01) {
          const randomEffect = getRandomItem(goofyClasses);
          cursor.classList.add(randomEffect);
          
          // Remove the effect after a short time
          setTimeout(() => {
            cursor.classList.remove(randomEffect);
          }, 1000);
        }
      };
      
      document.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        if (cursor.parentNode) {
          document.body.removeChild(cursor);
        }
      };
    };
    
    // Add cursor style with trolling effects
    const style = document.createElement('style');
    style.textContent = `
      .custom-cursor {
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(236, 72, 153, 0.3);
        border: 1px solid rgba(236, 72, 153, 0.6);
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
        transition: width 0.2s, height 0.2s;
      }
      .custom-cursor::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 4px;
        height: 4px;
        background: rgba(236, 72, 153, 1);
        border-radius: 50%;
      }
      a:hover ~ .custom-cursor,
      button:hover ~ .custom-cursor {
        width: 40px;
        height: 40px;
        background: rgba(236, 72, 153, 0.1);
      }
      
      /* Trolling floating message */
      .trolling-message {
        position: absolute;
        font-weight: bold;
        font-size: 18px;
        z-index: 9999;
        pointer-events: none;
        white-space: nowrap;
        animation: message-float 2s forwards;
      }
      
      /* Trolling icon */
      .trolling-icon {
        position: fixed;
        z-index: 9999;
        pointer-events: none;
        opacity: 0;
        animation: icon-appear 1s forwards;
      }
      
      @keyframes message-float {
        0% {
          opacity: 1;
          transform: translateY(0);
        }
        100% {
          opacity: 0;
          transform: translateY(-50px);
        }
      }
      
      @keyframes icon-appear {
        0% {
          opacity: 0;
          transform: scale(0);
        }
        50% {
          opacity: 1;
          transform: scale(1.2);
        }
        100% {
          opacity: 0;
          transform: scale(0);
        }
      }
    `;
    document.head.appendChild(style);
    
    const cursorCleanup = createCursorEffect();
    
    // Smooth scrolling with a twist
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorLink = target.closest('a[href^="#"]');
      
      if (anchorLink) {
        e.preventDefault();
        const targetId = anchorLink.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            // Random chance for a fun scroll effect
            if (Math.random() < 0.5) {
              // Normal scroll
              window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
              });
            } else {
              // Bouncy scroll
              let currentPos = window.scrollY;
              const targetPos = targetElement.offsetTop - 80;
              const distance = targetPos - currentPos;
              let start: number | null = null;
              const duration = 1000;
              
              const bouncyScroll = (timestamp: number) => {
                if (!start) start = timestamp;
                const elapsed = timestamp - start;
                const progress = Math.min(elapsed / duration, 1);
                
                // Bouncy easing
                const easing = (progressVal: number) => {
                  return progressVal < 0.5
                    ? 4 * progressVal * progressVal * progressVal
                    : 1 - Math.pow(-2 * progressVal + 2, 3) / 2;
                };
                
                // Add some bounce
                const bounce = Math.sin(progress * Math.PI * 4) * (1 - progress) * 0.2;
                const newPos = currentPos + distance * easing(progress) + bounce * distance;
                
                window.scrollTo(0, newPos);
                
                if (progress < 1) {
                  requestAnimationFrame(bouncyScroll);
                }
              };
              
              requestAnimationFrame(bouncyScroll);
            }
          }
        }
      }
    };
    
    // Trolling: Handle document clicks to spawn messages and icons
    const handleDocumentClick = (e: MouseEvent) => {
      setClickPosition({ x: e.clientX, y: e.clientY });
      
      // Spawn a random message
      if (Math.random() < 0.7) {
        const randomMessage = getRandomItem(funnyMessages);
        const randomEffect = getRandomItem(goofyClasses);
        const messageId = nextId;
        setNextId(prevId => prevId + 1);
        
        setTrollingMessages(prev => [
          ...prev, 
          {
            id: messageId,
            text: randomMessage,
            x: e.clientX,
            y: e.clientY,
            effect: randomEffect
          }
        ]);
        
        // Remove the message after animation completes
        setTimeout(() => {
          setTrollingMessages(prev => prev.filter(msg => msg.id !== messageId));
        }, 2000);
      }
      
      // Spawn a random icon
      setCurrentIcon(getRandomItem(funIcons));
      setCurrentClass(getRandomItem(goofyClasses));
      setShowTrollingIcon(true);
      
      // Hide the icon after animation
      setTimeout(() => {
        setShowTrollingIcon(false);
      }, 1000);
      
      // Random chance for the page to do something silly
      if (Math.random() < 0.1) {
        const htmlElement = document.documentElement;
        const randomEffect = getRandomItem(goofyClasses);
        
        htmlElement.classList.add(randomEffect);
        
        // Remove the effect after a short time
        setTimeout(() => {
          htmlElement.classList.remove(randomEffect);
        }, 1000);
      }
    };
    
    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('click', handleAnchorClick);
    
    // Trolling: Sometimes add random rotation to elements
    const addRandomRotations = () => {
      const elements = document.querySelectorAll('h1, h2, h3, img, button');
      elements.forEach((el) => {
        if (Math.random() < 0.2) {
          const rotation = (Math.random() * 10) - 5;
          (el as HTMLElement).style.transform = `rotate(${rotation}deg)`;
        }
      });
    };
    
    const rotationInterval = setInterval(addRandomRotations, 10000);
    
    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('click', handleAnchorClick);
      cursorCleanup();
      document.head.removeChild(style);
      clearInterval(rotationInterval);
    };
  }, [nextId]);

  return (
    <Layout className="overflow-x-hidden">
      {/* Trolling components */}
      {showTrollingIcon && (
        <div 
          className={`trolling-icon ${currentClass}`}
          style={{ 
            left: `${clickPosition.x}px`, 
            top: `${clickPosition.y}px`,
            color: `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`,
            fontSize: `${Math.floor(Math.random() * 24) + 24}px`
          }}
        >
          {/* Here we properly render the Lucide icon component */}
          {currentIcon && React.createElement(currentIcon)}
        </div>
      )}
      
      {trollingMessages.map((message) => (
        <div 
          key={message.id}
          className={`trolling-message ${message.effect}`}
          style={{ 
            left: `${message.x}px`, 
            top: `${message.y}px`,
            color: `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`
          }}
        >
          {message.text}
        </div>
      ))}
      
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorks />
      <CTASection />
      <StatsSection />
    </Layout>
  );
};

export default Index;
