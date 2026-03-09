import { Target, Rocket, Users } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About PDBS
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Preferred Digital Business Solutions is a strategic technology partner
              that provides custom software development, system integration, and
              digital solutions to enterprises, startups, and software vendors
              worldwide.
            </p>
          </div>

          {/* Team Image */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={teamImage} 
              alt="Professional IT team collaborating on software development"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gradient-pink to-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                Deliver large-scale, high-quality digital solutions and guide
                startups from concept to profitability
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gradient-purple to-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                Accelerate time-to-market, increase agility, and streamline
                software development, support & maintenance
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gradient-blue to-gradient-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Our Approach
              </h3>
              <p className="text-muted-foreground">
                Partner with clients to understand their unique needs and deliver
                tailored solutions that drive real business value
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
