import { Code, Palette, TestTube, Link2, Headphones } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Application Development & Deployment",
    description: "Build scalable, high-performance applications tailored to your business needs with modern technologies.",
  },
  {
    icon: Palette,
    title: "Product Design",
    description: "Create intuitive, user-centered designs that elevate your digital products and enhance user experience.",
  },
  {
    icon: TestTube,
    title: "Software Testing",
    description: "Comprehensive quality assurance and testing services to ensure your software meets the highest standards.",
  },
  {
    icon: Link2,
    title: "System Integration",
    description: "Seamlessly connect your systems and platforms for improved efficiency and data flow across your organization.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Round-the-clock technical support and maintenance to keep your systems running smoothly.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent-blue bg-card cursor-pointer"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-blue transition-colors">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-deep-blue transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
