
import React from 'react';
import { LineChart, BarChart, LayoutGrid, Clock, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <LayoutGrid />,
    title: "Flexible Layout",
    description: "Customize your grid with intuitive drag-and-drop functionality and responsive design elements."
  },
  {
    icon: <LineChart />,
    title: "Data Visualization",
    description: "Transform complex datasets into beautiful charts and graphs with just a few clicks."
  },
  {
    icon: <Zap />,
    title: "Lightning Fast",
    description: "Optimized performance ensures smooth operation even with millions of data points."
  },
  {
    icon: <Shield />,
    title: "Enterprise Security",
    description: "Bank-grade security protocols protect your data at all times with end-to-end encryption."
  },
  {
    icon: <BarChart />,
    title: "Advanced Analytics",
    description: "Gain deeper insights with built-in analytics tools and customizable reporting."
  },
  {
    icon: <Clock />,
    title: "Real-time Updates",
    description: "Stay current with automatic data synchronization and collaborative features."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-12 lg:px-0 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-4">
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
            Everything you need for data management
          </h2>
          <p className="text-lg text-muted-foreground">
            NovaGrid combines powerful features with an intuitive interface to make data management simple, flexible, and powerful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass rounded-xl p-8 transition-all duration-300 hover:translate-y-[-5px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="feature-icon mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
