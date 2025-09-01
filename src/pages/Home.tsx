import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Flame, 
  Shield, 
  Award, 
  Phone, 
  CheckCircle,
  Wrench,
  Home as HomeIcon,
  Eye,
  Camera
} from "lucide-react";
import heroImage from "@/assets/hero-fireplace.jpg";

const services = [
  {
    icon: Flame,
    title: "Stove, open and gas fire Installation",
    description: "Professional installation of wood burners, multifuel stoves, and gas fires"
  },
  {
    icon: Wrench,
    title: "Install and remove old solid fuel/gas liners",
    description: "Expert liner installation and removal services"
  },
  {
    icon: Shield,
    title: "Install rigid twin wall flue systems",
    description: "Safe and efficient flue system installation"
  },
  {
    icon: Eye,
    title: "Survey and design service", 
    description: "Comprehensive surveys and custom design solutions"
  },
  {
    icon: HomeIcon,
    title: "Construct and remove chimney heads/stack",
    description: "Complete chimney construction and removal services"
  },
  {
    icon: CheckCircle,
    title: "Sweep chimneys/flues",
    description: "Professional chimney sweeping and maintenance"
  },
  {
    icon: Wrench,
    title: "Remove chimney blockages/birds nests",
    description: "Clearing blockages and removing unwanted nests"
  },
  {
    icon: Shield,
    title: "Fit and replace pots/cowls",
    description: "Installation and replacement of chimney pots and cowls"
  },
  {
    icon: CheckCircle,
    title: "Sealed smoke and evacuation testing",
    description: "Professional testing for safety and compliance"
  },
  {
    icon: HomeIcon,
    title: "Chimney capping",
    description: "Protective capping services for unused chimneys"
  },
  {
    icon: Wrench,
    title: "Internal component procurement and replacing",
    description: "Sourcing and replacing internal stove components"
  },
  {
    icon: Shield,
    title: "Heat proof glass replacement",
    description: "Professional glass replacement services"
  },
  {
    icon: Flame,
    title: "Fire cementing",
    description: "Expert fire cementing and sealing"
  },
  {
    icon: HomeIcon,
    title: "Fireplace insulating using Leca/Mica-Fil",
    description: "Professional fireplace insulation services"
  },
  {
    icon: CheckCircle,
    title: "Resealing of open fires with fire clay",
    description: "Expert resealing and maintenance"
  },
  {
    icon: Eye,
    title: "Rust and crack inspections",
    description: "Thorough inspections for damage and wear"
  },
  {
    icon: Camera,
    title: "CCTV camera inspections",
    description: "Advanced camera inspections for detailed analysis"
  },
  {
    icon: Wrench,
    title: "Venting/repairs/remedial works",
    description: "Comprehensive repair and remedial services"
  },
  {
    icon: HomeIcon,
    title: "Internal plastering",
    description: "Professional internal plastering services"
  },
  {
    icon: Shield,
    title: "External rendering",
    description: "Expert external rendering and weatherproofing"
  },
  {
    icon: HomeIcon,
    title: "Boarding over of fireplaces",
    description: "Safe boarding and sealing of unused fireplaces"
  },
  {
    icon: Camera,
    title: "Roof and chimney surveying with specialist drones on inaccessible roofs",
    description: "Advanced drone surveying for detailed roof and chimney inspections"
  },
  {
    icon: Flame,
    title: "Stove brick replacement",
    description: "Custom brick replacements crafted from fire proof vermiculite for discontinued stove models, prolonging stove life and preventing unexpected outlays"
  }
];

const features = [
  {
    icon: Award,
    title: "HETAS & GAS-SAFE Certified",
    description: "Our engineers are fully certified and up to date with industry regulations"
  },
  {
    icon: Shield,
    title: "20+ Years Experience",
    description: "Combined experience in fireplace and chimney sweeping trade"
  },
  {
    icon: Phone,
    title: "Country Wide Service",
    description: "Based in West Scotland, we service across the country"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Home Is Where The Hearth Is
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-slate-200">
            A friendly, knowledgeable team based out of the West Coast of Scotland with a combined 20 years of experience within the fireplace and chimney sweeping trade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact-us">Book a Survey</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white border-white text-black hover:bg-white hover:text-black">
              <Link to="/our-services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-md bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="font-display text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-primary">
              Our full range of services:
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From installation to maintenance, we provide comprehensive fireplace and chimney services across Scotland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-base font-semibold leading-tight">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="cta" size="lg">
              <Link to="/our-services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your home?
          </h2>
          <p className="text-xl mb-8 text-slate-200 max-w-2xl mx-auto">
            Get started with a professional survey. Our experts will assess your needs and provide tailored recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact-us">Book a Survey</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-black bg-white hover:bg-white hover:text-black">
              <a href="tel:07939846301">Call 07939 846301</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}