
import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5 px-6 md:px-12",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-display font-bold tracking-tight">
            Nova<span className="text-blue-500">Grid</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-blue-500 transition-colors">
            Features
          </a>
          <a href="#technology" className="text-sm font-medium hover:text-blue-500 transition-colors">
            Technology
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-blue-500 transition-colors">
            Pricing
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-blue-500 transition-colors">
            Contact
          </a>
          <a 
            href="#getstarted" 
            className="flex items-center gap-1 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors text-sm font-medium"
          >
            Get Started <ArrowRight size={14} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-blue-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-x-0 bg-white/95 backdrop-blur-lg shadow-md transition-all duration-300 ease-in-out z-40 md:hidden",
          mobileMenuOpen ? "top-[72px] opacity-100" : "top-[-400px] opacity-0"
        )}
      >
        <nav className="flex flex-col p-6 space-y-4">
          <a 
            href="#features" 
            className="py-2 text-base font-medium hover:text-blue-500 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#technology" 
            className="py-2 text-base font-medium hover:text-blue-500 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Technology
          </a>
          <a 
            href="#pricing" 
            className="py-2 text-base font-medium hover:text-blue-500 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            className="py-2 text-base font-medium hover:text-blue-500 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <a 
            href="#getstarted" 
            className="flex justify-center items-center gap-1 px-4 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors text-base font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started <ArrowRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
