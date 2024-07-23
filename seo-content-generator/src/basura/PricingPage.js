import React from 'react';
import PricingCard from '../components/PricingCard';

function PricingPage() {
  const plans = [
    { name: 'Básico', price: 29, features: ['100 palabras/mes', 'Análisis básico de keywords', 'Soporte por email'] },
    { name: 'Pro', price: 79, features: ['500 palabras/mes', 'Análisis avanzado de keywords', 'Análisis de competencia', 'Soporte prioritario'] },
    { name: 'Empresa', price: 199, features: ['2000 palabras/mes', 'Análisis completo', 'API access', 'Soporte dedicado'] },
  ];

  return (
    <div className="pricing-page">
      <h1>Elige tu plan</h1>
      <div className="pricing-grid">
        {plans.map(plan => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    </div>
  );
}

export default PricingPage;