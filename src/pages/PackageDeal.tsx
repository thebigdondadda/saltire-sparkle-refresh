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
import { Phone, Mail, Shield, CheckCircle, Clock, Award, Flame, Building, Image as ImageIcon, Package, Star } from "lucide-react";

export default function PackageDeal() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const packageInclusions = [
    {
      icon: <Flame className="h-8 w-8 text-primary" />,
      title: "Wood Burning / Multi-fuel Stove",
      description: "A sleek wood burning / multi-fuel stove that complements any aesthetic"
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "48\" Light Oak Effect Beam",
      description: "A 48\" Light Oak effect beam for a mantle"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Black Slate Hearth",
      description: "A stylish smooth, black slate hearth for a modern touch"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Full New Flue Lining",
      description: "Full new flue lining to ensure peak performance and safety"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We assess your space and discuss your requirements for the perfect package"
    },
    {
      step: "2",
      title: "Package Selection",
      description: "Choose from our range of package deals or customize to your needs"
    },
    {
      step: "3",
      title: "Professional Installation",
      description: "Our certified team installs everything with precision and care"
    },
    {
      step: "4",
      title: "Final Inspection",
      description: "Complete safety check and handover with full documentation"
    }
  ];

  const faqs = [
    {
      question: "What's included in the £3000 package?",
      answer: "The package includes a sleek wood burning / multi-fuel stove, a 48\" Light Oak effect beam for a mantle, a stylish smooth black slate hearth, and full new flue lining to ensure peak performance and safety."
    },
    {
      question: "Can I customize the package?",
      answer: "Yes! All aspects of the package deal can be altered to suit any need or requirement but may incur additional costs."
    },
    {
      question: "How long does installation take?",
      answer: "Installation typically takes 1-2 days depending on the complexity and any additional customizations required."
    },
    {
      question: "Is the package available nationwide?",
      answer: "Yes, we provide our package deals across Scotland with our experienced team traveling to your location."
    }
  ];

  const testimonials = [
    {
      name: "Jennifer M.",
      location: "Aberdeen",
      rating: 5,
      review: "The package deal was incredible value! We got everything we needed for our new wood burner and the quality is outstanding. The team was professional and the installation was perfect."
    },
    {
      name: "Robert T.",
      location: "Dundee",
      rating: 5,
      review: "Couldn't believe the value of this package. The oak beam and slate hearth look amazing, and the stove works perfectly. Highly recommend the package deal approach."
    }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/placeholder-package-1.jpg",
      alt: "Complete wood burning stove package installation",
      title: "Full package installation"
    },
    {
      id: 2,
      src: "/placeholder-package-2.jpg",
      alt: "Light oak effect beam and slate hearth",
      title: "Oak beam and slate hearth"
    },
    {
      id: 3,
      src: "/placeholder-package-3.jpg",
      alt: "Professional installation in progress",
      title: "Installation process"
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
          <span className="text-foreground">Package Deal</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Package Deal
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Complete fireplace solutions combining multiple services for comprehensive care and unbeatable value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-white">
                  Book Package
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-white hover:text-black">
                  Contact for Custom Quote
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center">
                <Package className="h-32 w-32 text-primary" />
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
              Book Package Deal
            </Button>
          </div>
        </div>
      </section>

      {/* Package Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
              <div className="text-center space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                  Reinvent Your Fireplace with Our Wood Burning Stove Package!
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Embrace the warmth and beauty of a wood burning stove with our exclusive package deal! For just <strong className="text-2xl text-primary">£3000</strong> you'll receive:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  {packageInclusions.map((item, index) => (
                    <Card key={index} className="text-left">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 space-y-4">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    This all-encompassing package not only elevates your home's ambiance but also creates a warm atmosphere perfect for family gatherings or quiet evenings.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    <strong>Don't hesitate!</strong> Upgrade your home today with this unbeatable offer. Limited availability—secure your package now and enjoy the luxury of a warm, inviting space!
                  </p>
                  <p className="text-sm text-slate-500 italic">
                    *All aspects of the package deal can be altered to suit any need or requirement but may incur additional costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              What's Included in Your Package
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {packageInclusions.map((item, index) => (
                <Card key={index} className="text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-slate-900">
              Package Pricing
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
              <div className="space-y-6">
                <div className="text-6xl font-bold text-primary mb-4">
                  £3000
                </div>
                <p className="text-xl text-slate-600">
                  Complete package including installation and all materials
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">
                    <strong>Limited Time Offer</strong> - Secure your package now!
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary text-white" onClick={() => setIsContactOpen(true)}>
                    Book This Package
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Request Custom Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Scheduling */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Our Package Installation Process
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
              Package Gallery
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
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              What Our Package Customers Say
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
                Ask a question about Package Deals
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Fireplace?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your package deal today and enjoy unbeatable value on a complete fireplace solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setIsContactOpen(true)}
            >
              Book Package Deal
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
            <DialogTitle>Book a Package Deal</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you to arrange your package deal
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
              <Select defaultValue="package-deal">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="package-deal">Package Deal</SelectItem>
                  <SelectItem value="wood-burners">Wood Burners & Multifuel</SelectItem>
                  <SelectItem value="chimney-lining">Chimney Lining</SelectItem>
                  <SelectItem value="chimney-sweeping">Chimney Sweeping</SelectItem>
                  <SelectItem value="other">Other Services</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="package">Package Type</Label>
              <Select defaultValue="wood-burning-stove">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wood-burning-stove">Wood Burning Stove Package (£3000)</SelectItem>
                  <SelectItem value="custom">Custom Package</SelectItem>
                  <SelectItem value="quote">Request Quote</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dates">Preferred Installation Dates</Label>
              <Input id="dates" placeholder="e.g., Week of 15th Jan" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Tell us about your package requirements..."
                rows={3}
              />
            </div>
            
            <Button type="submit" className="w-full">
              Submit Package Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
