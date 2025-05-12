"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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

  const team = [
    {
      name: "Aryan Mehta",
      role: "Creative Director",
      image: "/team/aryan.jpg",
    },
    {
      name: "Riya Kapoor",
      role: "Lead Developer",
      image: "/team/riya.jpg",
    },
    {
      name: "Sahil Verma",
      role: "3D Artist",
      image: "/team/sahil.jpg",
    },
    {
      name: "Ananya Das",
      role: "VR/AR Specialist",
      image: "/team/ananya.jpg",
    },
  ];

  return (
    <section
      ref={aboutRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto space-y-24">
        {/* INTRO */}
        <div className="text-center about-fade space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            About <span className="text-[#F5A623]">Zgen Studio</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a creative powerhouse transforming digital ideas into immersive realities. 
            From VR experiences to futuristic game development, we combine storytelling with innovation to captivate audiences globally.
          </p>
        </div>

        {/* WHAT WE DO */}
        <div className="grid md:grid-cols-2 gap-12 about-fade items-center">
          <div className="text-left space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              What We Do
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              We create high-end interactive solutions — including metaverse simulations, 
              cinematic VR tours, gamified learning, and 3D promotional content — crafted 
              to elevate brand experiences and user engagement.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/img/vr.jpg"
              alt="What We Do"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        {/* TECHNOLOGIES */}
        <div className="about-fade space-y-8 text-center">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            Technologies We Use
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge tools to bring immersive experiences to life across web, VR, and real-time engines.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 md:px-0">
            {[
            { name: "Unity", icon: "/tech/unity.svg" },
            { name: "Unreal", icon: "/tech/unreal.svg" },
            { name: "Blender", icon: "/tech/blender.svg" },
            { name: "Virtual Reality", icon: "/tech/vr.png" },
            
            ].map((tech, index) => (
            <div
                key={index}
                className="group bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex items-center justify-center h-32 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
                <img
                src={tech.icon}
                alt={tech.name}
                className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
                </span>
            </div>
            ))}
        </div>
        </div>


        {/* INDUSTRIES */}
        <div className="about-fade space-y-8 text-center pt-20">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            Industries We Serve
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Our versatile solutions are tailored for a wide range of industries, delivering innovation where it matters most.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 px-4 md:px-0">
            {[
            "Education",
            "Real Estate",
            "Healthcare",
            "Training",
            "Retail",
            "Entertainment",
            ].map((industry, i) => (
            <div
                key={i}
                className="bg-white/60 dark:bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-white/20 rounded-xl p-4 flex items-center justify-center text-center shadow-md hover:shadow-xl transition-all duration-300"
            >
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{industry}</p>
            </div>
            ))}
        </div>
        </div>

        {/* TEAM */}
        {/* <div className="space-y-10 about-fade text-center">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-0">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/70 dark:bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-white/20 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover mx-auto mb-4 border-4 border-[#F5A623] group-hover:scale-105 transition-transform"
                />
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                  {member.name}
                </h4>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
