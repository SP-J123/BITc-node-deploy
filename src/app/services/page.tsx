import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Server, Network, Video, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Services - Smart Home & Enterprise Solutions",
    description: "Beyond just internet. BitConnect offers end-to-end networking, structured cabling, CCTV surveillance, and managed IT services for homes and businesses.",
    alternates: {
        canonical: `${siteConfig.urls.base}/services`,
    },
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-background selection:bg-primary/20">
            {/* Hero */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
                <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <Badge variant="outline" className="mb-6 px-4 py-1 text-sm border-primary/30 text-primary bg-primary/5 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                            End-to-End Solutions
                        </Badge>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                            More Than Just <br />
                            <span className="text-primary">Internet.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                            We provide comprehensive networking infrastructure services.
                            From structured cabling to advanced surveillance, we are your single point of contact for all things IT.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card
                                key={service.id}
                                className={`group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-muted ${service.highlight
                                    ? "border-primary/50 bg-gradient-to-br from-primary/5 to-background shadow-primary/10"
                                    : "bg-card hover:border-primary/30"
                                    } animate-in fade-in slide-in-from-bottom-8`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 ease-out" />

                                <CardHeader>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-3.5 rounded-2xl ${service.highlight
                                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                            : "bg-primary/10 text-primary"
                                            } group-hover:scale-110 transition-transform duration-300`}>
                                            <service.icon className="h-6 w-6" />
                                        </div>
                                        {service.highlight && (
                                            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                                                Most Popular
                                            </Badge>
                                        )}
                                    </div>
                                    <CardTitle className="text-2xl mb-2">{service.name}</CardTitle>
                                    <CardDescription className="text-base">{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm group/item">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0 group-hover/item:text-primary transition-colors" />
                                                <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        variant={service.highlight ? "default" : "outline"}
                                        className={`w-full group/btn ${service.highlight ? "shadow-lg shadow-primary/20" : ""}`}
                                        asChild
                                    >
                                        <Link href={service.href}>
                                            Learn More
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-muted/30 border-t">
                <div className="container mx-auto px-4">
                    <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
                        {/* Background Patterns */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/grid.svg')] pointer-events-none" />
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
                            <p className="text-primary-foreground/80 text-lg mb-10">
                                Every business is unique. Our network architects can design a tailored infrastructure plan that scales with your growth.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button size="lg" variant="secondary" className="h-12 px-8 text-lg font-semibold text-primary" asChild>
                                    <Link href="/contact">Talk to an Expert</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-12 px-8 text-lg font-semibold border-white/20 text-white hover:bg-white/10" asChild>
                                    <Link href="/business/ill">View Enterprise Plans</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
