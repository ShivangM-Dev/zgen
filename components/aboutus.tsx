"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const aboutRef = useRef(null);

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

        <p className="text-gray-700 dark:text-gray-300 about-fade text-lg leading-relaxed">
          Our team is a vibrant mix of designers, developers, and creators who believe in the transformative power of visual storytelling. Every project we undertake is treated as a partnership, where we align our skills with your goals to deliver solutions that not only meet but exceed expectations. We don’t just build digital products — we build meaningful, user-centered experiences.
        </p>

        <p className="text-gray-700 dark:text-gray-300 about-fade text-lg leading-relaxed">
          From startups to enterprises, our work has empowered clients across industries — education, real estate, healthcare, and beyond — with tailor-made solutions that drive engagement and growth. As technology evolves, so do we. And our promise remains the same: to deliver cutting-edge, future-ready solutions that help you stand out in the digital world.
        </p>
      </div>
    </section>
  );
}
