import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ZoomIn, Grid, Image as ImageIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

// Gallery images from the live site
const galleryImages = [
  {
    id: 1,
    src: "https://images.squarespace-cdn.com/content/v1/687bbd7f43b9fa5d35d359d3/c6f4ce65-a988-4e58-9ac8-f8d3bafbb5e0/Stoves+Glasgow+Open+Fire.jpg",
    alt: "Stoves Glasgow Open Fire",
    title: "Open Fire Installation"
  },
  {
    id: 2,
    src: "https://images.squarespace-cdn.com/content/v1/687bbd7f43b9fa5d35d359d3/1753877910187-IFF95UM3KYXZK7RG27N8/20240321_142940.jpg",
    alt: "Wood burner installation progress",
    title: "Installation Progress - March 2024"
  },
  {
    id: 3,
    src: "https://images.squarespace-cdn.com/content/v1/687bbd7f43b9fa5d35d359d3/1753877694244-ZQRR8VWUL03ZZ7ENKO96/20240322_120211.jpg",
    alt: "Completed stove installation",
    title: "Completed Installation - March 2024"
  },
  {
    id: 4,
    src: "https://images.squarespace-cdn.com/content/v1/687bbd7f43b9fa5d35d359d3/1753877749166-TFQ2DBM7J6V1FCIYWBSQ/20240322_120310.jpg",
    alt: "Stove installation detail",
    title: "Installation Detail Work"
  },
  {
    id: 5,
    src: "https://images.squarespace-cdn.com/content/v1/687bbd7f43b9fa5d35d359d3/a2b035a4-434b-4894-9b35-baa5cd52d7fc/20240322_120349.jpg",
    alt: "Finished wood burner installation",
    title: "Finished Installation - March 2024"
  },
  {
    id: 6,
    src: "https://images.squarespace-cdn.com/content/v1/687bbd7f43b9fa5d35d359d3/476d509a-e45c-453f-aea3-c7fbd7164760/20240403_115445.jpg",
    alt: "Wood burner project completion",
    title: "Project Completion - April 2024"
  }
];

const categories = ["All", "Wood Burners", "Open Fires", "Installations", "Before & After"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(image => 
        image.title.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        image.alt.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-primary">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Browse our recent projects and installations across Scotland.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 w-4" />
                <span>{galleryImages.length} Images</span>
              </div>
              <div className="flex items-center gap-2">
                <Grid className="w-4 h-4" />
                <span>Recent Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <Card key={image.id} className="group overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="secondary"
                              size="icon"
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                              onClick={() => setSelectedImage(image)}
                            >
                              <ZoomIn className="w-4 h-4" />
                              <span className="sr-only">View larger image</span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl w-full p-0 border-0">
                            <div className="relative">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto max-h-[80vh] object-contain"
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <h3 className="text-white font-semibold text-lg mb-1">
                                  {image.title}
                                </h3>
                                <p className="text-white/80 text-sm">
                                  {image.alt}
                                </p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm mb-1 line-clamp-1">
                        {image.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {image.alt}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">
                  No images found for the selected category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to create your own project?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Join our gallery of satisfied customers. Book a survey to start your fireplace transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact-us">Book a Survey</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-black bg-white hover:bg-white hover:text-black">
              <Link to="/our-services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}