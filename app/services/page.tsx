"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);






export default function ServicesPage() {
  const servicesRef = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      servicesRef.current.forEach(el => {
        if (!el) return;
  
        const image = el.querySelector(".service-image");
        const content = el.querySelector(".service-content");
  
        if (!image || !content) return;
  
        gsap.from(image, {
          x: el.classList.contains("service-right") ? 50 : -50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
          },
        });
  
        gsap.from(content, {
          x: el.classList.contains("service-right") ? -50 : 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
          },
        });
      });
    }, 100); // slight delay to ensure refs populate
  
    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
return (
  <main className="p-5">

    {/* Service Details */}
    <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Full-Spectrum Creative Development Services
            </h2>
            <p className="text-muted-foreground">
              We specialize in delivering immersive visual experiences—from cutting-edge 3D modeling and cinematic VFX to interactive VR simulations and mobile/web game development. Whether you're launching a product, creating virtual environments, or building promotional content, our end-to-end production solutions are designed to turn your ideas into impactful realities.
            </p>
          </div>
     


        {/* Game Development */}
        <div
          id="game-development"
          ref={(el) => (servicesRef.current[0] = el as HTMLDivElement)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 service-right"
        >
          <div className="order-2 lg:order-1 service-content">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Game Development</h3>
            <p className="text-muted-foreground mb-6">
              We specialize in creating immersive mobile and web games, leveraging cutting-edge
              technology and captivating gameplay to engage players across platforms.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <ArrowRight size={16} className="text-[#F5A623]" />

                </div>
                <div>
                  <h4 className="font-semibold">Mobile Games</h4>
                  <p className="text-muted-foreground text-sm">
                    Engaging mobile games optimized for Android and iOS to keep players hooked.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <ArrowRight size={16} className="text-[#F5A623]" />

                </div>
                <div>
                  <h4 className="font-semibold">Web Games</h4>
                  <p className="text-muted-foreground text-sm">
                    Interactive web games designed for a seamless online experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <ArrowRight size={16} className="text-[#F5A623]" />

                </div>
                <div>
                  <h4 className="font-semibold">Digital Simulations (VR and Non-VR)</h4>
                  <p className="text-muted-foreground text-sm">
                    Realistic digital simulations for various industries, both in VR and traditional 3D formats.
                  </p>
                </div>
              </div>
            </div>

         
          </div>

          <div className="order-1 lg:order-2 service-image">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/img/gamedev.jpg"
                alt="Game Development"
                width={600}
                height={400}
                className="w-full object-cover aspect-video"
              />

            </div>
          </div>
        </div>

        {/* VR 360° Metaverse Tours */}
        <div
          id="vr-tours"
          ref={(el) => (servicesRef.current[1] = el as HTMLDivElement)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        >
          <div className="service-image">
            <div className="rounded-lg overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="w-full object-cover aspect-video"
                poster="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                src="/vid/vr.mp4"
              />
            </div>
          </div>

          <div className="service-content">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">VR 360° Metaverse Tours</h3>
            <p className="text-muted-foreground mb-6">
              Explore your virtual world with fully immersive VR 360° tours, ideal for educational, marketing, and entertainment purposes. Perfect for showing off campuses, businesses, or interactive exhibits.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <ArrowRight size={16} className="text-[#F5A623]" />

                </div>
                <div>
                  <h4 className="font-semibold">360° Virtual Campus Tours</h4>
                  <p className="text-muted-foreground text-sm">
                    Walk through your campus in a fully immersive VR experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <ArrowRight size={16} className="text-[#F5A623]" />

                </div>
                <div>
                  <h4 className="font-semibold">Metaverse Marketing Experiences</h4>
                  <p className="text-muted-foreground text-sm">
                    Showcase products and services in a dynamic, virtual 3D environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <ArrowRight size={16} className="text-[#F5A623]" />

                </div>
                <div>
                  <h4 className="font-semibold">Interactive VR Experiences</h4>
                  <p className="text-muted-foreground text-sm">
                    Create engaging and interactive virtual reality sessions for training or entertainment.
                  </p>
                </div>
              </div>
            </div>

 
          </div>
        </div>

        {/* VR & 3D Promotional Content */}
        <div 
          id="vr-simulations"
          ref={el => servicesRef.current[4] = el as HTMLDivElement}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 service-right"
        >
          <div className="order-2 lg:order-1 service-content">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              VR Simulations & 3D Promotional Content
            </h3>
            <p className="text-muted-foreground mb-6">
              We craft immersive digital experiences through cutting-edge Virtual Reality simulations, 
              interactive sessions, and promotional 3D content. Whether you're showcasing a campus, training environment, 
              or a futuristic product, we help you engage your audience in a deeply impactful way.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <ArrowRight size={16} className="text-[#F5A623]" />

                </div>
                <div>
                  <h4 className="font-semibold">Interactive VR Sessions</h4>
                  <p className="text-muted-foreground text-sm">
                    Step into fully interactive experiences for education, product showcases, or storytelling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <ArrowRight size={16} className="text-[#F5A623]" />

                </div>
                <div>
                  <h4 className="font-semibold">360° VR Tours</h4>
                  <p className="text-muted-foreground text-sm">
                    Bring spaces like colleges, offices, or real estate properties to life with immersive 360° walkthroughs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <ArrowRight size={16} className="text-[#F5A623]" />

                </div>
                <div>
                  <h4 className="font-semibold">3D Promotional Content</h4>
                  <p className="text-muted-foreground text-sm">
                    High-impact 3D visuals for brand launches, social media campaigns, and digital advertising.
                  </p>
                </div>
              </div>
            </div>

       
          </div>

          <div className="order-1 lg:order-2 service-image">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/img/vr.jpg"
                alt="VR Simulations and 3D Content"
                width={600}
                height={400}
                className="w-full object-cover aspect-video"
              />
            </div>
          </div>
        </div>


        {/* CTA Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us today to discuss your production needs and discover how Maven Studios
              can help bring your creative vision to life.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623]/10">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
           </Link>
            
          </div>
        </section>
      </div>
    </section>
  </main>
);

}


