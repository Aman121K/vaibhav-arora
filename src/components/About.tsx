import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const qualities = [
    {
      title: "Authentic Tradition",
      description: "Rooted in classical Indian bhajan tradition with years of dedicated practice and learning"
    },
    {
      title: "Spiritual Connection", 
      description: "Creating an atmosphere of devotion and peace through heartfelt musical expressions"
    },
    {
      title: "Versatile Repertoire",
      description: "Wide range of bhajans from different traditions, suitable for all occasions and audiences"
    },
    {
      title: "Professional Excellence",
      description: "Committed to delivering memorable performances with punctuality and dedication"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Vaibhav Arora
            </h2>
            <div className="w-16 h-1 bg-gradient-spiritual mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With deep reverence for the divine and years of musical training, Vaibhav Arora brings 
              authentic bhajan singing that creates a sacred atmosphere of devotion and peace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Born into a family with deep spiritual roots, Vaibhav has been immersed in devotional music from a young age through the guidance of his mother. Inspired by the legendary Shri Narender Chanchal Ji, who remains his idol, Vaibhav developed a strong devotion to bhakti sangeet and spiritual performances.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For him, each performance is not just a musical presentation but a spiritual offering—aimed at elevating the consciousness of listeners and creating a bridge between the earthly and divine realms.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it is an intimate home gathering, a temple celebration, or a large cultural event in different cities, Vaibhav brings the same level of dedication, devotion, and authenticity to every performance.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-spiritual">
                <img
                  src="/lovable-uploads/b91312c7-37fa-4e34-84b4-ea33c4a5baef.png"
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
                      15+ Years of Devotional Music Excellence
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