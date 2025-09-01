import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, Users } from "lucide-react";
import { Link } from "react-router-dom";

const reviews = [
  {
    name: "Iain H",
    age: 61,
    occupation: "Retired Engineer",
    rating: 5,
    review: "Collected a couple quotes from various companies whilst looking to get my woodstove installed and found Saltire the most down to earth and informative company, the walked me through every step of the job and turned up on time, on the date they said and finished what we thought would be a challenging install in 2 days and left no mess (which pleased my wife) who was very worried as the room had just been decorated, would recommend them to anyone"
  },
  {
    name: "Jaq",
    occupation: "Nurse", 
    rating: 5,
    review: "Thank you, we really love it. So glad we finally decided to get a stove installed, it has just made it so much more homey."
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'fill-secondary text-secondary' : 'text-muted-foreground'}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-primary">
              Reviews
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              What our clients are saying.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <StarRating rating={5} />
                <span className="font-medium">5.0 Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{reviews.length} Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {reviews.map((review, index) => (
              <Card key={index} className="relative overflow-hidden border-border/50 hover:shadow-lg transition-all duration-200">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-lg font-semibold">
                          {review.name}
                        </CardTitle>
                        {review.age && (
                          <Badge variant="outline" className="text-xs">
                            {review.age}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <StarRating rating={review.rating} />
                        <span className="text-sm text-muted-foreground font-medium">
                          {review.occupation}
                        </span>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-primary/20 flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-base leading-relaxed text-foreground italic">
                    "{review.review}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add Review CTA */}
          <div className="text-center mt-12">
            <Card className="inline-block border-2 border-dashed border-border hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Share Your Experience</CardTitle>
                <CardDescription>
                  We'd love to hear about your experience with our services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="hover:bg-white hover:text-black">
                  <Link to="/contact-us">Leave a Review</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Join our satisfied customers
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Experience the quality service that our clients recommend. Book your survey today.
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