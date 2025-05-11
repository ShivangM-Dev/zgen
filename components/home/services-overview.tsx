"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Smartphone, Monitor, Headset, Video, Database } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: 'Mobile & Web Game Development',
    description: 'Create engaging games for mobile devices and web browsers with cross-platform compatibility.',
    icon: Smartphone,
    link: '/services/mobile-web-games',
  },
  {
    id: 2,
    title: 'Digital Simulations',
    description: 'Develop interactive simulations for training, education, and entertainment purposes.',
    icon: Monitor,
    link: '/services/digital-simulations',
  },
  {
    id: 3,
    title: 'VR 360° 3D Tours',
    description: 'Create immersive virtual tours for real estate, tourism, and cultural experiences.',
    icon: Headset,
    link: '/services/vr-tours',
  },
  {
    id: 4,
    title: 'Interactive VR Sessions',
    description: 'Design interactive VR experiences for events, therapy, training, and entertainment.',
    icon: Database,
    link: '/services/interactive-vr',
  },
  {
    id: 5,
    title: '3D Promotional Content',
    description: 'Develop eye-catching 3D content for marketing campaigns and brand promotion.',
    icon: Video,
    link: '/services/3d-content',
  },
];

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current || !servicesRef.current) return;
    
    // Animate the heading
    gsap.fromTo(
      '.services-title',
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
    
    // Animate each service card
    gsap.fromTo(
      '.service-card',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-secondary/30"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="services-title text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#F5A623]">Services</span> & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We specialize in creating immersive digital experiences across various platforms and technologies.
          </p>
        </div>
        
        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id} 
                className="service-card group hover:border-[#F5A623] transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-8 relative">
                  <div className="mb-6 w-14 h-14 rounded-full bg-[#F5A623]/10 flex items-center justify-center group-hover:bg-[#F5A623]/20 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-[#F5A623]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#F5A623] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <Link href={service.link}>
                    <Button variant="ghost" className="p-0 hover:bg-transparent text-[#F5A623] hover:text-[#E69512]">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <div className="absolute top-0 right-0 w-20 h-20 -mr-10 -mt-10 bg-[#F5A623]/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 -ml-8 -mb-8 bg-[#F5A623]/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623]/10">
            View All Services <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}