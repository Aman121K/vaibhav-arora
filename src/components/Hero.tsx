import { Button } from "@/components/ui/button";
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