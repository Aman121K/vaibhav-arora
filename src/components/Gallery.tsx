import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bhajan.jpg";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<'videos' | 'images' | 'events'>('videos');

  // Vaibhav Arora's actual YouTube videos (showing first 4)
  const featuredVideos = [
    {
      id: "-_WUqSq86Q8",
      title: "Shri Krishna Bhajan - Live Performance",
      description: "Beautiful rendition of classic Krishna bhajans at a temple gathering"
    },
    {
      id: "eZ4OA7lw1WU",
      title: "Ganesh Aarti - Festival Celebration", 
      description: "Energetic Ganesh aarti performed during Ganesh Chaturthi"
    },
    {
      id: "aA1lcOWOmXk",
      title: "Ram Bhajan Medley",
      description: "Soulful Ram bhajans that touch the heart"
    },
    {
      id: "RYao7_0ozJA",
      title: "Hanuman Chalisa - Devotional",
      description: "Traditional Hanuman Chalisa with tabla accompaniment"
    }
  ];

  // Event images with all the new WhatsApp images
  const eventImages = [
    {
      src: heroImage,
      alt: "Vaibhav Arora performing at a spiritual gathering",
      title: "Temple Gathering Performance"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.20.33.jpeg",
      alt: "Bhajan performance at spiritual gathering",
      title: "Devotional Evening"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.20.34.jpeg",
      alt: "Spiritual music performance",
      title: "Sacred Music Session"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.15 (1).jpeg",
      alt: "Vaibhav Arora singing bhajans",
      title: "Bhajan Performance"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.15.jpeg",
      alt: "Devotional singing performance",
      title: "Spiritual Gathering"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.16 (1).jpeg",
      alt: "Temple bhajan performance",
      title: "Temple Celebration"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.16.jpeg",
      alt: "Sacred music evening",
      title: "Divine Music Night"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.19 (1).jpeg",
      alt: "Vaibhav performing devotional songs",
      title: "Devotional Performance"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.19.jpeg",
      alt: "Spiritual music gathering",
      title: "Sacred Gathering"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.20 (1).jpeg",
      alt: "Bhajan singer performance",
      title: "Musical Devotion"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.20 (2).jpeg",
      alt: "Temple music performance",
      title: "Temple Music"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.20.jpeg",
      alt: "Devotional music evening",
      title: "Evening Bhajans"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.23 (1).jpeg",
      alt: "Spiritual singing performance",
      title: "Sacred Singing"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.23.jpeg",
      alt: "Vaibhav Arora bhajan performance",
      title: "Soulful Performance"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.24 (1).jpeg",
      alt: "Devotional music session",
      title: "Music Session"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.24.jpeg",
      alt: "Spiritual gathering performance",
      title: "Gathering Performance"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.27 (1).jpeg",
      alt: "Temple bhajan evening",
      title: "Temple Evening"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.27.jpeg",
      alt: "Sacred music performance",
      title: "Sacred Performance"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.28 (1).jpeg",
      alt: "Devotional singing gathering",
      title: "Devotional Gathering"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.28 (2).jpeg",
      alt: "Bhajan performance evening",
      title: "Performance Evening"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.28.jpeg",
      alt: "Spiritual music session",
      title: "Music Session"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.29 (1).jpeg",
      alt: "Temple music gathering",
      title: "Temple Music"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.29.jpeg",
      alt: "Vaibhav Arora devotional performance",
      title: "Devotional Performance"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.30 (1).jpeg",
      alt: "Sacred singing evening",
      title: "Sacred Evening"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.30 (2).jpeg",
      alt: "Spiritual music performance",
      title: "Spiritual Performance"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.30.jpeg",
      alt: "Bhajan singing gathering",
      title: "Bhajan Gathering"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.31 (1).jpeg",
      alt: "Devotional music evening",
      title: "Devotional Evening"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.31 (2).jpeg",
      alt: "Temple gathering performance",
      title: "Temple Gathering"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.31.jpeg",
      alt: "Sacred music session",
      title: "Sacred Session"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.32 (1).jpeg",
      alt: "Spiritual singing performance",
      title: "Spiritual Singing"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.32.jpeg",
      alt: "Vaibhav Arora bhajan evening",
      title: "Bhajan Evening"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.33 (1).jpeg",
      alt: "Devotional music gathering",
      title: "Music Gathering"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.33 (2).jpeg",
      alt: "Temple music performance",
      title: "Temple Performance"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.33.jpeg",
      alt: "Sacred singing session",
      title: "Sacred Singing"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-09-12 at 15.21.34.jpeg",
      alt: "Spiritual gathering performance",
      title: "Spiritual Gathering"
    }
  ];

  // Sample upcoming events
  const upcomingEvents = [
    {
      date: "2025-10-15",
      title: "Karva Chauth Special Bhajan Evening",
      location: "Community Hall, Pitampura",
      time: "6:00 PM - 8:00 PM",
      type: "Festival"
    },
    {
      date: "2025-10-25",
      title: "Diwali Celebration - Lakshmi Aarti",
      location: "Shri Ram Mandir, Delhi",
      time: "7:00 PM - 9:00 PM", 
      type: "Festival"
    },
    {
      date: "2025-11-05",
      title: "Private Wedding Ceremony",
      location: "Banquet Hall, CP",
      time: "5:00 PM - 7:00 PM",
      type: "Wedding"
    },
    {
      date: "2025-11-12",
      title: "Govardhan Puja Bhajan Sandhya",
      location: "ISKCON Temple, East of Kailash",
      time: "6:30 PM - 8:30 PM",
      type: "Temple"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Gallery & Events
            </h2>
            <div className="w-16 h-1 bg-gradient-spiritual mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the divine music through our performances, witness the spiritual journey, 
              and join us in upcoming bhajan events
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-card rounded-lg p-2 shadow-warm">
              <Button
                variant={activeTab === 'videos' ? 'spiritual' : 'ghost'}
                onClick={() => setActiveTab('videos')}
                className="mx-1"
              >
                <Play className="w-4 h-4 mr-2" />
                Videos
              </Button>
              <Button
                variant={activeTab === 'images' ? 'spiritual' : 'ghost'}
                onClick={() => setActiveTab('images')}
                className="mx-1"
              >
                <Users className="w-4 h-4 mr-2" />
                Event Images
              </Button>
              <Button
                variant={activeTab === 'events' ? 'spiritual' : 'ghost'}
                onClick={() => setActiveTab('events')}
                className="mx-1"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Upcoming Events
              </Button>
            </div>
          </div>

          {/* Videos Tab */}
          {activeTab === 'videos' && (
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
                {featuredVideos.map((video, index) => (
                  <Card key={index} className="overflow-hidden shadow-spiritual hover:shadow-warm transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-muted relative group">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id}`}
                          title={video.title}
                          className="w-full h-full"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2">{video.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{video.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Link to="/videos">
                  <Button variant="spiritual" size="lg" className="group">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    See All Videos
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* Images Tab */}
          {activeTab === 'images' && (
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {eventImages.map((image, index) => (
                  <Card key={index} className="overflow-hidden shadow-spiritual hover:shadow-warm transition-all duration-300">
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
                        <h3 className="text-lg font-semibold text-foreground">{image.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Link to="/images">
                  <Button variant="spiritual" size="lg" className="group">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    See All Images
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="shadow-spiritual hover:shadow-warm transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Badge variant="outline" className="text-primary border-primary">
                          {event.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(event.date).toLocaleDateString('en-IN', { 
                            day: 'numeric', 
                            month: 'short',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{event.title}</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Link to="/events">
                  <Button variant="spiritual" size="lg" className="group">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    See All Events
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;