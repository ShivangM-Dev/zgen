'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: 'South Ganesh Nagar, New Delhi- 110092',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+91 70044 01479, +91 6203057613',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: 'info@zgenstudio.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: 'Mon - Fri: 9:00 AM - 6:00 PM',
  },
];

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    gsap.fromTo(
      '.contact-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.contact-card',
          start: 'top 80%',
        },
      }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      alert('Message sent successfully!');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-[#F5A623]">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* FORM */}
          <div className="lg:col-span-2">
            <Card className="contact-card">
              <CardContent className="p-8">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input name="user_name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input name="user_email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input name="subject" placeholder="Project discussion" required />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#F5A623] hover:bg-[#E69512] text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="contact-card">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#F5A623]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
