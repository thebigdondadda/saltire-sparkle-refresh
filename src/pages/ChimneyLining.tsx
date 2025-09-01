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
import { Phone, Mail, Shield, AlertTriangle, Clock, CheckCircle, Camera, Flame, Building } from "lucide-react";

export default function ChimneyLining() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const whenRequiredItems = [
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      title: "New chimneys",
      description: "To meet safety and building regulations outlined in Document J of the building regulations guide"
    },
    {
      icon: <Flame className="h-6 w-6 text-primary" />,
      title: "Fuel type/Appliance changes",
      description: "Switching to a new appliance (e.g switching from a gas fire to a wood burning stove) will require a liner of differing size and type due to the effects of an increase/decrease in working temperature"
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
      title: "Old, Damaged or Chimneys in Disrepair",
      description: "If the existing liner is damaged, flaking, unfurled or has holes within or if your brick and mortar chimney has missing mortar joints or ingresses into the internal space within."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Chimney Issues",
      description: "Worrying signs like excessive creosote buildup, smoke leaks or visible damage tot he masonry of the chimney itself"
    }
  ];

  const benefitsItems = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safety",
      description: "The liner prevents hazardouse gases like carbon monoxide, from leaking into the home and reduces the risk of chimney fires by containing creosote buildup and high temperatures within a containable enviroment."
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Chimney Protection",
      description: "The liner itself shields the brick chimney from extreme heat, acidic combustion byproducts and moisture which can cause cracks, deterioration and spalling."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Cost Effective Efficiency",
      description: "A properly sized liner ensures optimal draft which will greatly improve the performance of your heating appliance which in turn reduces energy waste and the need for excessive spending on fuel."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Building Regulation Compliance",
      description: "Many new buildings require a liner for new chimney installations or when you are replacing an existing damaged liner to meet current safety standards."
    }
  ];

  const faqs = [
    {
      question: "What is chimney lining?",
      answer: "Chimney lining is when we install a protective sealed lining inside the chimney to contain the gases produced by the combustion process inside your fireplace or stove. The liner creates a smooth pathway for the smoke and gases to exit the building whilst protecting the structural integrity of the chimney itself and the surrounding rooms/building materials that it passes through."
    },
    {
      question: "When is chimney lining required?",
      answer: "Chimney lining is required for new chimneys to meet safety and building regulations, when changing fuel types or appliances, for old or damaged chimneys, and when there are chimney issues like excessive creosote buildup or smoke leaks."
    },
    {
      question: "How do you inspect chimney liners?",
      answer: "We are able to perform chimney liner inspections using state of the art cctv rod systems which allow us to feed a HD camera up inside the liner to inspect for damage and then advise how to proceed based on our findings."
    },
    {
      question: "Do all chimneys need new liners?",
      answer: "Not every liner will be damaged or has to be replaced before use and we will always strive to work on an as and when required basis."
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
          <span className="text-foreground">Chimney Lining</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Chimney Lining
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Professional chimney lining services using state-of-the-art CCTV inspection systems and 
                high-quality materials to ensure your chimney is safe, efficient, and compliant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-white">
                  Book a Survey
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-white hover:text-black">
                  View Gallery
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center">
                <Shield className="h-32 w-32 text-primary" />
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
              Request a Lining Quote
            </Button>
          </div>
        </div>
      </section>

      {/* What is Chimney Lining Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              What is chimney lining?
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Chimney lining is when we install a protective sealed lining inside the chimney to contain 
                the gases produced by the combustion process inside your fireplace or stove.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                The liner creates a smooth pathway for the smoke and gases to exit the building whilst 
                protecting the structural integrity of the chimney itself and the surrounding rooms/building 
                materials that it passes through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Chimney Lining is Needed */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Why does my chimney need to be lined?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {benefitsItems.map((benefit, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      {benefit.icon}
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Safety Warning */}
            <div className="mt-12 bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    Preventing damage to life and the home
                  </h3>
                  <p className="text-red-700 leading-relaxed">
                    Without a liner, heat and gases can seep through the cracks and missing mortar joints 
                    within an old brick chimney and escape into living spaces where it can be a danger to 
                    life as well as potentially damaging internal walls, ceilings and structural components.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Chimney Lining is Required */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              When is chimney lining required?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {whenRequiredItems.map((item, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      {item.icon}
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
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

      {/* CCTV Inspection Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
              <div className="flex items-start space-x-6">
                <div className="bg-primary text-primary-foreground p-4 rounded-lg">
                  <Camera className="h-8 w-8" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Professional CCTV Inspection
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    We are able to perform chimney liner inspections using state of the art cctv rod 
                    systems which allow us to feed a HD camera up inside the liner to inspect for damage 
                    and then advise how to proceed based on our findings, not every liner will be damaged 
                    or has to be replaced before use and we will always strive to work on an as and when 
                    required basis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Timescales */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Our Chimney Lining Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <CardTitle className="text-xl">Initial Inspection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    CCTV inspection to assess current chimney condition and determine lining requirements
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <CardTitle className="text-xl">Assessment & Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Detailed assessment and transparent quote for the required work
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <CardTitle className="text-xl">Professional Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Expert installation using high-quality materials and proper techniques
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <CardTitle className="text-xl">Final Inspection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Post-installation inspection and testing to ensure everything is working correctly
                  </p>
                </CardContent>
              </Card>
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
                Ask a question about Chimney Lining
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Protect Your Chimney?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your chimney lining survey today and ensure your home is safe and compliant
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setIsContactOpen(true)}
            >
              Request a Lining Quote
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
            <DialogTitle>Request a Chimney Lining Quote</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you with a detailed quote
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
              <Select defaultValue="chimney-lining">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chimney-lining">Chimney Lining</SelectItem>
                  <SelectItem value="wood-burners">Wood Burners & Multifuel</SelectItem>
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
                placeholder="Tell us about your chimney lining requirements..."
                rows={3}
              />
            </div>
            
            <Button type="submit" className="w-full">
              Submit Quote Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
