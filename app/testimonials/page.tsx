"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Marketing Director',
    company: 'TechVision Inc.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'ZGen Studio transformed our concept into an engaging VR experience that exceeded our expectations. Their attention to detail and creative approach made all the difference.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Product Lead',
    company: 'GameSphere',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'The mobile game developed by ZGen Studio drove user engagement beyond our projections. Their technical expertise combined with creative storytelling resulted in a product our users love.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Educational Technology Director',
    company: 'Learning Innovations',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Working with ZGen Studio on our educational simulation was a seamless experience. They understood our requirements perfectly and delivered a solution that makes complex concepts accessible and engaging.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Thomas Wright',
    position: 'CEO',
    company: 'Nexus Brands',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'The 3D promotional content created by ZGen Studio helped us stand out in a crowded market. Their work combines technical excellence with creative storytelling.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    position: 'Creative Director',
    company: 'Digital Arts Co.',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: "ZGen Studio's ability to blend creativity with technical precision is remarkable. They delivered a VR experience that truly pushes the boundaries of what's possible.",
    rating: 5,
  },
  {
    id: 6,
    name: 'David Kim',
    position: 'Head of Innovation',
    company: 'Future Tech Labs',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'The team at ZGen Studio doesnt just deliver projects; they create experiences that leave a lasting impression. Their work on our interactive installation was nothing short of exceptional.',
    rating: 5,
  },
];

export default function TestimonialsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.fromTo(
      '.testimonial-card',
      { 
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.testimonial-card',
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-[#F5A623]">Testimonials</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with ZGen Studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="testimonial-card group hover:border-[#F5A623] transition-all duration-300"
            >
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-[#F5A623]/30 mb-6" />
                
                <p className="text-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 flex">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-[#F5A623]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}