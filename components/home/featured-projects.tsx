"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Doctor Kitty!",
    category: "Mobile Game",
    description: "A Simulation and Business strategy game.",
    imageUrl: "/img/gameImg2.png",
    videoUrl: "/vid/kittyGame.mp4",
  },
  {
    id: 2,
    title: "Virtual College Tour",
    category: "VR Experience",
    description:
      "A virtual reality tour showcasing historical artifacts with interactive elements.",
    imageUrl: "/img/tour/img1.jpg",
    videoUrl: "/vid/computerLab.mp4",
  },
  {
    id: 3,
    title: "Dip 'n Dice",
    category: "Web Game",
    description:
      "A unique puzzle-strategy game where you control a dice to paint tiles creatively.",
    imageUrl: "/img/gameImage1.png",
    videoUrl: "/vid/diceGame.mp4",
  },
  {
    id: 4,
    title: "Vidya Quest",
    category: "3D Interactive",
    description:
      "A 3D VR based learning experience built for enhanced visualization and learning.",
    imageUrl: "/img/vr/vr1.png",
    videoUrl: "/vid/vidyaQuest.mp4",
  },
];

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || !projectsRef.current) return;

    gsap.fromTo(
      ".section-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
        },
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

        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {projects.map((project, index) => (
            <Dialog
              key={project.id}
              open={selectedProject === index && dialogOpen}
              onOpenChange={(open) => {
                setDialogOpen(open);
                if (!open) setSelectedProject(null);
              }}
            >
              <DialogTrigger asChild>
                <Card
                  className="project-card overflow-hidden bg-card border-border hover:border-[#F5A623] transition-all duration-300 group cursor-pointer"
                  onClick={() => {
                    setSelectedProject(index);
                    setDialogOpen(true);
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
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
                    <span className="text-[#F5A623] flex items-center text-sm hover:underline">
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </DialogTrigger>

              {selectedProject === index && (
                <DialogContent className="max-w-3xl w-full p-0 bg-background overflow-hidden rounded-xl">
                  <DialogHeader className="px-6 pt-6 pb-2">
                    <DialogTitle className="text-2xl font-bold">
                      {project.title}
                    </DialogTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.category}
                    </p>
                  </DialogHeader>
                  <div className="px-6 pb-4">
                    <p className="text-sm mb-4">{project.description}</p>
                    <div className="w-full aspect-video rounded-lg overflow-hidden mb-4">
                      <video
                        src={project.videoUrl}
                        autoPlay
                        loop
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Link href="/portfolio">
                      <Button
                        variant="outline"
                        className="border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623]/10"
                      >
                        View on Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/portfolio">
            <Button
              variant="outline"
              className="border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623]/10"
            >
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
