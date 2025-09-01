import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Shield, AlertTriangle, Clock, CheckCircle, Camera, Flame, Building, Play, Image as ImageIcon } from "lucide-react";

export default function ChimneySweeping() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const safetyChecks = [
    "Complete flue inspection",
    "Soot and creosote removal",
    "Nesting material removal",
    "Chimney fire prevention",
    "Combustion gas safety check",
    "Annual maintenance compliance"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "We assess your chimney condition and determine the appropriate sweeping method"
    },
    {
      step: "2", 
      title: "Power Sweeping",
      description: "Advanced power sweeping techniques ensure every inch of your flue is cleaned to the highest standard"
    },
    {
      step: "3",
      title: "Safety Inspection",
      description: "Complete safety check and removal of all hazardous build-ups"
    },
    {
      step: "4",
      title: "Documentation",
      description: "Certificate of completion and reminder for next scheduled sweep"
    }
  ];

  const faqs = [
    {
      question: "Why should I sweep my chimney?",
      answer: "Regular chimney sweeping and maintenance is crucial to avoiding and removing the build-ups of soot, tar, creosotes and nesting material which will accumulate over time in a chimney that undergoes regular use, sweeping it prevents a unsafe build-up of these materials which can result in a chimney fire or directly impact the safe passage of dangerous combustion gases to exit the flue. A clean chimney ensures that the combustion procedure goes smoothly which in turn saves you money in the long term and also helps to protect the environment."
    },
    {
      question: "How often should I sweep my chimney?",
      answer: "As per building regulation advice, a chimney should be swept once a year, possibly twice dependant on its usage, fuel type and appliance. Once your sweep is completed, we would be happy to remind you via correspondence when your next sweep is due and return every year to guarantee that your chimney is clean and ready for the following years burning and this service is non-obligational."
    },
    {
      question: "What are the laws regarding fires in Scotland?",
      answer: "For further rules and regulations in Scotland regarding home fire safety advice, please click the links provided for Scottish Fire Law and Scottish Fire Safety."
    },
    {
      question: "What happens if I don't sweep regularly?",
      answer: "Without regular sweeping, dangerous build-ups of tar and creosotes can accumulate, leading to chimney fires and unsafe combustion gas passage. This can result in serious safety hazards and damage to your home."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Glasgow",
      rating: 5,
      review: "Excellent chimney sweeping service. They were thorough and professional, and the reminder system is great for keeping on top of annual maintenance."
    },
    {
      name: "David L.",
      location: "Edinburgh",
      rating: 5,
      review: "Very impressed with the power sweeping technique. My chimney has never been cleaner and the safety checks give me peace of mind."
    }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/placeholder-sweeping-1.jpg",
      alt: "Chimney sweeping in progress",
      title: "Professional sweeping service"
    },
    {
      id: 2,
      src: "/placeholder-sweeping-2.jpg", 
      alt: "Clean chimney after sweeping",
      title: "Results after sweeping"
    },
    {
      id: 3,
      src: "/placeholder-sweeping-3.jpg",
      alt: "Dangerous build-up example",
      title: "Example of dangerous build-up"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="text-foreground">Home</Link>
          <span>/</span>
          <Link to="/services" className="text-foreground">Our Services</Link>
          <span>/</span>
          <span className="text-foreground">Chimney Sweeping</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Chimney Sweeping
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                We understand and highlight the importance of frequent cleaning and maintenance of an otherwise sometimes forgotten area of the home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-white">
                  Book a Survey
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-white hover:text-black">
                  Book Chimney Sweep
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center">
                <Flame className="h-32 w-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              <a href="tel:+447939846301" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>07939 846301</span>
              </a>
              <a href="mailto:saltirestovesandsweeps@gmail.com" className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>saltirestovesandsweeps@gmail.com</span>
              </a>
            </div>
            <Button variant="secondary" size="sm" onClick={() => setIsContactOpen(true)}>
              Book Chimney Sweep
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              What We Do
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Chimney sweeping has come a long way from the days of sending small children "up the lum" and has evolved with more advanced, efficient techniques with the introduction of power sweeping which will ensure every inch of your flue is cleaned to the highest standard possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sweep Your Chimney */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Why should I sweep my chimney?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Regular chimney sweeping and maintenance is crucial to avoiding and removing the build-ups of soot, tar, creosotes and nesting material which will accumulate over time in a chimney that undergoes regular use, sweeping it prevents a unsafe build-up of these materials which can result in a chimney fire or directly impact the safe passage of dangerous combustion gases to exit the flue.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A clean chimney ensures that the combustion procedure goes smoothly which in turn saves you money in the long term and also helps to protect the environment.
                </p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">
                      Safety Warning
                    </h3>
                    <p className="text-red-700 leading-relaxed">
                      Without regular sweeping, dangerous build-ups can lead to chimney fires and unsafe combustion gas passage, putting your home and family at risk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequency & Recommendations */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              How often should I sweep my chimney?
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
              <div className="flex items-start space-x-6">
                <div className="bg-primary text-primary-foreground p-4 rounded-lg">
                  <Clock className="h-8 w-8" />
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    As per building regulation advice, a chimney should be swept once a year, possibly twice dependant on its usage, fuel type and appliance.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Once your sweep is completed, we would be happy to remind you via correspondence when your next sweep is due and return every year to guarantee that your chimney is clean and ready for the following years burning and this service is non-obligational.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Checks Included */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Safety Checks Included
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyChecks.map((check, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-lg">{check}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scottish Fire Law Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              What are the Laws regarding fires in Scotland?
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
              <div className="text-center space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  For further rules and regulations in Scotland regarding home fire safety advice, please click the links provided.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Play className="h-5 w-5 mr-2" />
                    Scottish Fire Law
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Shield className="h-5 w-5 mr-2" />
                    Scottish Fire Safety
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Our Chimney Sweeping Process
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Gallery
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <Card key={image.id} className="overflow-hidden">
                  <div className="aspect-square bg-slate-200 flex items-center justify-center">
                    <ImageIcon className="h-16 w-16 text-slate-400" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                    <p className="text-xs text-muted-foreground">{image.alt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-slate-600">
                <em>These are examples of liners where the client has not been sweeping them regularly as well as burning fuel that is not suitable for their appliance and which in turn leads to a dangerous build up of tar/creosotes.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              What Our Clients Say
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.location}</CardDescription>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-slate-600 italic">
                      "{testimonial.review}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setIsContactOpen(true)}
                className="bg-white text-black border-black hover:bg-white hover:text-black"
              >
                Ask a question about Chimney Sweeping
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready for a Clean, Safe Chimney?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your chimney sweep today and ensure your home is safe and compliant
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setIsContactOpen(true)}
            >
              Book Chimney Sweep
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-black bg-white hover:bg-white hover:text-black"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call 07939 846301
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Book a Chimney Sweep</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you to arrange your chimney sweep
            </DialogDescription>
          </DialogHeader>
          
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="service">Service Interested In</Label>
              <Select defaultValue="chimney-sweeping">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chimney-sweeping">Chimney Sweeping</SelectItem>
                  <SelectItem value="wood-burners">Wood Burners & Multifuel</SelectItem>
                  <SelectItem value="chimney-lining">Chimney Lining</SelectItem>
                  <SelectItem value="other">Other Services</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dates">Preferred Sweep Dates</Label>
              <Input id="dates" placeholder="e.g., Week of 15th Jan" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Tell us about your chimney sweeping requirements..."
                rows={3}
              />
            </div>
            
            <Button type="submit" className="w-full">
              Submit Booking Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
