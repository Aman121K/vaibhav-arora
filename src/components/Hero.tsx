import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-bhajan.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-warm relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Justdial Certificate - Top Right Only */}
      <div className="absolute top-8 right-8 z-20 hidden lg:block">
        <Card className="border-0 shadow-warm hover:shadow-spiritual transition-all duration-300 max-w-xs bg-white/95 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg p-3 mb-3 border-2 border-blue-200">
              <div className="flex items-center justify-center mb-2">
                <div className="bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xs">
                  JD
                </div>
              </div>
              <h4 className="text-sm font-bold text-gray-800 mb-1">Users' Choice 2025</h4>
              <div className="flex justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-xs text-gray-600 mb-1">Vaibhav Arora</p>
              <p className="text-xs text-gray-500">(Delhi)</p>
              <div className="mt-2 text-xs text-gray-500">
                <span className="text-blue-600 font-semibold">Just</span>
                <span className="text-orange-600 font-semibold">dial</span>
                <span className="text-xs">®</span>
              </div>
            </div>
            
            <Badge variant="secondary" className="bg-gradient-to-r from-blue-500 to-orange-500 text-white text-xs">
              Justdial Verified
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Certificate - Centered below buttons for mobile */}
      <div className="lg:hidden mt-8 flex justify-center">
        <Card className="border-0 shadow-warm hover:shadow-spiritual transition-all duration-300 max-w-sm bg-white/95 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg p-3 mb-3 border-2 border-blue-200">
              <div className="flex items-center justify-center mb-2">
                <div className="bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xs">
                  JD
                </div>
              </div>
              <h4 className="text-sm font-bold text-gray-800 mb-1">Users' Choice 2025</h4>
              <div className="flex justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-xs text-gray-600 mb-1">Vaibhav Arora</p>
              <p className="text-xs text-gray-500">(Delhi)</p>
              <div className="mt-2 text-xs text-gray-500">
                <span className="text-blue-600 font-semibold">Just</span>
                <span className="text-orange-600 font-semibold">dial</span>
                <span className="text-xs">®</span>
              </div>
            </div>
            
            <Badge variant="secondary" className="bg-gradient-to-r from-blue-500 to-orange-500 text-white text-xs">
              Justdial Verified
            </Badge>
          </CardContent>
        </Card>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-float mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Vaibhav Arora
            </h1>
            <div className="w-24 h-1 bg-gradient-spiritual mx-auto mb-6 animate-glow"></div>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-medium">
              भजन गायक | Bhajan Singer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience divine melodies and spiritual bliss with authentic bhajan performances 
              that touch the soul and connect hearts to the divine
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Button 
              variant="spiritual" 
              size="lg"
              onClick={scrollToBooking}
              className="text-lg px-8 py-6 h-auto"
            >
              Book Performance
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 h-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;