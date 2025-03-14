
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-0 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          <div className="lg:w-1/2 space-y-6 text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-2">
              Get in Touch
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
              We'd love to hear from you
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Have questions about NovaGrid? Contact our team for assistance or to schedule a demo.
            </p>
            
            <div className="pt-6 space-y-6">
              <div className="flex items-start">
                <div className="feature-icon mr-4 !w-10 !h-10">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm">support@novagrid.example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="feature-icon mr-4 !w-10 !h-10">
                  <Phone size={18} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="feature-icon mr-4 !w-10 !h-10">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Office</h3>
                  <p className="text-muted-foreground text-sm">123 Innovation Drive, San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="glass rounded-xl p-8 h-full">
              <form className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-left">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-left">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-left">Message</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your message"
                    rows={4}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors text-sm font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
