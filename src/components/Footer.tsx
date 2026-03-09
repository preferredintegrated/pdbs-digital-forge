import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import backgroundTexture from "@/assets/background-texture.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string, isRoute = false) => {
    if (isRoute) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative text-primary-foreground"
      style={{
        backgroundImage: `url(${backgroundTexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="PDBS Logo" className="h-12 w-auto" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Preferred Digital Business Solutions delivers innovative digital
              and enterprise solutions that help businesses grow and thrive.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Industries", href: "#industries" },
                { label: "About", href: "#about" },
                { label: "Careers", href: "/careers", isRoute: true },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.href, item.isRoute)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              <li>Custom Software Development</li>
              <li>Mobile App Development</li>
              <li>Cloud Solutions</li>
              <li>IT Consulting</li>
              <li>Enterprise Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary-foreground/50" />
                <a
                  href="mailto:welcom@preferreddigitalbusiness.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  welcom@preferreddigitalbusiness.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary-foreground/50" />
                <span>+234 901 086 9914</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Preferred Digital Business Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
