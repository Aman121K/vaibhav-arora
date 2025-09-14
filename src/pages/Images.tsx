import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Images = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // All event images with the new WhatsApp images
  const allImages = [
    {
      src: "/lovable-uploads/b91312c7-37fa-4e34-84b4-ea33c4a5baef.png",
      alt: "Vaibhav Arora performing at a spiritual gathering",
      title: "Temple Gathering Performance",
      description: "Soulful bhajan performance at a temple gathering with devotees"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.20.33.jpeg",
      alt: "Bhajan performance at spiritual gathering",
      title: "Spiritual Gathering Performance",
      description: "Divine bhajan performance creating a sacred atmosphere"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.20.34.jpeg",
      alt: "Devotional singing session",
      title: "Devotional Singing Session",
      description: "Heart-touching devotional songs in an intimate setting"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.15.jpeg",
      alt: "Temple bhajan performance",
      title: "Temple Bhajan Performance",
      description: "Traditional bhajan performance at a sacred temple"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.15 (1).jpeg",
      alt: "Temple gathering moment",
      title: "Temple Gathering Moment",
      description: "Capturing the divine energy during temple gathering"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.16.jpeg",
      alt: "Festival celebration performance",
      title: "Festival Celebration",
      description: "Joyous festival celebration with devotional music"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.16 (1).jpeg",
      alt: "Festival gathering",
      title: "Festival Gathering",
      description: "Community coming together for festival celebration"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.19.jpeg",
      alt: "Community gathering bhajan",
      title: "Community Gathering",
      description: "Bringing community together through devotional music"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.19 (1).jpeg",
      alt: "Community bhajan session",
      title: "Community Bhajan Session",
      description: "Intimate community bhajan session"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.20.jpeg",
      alt: "Wedding ceremony bhajan",
      title: "Wedding Ceremony Bhajans",
      description: "Sacred wedding ceremony with traditional bhajan singing"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.20 (1).jpeg",
      alt: "Wedding celebration",
      title: "Wedding Celebration",
      description: "Blessed wedding celebration with devotional music"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.20 (2).jpeg",
      alt: "Wedding ceremony moment",
      title: "Wedding Ceremony Moment",
      description: "Sacred moment during wedding ceremony"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.23.jpeg",
      alt: "Diwali festival celebration",
      title: "Diwali Festival Celebration",
      description: "Grand Diwali celebration with Lakshmi aarti and bhajans"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.23 (1).jpeg",
      alt: "Diwali gathering",
      title: "Diwali Gathering",
      description: "Festive Diwali gathering with family and friends"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.24.jpeg",
      alt: "Home gathering performance",
      title: "Intimate Home Gathering",
      description: "Personal bhajan session at a family home gathering"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.24 (1).jpeg",
      alt: "Home bhajan session",
      title: "Home Bhajan Session",
      description: "Intimate bhajan session in a home setting"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.27.jpeg",
      alt: "Ganesh Chaturthi celebration",
      title: "Ganesh Chaturthi Festival",
      description: "Energetic Ganesh aarti during the festival celebration"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.27 (1).jpeg",
      alt: "Ganesh festival moment",
      title: "Ganesh Festival Moment",
      description: "Blessed moment during Ganesh Chaturthi celebration"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.28.jpeg",
      alt: "Temple kirtan session",
      title: "Morning Temple Kirtan",
      description: "Early morning kirtan session at temple"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.28 (1).jpeg",
      alt: "Temple gathering",
      title: "Temple Gathering",
      description: "Devotees gathered for temple kirtan"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.28 (2).jpeg",
      alt: "Temple ceremony",
      title: "Temple Ceremony",
      description: "Sacred temple ceremony with devotional music"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.29.jpeg",
      alt: "Cultural program performance",
      title: "Cultural Program Event",
      description: "Corporate cultural evening with bhajan performances"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.29 (1).jpeg",
      alt: "Cultural evening",
      title: "Cultural Evening",
      description: "Cultural evening with traditional performances"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.30.jpeg",
      alt: "Satyanarayan katha ceremony",
      title: "Satyanarayan Katha",
      description: "Traditional katha ceremony with devotional singing"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.30 (1).jpeg",
      alt: "Katha ceremony",
      title: "Katha Ceremony",
      description: "Sacred katha ceremony with devotees"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.30 (2).jpeg",
      alt: "Religious ceremony",
      title: "Religious Ceremony",
      description: "Traditional religious ceremony with bhajan singing"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.31.jpeg",
      alt: "Spiritual gathering",
      title: "Spiritual Gathering",
      description: "Community spiritual gathering with devotional music"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.31 (1).jpeg",
      alt: "Devotional gathering",
      title: "Devotional Gathering",
      description: "Heart-touching devotional gathering"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.31 (2).jpeg",
      alt: "Sacred moment",
      title: "Sacred Moment",
      description: "Capturing a sacred moment during spiritual gathering"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.32.jpeg",
      alt: "Temple performance",
      title: "Temple Performance",
      description: "Divine performance at temple gathering"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.32 (1).jpeg",
      alt: "Temple celebration",
      title: "Temple Celebration",
      description: "Joyous celebration at temple with devotional music"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.33.jpeg",
      alt: "Festival performance",
      title: "Festival Performance",
      description: "Energetic festival performance with traditional music"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.33 (1).jpeg",
      alt: "Festival gathering",
      title: "Festival Gathering",
      description: "Community festival gathering with bhajan singing"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.33 (2).jpeg",
      alt: "Celebration moment",
      title: "Celebration Moment",
      description: "Joyous celebration moment with devotional music"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.34.jpeg",
      alt: "Spiritual ceremony",
      title: "Spiritual Ceremony",
      description: "Sacred spiritual ceremony with traditional bhajans"
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