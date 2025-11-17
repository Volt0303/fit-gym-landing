import { useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Reasons from "@/components/sections/Reasons";
import Benefits from "@/components/sections/Benefits";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Trainer from "@/components/sections/Trainer";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import Access from "@/components/sections/Access";
import FloatingCTA from "@/components/sections/FloatingCTA";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-x-hidden">
      <CustomCursor />
      <Hero />
      <Problems />
      <Reasons />
      <Benefits />
      <Features />
      <Pricing />
      <Trainer />
      <FAQ />
      <Testimonials />
      <Access />
      <FloatingCTA />
    </main>
  );
};

export default Index;
