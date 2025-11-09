import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-deep-blue via-primary to-deep-blue">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-light-blue rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Preferred Digital
              <br />
              Business Services
            </h1>
            <p className="text-2xl md:text-3xl text-light-blue font-medium mb-4">
              Your Integration Partner
            </p>
          </div>

          <p className="text-lg md:text-xl text-secondary mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-1">
            Strategic technology partner delivering custom software development,
            system integration, and digital solutions to enterprises, startups,
            and software vendors worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-primary-foreground font-semibold px-8 py-6 text-lg group transition-all shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-light-blue text-light-blue hover:bg-light-blue hover:text-deep-blue font-semibold px-8 py-6 text-lg transition-all"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-light-blue rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-light-blue rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
