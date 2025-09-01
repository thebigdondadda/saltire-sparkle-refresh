import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, CheckCircle, Star, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What areas in Scotland do you cover?",
    answer: "We provide chimney sweeping and stove installation services mainly across Argyll & Bute, All of the Hebridean Islands, Glasgow, Central Scotland and the Highlands as well as covering the entire Mainland. Contact us to confirm availability in your area."
  },
  {
    question: "Why choose us for your chimney and stove needs?",
    answer: "• Local Pragmatic Expertise: We understand Scotland's unique climate and chimney challenges and can convey our solutions to you in an easily understandable fashion.\n• Qualified HETAS Professionals: Fully trained and compliant with industry standards.\n• Client-Focused: Clean, reliable, down to earth and friendly service with a focus on safety.\n• Comprehensive Services: From sweeping to stove installation and repairs, we're your one-stop shop."
  },
  {
    question: "How do I book a service?",
    answer: "Booking is easy! Call us at 07939846301, email saltirestovesandsweeps@gmail.com, or fill out our online contact form. We'll arrange a convenient time for your chimney sweep or stove installation consultation."
  },
  {
    question: "Are you qualified to sweep chimneys and install wood-burning stoves?",
    answer: "Yes! We are fully trained and certified chimney sweeps and we are HETAS-qualified (Looking to be HETAS registered by Jan 2026), ensuring compliance with Scottish building regulations and safety standards."
  },
  {
    question: "How much does a stove installation cost?",
    answer: "Costs vary depending on location, chimney type, and installation required. We offer a fully comprehensive package deal which will cover the majority of standard installations that comes with no hidden costs. For an accurate quote, contact us for a free, no-obligation assessment. We pride ourselves on fully costed, transparent estimations with no hidden fees."
  },
  {
    question: "How much does a chimney sweep cost?",
    answer: "Costs vary depending on location, chimney type, and service required, however our standard price is £75. This is under the assumption there are no blockages present and it has been swept annually. If additional work is required, we will be able to provide a more accurate quote on site before any additional work is undertaken."
  },
  {
    question: "Why do I need my chimney swept regularly?",
    answer: "Regular chimney sweeping prevents soot and creosote build-up, reducing the risk of chimney fires and ensuring safe operation of your fireplace or wood-burning stove. In Scotland's damp climate, sweeping also removes debris like bird nests or tar, which can block flues and cause carbon monoxide build-up. We recommend sweeping at least once a year, or twice if you use your fire frequently."
  },
  {
    question: "How often should I have my chimney swept?",
    answer: "• Open fires: At least once a year, ideally before the heating season.\n• Wood-burning stoves: Once or twice a year, depending on usage.\n• Multi-fuel stoves: Twice a year if burning smokeless fuels or wood. Our certified sweeps assess your chimney's condition and advise on the best schedule"
  },
  {
    question: "What does a chimney sweep involve?",
    answer: "Our chimney sweeping service includes:\n• Inspecting the chimney and flue for blockages or damage.\n• Using professional brushes, rods, and vacuum systems to remove soot, tar, and debris.\n• Checking for proper ventilation and safety.\nProviding a certificate of sweeping for insurance purposes. We use modern, clean methods to minimize mess in your home."
  },
  {
    question: "Can you install a wood-burning stove in my home?",
    answer: "Absolutely! We specialize in installing wood-burning and multi-fuel stoves across Scotland. Our process includes:\n• Assessing your chimney and property for suitability.\n• Advising on stove selection based on your heating needs and budget.\n• Ensuring compliance with Scottish building regulations, including proper flue installation and ventilation.\n• Offering aftercare advice to maintain efficiency and safety."
  },
  {
    question: "Do I need a chimney liner for my wood-burning stove?",
    answer: "In most cases, yes. A chimney liner ensures safe and efficient operation by directing smoke and gases out of your home while protecting the chimney structure. We assess your chimney during a site visit to determine if a liner is needed and recommend the best type (e.g., stainless steel) for your setup."
  },
  {
    question: "Do you comply with Scottish regulations for wood-burning stoves?",
    answer: "Yes, all our installations meet Scottish building regulations and environmental standards, including the latest requirements for eco-design stoves (post-2022). We ensure your stove is energy-efficient and compliant with local air quality rules, especially in Smoke Control Areas."
  },
  {
    question: "How do I maintain my wood-burning stove?",
    answer: "To keep your stove in top condition:\n• Use seasoned, dry wood with low moisture content (<20%).\n• Schedule regular chimney sweeps to prevent creosote buildup.\n• Clean the stove glass and ash pan regularly.\n• Have your stove serviced annually by a professional. We offer maintenance tips and servicing to prolong your stove's lifespan."
  },
  {
    question: "Can you help with chimney repairs?",
    answer: "Yes, we handle common chimney issues like cracked flues, damaged pots, or leaking stacks. After a thorough inspection, we'll recommend repairs to restore safety and functionality."
  },
  {
    question: "Are wood-burning stoves environmentally friendly?",
    answer: "Modern wood-burning stoves, especially eco-design models, are highly efficient and produce lower emissions than older models. By using sustainably sourced wood and maintaining your stove properly, you can heat your home with minimal environmental impact."
  },
  {
    question: "Do you offer emergency chimney services?",
    answer: "Yes, we provide emergency call-outs for issues like blocked chimneys or unsafe flues. Contact us immediately if you suspect a problem, such as smoke entering your home or unusual odors."
  }
];

export default function FAQs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-primary">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Find answers to common questions about our services, pricing, and processes.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                <span>{faqs.length} Questions Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Expert Advice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="text-center border-border/50 hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <Badge className="mb-3 bg-secondary/10 text-secondary hover:bg-secondary/20">
                    £75
                  </Badge>
                  <p className="text-sm font-medium">Standard Chimney Sweep</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-border/50 hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                    HETAS
                  </Badge>
                  <p className="text-sm font-medium">Certified Professionals</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-border/50 hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <Badge className="mb-3 bg-green-100 text-green-700 hover:bg-green-200">
                    Scotland Wide
                  </Badge>
                  <p className="text-sm font-medium">Service Coverage</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                      <AccordionTrigger className="text-left hover:no-underline hover:text-primary font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        <div className="prose prose-sm max-w-none">
                          {faq.answer.split('\n').map((line, lineIndex) => (
                            <p key={lineIndex} className="mb-2 last:mb-0">
                              {line}
                            </p>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="font-display text-2xl">
                  Still have questions?
                </CardTitle>
                <CardDescription className="text-lg">
                  Our friendly team is here to help with any specific questions about your project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="cta" size="lg">
                    <Link to="/contact-us">Get in Touch</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:07939846301">Call 07939 846301</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}