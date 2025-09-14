import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-bhajan.jpg";

const About = () => {
  const qualities = [
    {
      title: "Authentic Tradition",
      description: "Rooted in classical Indian music traditions, bringing authentic devotional experiences to every performance."
    },
    {
      title: "Spiritual Connection",
      description: "Creates deep spiritual connections through soulful renditions that touch hearts and uplift souls."
    },
    {
      title: "Versatile Repertoire",
      description: "Extensive collection of bhajans, kirtans, and devotional songs suitable for all occasions and audiences."
    },
    {
      title: "Professional Excellence",
      description: "8+ years of experience with commitment to quality, punctuality, and creating memorable musical experiences."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Vaibhav Arora
            </h2>
            <div className="w-24 h-1 bg-gradient-spiritual mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate bhajan singer dedicated to spreading divine music and spiritual bliss through authentic performances that connect hearts to the divine.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Journey of Devotion
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over 8 years of experience in devotional music, <strong>Vaibhav Arora</strong> was introduced to bhajans by his mother, who often sang during his childhood. 
                Deeply inspired by his idol, <strong>Shri Narendra Chanchal Ji</strong>, he developed a profound passion for devotional music, which has grown into a lifelong commitment to sharing divine melodies that uplift and touch souls.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                He specializes in <strong>traditional bhajans, kirtans, and devotional songs</strong>, delivering authentic spiritual experiences at temples, home gatherings, cultural events, and special occasions across India.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Renowned for his <strong>soulful renditions</strong>, Vaibhav creates an atmosphere of peace, devotion, and spiritual connection that resonates deeply with audiences of all ages and backgrounds.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-spiritual">
                <img
                  src={heroImage}
                  alt="Vaibhav Arora performing bhajan at a spiritual gathering"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-primary-foreground/90 backdrop-blur-sm rounded-lg p-4 text-center">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Vaibhav Arora
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      8 Years of Devotional Music Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualities.map((quality, index) => (
              <Card key={index} className="border-0 shadow-warm hover:shadow-spiritual transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {quality.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {quality.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;