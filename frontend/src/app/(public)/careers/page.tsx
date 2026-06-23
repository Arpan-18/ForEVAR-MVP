import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MapPin, Briefcase, Code } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 px-6 container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
          Build the <span className="text-gradient">Future</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary font-body max-w-3xl mx-auto mb-10">
          We are looking for exceptional engineers, operators, and scientists to help us build the infrastructure layer for the circular economy.
        </p>
      </section>

      <section className="py-20 bg-secondary-bg border-y border-border-subtle">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Open Positions</h2>
          </div>
          
          <div className="space-y-4">
            <JobListing 
              title="Senior Computer Vision Engineer" 
              department="Engineering" 
              location="Bengaluru / Remote" 
              type="Full-time" 
            />
            <JobListing 
              title="Full Stack Software Engineer" 
              department="Engineering" 
              location="Bengaluru / Remote" 
              type="Full-time" 
            />
            <JobListing 
              title="Hardware Operations Lead" 
              department="Operations" 
              location="Delhi NCR" 
              type="Full-time" 
            />
            <JobListing 
              title="EPR Markets Lead" 
              department="Business Development" 
              location="Mumbai" 
              type="Full-time" 
            />
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary-bg">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Don&apos;t see a perfect fit?</h2>
          <p className="text-text-secondary mb-8">
            We are always looking for talented individuals who share our mission. Send your resume and a brief note about how you can contribute to ForEVAR.
          </p>
          <Link href="/contact">
            <Button variant="outline" className="group">
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function JobListing({ title, department, location, type }: { title: string, department: string, location: string, type: string }) {
  return (
    <div className="glass-panel p-6 flex flex-col md:flex-row md:items-center justify-between group cursor-pointer hover:border-accent-primary/40 transition-colors">
      <div className="mb-4 md:mb-0">
        <h3 className="text-xl font-heading font-bold text-white group-hover:text-accent-primary transition-colors mb-2">
          {title}
        </h3>
        <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
          <span className="flex items-center"><Code className="w-4 h-4 mr-1" /> {department}</span>
          <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {location}</span>
          <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1" /> {type}</span>
        </div>
      </div>
      <div>
        <Button variant="ghost" className="group-hover:bg-accent-primary group-hover:text-primary-bg transition-colors">
          Apply Now
        </Button>
      </div>
    </div>
  );
}
