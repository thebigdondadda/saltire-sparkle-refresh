import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Shield, Zap, Users, Award, MessageSquare, Phone, Mail } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Wood Burners & Multifuel",
      description: "Professional installation of high-efficiency wood burners and multifuel stoves with chimney lining and building regulations compliance.",
      href: "/services/wood-burners",
      icon: <Flame className="h-8 w-8 text-primary" />,
      features: ["New installations", "Chimney lining", "Fireplace conversions", "Building regulations compliance"]
    },
    {
      title: "Chimney Lining",
      description: "Professional chimney lining services using state-of-the-art CCTV inspection systems and high-quality materials to ensure your chimney is safe, efficient, and compliant.",
      href: "/services/chimney-lining",
      icon: <Shield className="h-8 w-8 text-primary" />,
      features: ["CCTV inspection", "Safety compliance", "Building regulations", "Professional installation"]
    },
    {
      title: "Chimney Sweeping",
      description: "Professional chimney sweeping using advanced power sweeping techniques to ensure every inch of your flue is cleaned to the highest standard possible.",
      href: "/services/chimney-sweeping",
      icon: <Zap className="h-8 w-8 text-primary" />,
      features: ["Power sweeping", "Annual maintenance", "Safety compliance", "Professional service"]
    },
    {
      title: "Package Deal",
      description: "Complete solutions combining multiple services for comprehensive fireplace and chimney care.",
      href: "/services/package-deal",
      icon: <Award className="h-8 w-8 text-primary" />,
      features: ["Multiple services", "Cost savings", "Coordinated work", "Single point of contact"]
    },
    {
      title: "Open Fires",
      description: "Installation and maintenance of traditional open fireplaces for authentic home heating.",
      href: "/services/open-fires",
      icon: <Flame className="h-8 w-8 text-primary" />,
      features: ["Traditional design", "Professional installation", "Safety compliance", "Ongoing maintenance"]
    },
    {
      title: "Electrical Fires",
      description: "Modern electric fire installations offering convenience and style without the need for chimneys.",
      href: "/services/electrical-fires",
      icon: <Zap className="h-8 w-8 text-primary" />,
      features: ["No chimney required", "Easy installation", "Modern design", "Low maintenance"]
    },
    {
      title: "Gas Fires",
      description: "Efficient gas fire installations with professional fitting and safety certification.",
      href: "/services/gas-fires",
      icon: <Shield className="h-8 w-8 text-primary" />,
      features: ["Gas safe certified", "Efficient heating", "Professional installation", "Safety compliance"]
    },
    {
      title: "Other Services & Stove Maintenance",
      description: "Comprehensive maintenance, servicing, and repair services for all types of heating appliances.",
      href: "/services/other-maintenance",
      icon: <Users className="h-8 w-8 text-primary" />,
      features: ["Regular servicing", "Repairs", "Parts replacement", "Emergency callouts"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">Our Services</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Comprehensive fireplace and chimney services across Scotland. From installation to maintenance, 
              we provide expert solutions for all your heating needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Book a Survey
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-white hover:text-black">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              <a href="tel:+447939846301" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Phone className="h-5 w-5" />
                <span>07939 846301</span>
              </a>
              <a href="mailto:saltirestovesandsweeps@gmail.com" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Mail className="h-5 w-5" />
                <span>saltirestovesandsweeps@gmail.com</span>
              </a>
            </div>
            <Button variant="secondary" size="sm">
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
              Expert Fireplace & Chimney Services
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We are a friendly, knowledgeable team based out of the West Coast of Scotland with a combined 20 years 
              of experience within the fireplace and chimney sweeping trade. Our comprehensive range of services 
              covers everything from initial surveys and design to complete installation and ongoing maintenance.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're looking to install a new heating system, maintain an existing appliance, or need 
              emergency repairs, our certified team provides professional, reliable solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Our Complete Service Range
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      {service.icon}
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-600">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link to={service.href}>
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-slate-900">
              Why Choose Saltire Stoves & Sweeps?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">20+ Years Experience</h3>
                <p className="text-slate-600">
                  Combined decades of expertise in fireplace and chimney installation across Scotland
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Fully Certified</h3>
                <p className="text-slate-600">
                  Gas Safe registered, building regulations compliant, and fully insured for your peace of mind
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Local Team</h3>
                <p className="text-slate-600">
                  Based on the West Coast of Scotland, serving communities across the country with local expertise
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Personal Service</h3>
                <p className="text-slate-600">
                  Friendly, approachable team providing personalized solutions and ongoing support
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Quick Response</h3>
                <p className="text-slate-600">
                  Fast turnaround times and emergency callout services when you need us most
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto">
                  <Flame className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Quality Guarantee</h3>
                <p className="text-slate-600">
                  All work guaranteed with comprehensive aftercare and maintenance support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your free survey today and discover how we can help with your fireplace and chimney needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
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
    </div>
  );
}
