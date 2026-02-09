import Link from "next/link";
import { MapPin, Check, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getLiveCities, getComingSoonCities } from "@/data/coverage";

export function CoverageSection() {
    const liveCities = getLiveCities();
    const comingSoonCities = getComingSoonCities().slice(0, 4);

    return (
        <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Gujarat Map Representation */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-primary/5 to-cyan-500/5 rounded-3xl p-8 lg:p-12 border">
                            {/* Map placeholder - Gujarat outline SVG representation */}
                            <div className="relative w-full aspect-square max-w-md mx-auto">
                                <svg
                                    viewBox="0 0 400 400"
                                    className="w-full h-full"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Simplified Gujarat shape */}
                                    <path
                                        d="M200 50 L320 80 L350 150 L340 220 L280 280 L220 350 L150 340 L80 280 L50 200 L60 120 L120 80 Z"
                                        className="fill-primary/10 stroke-primary/30"
                                        strokeWidth="2"
                                    />

                                    {/* City dots */}
                                    {[
                                        { x: 150, y: 120, name: "Ahmedabad" },
                                        { x: 180, y: 180, name: "Vadodara" },
                                        { x: 250, y: 250, name: "Surat" },
                                        { x: 100, y: 200, name: "Rajkot" },
                                        { x: 165, y: 100, name: "Gandhinagar" },
                                        { x: 110, y: 260, name: "Bhavnagar" },
                                    ].map((city, i) => (
                                        <g key={i}>
                                            <circle
                                                cx={city.x}
                                                cy={city.y}
                                                r="8"
                                                className="fill-primary animate-pulse"
                                                style={{ animationDelay: `${i * 0.5}s` }}
                                            />
                                            <circle
                                                cx={city.x}
                                                cy={city.y}
                                                r="4"
                                                className="fill-cyan-400"
                                            />
                                        </g>
                                    ))}
                                </svg>

                                {/* Floating Labels */}
                                <div className="absolute top-1/4 left-1/4 bg-background rounded-lg shadow-lg p-2 text-sm font-medium border">
                                    Ahmedabad ✓
                                </div>
                                <div className="absolute top-1/2 right-1/4 bg-background rounded-lg shadow-lg p-2 text-sm font-medium border">
                                    Surat ✓
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Coverage Info */}
                    <div className="space-y-8">
                        <div>
                            <Badge variant="outline" className="mb-4">
                                <MapPin className="h-3 w-3 mr-1" />
                                Coverage Areas
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                Serving All Major Gujarat Cities
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Our fiber network spans across Gujarat, connecting homes and
                                businesses in major cities. Check if we've reached your area!
                            </p>
                        </div>

                        {/* Live Cities */}
                        <div>
                            <h3 className="font-semibold mb-3 flex items-center gap-2">
                                <Check className="h-5 w-5 text-green-500" />
                                Available Now
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {liveCities.map((city) => (
                                    <Badge key={city.slug} variant="secondary" className="text-sm">
                                        {city.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Coming Soon */}
                        <div>
                            <h3 className="font-semibold mb-3 flex items-center gap-2">
                                <Clock className="h-5 w-5 text-amber-500" />
                                Expanding Soon
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {comingSoonCities.map((city) => (
                                    <Badge key={city.slug} variant="outline" className="text-sm text-muted-foreground">
                                        {city.name}
                                    </Badge>
                                ))}
                                <Badge variant="outline" className="text-sm text-muted-foreground">
                                    + more
                                </Badge>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" asChild>
                                <Link href="/coverage">
                                    Full Coverage Map
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/coverage#request">
                                    Request In Your Area
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
