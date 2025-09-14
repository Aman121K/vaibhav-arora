import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bhajan.jpg";

// Import all images
import img1 from "@/assets/WhatsApp Image 2025-09-12 at 15.20.33.jpeg";
import img2 from "@/assets/WhatsApp Image 2025-09-12 at 15.20.34.jpeg";
import img3 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.15 (1).jpeg";
import img4 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.15.jpeg";
import img5 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.16 (1).jpeg";
import img6 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.16.jpeg";
import img7 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.19 (1).jpeg";
import img8 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.19.jpeg";
import img9 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.20 (1).jpeg";
import img10 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.20 (2).jpeg";
import img11 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.20.jpeg";
import img12 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.23 (1).jpeg";
import img13 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.23.jpeg";
import img14 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.24 (1).jpeg";
import img15 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.24.jpeg";
import img16 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.27 (1).jpeg";
import img17 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.27.jpeg";
import img18 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.28 (1).jpeg";
import img19 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.28 (2).jpeg";
import img20 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.28.jpeg";
import img21 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.29 (1).jpeg";
import img22 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.29.jpeg";
import img23 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.30 (1).jpeg";
import img24 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.30 (2).jpeg";
import img25 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.30.jpeg";
import img26 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.31 (1).jpeg";
import img27 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.31 (2).jpeg";
import img28 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.31.jpeg";
import img29 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.32 (1).jpeg";
import img30 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.32.jpeg";
import img31 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.33 (1).jpeg";
import img32 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.33 (2).jpeg";
import img33 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.33.jpeg";
import img34 from "@/assets/WhatsApp Image 2025-09-12 at 15.21.34.jpeg";

const Images = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // All event images with imported images
  const allImages = [
    {
      src: heroImage,
      alt: "Vaibhav Arora performing at a spiritual gathering",
      title: "Temple Gathering Performance",
      description: "Soulful bhajan performance at a temple gathering with devotees"
    },
    {
      src: img1,
      alt: "Bhajan performance at spiritual gathering",
      title: "Devotional Evening",
      description: "Creating spiritual atmosphere through devotional music"
    },
    {
      src: img2,
      alt: "Spiritual music performance",
      title: "Sacred Music Session",
      description: "Deep spiritual connection through sacred melodies"
    },
    {
      src: img3,
      alt: "Vaibhav Arora singing bhajans",
      title: "Bhajan Performance",
      description: "Authentic bhajan rendition touching hearts"
    },
    {
      src: img4,
      alt: "Devotional singing performance",
      title: "Spiritual Gathering",
      description: "Uniting devotees through divine music"
    },
    {
      src: img5,
      alt: "Temple bhajan performance",
      title: "Temple Celebration",
      description: "Sacred music enhancing temple atmosphere"
    },
    {
      src: img6,
      alt: "Sacred music evening",
      title: "Divine Music Night",
      description: "Evening of spiritual music and devotion"
    },
    {
      src: img7,
      alt: "Vaibhav performing devotional songs",
      title: "Devotional Performance",
      description: "Heartfelt devotional singing performance"
    },
    {
      src: img8,
      alt: "Spiritual music gathering",
      title: "Sacred Gathering",
      description: "Community coming together for spiritual music"
    },
    {
      src: img9,
      alt: "Bhajan singer performance",
      title: "Musical Devotion",
      description: "Expressing devotion through musical excellence"
    },
    {
      src: img10,
      alt: "Temple music performance",
      title: "Temple Music",
      description: "Sacred music resonating in temple halls"
    },
    {
      src: img11,
      alt: "Devotional music evening",
      title: "Evening Bhajans",
      description: "Peaceful evening filled with devotional melodies"
    },
    {
      src: img12,
      alt: "Spiritual singing performance",
      title: "Sacred Singing",
      description: "Pure spiritual singing touching the soul"
    },
    {
      src: img13,
      alt: "Vaibhav Arora bhajan performance",
      title: "Soulful Performance",
      description: "Deeply moving bhajan performance"
    },
    {
      src: img14,
      alt: "Devotional music session",
      title: "Music Session",
      description: "Intimate devotional music session"
    },
    {
      src: img15,
      alt: "Spiritual gathering performance",
      title: "Gathering Performance",
      description: "Performance at spiritual community gathering"
    },
    {
      src: img16,
      alt: "Temple bhajan evening",
      title: "Temple Evening",
      description: "Sacred evening at the temple"
    },
    {
      src: img17,
      alt: "Sacred music performance",
      title: "Sacred Performance",
      description: "Performance filled with sacred energy"
    },
    {
      src: img18,
      alt: "Devotional singing gathering",
      title: "Devotional Gathering",
      description: "Community gathering for devotional music"
    },
    {
      src: img19,
      alt: "Bhajan performance evening",
      title: "Performance Evening",
      description: "Evening dedicated to bhajan performances"
    },
    {
      src: img20,
      alt: "Spiritual music session",
      title: "Music Session",
      description: "Focused spiritual music session"
    },
    {
      src: img21,
      alt: "Temple music gathering",
      title: "Temple Music",
      description: "Musical gathering at the temple"
    },
    {
      src: img22,
      alt: "Vaibhav Arora devotional performance",
      title: "Devotional Performance",
      description: "Heartfelt devotional music performance"
    },
    {
      src: img23,
      alt: "Sacred singing evening",
      title: "Sacred Evening",
      description: "Evening of sacred singing and devotion"
    },
    {
      src: img24,
      alt: "Spiritual music performance",
      title: "Spiritual Performance",
      description: "Performance that elevates the spirit"
    },
    {
      src: img25,
      alt: "Bhajan singing gathering",
      title: "Bhajan Gathering",
      description: "Community gathering for bhajan singing"
    },
    {
      src: img26,
      alt: "Devotional music evening",
      title: "Devotional Evening",
      description: "Evening filled with devotional music"
    },
    {
      src: img27,
      alt: "Temple gathering performance",
      title: "Temple Gathering",
      description: "Performance at temple gathering"
    },
    {
      src: img28,
      alt: "Sacred music session",
      title: "Sacred Session",
      description: "Session dedicated to sacred music"
    },
    {
      src: img29,
      alt: "Spiritual singing performance",
      title: "Spiritual Singing",
      description: "Performance of spiritual singing"
    },
    {
      src: img30,
      alt: "Vaibhav Arora bhajan evening",
      title: "Bhajan Evening",
      description: "Evening dedicated to bhajan music"
    },
    {
      src: img31,
      alt: "Devotional music gathering",
      title: "Music Gathering",
      description: "Gathering for devotional music"
    },
    {
      src: img32,
      alt: "Temple music performance",
      title: "Temple Performance",
      description: "Performance at the temple"
    },
    {
      src: img33,
      alt: "Sacred singing session",
      title: "Sacred Singing",
      description: "Session of sacred singing"
    },
    {
      src: img34,
      alt: "Spiritual gathering performance",
      title: "Spiritual Gathering",
      description: "Performance at spiritual gathering"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? allImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === allImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Link to="/">
              <Button variant="outline" size="sm" className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                Performance Images
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore moments from Vaibhav's bhajan performances
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allImages.map((image, index) => (
              <Card key={index} className="border-0 shadow-warm hover:shadow-spiritual transition-all duration-300 cursor-pointer overflow-hidden group">
                <CardContent className="p-0">
                  <div 
                    className="relative aspect-square overflow-hidden"
                    onClick={() => openModal(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Modal */}
          {selectedImage !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
              <div className="relative max-w-4xl max-h-[90vh] mx-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  <X className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>

                <img
                  src={allImages[selectedImage].src}
                  alt={allImages[selectedImage].alt}
                  className="w-full h-full object-contain rounded-lg"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {allImages[selectedImage].title}
                  </h3>
                  <p className="text-white/90 mb-2">
                    {allImages[selectedImage].description}
                  </p>
                  <p className="text-white/70 text-sm">
                    {allImages[selectedImage].alt}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Images;