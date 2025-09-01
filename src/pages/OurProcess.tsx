import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, FileText, Wrench, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    step: "Step One",
    title: "Get in Touch",
    description: "Contacting us through our website contact form, by email or telephone call can begin the process of us transforming your space.",
    icon: Phone
  },
  {
    step: "Step Two", 
    title: "Survey",
    description: "A home survey allows us to come out and meet you and see exactly what you have in mind regarding your fireplace, we will arrange a suitable date and time and we can begin planning what's to be done.",
    icon: FileText
  },
  {
    step: "Step Three",
    title: "Choosing Your Appliance", 
    description: "Choosing what type of appliance suits you, we can help you choose and walk you through what to expect.",
    icon: CheckCircle
  },
  {
    step: "Step Four",
    title: "Quotation",
    description: "Once we've discussed your requirements, we can send you out a comprehensive quote detailing exactly what will be done and ascertain what date your install can be undertaken.",
    icon: FileText
  },
  {
    step: "Step Five",
    title: "Installation",
    description: "We will arrive promptly on the date agreed and start the installation process, keeping you informed at every stage possible should the installation take longer you will be kept informed.",
    icon: Wrench
  },
  {
    step: "Step Six",
    title: "Follow Up",
    description: "Post completion follow up allows us to check that you are happy with the installation and walk you through the commission process.",
    icon: CheckCircle
  }
];

export default function OurProcess() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-primary">
              Our Working Process
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From the initial point of contact with us, all the way through to aftercare post installation, we want you to be fully comfortable in understanding the complete process of installation and the various stages we go through.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="relative overflow-hidden border-border/50 hover:shadow-lg transition-all duration-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="text-xs font-medium">
                            {step.step}
                          </Badge>
                          <div className="text-sm text-muted-foreground">
                            {index + 1} of {processSteps.length}
                          </div>
                        </div>
                        <CardTitle className="font-display text-xl md:text-2xl">
                          {step.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Follow-up Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-display text-2xl md:text-3xl text-primary">
                  One Year Check Up
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg leading-relaxed mb-6">
                  A year after completion, we will come back to ensure the appliance is still working as it should and carry out essential maintenance works such as an annual sweep.
                </CardDescription>
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-full px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>Ongoing support included</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Begin your journey with a professional survey. We'll guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact-us">Book a Survey</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:07939846301">Call 07939 846301</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}