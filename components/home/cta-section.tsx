"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Animate the CTA section on scroll
    gsap.fromTo(
      '.cta-content',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#F5A623]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F5A623]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="cta-content bg-card border border-border rounded-xl p-8 md:p-12 max-w-4xl mx-auto text-center shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Bring Your <span className="text-[#F5A623]">Ideas</span> to Life?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create immersive digital experiences that engage your audience and elevate your brand. Contact us today to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#F5A623] hover:bg-[#E69512] text-white px-8 py-6 h-auto text-lg">
              Get in Touch
            </Button>
            <Link href="/portfolio">
              <Button variant="outline" className="border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623]/10 px-8 py-6 h-auto text-lg">
                Explore Our Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}