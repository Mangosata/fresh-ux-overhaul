
import React from 'react';

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 px-6 md:px-12 lg:px-0 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-2">
              Advanced Technology
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
              Built on modern technology stack
            </h2>
            
            <p className="text-lg text-muted-foreground">
              NovaGrid leverages cutting-edge technologies to deliver unmatched performance, reliability, and user experience.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border border-gray-100 rounded-lg p-4 bg-white">
                <h3 className="font-medium mb-2">Real-time Processing</h3>
                <p className="text-sm text-muted-foreground">Process millions of data points instantly with our optimized engine.</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4 bg-white">
                <h3 className="font-medium mb-2">Cloud Architecture</h3>
                <p className="text-sm text-muted-foreground">Seamlessly scale your applications with our distributed cloud system.</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4 bg-white">
                <h3 className="font-medium mb-2">Advanced API</h3>
                <p className="text-sm text-muted-foreground">Connect to any data source with our comprehensive API endpoints.</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4 bg-white">
                <h3 className="font-medium mb-2">Smart Caching</h3>
                <p className="text-sm text-muted-foreground">Intelligent caching reduces load times and improves performance.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="glass rounded-2xl p-1 shadow-xl">
              <img 
                src="https://placehold.co/800x600/e0f2fe/1e3a8a" 
                alt="NovaGrid Technology" 
                className="rounded-xl w-full h-auto"
                loading="lazy"
              />
            </div>
            
            {/* Tech Specs Overlay */}
            <div className="absolute -bottom-4 -right-4 p-4 bg-white rounded-lg shadow-lg border border-gray-100">
              <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-xs font-medium">TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-xs font-medium">React</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span className="text-xs font-medium">GraphQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span className="text-xs font-medium">WebAssembly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
