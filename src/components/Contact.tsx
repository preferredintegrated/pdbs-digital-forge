import { MapPin, Phone, Mail, Globe, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import backgroundTexture from "@/assets/background-texture.png";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="py-24 text-primary-foreground"
      style={{
        backgroundImage: `url(${backgroundTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-white/90">
              Ready to transform your digital presence? Get in touch with us today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-white/80">Remote - Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-white/80">+234 901 086 9914</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-white/80 break-all">
                    info@preferreddigitalbusiness.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Website</h3>
                  <p className="text-white/80">www.preferreddigitalbusiness.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <Button
              size="lg"
              className="bg-white text-gradient-purple hover:bg-white/90 font-semibold px-8 py-6 text-lg"
            >
              Contact Us Today
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
