import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

const MapSection = () => {
  const location = {
    address: "VP Block- 231 C and D, Pitampura, Delhi 110034",
    landmark: "Near Hotel City Park", 
    phone: "+91 99531 93039",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.5123456789!2d77.1316!3d28.7041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d015555555555%3A0x1234567890abcdef!2sPitampura%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
  };

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Find Us
            </h2>
            <div className="w-16 h-1 bg-gradient-spiritual mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Visit us at our location in Pitampura, Delhi for consultations and bookings
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Location Details */}
            <Card className="shadow-spiritual">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {location.address}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {location.landmark}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Contact</p>
                      <a 
                        href={`tel:${location.phone}`}
                        className="text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Availability</p>
                      <p className="text-muted-foreground">
                        Mon - Sat: 10:00 AM - 8:00 PM
                      </p>
                      <p className="text-muted-foreground">
                        Sun: 2:00 PM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-warm p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Getting Here</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Nearest Metro: Pitampura Metro Station (Red Line)</li>
                    <li>• By Bus: Route 277, 440, 448 to Pitampura</li>
                    <li>• Parking: Available near Hotel City Park</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Google Map */}
            <Card className="shadow-spiritual overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    src={location.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vaibhav Arora Location - Pitampura, Delhi"
                    className="w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;