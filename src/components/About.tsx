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
                Born into a family with deep spiritual roots, Vaibhav has been immersed in the world of 
                devotional music from a young age. His journey began with learning classical ragas and 
                gradually evolved into specialized bhajan singing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each performance is not just a musical presentation but a spiritual offering, designed to 
                elevate the consciousness of listeners and create a bridge between the earthly and divine realms.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's a intimate home gathering, temple celebration, or large cultural event, 
                Vaibhav brings the same level of dedication and spiritual authenticity to every performance.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-spiritual rounded-2xl p-8 text-center shadow-spiritual">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Years of Experience
                </h3>
                <div className="text-5xl font-bold text-primary-foreground mb-2">15+</div>
                <p className="text-primary-foreground/80">
                  Dedicated to spreading joy through devotional music
                </p>
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