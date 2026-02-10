"use client";

import { useState } from "react";
import { MapPin, Check, Clock, Search, Navigation, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getLiveCities, getComingSoonCities } from "@/data/coverage";
import { RequestCoverageForm } from "@/components/forms/RequestCoverageForm";

export function CoveragePageContent() {
    const [searchQuery, setSearchQuery] = useState("");

    const liveCities = getLiveCities();
    const comingSoonCities = getComingSoonCities();

    const filteredLive = liveCities.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.district || "").toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredComingSoon = comingSoonCities.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.district || "").toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background selection:bg-primary/20">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

                {/* Abstract Map Background Decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full opacity-[0.03] pointer-events-none -z-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10 L90 30 L50 90 Z" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="30" cy="30" r="2" fill="currentColor" />
                        <circle cx="70" cy="70" r="2" fill="currentColor" />
                        <circle cx="50" cy="50" r="2" fill="currentColor" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 text-center">
                    <Badge variant="outline" className="mb-6 px-4 py-1 text-sm border-primary/30 text-primary bg-primary/5 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Navigation className="h-3 w-3 mr-2" />
                        Gujarat-Wide Network
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                        Connecting <span className="text-primary">Gujarat</span>,<br />
                        One City at a Time.
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        From Ahmedabad to Vapi, our fiber network is expanding rapidly.
                        Check availability in your area instantly.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-md mx-auto relative animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <Search className="h-5 w-5" />
                        </div>
                        <Input
                            placeholder="Search by city or district..."
                            className="pl-10 h-14 bg-background/50 backdrop-blur-xl border-primary/20 focus-visible:ring-primary text-lg shadow-lg"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Live Cities Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-3 mb-8 animate-in fade-in slide-in-from-left duration-700">
                        <div className="p-2 rounded-xl bg-green-500/10 text-green-500">
                            <Check className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Live Network Areas</h2>
                            <p className="text-sm text-muted-foreground">Services are fully operational in these locations.</p>
                        </div>
                        <Badge variant="outline" className="ml-auto border-green-500/30 text-green-500 bg-green-500/5">
                            {liveCities.length} Cities
                        </Badge>
                    </div>

                    {filteredLive.length === 0 ? (
                        <div className="text-center py-12 border rounded-2xl border-dashed">
                            <MapPin className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                            <p className="text-muted-foreground">No cities found matching "{searchQuery}"</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {filteredLive.map((city, index) => (
                                <Card
                                    key={city.slug}
                                    className="group hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300 hover:-translate-y-1 animate-in fade-in zoom-in-95"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    </div>
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <Building2 className="h-4 w-4 text-green-500" />
                                            {city.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            District: {city.district}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-green-600 font-medium">
                                            <Check className="h-3 w-3" />
                                            Service Active
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Coming Soon Grid */}
            <section className="py-16 bg-muted/20 border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                            <Clock className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Expanding Soon</h2>
                            <p className="text-sm text-muted-foreground">Network deployment is in progress.</p>
                        </div>
                        <Badge variant="outline" className="ml-auto border-amber-500/30 text-amber-500 bg-amber-500/5">
                            {comingSoonCities.length} Cities
                        </Badge>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredComingSoon.map((city, index) => (
                            <Card
                                key={city.slug}
                                className="opacity-80 hover:opacity-100 hover:border-amber-500/50 transition-all duration-300"
                            >
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-amber-500" />
                                        {city.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        District: {city.district}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-amber-600 font-medium">
                                        <Clock className="h-3 w-3" />
                                        Deployment Started
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Request Coverage */}
            <section id="request" className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10" />
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        <div className="space-y-6">
                            <Badge className="bg-primary/10 text-primary border-0 hover:bg-primary/20 transition-colors">
                                Expansion Drive 2024
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Don't see your city? <br />
                                <span className="text-muted-foreground">Let's fix that.</span>
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                We prioritize network expansion based on community demand.
                                Submit a request for your society or commercial complex, and our network planning team will evaluate feasibility.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <Check className="h-5 w-5 text-green-500" />
                                    <span>Bulk booking benefits for societies</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-5 w-5 text-green-500" />
                                    <span>Priority installation for pre-registered areas</span>
                                </li>
                            </ul>
                        </div>

                        <Card className="border-primary/20 shadow-xl shadow-primary/5">
                            <CardHeader>
                                <CardTitle>Request Coverage</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <RequestCoverageForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
