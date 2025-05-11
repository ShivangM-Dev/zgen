"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function MouseFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current || !followerRef.current) return;
    
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;
    
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Check if hovering over buttons or links
      const target = e.target as HTMLElement;
      const isHoverable = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hoverable');
      
      if (isHoverable) {
        gsap.to(cursor, { scale: 1.5, duration: 0.3 });
        gsap.to(follower, { scale: 1.3, opacity: 0.2, duration: 0.3 });
      } else {
        gsap.to(cursor, { scale: 1, duration: 0.3 });
        gsap.to(follower, { scale: 1, opacity: 0.5, duration: 0.3 });
      }
    };
    
    const updateCursor = () => {
      cursorX = gsap.utils.interpolate(cursorX, mouseX, 0.5);
      cursorY = gsap.utils.interpolate(cursorY, mouseY, 0.5);
      
      followerX = gsap.utils.interpolate(followerX, mouseX, 0.1);
      followerY = gsap.utils.interpolate(followerY, mouseY, 0.1);
      
      gsap.set(cursor, { x: cursorX, y: cursorY });
      gsap.set(follower, { x: followerX, y: followerY });
      
      requestAnimationFrame(updateCursor);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(updateCursor);
    
    // Detect when cursor leaves the window
    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
      gsap.to(follower, { opacity: 0, duration: 0.3 });
    };
    
    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
      gsap.to(follower, { opacity: 0.5, duration: 0.3 });
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);
  
  return (
    <>
      <div 
        ref={cursorRef} 
        className="cursor hidden md:block fixed pointer-events-none z-[9999] w-5 h-5 rounded-full border-2 border-[#F5A623] mix-blend-difference"
      ></div>
      <div 
        ref={followerRef} 
        className="follower hidden md:block fixed pointer-events-none z-[9998] w-10 h-10 rounded-full bg-[#F5A623] opacity-30 mix-blend-difference"
      ></div>
    </>
  );
}