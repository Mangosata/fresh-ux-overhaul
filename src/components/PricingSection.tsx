
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: "Basic",
    price: "$0",
    period: "Forever",
    description: "Great for individuals and small projects",
    features: [
      "Up to 10,000 records",
      "Basic grid functionality",
      "Export to CSV",
      "Community support",
      "1 user"
    ],
    cta: "Get Started",
    highlight: false
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Perfect for growing teams and applications",
    features: [
      "Up to 1 million records",
      "Advanced grid functionality",
      "Export to multiple formats",
      "Email support",
      "Up to 5 users",
      "Advanced analytics",
      "API access"
    ],
    cta: "Start Free Trial",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Contact us",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited records",
      "All Pro features",
      "Dedicated support",
      "Custom integrations",
      "Unlimited users",
      "SLA guarantee",
      "On-premise option"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-4">
            Simple Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
            Plans for teams of all sizes
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your needs. Always know what you'll pay with transparent pricing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] ${
                tier.highlight 
                  ? 'border-2 border-blue-500 shadow-lg' 
                  : 'border border-gray-200'
              }`}
            >
              {tier.highlight && (
                <div className="bg-blue-500 text-white py-2 text-center text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground ml-2">{tier.period}</span>
                </div>
                <p className="text-muted-foreground mb-6">{tier.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={16} className="mr-2 mt-1 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#getstarted" 
                  className={`flex items-center justify-center gap-1 w-full py-3 rounded-full text-sm font-medium transition-colors ${
                    tier.highlight 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : 'bg-white border border-gray-200 text-foreground hover:border-blue-200'
                  }`}
                >
                  {tier.cta} {tier.highlight && <ArrowRight size={14} />}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
