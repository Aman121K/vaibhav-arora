import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Phone, MessageCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "", 
    eventType: "",
    location: "",
    duration: "",
    requirements: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleQuickWhatsApp = () => {
    const quickMessage = `🎵 *Quick Connect - Bhajan Booking Inquiry* 🎵

Hello Vaibhav ji! I'm interested in booking a bhajan performance. Could we discuss the details?

_Sent from Vaibhav Arora Bhajan Website_`;

    const encodedMessage = encodeURIComponent(quickMessage);
    const whatsappNumber = "919953193039";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Connected to WhatsApp!",
      description: "You can now chat directly with Vaibhav ji for booking details.",
    });
  };

  const handleWhatsAppBooking = async () => {
    if (!date || !formData.name || !formData.phone || !formData.eventType || !formData.location) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields including date selection",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const bookingDetails = `🎵 *New Bhajan Booking Request* 🎵

📋 *Event Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || 'Not provided'}
• Date: ${format(date, 'PPP')}
• Event Type: ${formData.eventType}
• Location: ${formData.location}
• Duration: ${formData.duration || 'Not specified'}

📝 *Special Requirements:*
${formData.requirements || 'None mentioned'}

_Sent from Vaibhav Arora Bhajan Website_`;

    const encodedMessage = encodeURIComponent(bookingDetails);
    const whatsappNumber = "919953193039"; // Vaibhav Arora's WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    try {
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Booking Request Sent!",
        description: "Your booking request has been sent via WhatsApp. We'll respond shortly.",
      });

      // Reset form
      setDate(undefined);
      setFormData({
        name: "",
        phone: "",
        email: "",
        eventType: "",
        location: "",
        duration: "",
        requirements: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send booking request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Book Your Performance
            </h2>
            <div className="w-16 h-1 bg-gradient-spiritual mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring divine music to your special occasion? Fill out the form below and 
              we'll connect with you via WhatsApp to finalize the details
            </p>
          </div>

          <Card className="border-0 shadow-spiritual">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-foreground flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" />
                WhatsApp Booking Form
              </CardTitle>
              <div className="mt-4">
                <Button
                  variant="outline"
                  onClick={handleQuickWhatsApp}
                  className="gap-2 border-spiritual text-spiritual hover:bg-spiritual hover:text-white"
                >
                  <MessageCircle className="w-4 h-4" />
                  Quick WhatsApp Connect
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  Or fill the form below for detailed booking
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    placeholder="Your WhatsApp number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address (optional)"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Event Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select event date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Event Type *</Label>
                  <Select value={formData.eventType} onValueChange={(value) => handleInputChange('eventType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="temple">Temple Celebration</SelectItem>
                      <SelectItem value="home">Home Gathering</SelectItem>
                      <SelectItem value="cultural">Cultural Event</SelectItem>
                      <SelectItem value="wedding">Wedding Ceremony</SelectItem>
                      <SelectItem value="festival">Festival</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Event Location *</Label>
                  <Input
                    id="location"
                    placeholder="City, venue details"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Performance Duration</Label>
                  <Select value={formData.duration} onValueChange={(value) => handleInputChange('duration', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30min">30 minutes</SelectItem>
                      <SelectItem value="1hour">1 hour</SelectItem>
                      <SelectItem value="1.5hours">1.5 hours</SelectItem>
                      <SelectItem value="2hours">2 hours</SelectItem>
                      <SelectItem value="custom">Custom duration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Special Requirements</Label>
                <Textarea
                  id="requirements"
                  placeholder="Any specific bhajans, arrangements, or special requests..."
                  value={formData.requirements}
                  onChange={(e) => handleInputChange('requirements', e.target.value)}
                  rows={4}
                />
              </div>

              <div className="pt-6">
                <Button
                  variant="spiritual"
                  size="lg"
                  onClick={handleWhatsAppBooking}
                  disabled={isSubmitting}
                  className="w-full text-lg py-6 h-auto"
                >
                  {isSubmitting ? "Sending Request..." : "Send Booking Request via WhatsApp"}
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  * Required fields. Your booking request will be sent directly to our WhatsApp for quick response
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;