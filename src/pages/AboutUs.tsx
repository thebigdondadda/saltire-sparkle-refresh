import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-primary">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Learn about our journey, experience, and commitment to excellence in fireplace and chimney services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Story Section */}
            <Card className="mb-12 border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="font-display text-2xl md:text-3xl">
                  It all begins with a spark.
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground">
                  Saltire Stoves & Sweeps is the brainchild of Jamie Taylor and Stuart Louden, we decided to open our own stove fitting and sweeping service for clients in Scotland. After working for other stove companies in Glasgow, we decided to collectively pool our knowledge that we have accrued in the past 20+ years. Within the industry of operating as a team, we are able to provide an honest and pragmatic service drawing on our many years of experience that we have undertaken within this industry and other construction based trades.
                </p>
              </CardContent>
            </Card>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="text-center border-border/50 hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">20+ Years Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Combined expertise in fireplace and chimney sweeping trade, bringing decades of knowledge to every project.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50 hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Scotland Based</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Based in the West Coast of Scotland, we service clients across the country with reliable, professional care.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Values Section */}
            <Card className="mb-12 bg-gradient-subtle border-0">
              <CardHeader className="text-center">
                <CardTitle className="font-display text-2xl md:text-3xl text-primary">
                  Our Commitment
                </CardTitle>
                <CardDescription className="text-lg">
                  What drives us every day
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2 text-primary">Honest Service</h3>
                    <p className="text-muted-foreground">
                      We provide transparent, honest advice and pricing with no hidden surprises.
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2 text-primary">Pragmatic Approach</h3>
                    <p className="text-muted-foreground">
                      Our practical solutions are tailored to your specific needs and budget.
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2 text-primary">Quality Workmanship</h3>
                    <p className="text-muted-foreground">
                      Every project is completed to the highest standards with attention to detail.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="text-center bg-primary text-primary-foreground border-0">
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  Ready to work with our experienced team?
                </CardTitle>
                <CardDescription className="text-primary-foreground/80 text-lg">
                  Get in touch today for a consultation and see the difference experience makes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="secondary" size="lg">
                    <Link to="/contact-us">Book a Survey</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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