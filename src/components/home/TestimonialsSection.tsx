import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        name: "Rajesh Patel",
        role: "Business Owner",
        location: "Ahmedabad",
        content: "We switched to BitConnect for our office and the difference is night and day. The dedicated bandwidth ensures our video calls never lag and file uploads are lightning fast.",
        rating: 5,
    },
    {
        name: "Priya Sharma",
        role: "Work from Home Professional",
        location: "Vadodara",
        content: "Finally, an ISP that understands what reliable internet means. My Zoom meetings are crystal clear and I can stream 4K without buffering. Best decision ever!",
        rating: 5,
    },
    {
        name: "Amit Desai",
        role: "Gaming Enthusiast",
        location: "Surat",
        content: "The low latency is a game-changer for online gaming. I've tried other ISPs but BitConnect's fiber connection gives me consistent sub-5ms ping to Indian servers.",
        rating: 5,
    },
    {
        name: "Meera Joshi",
        role: "IT Manager",
        location: "Rajkot",
        content: "We deployed BitConnect's ILL for our company. Their 24×7 NOC support and 99.9% SLA has been rock solid. Highly recommend for enterprise needs.",
        rating: 5,
    },
];

export function TestimonialsSection() {
    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Loved by Customers Across Gujarat
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Don't just take our word for it. Here's what our customers have to say
                        about their BitConnect experience.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                {/* Quote Icon */}
                                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-white font-semibold">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">{testimonial.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {testimonial.role} • {testimonial.location}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
