"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Doctor Kitty!',
    category: 'Mobile Game',
    description: 'A space exploration adventure game with stunning visuals and immersive gameplay.',
    imageUrl: '/img/gameImg2.png',
    link: '/portfolio',
  },
  {
    id: 2,
    title: 'Virtual College Tour',
    category: 'VR Experience',
    description: 'A virtual reality tour showcasing historical artifacts with interactive elements.',
    imageUrl: '/img/tour/img1.jpg',
    link: '/portfolio',
  },
  {
    id: 3,
    title: "Dip 'n Dice",
    category: 'Web Game',
    description: 'A high-octane racing game set in futuristic cityscapes with realistic physics.',
    imageUrl: '/img/gameImage1.png',
    link: '/portfolio',
  },
  {
    id: 4,
    title: 'Vidya Quest',
    category: '3D Interactive',
    description: 'Interactive 3D campus tour for universities with customizable paths and information points.',
    imageUrl: '/img/vr/vr1.png',
    link: '/portfolio',
  },
];


// Utility to create URL slugs
const slugify = (text: string) =>
  text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current || !projectsRef.current) return;
    
    // Animate the heading
    gsap.fromTo(
      '.section-title',
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
    
    // Animate each project card
    gsap.fromTo(
      '.project-card',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);
  
  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#F5A623]">Featured</span> Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative games and interactive experiences that push the boundaries of digital entertainment.
          </p>
        </div>
        
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => {
            const projectSlug = slugify(project.title);
            return (
              <Card key={project.id} className="project-card overflow-hidden bg-card border-border hover:border-[#F5A623] transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href={`/portfolio`}>
                      <Button variant="ghost" className="text-white border border-white hover:bg-white/20">
                        View Project
                      </Button>
                    </Link>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium inline-block py-1 px-2 rounded-full bg-secondary text-secondary-foreground">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <Link href={`/portfolio/${projectSlug}`} className="text-[#F5A623] flex items-center text-sm hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/portfolio">
            <Button variant="outline" className="border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623]/10">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
