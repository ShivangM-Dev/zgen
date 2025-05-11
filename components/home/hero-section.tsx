"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation"; // ✅ import router

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter(); // ✅ hook for navigation

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-title span",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power4.out" }
    )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ".hero-buttons",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.7"
      );

    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: 200,
      ease: "none",
    });

    // Particle animation setup...
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", resizeCanvas);
      resizeCanvas();

      const particlesArray: Particle[] = [];
      const numberOfParticles = 100;

      class Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;

        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 3 + 1;
          this.speedX = (Math.random() - 0.5) * 0.5;
          this.speedY = (Math.random() - 0.5) * 0.5;
          this.color = `rgba(245, 166, 35, ${Math.random() * 0.5 + 0.3})`;
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x > canvas.width) this.x = 0;
          else if (this.x < 0) this.x = canvas.width;

          if (this.y > canvas.height) this.y = 0;
          else if (this.y < 0) this.y = canvas.height;
        }

        draw() {
          if (!ctx) return;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      }

      const init = () => {
        for (let i = 0; i < numberOfParticles; i++) {
          particlesArray.push(new Particle());
        }
      };

      const animate = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          particlesArray[i].draw();

          for (let j = i; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(245, 166, 35, ${
                0.1 * (1 - distance / 100)
              })`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
              ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
              ctx.stroke();
            }
          }
        }

        requestAnimationFrame(animate);
      };

      init();
      animate();

      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/80 to-background z-10"></div>

      <div
        ref={textRef}
        className="container mx-auto px-4 relative z-20 pt-24 md:pt-0"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block">Crafting</span>
            <span className="block text-[#F5A623]">Immersive</span>
            <span className="block">Digital Experiences</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We transform ideas into captivating games and interactive experiences that engage, entertain, and inspire.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => router.push("/portfolio")}
              className="bg-[#F5A623] hover:bg-[#E69512] text-white text-lg px-8 py-6 h-auto"
            >
              View Our Work
            </Button>
            <Button
              onClick={() => router.push("/contact")}
              variant="outline"
              className="border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623]/10 text-lg px-8 py-6 h-auto"
            >
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
