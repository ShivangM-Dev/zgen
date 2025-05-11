"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    quote: "ZGen Studio transformed our concept into an engaging VR experience that exceeded our expectations. Their attention to detail and creative approach made all the difference.",
    author: "Sarah Johnson",
    position: "Marketing Director, TechVision Inc.",
    company: "TechVision Inc.",
  },
  {
    id: 2,
    quote: "The mobile game developed by ZGen Studio drove user engagement beyond our projections. Their technical expertise combined with creative storytelling resulted in a product our users love.",
    author: "Michael Chen",
    position: "Product Lead",
    company: "GameSphere",
  },
  {
    id: 3,
    quote: "Working with ZGen Studio on our educational simulation was a seamless experience. They understood our requirements perfectly and delivered a solution that makes complex concepts accessible and engaging.",
    author: "Dr. Emily Rodriguez",
    position: "Educational Technology Director",
    company: "Learning Innovations",
  },
  {
    id: 4,
    quote: "The 3D promotional content created by ZGen Studio helped us stand out in a crowded market. Their work combines technical excellence with creative storytelling.",
    author: "Thomas Wright",
    position: "CEO",
    company: "Nexus Brands",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    if (!sectionRef.current || !testimonialsRef.current) return;
    
    // Animate the heading
    gsap.fromTo(
      '.testimonials-title',
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
    
    // Animate testimonials
    gsap.fromTo(
      '.testimonial-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 80%',
        }
      }
    );
    
    // Auto-rotate testimonials on mobile
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="testimonials-title text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-[#F5A623]">Clients</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We pride ourselves on delivering exceptional experiences that exceed expectations.
          </p>
        </div>
        
        {/* Desktop Testimonials Grid */}
        <div 
          ref={testimonialsRef}
          className="hidden md:grid grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="testimonial-card overflow-hidden border-border hover:border-[#F5A623] transition-all duration-300"
            >
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-[#F5A623]/30 mb-4" />
                <p className="text-foreground mb-6 text-lg">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#F5A623]/20 flex items-center justify-center text-[#F5A623] font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Mobile Testimonial Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="testimonial-card overflow-hidden border-border">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-[#F5A623]/30 mb-3" />
                      <p className="text-foreground mb-4">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#F5A623]/20 flex items-center justify-center text-[#F5A623] font-bold text-sm">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <h4 className="font-semibold text-sm">{testimonial.author}</h4>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-[#F5A623] w-4' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}