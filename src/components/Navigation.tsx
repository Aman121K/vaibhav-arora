import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, User, Briefcase, Calendar, Image, Video, MapPin, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navigationItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/#about", icon: User },
    { name: "Services", href: "/#services", icon: Briefcase },
    { name: "Gallery", href: "/#gallery", icon: Image },
    { name: "Videos", href: "/videos", icon: Video },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Images", href: "/images", icon: Image },
    { name: "Location", href: "/#location", icon: MapPin },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/${sectionId}`;
      return;
    }
    
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      const sectionId = href.substring(1); // Remove the '/'
      scrollToSection(sectionId);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-warm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-spiritual rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">V</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Vaibhav Arora</h1>
              <p className="text-sm text-muted-foreground">भजन गायक | Bhajan Singer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <Card className="hidden lg:block shadow-spiritual">
            <div className="flex items-center p-2 space-x-1">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href || 
                  (item.href.startsWith('/#') && location.pathname === '/' && location.hash === item.href.substring(1));
                
                if (item.href.startsWith('/#')) {
                  return (
                    <Button
                      key={item.name}
                      variant={isActive ? "spiritual" : "ghost"}
                      size="sm"
                      onClick={() => handleNavigation(item.href)}
                      className="flex items-center space-x-2 px-3 py-2"
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="hidden xl:inline">{item.name}</span>
                    </Button>
                  );
                }
                
                return (
                  <Link key={item.name} to={item.href}>
                    <Button
                      variant={location.pathname === item.href ? "spiritual" : "ghost"}
                      size="sm"
                      className="flex items-center space-x-2 px-3 py-2"
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="hidden xl:inline">{item.name}</span>
                    </Button>
                  </Link>
                );
              })}
            </div>
          </Card>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <Card className="lg:hidden mb-4 shadow-spiritual animate-fade-in">
            <div className="p-4 space-y-2">
              {navigationItems.map((item) => {
                if (item.href.startsWith('/#')) {
                  return (
                    <Button
                      key={item.name}
                      variant="ghost"
                      size="sm"
                      onClick={() => handleNavigation(item.href)}
                      className="w-full justify-start space-x-3"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Button>
                  );
                }
                
                return (
                  <Link key={item.name} to={item.href} onClick={() => setIsOpen(false)}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start space-x-3"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Button>
                  </Link>
                );
              })}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Navigation;