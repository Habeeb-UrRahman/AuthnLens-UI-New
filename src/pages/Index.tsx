
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import HowItWorks from '@/components/home/HowItWorks';
import CTASection from '@/components/home/CTASection';
import StatsSection from '@/components/home/StatsSection';

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    // Cursor effect for GTA 6 style
    const createCursorEffect = () => {
      const cursor = document.createElement('div');
      cursor.classList.add('custom-cursor');
      document.body.appendChild(cursor);
      
      const handleMouseMove = (e: MouseEvent) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      };
      
      document.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        if (cursor.parentNode) {
          document.body.removeChild(cursor);
        }
      };
    };
    
    // Add cursor style
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
    `;
    document.head.appendChild(style);
    
    const cursorCleanup = createCursorEffect();
    
    // Smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorLink = target.closest('a[href^="#"]');
      
      if (anchorLink) {
        e.preventDefault();
        const targetId = anchorLink.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Account for fixed header
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cursorCleanup();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Layout className="overflow-x-hidden">
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
