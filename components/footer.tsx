import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold">
                <span className="text-[#F5A623]">Z</span>
                <span className="text-foreground">EEROTH </span>
                <span className="text-[#F5A623]">G</span>
                <span className="text-foreground">ENERATION PRIVATE LIMITED</span>
              </span>
            </Link>
            <p className="text-muted-foreground">
              Creating immersive gaming experiences and interactive digital solutions since 2020.
            </p>
            <div className="flex space-x-4">
            
  
              <a href="https://www.instagram.com/zgenstudio?igsh=MXd3dmFyams2ZDB6cw==" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/zgen-studio/" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
        
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Game Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Digital Simulations
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  VR 360° 3D Tours
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Interactive VR Sessions
                </Link>
              </li>
              <li>
                <Link href="/services/" className="text-muted-foreground hover:text-foreground transition-colors">
                  3D Promotional Content
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                  Testimonials
                </Link>
              </li>
        
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
       </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ZGen Studio. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}