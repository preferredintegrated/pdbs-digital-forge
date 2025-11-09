import { MapPin, Phone, Mail, Globe, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-deep-blue to-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-light-blue">
              Ready to transform your digital presence? Get in touch with us today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-light-blue">Gbagada, Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-light-blue">+234 901 086 9914</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-light-blue break-all">
                    info@preferredintegratedservices.pl
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-accent-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Website</h3>
                  <p className="text-light-blue">www.preferreddigitalbusiness.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <Button
              size="lg"
              className="bg-coral-red hover:bg-coral-red/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
            >
              Contact Us Today
            </Button>
          </div>

          <div className="border-t border-accent-blue/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-light-blue text-sm mb-2">Follow us on social media</p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/PDBSglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-accent-blue/20 rounded-full flex items-center justify-center hover:bg-accent-blue/30 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-accent-blue" />
                  </a>
                  <a
                    href="https://twitter.com/PDBSglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-accent-blue/20 rounded-full flex items-center justify-center hover:bg-accent-blue/30 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-accent-blue" />
                  </a>
                  <a
                    href="https://linkedin.com/company/PDBSglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-accent-blue/20 rounded-full flex items-center justify-center hover:bg-accent-blue/30 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-accent-blue" />
                  </a>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-light-blue text-sm">
                  © 2025 Preferred Digital Business Services
                </p>
                <p className="text-accent-blue text-xs mt-1">
                  Developed by Oigon Media
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
