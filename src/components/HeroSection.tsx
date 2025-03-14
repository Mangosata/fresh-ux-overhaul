
import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-gradient relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-0 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse-soft"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-12 md:mb-0 md:w-1/2 text-left space-y-6 md:pr-12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-2 animate-fade-in">
              Next Generation Grid System
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight animate-slide-up">
              Simplify Your <span className="text-blue-500">Data Experience</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground animate-slide-up [animation-delay:200ms]">
              NovaGrid delivers an intuitive, powerful data grid system that makes managing complex datasets effortless.
            </p>
            
            <div className="flex gap-4 pt-4 animate-slide-up [animation-delay:400ms]">
              <a 
                href="#getstarted" 
                className="flex items-center gap-1 px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors text-sm font-medium"
              >
                Get Started <ArrowRight size={16} />
              </a>
              
              <a 
                href="#demo" 
                className="flex items-center gap-1 px-6 py-3 rounded-full border border-gray-200 hover:border-blue-200 text-foreground transition-colors text-sm font-medium"
              >
                See Demo
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="glass rounded-2xl p-1 shadow-xl animate-slide-up [animation-delay:600ms]">
              <img 
                src="https://placehold.co/800x600/e0f2fe/1e3a8a" 
                alt="NovaGrid Interface" 
                className="rounded-xl w-full h-auto"
                loading="lazy"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="glass absolute -top-6 -left-6 px-4 py-3 rounded-lg animate-float">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-sm font-medium">99.9% Uptime</span>
              </div>
            </div>
            
            <div className="glass absolute -bottom-4 -right-4 px-4 py-3 rounded-lg animate-float [animation-delay:2s]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <span className="text-sm font-medium">Real-time Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#features" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-medium mb-2">Scroll to explore</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
