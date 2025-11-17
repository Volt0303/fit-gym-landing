import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-gym.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary/90 to-primary/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float delay-300" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 fade-in-up">
          TRANSFORM YOUR LIFE
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 fade-in-up delay-200 font-light">
          健康とダイエットに特化したパーソナルジム
        </p>
        <p className="text-lg md:text-xl text-gold-light mb-12 fade-in-up delay-300">
          医療の安全性 × 完全個室 × 駅近の清潔な空間
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up delay-400">
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold-dark text-primary font-bold text-lg px-12 py-8 rounded-xl shadow-gold animate-pulse-glow transition-all duration-300 hover:scale-105"
          >
            無料カウンセリング予約
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white text-black hover:bg-white hover:text-primary font-bold text-lg px-12 py-8 rounded-xl transition-all duration-300 hover:scale-105"
          >
            詳しく見る
          </Button>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 fade-in-up delay-600">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
