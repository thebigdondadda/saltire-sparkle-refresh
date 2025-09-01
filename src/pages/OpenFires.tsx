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
import { Phone, Mail, Shield, AlertTriangle, Clock, CheckCircle, Camera, Flame, Building, Image as ImageIcon, Star, Zap } from "lucide-react";

export default function OpenFires() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openFireStyles = [
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "High Chair Fire Bricks",
      description: "Traditional fire brick construction for authentic open fire experience"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Cast Panels",
      description: "Durable cast iron panels for modern open fire designs"
    },
    {
      icon: <Flame className="h-8 w-8 text-primary" />,
      title: "Pup and Scone Brick Openings",
      description: "Classic brick openings with traditional styling"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Cast Inserts With Slips and Surrounds",
      description: "Complete cast iron inserts with decorative slips and surrounds"
    },
    {
      icon: <Camera className="h-8 w-8 text-primary" />,
      title: "Fire Opening with Plaster Return Finish and Slips",
      description: "Plaster finished openings with decorative slip details"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "We assess your existing fireplace and flue dimensions to determine design options"
    },
    {
      step: "2",
      title: "Design Consultation",
      description: "Discuss your preferences and choose from various open fire styles and finishes"
    },
    {
      step: "3",
      title: "Professional Installation",
      description: "Expert installation ensuring safety and compliance with building regulations"
    },
    {
      step: "4",
      title: "Safety Testing",
      description: "Complete safety check and testing of your new open fire"
    }
  ];

  const faqs = [
    {
      question: "What are the different types of open fires available?",
      answer: "We offer High Chair Fire Bricks, Cast Panels, Pup and Scone Brick Openings, Cast Inserts With Slips and Surrounds, and Fire Opening with Plaster Return Finish and Slips. Each can be designed to suit your personal taste."
    },
    {
      question: "Can open fires be customized to my preferences?",
      answer: "Yes, open fires can be designed and built to suit your standards. However, we must highlight that the overall dimensions of the fireplace are always determined by the existing size of the flue."
    },
    {
      question: "How efficient are open fires compared to wood burning stoves?",
      answer: "Open fires lose 80% of the direct heat output up the chimney rather than being redirected back into the home, whereas a wood burning stove would perform much more efficiently."
    },
    {
      question: "What safety considerations are there for open fires?",
      answer: "Open fires require proper installation, regular chimney sweeping, and compliance with building regulations. We ensure all safety standards are met during installation."
    }
  ];

  const testimonials = [
    {
      name: "Margaret W.",
      location: "Perth",
      rating: 5,
      review: "Beautiful restoration of our original open fire. The team preserved the character while ensuring modern safety standards. The cast iron surround looks stunning."
    },
    {
      name: "James H.",
      location: "Stirling",
      rating: 5,
      review: "Excellent work on our open fire installation. They worked within the constraints of our existing flue and created exactly what we wanted. Highly professional service."
    }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/placeholder-openfire-1.jpg",
      alt: "Traditional open fire with high chair fire bricks",
      title: "High Chair Fire Bricks"
    },
    {
      id: 2,
      src: "/placeholder-openfire-2.jpg",
      alt: "Cast iron panels open fire design",
      title: "Cast Panels Design"
    },
    {
      id: 3,
      src: "/placeholder-openfire-3.jpg",
      alt: "Restored open fire with cast inserts and surrounds",
      title: "Cast Inserts & Surrounds"
    },
    {
      id: 4,
      src: "/placeholder-openfire-4.jpg",
      alt: "Plaster return finish with decorative slips",
      title: "Plaster Return Finish"
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
          <span className="text-foreground">Open Fires</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Open Fires
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Historically, before the introduction of wood burning stoves most homes would be built with an open fire to provide an area for the inhabitants to gather around to keep warm, host social events and build familial ties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-white">
                  Book a Survey
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-white hover:text-black">
                  Contact for Restoration Quote
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
              Book Open Fire Survey
            </Button>
          </div>
        </div>
      </section>

      {/* Description of Open Fire Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Open Fire Services
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                These open fires always consisted of an exposed fire recessed into the wall, covered by a mantle and contained within a cast iron grate, however nowadays there are a multitude of various options and styles available for a design that suits your personal taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Fire Styles Available */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Open Fire Styles Available
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {openFireStyles.map((style, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      {style.icon}
                      <CardTitle className="text-xl">{style.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      {style.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Compliance Notes */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
              <div className="flex items-start space-x-6">
                <div className="bg-primary text-primary-foreground p-4 rounded-lg">
                  <Shield className="h-8 w-8" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Important Design Consideration
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    <em>Open fires can be designed and built to suit your standards however we must highlight that the overall dimensions of the fireplace are always determined by the existing size of the flue.</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Efficiency Warning */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    Efficiency Consideration
                  </h3>
                  <p className="text-red-700 leading-relaxed">
                    We at saltire stoves and sweeps would like to highlight in a world where rising costs tend to lead to decisions made that open fires lose 80% of the direct heat output up the chimney rather than being redirected back into the home where a wood burning stove would perform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Installation */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Our Open Fire Installation Process
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Open Fire Gallery
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              What Our Open Fire Customers Say
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
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
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
      <section className="py-20">
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
                Ask a question about Open Fires
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Related Services
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">Chimney Lining</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Ensure your chimney is safe and compliant with professional lining services
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/services/chimney-lining">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">Chimney Sweeping</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Regular maintenance and cleaning to keep your open fire safe and efficient
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/services/chimney-sweeping">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <Flame className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">Wood Burners</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    More efficient alternative to open fires with better heat retention
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/services/wood-burners">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Restore Your Open Fire?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your survey today and discover how we can bring your open fire back to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setIsContactOpen(true)}
            >
              Book Open Fire Survey
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
            <DialogTitle>Book an Open Fire Survey</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you to arrange your open fire survey
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
              <Select defaultValue="open-fires">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open-fires">Open Fires</SelectItem>
                  <SelectItem value="wood-burners">Wood Burners & Multifuel</SelectItem>
                  <SelectItem value="chimney-lining">Chimney Lining</SelectItem>
                  <SelectItem value="chimney-sweeping">Chimney Sweeping</SelectItem>
                  <SelectItem value="other">Other Services</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dates">Preferred Survey Dates</Label>
              <Input id="dates" placeholder="e.g., Week of 15th Jan" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Tell us about your open fire requirements..."
                rows={3}
              />
            </div>
            
            <Button type="submit" className="w-full">
              Submit Survey Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
