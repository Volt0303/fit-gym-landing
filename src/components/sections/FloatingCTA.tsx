import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
      }`}
    >
      <Button
        size="lg"
        className="bg-gold hover:bg-gold-dark text-primary-dark font-bold px-8 py-6 rounded-full shadow-gold animate-pulse-glow"
      >
        <Phone className="w-5 h-5 mr-2" />
        今すぐ予約
      </Button>
    </div>
  );
};

export default FloatingCTA;
