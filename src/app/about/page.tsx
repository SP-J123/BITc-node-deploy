import { Metadata } from "next";
import { Shield, Clock, Award, Users, Target, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "About Us - Our Story",
    description: "Learn about BitConnect Technology Private Limited, Gujarat's trusted fiber broadband provider. Our mission, values, and commitment to connectivity.",
    alternates: {
        canonical: `${siteConfig.urls.base}/about`,
    },
};

const values = [
    {
        icon: Target,
        title: "Mission",
        description: "To provide uninterrupted internet connectivity, deliver cost-effective broadband solutions, and support the digital growth of local businesses and institutions.",
    },
    {
        icon: Shield,
        title: "Vision",
        description: "To become a trusted regional connectivity provider delivering reliable and affordable internet services with modern network infrastructure.",
    },
    {
        icon: Award,
        title: "Quality",
        description: "We use carrier-grade routing technology and modern fiber network infrastructure to ensure high-speed and reliable connections.",
    },
    {
        icon: Heart,
        title: "Customer Focus",
        description: "We bridge the digital gap by focusing on delivering quality services to underserved areas and prioritizing customer satisfaction.",
    },
];

const milestones = [
    { year: "2020", event: "BitConnect Technology Private Limited founded in Vadodara" },
    { year: "2021", event: "Expanded to Ahmedabad, Surat, and Rajkot" },
    { year: "2022", event: "Launched enterprise ILL services, reached 200+ customers" },
    { year: "2023", event: "Expanded to 10+ Gujarat cities, introduced 1 Gbps plans" },
    { year: "2024", event: "Crossed 500+ happy customers, launched managed services" },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary/5 to-cyan-500/5 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge variant="outline" className="mb-4">About Us</Badge>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Connecting Gujarat, One Fiber at a Time
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            {siteConfig.company.legalName} is a licensed Internet Service Provider
                            committed to delivering fast, reliable, and affordable fiber broadband
                            to homes and businesses across Gujarat.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p>
                                Founded in {siteConfig.company.foundedYear}, BitConnect started with a simple vision:
                                to provide Gujarat with world-class internet connectivity at affordable prices.
                                We saw a gap in the market where customers were underserved by large telecom
                                companies with poor support and unreliable connections.
                            </p>
                            <p>
                                Starting from Vadodara, we've grown to serve major cities across Gujarat.
                                Our commitment to quality, local support, and customer satisfaction has
                                helped us build lasting relationships with our customers.
                            </p>
                            <p>
                                Today, we serve {siteConfig.stats.customers} happy customers across
                                {siteConfig.stats.cities} cities with our fiber broadband and enterprise
                                connectivity solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, i) => (
                            <Card key={i} className="text-center">
                                <CardContent className="p-6">
                                    <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                                        <value.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                                    <p className="text-sm text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
                    <div className="max-w-2xl mx-auto">
                        <div className="space-y-8">
                            {milestones.map((milestone, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                            {milestone.year}
                                        </div>
                                        {i < milestones.length - 1 && (
                                            <div className="w-0.5 h-full bg-border mt-2" />
                                        )}
                                    </div>
                                    <div className="pb-8">
                                        <p className="text-lg">{milestone.event}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Licenses */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Licenses & Compliance</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <Card>
                                <CardContent className="p-6">
                                    <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">DOT ISP License</h3>
                                    <p className="text-sm text-muted-foreground">
                                        License No: {siteConfig.company.ispLicense}
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">GSTIN Registered</h3>
                                    <p className="text-sm text-muted-foreground">
                                        GSTIN: {siteConfig.company.gstin}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <p className="text-sm text-muted-foreground mt-6">
                            CIN: {siteConfig.company.cin}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
