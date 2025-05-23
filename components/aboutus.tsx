"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const aboutRef = useRef(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-fade", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const handleExpand = () => {
    setExpanded(true);

    if (moreRef.current) {
      moreRef.current.style.display = "block";
      gsap.fromTo(
        moreRef.current,
        { maxHeight: 0, opacity: 0 },
        {
          maxHeight: 1000, // enough to reveal the content
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            
          },
        }
      );
    }
  };

  return (
    <section
      ref={aboutRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold about-fade text-gray-900 dark:text-white">
          About <span className="text-[#F5A623]">Us</span>
        </h2>

        <p className="text-gray-700 dark:text-gray-300 about-fade text-lg leading-relaxed">
          At <strong className="text-[#F5A623]">Zgen Studio</strong>, we are passionate innovators on a mission to redefine how people interact with digital content. Since our inception, we’ve specialized in crafting immersive experiences that blur the line between virtual and reality. Whether it's game development, interactive training, or immersive VR tours, we bring storytelling and technology together to create powerful, unforgettable experiences.
        </p>

        {!expanded && (
          <div className="mt-4">
            <Button
              onClick={handleExpand}
              className="bg-[#F5A623] text-white hover:bg-[#e69512]"
            >
              See More
            </Button>
          </div>
        )}

        <div
          ref={moreRef}
          style={{ display: "none", overflow: "hidden" }}
          className="transition-all duration-300 ease-in-out space-y-8"
        >
          <p className="text-gray-700 dark:text-gray-300 about-fade text-lg leading-relaxed">
            Our team is a vibrant mix of designers, developers, and creators who believe in the transformative power of visual storytelling. Every project we undertake is treated as a partnership, where we align our skills with your goals to deliver solutions that not only meet but exceed expectations. We don’t just build digital products — we build meaningful, user-centered experiences.
          </p>

          <p className="text-gray-700 dark:text-gray-300 about-fade text-lg leading-relaxed">
            From startups to enterprises, our work has empowered clients across industries — education, real estate, healthcare, and beyond — with tailor-made solutions that drive engagement and growth. As technology evolves, so do we. And our promise remains the same: to deliver cutting-edge, future-ready solutions that help you stand out in the digital world.
          </p>

          <div className="flex justify-center mt-4">
            <Link href="/about">
              <Button className="bg-[#F5A623] text-white hover:bg-[#e69512]">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
