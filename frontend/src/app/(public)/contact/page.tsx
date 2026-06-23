import React from 'react';
import { Button } from '@/components/ui/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 px-6 container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-5xl font-heading font-bold mb-6">Partner with <span className="text-gradient">ForEVAR</span></h1>
            <p className="text-xl text-text-secondary font-body mb-12">
              Whether you are an institution looking to monetize waste, a recycler seeking verified feedstock, or an investor sharing our vision.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-bg border border-border-subtle rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white mb-1">Email Us</h3>
                  <a href="mailto:partnerships@forevar.in" className="text-text-secondary hover:text-accent-primary transition-colors">
                    partnerships@forevar.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-bg border border-border-subtle rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white mb-1">Headquarters</h3>
                  <p className="text-text-secondary">
                    Innovation Hub, Sector 62<br />
                    Bengaluru, Karnataka 560100<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-panel p-8">
            <h2 className="text-2xl font-heading font-bold mb-6">Send an Inquiry</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-text-secondary">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full bg-primary-bg border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-text-secondary">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-primary-bg border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text-secondary">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-primary-bg border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="organizationType" className="text-sm font-medium text-text-secondary">Organization Type</label>
                <select 
                  id="organizationType" 
                  className="w-full bg-primary-bg border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors"
                >
                  <option value="generator">Waste Generator (Campus, Corporate)</option>
                  <option value="recycler">Recycler / Processor</option>
                  <option value="brand">FMCG Brand (EPR)</option>
                  <option value="investor">Investor</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-text-secondary">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-primary-bg border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors resize-none"
                ></textarea>
              </div>
              
              <Button type="button" variant="accent" className="w-full pt-2">
                Submit Request
              </Button>
            </form>
          </div>
          
        </div>
      </section>
    </div>
  );
}
