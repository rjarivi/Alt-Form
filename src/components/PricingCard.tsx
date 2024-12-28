import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, cta, popular = false }) => {
  return (
    <div className={`rounded-2xl shadow-sm ${popular ? 'border-2 border-indigo-500 scale-105' : 'border border-gray-200'} bg-white p-8 relative`}>
      {popular && (
        <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-indigo-500 text-white px-3 py-1 text-sm font-medium rounded-full">
          Popular
        </span>
      )}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="mt-4 flex items-baseline justify-center">
          <span className="text-4xl font-bold tracking-tight text-gray-900">{price}</span>
          {price !== 'Custom' && <span className="ml-1 text-xl font-semibold text-gray-500">/mo</span>}
        </div>
      </div>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-6 w-6 flex-shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-3 text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <button className={`w-full rounded-lg px-4 py-2 text-center text-sm font-semibold transition-all
          ${popular 
            ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
            : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}>
          {cta}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;