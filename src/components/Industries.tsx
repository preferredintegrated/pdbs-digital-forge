import { Car, Radio, Plane, Gamepad2, Building2, Home, Megaphone, Heart } from "lucide-react";

const industries = [
  { icon: Car, name: "Automotive" },
  { icon: Radio, name: "Telecommunications" },
  { icon: Plane, name: "Aviation" },
  { icon: Gamepad2, name: "Gaming" },
  { icon: Building2, name: "Banking" },
  { icon: Home, name: "Real Estate" },
  { icon: Megaphone, name: "Advertising" },
  { icon: Heart, name: "Healthcare" },
];

const Industries = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering innovative solutions across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-8 bg-card rounded-2xl border-2 border-border hover:border-accent-blue transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-blue transition-colors">
                <industry.icon className="h-8 w-8 text-primary group-hover:text-deep-blue transition-colors" />
              </div>
              <p className="text-foreground font-semibold text-center">
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
