
import React, { useEffect } from 'react';
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
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorLink = target.closest('a[href^="#"]');
      
      if (anchorLink) {
        e.preventDefault();
        const targetId = anchorLink.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            // Enhanced smooth scroll with easing
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Account for fixed header
              behavior: 'smooth'
            });
            
            // Add highlight animation to the target section
            targetElement.classList.add('pulse-highlight');
            setTimeout(() => targetElement.classList.remove('pulse-highlight'), 1500);
          }
        }
      }
    };
    
    // Track scroll depth for analytics
    const trackScrollDepth = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      
      // Could connect to analytics in the future
      console.log(`Scroll depth: ${Math.round(scrollPercent * 100)}%`);
    };
    
    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('scroll', trackScrollDepth);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', trackScrollDepth);
    };
  }, []);

  return (
    <Layout className="overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorks />
      <StatsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
