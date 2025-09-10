import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Temple Celebrations",
      description: "Sacred bhajan performances for festivals, special occasions, and regular temple gatherings",
      features: ["Traditional bhajans", "Seasonal celebrations", "Religious festivals", "Daily prayers"]
    },
    {
      title: "Home Gatherings", 
      description: "Intimate devotional sessions for family functions, housewarming, and personal celebrations",
      features: ["Family occasions", "Housewarming ceremonies", "Private celebrations", "Spiritual gatherings"]
    },
    {
      title: "Cultural Events",
      description: "Professional performances for cultural programs, community events, and larger gatherings", 
      features: ["Community programs", "Cultural festivals", "Corporate events", "Social gatherings"]
    },
    {
      title: "Special Occasions",
      description: "Customized bhajan sessions for weddings, anniversaries, and milestone celebrations",
      features: ["Wedding ceremonies", "Anniversary celebrations", "Birthday blessings", "Memorial services"]
    }
  ];

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-gradient-spiritual mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bringing divine music to your special occasions with authentic bhajan performances 
              tailored to create the perfect spiritual atmosphere
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-warm hover:shadow-spiritual transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-gradient-spiritual rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="spiritual" 
              size="lg"
              onClick={scrollToBooking}
              className="text-lg px-10 py-6 h-auto"
            >
              Book Your Performance
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;