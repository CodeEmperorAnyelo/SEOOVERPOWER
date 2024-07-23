import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection 
        title="Optimiza tu SEO y genera contenido de calidad"
        subtitle="Analiza palabras clave, estudia a tu competencia y crea contenido optimizado para SEO con inteligencia artificial."
      />
      <FeatureSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}

export default HomePage;
