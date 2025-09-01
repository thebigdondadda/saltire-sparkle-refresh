import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Phone, Mail, Instagram, Facebook, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

const serviceItems = [
  { title: "Wood Burners & Multifuel", href: "/services/wood-burners" },
  { title: "Chimney Lining", href: "/services/chimney-lining" },
  { title: "Chimney Sweeping", href: "/services/chimney-sweeping" },
  { title: "Package Deal", href: "/services/package-deal" },
  { title: "Open Fires", href: "/services/open-fires" },
  { title: "Electrical Fires", href: "/services/electrical-fires" },
  { title: "Gas Fires", href: "/services/gas-fires" },
  { title: "Other Services & Stove Maintenance", href: "/services/other-maintenance" },
];

const navItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },
  { title: "Our Services", href: "/services", hasSubmenu: true },
  { title: "Our Process", href: "/our-process" },
  { title: "Gallery", href: "/gallery" },
  { title: "Reviews", href: "/reviews" },
  { title: "FAQ's", href: "/faqs" },
  { title: "Contact Us", href: "/contact-us" },
];

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-display font-bold text-xl text-primary">
                Saltire Stoves & Sweeps
              </span>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.hasSubmenu ? (
                      <>
                        <NavigationMenuTrigger 
                          className={cn(
                            "h-10 px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                            isActive(item.href) && "bg-accent text-accent-foreground"
                          )}
                        >
                          <Link to={item.href} className="hover:underline">
                            {item.title}
                          </Link>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-80 gap-3 p-4 bg-popover">
                            <div className="p-3 border-b border-border mb-2">
                              <Link
                                to={item.href}
                                className="block text-sm font-medium text-primary"
                              >
                                View All Services
                              </Link>
                            </div>
                            {serviceItems.map((service) => (
                              <NavigationMenuLink key={service.title} asChild>
                                <Link
                                  to={service.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {service.title}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.href}
                          className={cn(
                            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                            isActive(item.href) && "bg-accent text-accent-foreground"
                          )}
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-sm text-muted-foreground">
                <a href="tel:07939846301" className="flex items-center space-x-1 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>07939 846301</span>
                </a>
              </div>
              <Button asChild variant="cta">
                <Link to="/contact-us">Book a Survey</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="mt-6 space-y-6">
                  <nav className="space-y-4">
                    {navItems.map((item) => (
                      <div key={item.title}>
                        <Link
                          to={item.href}
                          className={cn(
                            "block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground",
                            isActive(item.href) && "bg-accent text-accent-foreground"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                        {item.hasSubmenu && (
                          <div className="ml-4 mt-2 space-y-2">
                            {serviceItems.map((service) => (
                              <Link
                                key={service.title}
                                to={service.href}
                                className="block px-3 py-2 text-sm text-muted-foreground rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
                                onClick={() => setIsOpen(false)}
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>

                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="text-sm">
                      <a href="tel:07939846301" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="h-4 w-4" />
                        <span>07939 846301</span>
                      </a>
                    </div>
                    <Button asChild variant="cta" className="w-full">
                      <Link to="/contact-us" onClick={() => setIsOpen(false)}>
                        Book a Survey
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-100">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl">Saltire Stoves & Sweeps</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                A friendly, knowledgeable team based out of the West Coast of Scotland with a combined 20 years of experience within the fireplace and chimney sweeping trade.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-slate-400 hover:text-secondary transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-slate-400 hover:text-secondary transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <nav className="space-y-2">
                {navItems.filter(item => !item.hasSubmenu).map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block text-slate-300 hover:text-secondary transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contact</h4>
              <div className="space-y-3">
                <a 
                  href="tel:07939846301" 
                  className="flex items-center space-x-2 text-slate-300 hover:text-secondary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>07939 846301</span>
                </a>
                <a 
                  href="mailto:saltirestovesandsweeps@gmail.com" 
                  className="flex items-center space-x-2 text-slate-300 hover:text-secondary transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>saltirestovesandsweeps@gmail.com</span>
                </a>
                <div className="text-sm text-slate-400">
                  <p>We are based in West of Scotland</p>
                  <p>We install and service country wide</p>
                </div>
                <div className="text-sm text-slate-400">
                  <p><strong>Hours:</strong></p>
                  <p>Monday–Friday: 8am–6pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm text-slate-400">
            <p>&copy; 2024 Saltire Stoves & Sweeps. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}