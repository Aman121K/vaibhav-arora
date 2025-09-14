import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const handleWhatsAppContact = () => {
    const whatsappNumber = "919953193039"; // Vaibhav Arora's WhatsApp number
    const message = encodeURIComponent("Hello Vaibhav ji, I'm interested in your bhajan services. Please share more details.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-gradient-spiritual text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Vaibhav Arora</h3>
              <p className="opacity-90 leading-relaxed mb-6">
                Bringing divine music and spiritual bliss to your special occasions through 
                authentic bhajan performances rooted in tradition.
              </p>
              <Button 
                variant="outline" 
                onClick={handleWhatsAppContact}
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact via WhatsApp
              </Button>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  >
                    About Vaibhav
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  >
                    Our Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  >
                    Book Performance
                  </button>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-xl font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-end opacity-90">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+91 99531 93039</span>
                </div>
                <div className="flex items-center justify-center md:justify-end opacity-90">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>vaibhavarora@email.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-end opacity-90">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>VP Block Pitampura, Delhi 110034</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="opacity-80">
              © 2025 Vaibhav Arora - Bhajan Singer. All rights reserved. | 
              Made with ❤️ for spreading divine music
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;