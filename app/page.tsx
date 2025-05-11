import HeroSection from '@/components/home/hero-section';
import FeaturedProjects from '@/components/home/featured-projects';
import ServicesOverview from '@/components/home/services-overview';
import Testimonials from '@/components/home/testimonials';
import Stats from '@/components/home/stats';
import CTASection from '@/components/home/cta-section';
import AboutUs from '@/components/aboutus';

export default function Home() {
  return (
    <>
      <HeroSection />
        <div id='aboutUs'>

          <AboutUs/>

        </div>
      <FeaturedProjects />
      <ServicesOverview />
      <Stats />
      <Testimonials />
      <CTASection />
    </>
  );
}