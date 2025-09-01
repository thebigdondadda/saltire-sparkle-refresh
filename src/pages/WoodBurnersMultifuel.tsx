import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Calendar, MessageSquare, CheckCircle, Flame, Shield, Zap, Users, Award } from "lucide-react";

export default function WoodBurnersMultifuel() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const serviceBenefits = [
    {
      icon: <Flame className="h-8 w-8 text-primary" />,
      title: "Efficient heating",
      description: "High-efficiency wood burners and multifuel stoves for optimal heat output"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safety certified",
      description: "All installations meet current building regulations and safety standards"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Quick installation",
      description: "Professional installation completed efficiently with minimal disruption"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert team",
      description: "20+ years combined experience in fireplace and chimney installation"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Quality guarantee",
      description: "Workmanship guaranteed with comprehensive aftercare support"
    }
  ];

  const installationSteps = [
    {
      step: "1",
      title: "Initial survey",
      description: "Comprehensive assessment of your property and requirements"
    },
    {
      step: "2",
      title: "Design & planning",
      description: "Detailed design and planning with building regulations compliance"
    },
    {
      step: "3",
      title: "Installation",
      description: "Professional installation by our certified team"
    },
    {
      step: "4",
      title: "Testing & handover",
      description: "Thorough testing and demonstration of your new system"
    }
  ];

  const faqs = [
    {
      question: "How long does a wood burner installation take?",
      answer: "A typical wood burner installation takes 1-2 days depending on the complexity and whether chimney lining is required."
    },
    {
      question: "Do I need planning permission for a wood burner?",
      answer: "In most cases, no planning permission is required for installing a wood burner, but building regulations must be followed."
    },
    {
      question: "What fuel can I use in a multifuel stove?",
      answer: "Multifuel stoves can burn wood, coal, and other solid fuels, giving you flexibility in fuel choice."
    },
    {
      question: "How often should I have my chimney swept?",
      answer: "We recommend annual chimney sweeping for wood burners and twice yearly for coal-burning appliances."
    },
    {
      question: "What maintenance is required for wood burners?",
      answer: "Regular cleaning, annual chimney sweeping, and periodic inspection of seals and firebricks are recommended."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="text-foreground">Home</Link>
            <span>/</span>
            <Link to="/our-services" className="text-foreground">Our Services</Link>
            <span>/</span>
            <span className="text-foreground">Wood Burners & Multifuel</span>
          </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Wood Burners & Multifuel
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                At Saltire Stoves and Sweeps we offer a comprehensive installation service that includes fireplace construction, 
                hearth, stove, surround and chimney liner fitting as well as tailoring certain options to suit your needs personal 
                needs like fireplace design and material options with advice to help you settle on your final design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-white">
                  Book a Survey
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-white hover:text-black">
                  View Our Services
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
              Book a Survey
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Professional Wood Burner & Multifuel Installation
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              You can rest assured in the knowledge that our dedicated engineers have passed all relevant courses and have 
              certifications in the appropriate leading industry bodies namely HETAS and GAS-SAFE as well as remaining up 
              to date in any regulation changes within the fireplace industry.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Wood Burners Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Why choose a wood burner or multifuel stove over a traditional open fire?
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span>Safer Operation</span>
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Wood burners are enclosed appliances reducing the risks of sparks, embers or logs escaping and causing fires. 
                  Open fires pose a significantly higher fire hazard and require constant supervision especially in homes with 
                  children or beloved pets.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-primary" />
                  <span>Higher Efficiency = Lower Running Costs</span>
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Modern wood burning stoves due to ECO design model technologies convert 70 - 80% of fuel into heat which is 
                  reflected into the room compared to open fires which lose 60 - 80% heat straight up the chimney, this in turn 
                  means you spend less money on wood/fuel whilst gaining remarkably more heat into the home so more money remains 
                  in your own pocket to be better spent elsewhere.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center space-x-3">
                  <Flame className="h-6 w-6 text-primary" />
                  <span>Reduced Emissions and future proofed for the environment</span>
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Modern wood burning stoves that are compliant with UK Eco Design 2025 Standards emit significantly fewer 
                  particulates and pollutants than open fires as open fires release more smoke and harmful emissions which 
                  contribute to air pollution and this is a serious concern in UK Smoke Control Areas.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center space-x-3">
                  <Award className="h-6 w-6 text-primary" />
                  <span>Aesthetic and Practical Appeal</span>
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Wood burners offer a more modern or traditional aesthetic with a contained fire view and some models include 
                  handy extras such as cooking surfaces or in built ovens. Open fires, while visually appealing are less practical 
                  and unsafe for sustained heating or additional functions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Our Wood Burner & Multifuel Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Flame className="h-6 w-6 text-primary" />
                    <span>Fireplace Construction</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Complete fireplace construction including hearth, surround, and all necessary structural elements 
                    to create a safe and beautiful fireplace installation.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-primary" />
                    <span>Stove & Surround Installation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Professional installation of wood burners and multifuel stoves with custom surrounds, 
                    ensuring perfect fit and aesthetic appeal.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-6 w-6 text-primary" />
                    <span>Chimney Liner Fitting</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Professional chimney liner installation using flexible stainless steel liners for 
                    optimal safety and performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-6 w-6 text-primary" />
                    <span>Design & Material Options</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Tailored fireplace design and material options with expert advice to help you 
                    settle on your final design that suits your personal needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-primary" />
                    <span>HETAS & GAS-SAFE Certified</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Our dedicated engineers have passed all relevant courses and have certifications 
                    in HETAS and GAS-SAFE, remaining up to date with industry regulations.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <span>Comprehensive Service</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Complete end-to-end service from initial consultation through to final installation, 
                    with ongoing support and advice for your wood burner or multifuel stove.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Our Installation Process
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {installationSteps.map((step) => (
                <Card key={step.step} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Why Choose Saltire Stoves & Sweeps?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceBenefits.map((benefit, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Technical Specifications & Compliance
            </h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Building Regulations Compliance</CardTitle>
                <CardDescription>
                  All our installations meet current building regulations and safety standards
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Part J - Combustion Appliances</h4>
                    <p className="text-sm text-slate-600">
                      Full compliance with ventilation, flue, and hearth requirements
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Part L - Conservation of Fuel & Power</h4>
                    <p className="text-sm text-slate-600">
                      Energy efficiency standards and carbon emissions compliance
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Chimney Standards</h4>
                    <p className="text-sm text-slate-600">
                      BS EN 1443 compliance for chimney design and construction
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Appliance Certification</h4>
                    <p className="text-sm text-slate-600">
                      CE marked appliances meeting current efficiency standards
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              className="flex items-center space-x-2 bg-white text-black border-black hover:bg-white hover:text-black"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Ask a question about Wood Burners</span>
            </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Home Heating?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your free survey today and discover how a wood burner or multifuel stove can enhance your home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setIsContactOpen(true)}
            >
              Book a Survey
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
            <DialogTitle>Book a Survey - Wood Burners & Multifuel</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you to arrange your survey
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
              <Select defaultValue="wood-burners">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
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
                placeholder="Tell us about your requirements..."
                rows={3}
              />
            </div>
            
            <Button type="submit" className="w-full">
              Submit Enquiry
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
