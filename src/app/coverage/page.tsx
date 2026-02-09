import { Metadata } from "next";
import { MapPin, Check, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getLiveCities, getComingSoonCities } from "@/data/coverage";
import { siteConfig } from "@/config/site";
import { RequestCoverageForm } from "@/components/forms/RequestCoverageForm";

export const metadata: Metadata = {
    title: "Coverage Areas - Service Availability",
    description: "Check BitConnect fiber broadband availability in your Gujarat city. We serve Ahmedabad, Vadodara, Surat, Rajkot, Gandhinagar, and more.",
    alternates: {
        canonical: `${siteConfig.urls.base}/coverage`,
    },
};

export default function CoveragePage() {
    const liveCities = getLiveCities();
    const comingSoonCities = getComingSoonCities();

    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary/5 to-cyan-500/5 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge variant="outline" className="mb-4">
                            <MapPin className="h-3 w-3 mr-1" />
                            Coverage Areas
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Where We Serve
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Our fiber network spans across major Gujarat cities. Check if we've
                            reached your area or request coverage for your locality.
                        </p>
                    </div>
                </div>
            </section>

            {/* Live Cities */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="p-2 rounded-full bg-green-500/10">
                            <Check className="h-5 w-5 text-green-500" />
                        </div>
                        <h2 className="text-2xl font-bold">Available Now</h2>
                        <Badge variant="secondary">{liveCities.length} cities</Badge>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {liveCities.map((city) => (
                            <Card key={city.slug} className="hover:border-green-500/50 transition-colors">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-green-500" />
                                        {city.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        District: {city.district}
                                    </p>
                                    <Badge variant="outline" className="mt-2 text-green-600 border-green-500/30">
                                        Service Available
                                    </Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coming Soon */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="p-2 rounded-full bg-amber-500/10">
                            <Clock className="h-5 w-5 text-amber-500" />
                        </div>
                        <h2 className="text-2xl font-bold">Expanding Soon</h2>
                        <Badge variant="secondary">{comingSoonCities.length} cities</Badge>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {comingSoonCities.map((city) => (
                            <Card key={city.slug} className="opacity-80">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-amber-500" />
                                        {city.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        District: {city.district}
                                    </p>
                                    <Badge variant="outline" className="mt-2 text-amber-600 border-amber-500/30">
                                        Coming Soon
                                    </Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Request Coverage */}
            <section id="request" className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4">Don't See Your Area?</h2>
                            <p className="text-muted-foreground">
                                Request coverage for your locality and we'll prioritize expanding
                                to areas with high demand.
                            </p>
                        </div>

                        <Card>
                            <CardContent className="p-6">
                                <RequestCoverageForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}
