import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Services - Complete Networking Solutions",
    description: "Comprehensive networking services including FTTH, ILL, Wi-Fi solutions, LAN setup, CCTV networking, and more across Gujarat.",
    alternates: {
        canonical: `${siteConfig.urls.base}/services`,
    },
};

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary/5 to-cyan-500/5 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge variant="outline" className="mb-4">Our Services</Badge>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Complete Networking Solutions
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            From high-speed broadband to enterprise connectivity, we offer
                            comprehensive networking services for homes and businesses across Gujarat.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <Card
                                key={service.id}
                                id={service.id}
                                className={`hover:shadow-lg transition-all ${service.highlight ? "border-primary/50" : ""
                                    }`}
                            >
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div className={`p-3 rounded-xl ${service.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10"
                                            }`}>
                                            <service.icon className={`h-6 w-6 ${service.highlight ? "" : "text-primary"}`} />
                                        </div>
                                        {service.highlight && (
                                            <Badge>Popular</Badge>
                                        )}
                                    </div>
                                    <CardTitle className="mt-4">{service.name}</CardTitle>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm">
                                                <span className="text-green-500 mt-0.5">✓</span>
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant={service.highlight ? "default" : "outline"} className="w-full" asChild>
                                        <Link href={service.href}>
                                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Our team can design and implement a complete networking solution
                        tailored to your specific requirements.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/business/ill">Enterprise Solutions</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
