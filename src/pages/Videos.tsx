import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Videos = () => {
  // All YouTube videos
  const allVideos = [
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
    },
    {
      id: "E-Re2CKKrTk",
      title: "Spiritual Bhajan Performance",
      description: "Devotional music performance creating divine atmosphere"
    },
    {
      id: "wMC5okYOwQQ",
      title: "Festival Celebration Bhajans",
      description: "Live bhajan performance during festival celebrations"
    },
    {
      id: "lNt54KUMCBo",
      title: "Temple Bhajan Singing",
      description: "Sacred bhajan performance in temple premises"
    },
    {
      id: "8o3Ey_k7spc",
      title: "Short Bhajan Performance",
      description: "Quick devotional performance snippet"
    },
    {
      id: "wFvXr8h0dDg",
      title: "Bhakti Sangeet Short",
      description: "Brief devotional music performance"
    },
    {
      id: "AfGqLs2qFt4",
      title: "Devotional Music Session",
      description: "Complete devotional music session with tabla"
    },
    {
      id: "FY4mLgvuyfg",
      title: "Quick Bhajan Clip",
      description: "Short clip of beautiful bhajan performance"
    },
    {
      id: "oXnzOkPzpAI",
      title: "Spiritual Music Short",
      description: "Brief spiritual music performance"
    },
    {
      id: "c9oIJbE5kKw",
      title: "Complete Bhajan Performance",
      description: "Full-length devotional music performance"
    }
  ];

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
              All Videos
            </h1>
            <div></div>
          </div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Complete Collection of Devotional Performances
            </h2>
            <div className="w-16 h-1 bg-gradient-spiritual mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore all of Vaibhav Arora's devotional music performances, from temple gatherings to festival celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allVideos.map((video, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default Videos;