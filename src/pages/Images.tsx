import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Images = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // All event images
  const allImages = [
    {
      src: "/lovable-uploads/b91312c7-37fa-4e34-84b4-ea33c4a5baef.png",
      alt: "Vaibhav Arora performing at a spiritual gathering",
      title: "Temple Gathering Performance",
      description: "Soulful bhajan performance at a temple gathering with devotees"
    },
    {
      src: "/placeholder.svg",
      alt: "Bhajan performance at wedding",
      title: "Wedding Ceremony Bhajans",
      description: "Sacred wedding ceremony with traditional bhajan singing"
    },
    {
      src: "/placeholder.svg", 
      alt: "Festival celebration",
      title: "Diwali Festival Celebration",
      description: "Grand Diwali celebration with Lakshmi aarti and bhajans"
    },
    {
      src: "/placeholder.svg",
      alt: "Home gathering performance",
      title: "Intimate Home Gathering",
      description: "Personal bhajan session at a family home gathering"
    },
    {
      src: "/placeholder.svg",
      alt: "Ganesh Chaturthi celebration",
      title: "Ganesh Chaturthi Festival",
      description: "Energetic Ganesh aarti during the festival celebration"
    },
    {
      src: "/placeholder.svg",
      alt: "Temple kirtan session",
      title: "Morning Temple Kirtan",
      description: "Early morning kirtan session at ISKCON temple"
    },
    {
      src: "/placeholder.svg",
      alt: "Cultural program performance",
      title: "Cultural Program Event",
      description: "Corporate cultural evening with bhajan performances"
    },
    {
      src: "/placeholder.svg",
      alt: "Satyanarayan katha ceremony",
      title: "Satyanarayan Katha",
      description: "Traditional katha ceremony with devotional singing"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, [allImages.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <div className="bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Event Gallery
            </h1>
            <div></div>
          </div>
        </div>
      </div>

      {/* Hero Carousel */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Memorable Moments from Spiritual Gatherings
            </h2>
            <div className="w-16 h-1 bg-gradient-spiritual mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Witness the divine atmosphere created through bhajan performances at various events and celebrations
            </p>
          </div>

          {/* Main Carousel */}
          <div className="relative mb-12 rounded-2xl overflow-hidden shadow-spiritual">
            <div className="aspect-video relative group">
              <img
                src={allImages[currentIndex].src}
                alt={allImages[currentIndex].alt}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              
              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {allImages[currentIndex].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {allImages[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary shadow-lg' 
                      : 'bg-background/50 hover:bg-background/70'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allImages.map((image, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden shadow-spiritual hover:shadow-warm transition-all duration-300 cursor-pointer animate-fade-in ${
                  index === currentIndex ? 'ring-2 ring-primary' : ''
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => setCurrentIndex(index)}
              >
                <CardContent className="p-0">
                  <div className="aspect-video relative group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{image.title}</h3>
                    <p className="text-sm text-muted-foreground">{image.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;