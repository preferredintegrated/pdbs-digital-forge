import { Code, Palette, TestTube, Link2, Headphones } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import technologyNetwork from "@/assets/technology-network.jpg";
import cloudServices from "@/assets/cloud-services.jpg";
import development from "@/assets/development.jpg";

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
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to accelerate your business growth
          </p>
        </div>

        {/* Technology Showcase Images */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src={technologyNetwork} 
              alt="Digital technology network infrastructure"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src={cloudServices} 
              alt="Cloud computing and IT services"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src={development} 
              alt="Software development workspace"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary bg-card cursor-pointer"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-gradient-pink via-gradient-purple to-gradient-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-white transition-colors" />
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
