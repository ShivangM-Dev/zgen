"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Trophy, Globe, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    id: 1,
    number: 30,
    label: 'Projects Completed',
    icon: Trophy,
  },
  {
    id: 2,
    number: 10,
    label: 'Global Clients',
    icon: Globe,
  },
  {
    id: 3,
    number: 4,
    label: 'Years Experience',
    icon: Calendar,
  },
  {
    id: 4,
    number: 10,
    label: 'Team Members',
    icon: Users,
  },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Animate the stats section on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          // Start the counter animation when scrolled into view
          stats.forEach((stat, index) => {
            const duration = 2000; // 2 seconds
            const step = stat.number / (duration / 16); // 16ms is roughly one frame
            
            let currentCount = 0;
            const interval = setInterval(() => {
              currentCount = Math.min(currentCount + step, stat.number);
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(currentCount);
                return newCounters;
              });
              
              if (currentCount >= stat.number) {
                clearInterval(interval);
              }
            }, 16);
          });
        },
      }
    });
    
    tl.fromTo(
      '.stats-card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8 }
    );
    
    return () => {
      // Clean up
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-card"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.id} 
                className="stats-card border-border hover:border-[#F5A623] transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-4 w-16 h-16 rounded-full bg-[#F5A623]/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-[#F5A623]" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-[#F5A623]">
                    {counters[index]}+
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}