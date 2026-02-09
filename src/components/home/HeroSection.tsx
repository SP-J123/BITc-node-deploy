"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, Zap, Signal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/config/site";

export function HeroSection() {
    const [pincode, setPincode] = useState("");

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />

            {/* Gradient Orbs */}
            <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl animate-float" />
            <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

            <div className="container relative mx-auto px-4 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400 border border-cyan-500/20">
                            <Signal className="h-4 w-4" />
                            Now available in {siteConfig.stats.cities} Gujarat cities
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            {siteConfig.company.tagline.split(" ").map((word, i) => (
                                <span key={i}>
                                    {word === "Speed" || word === "Reliability" ? (
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">{word} </span>
                                    ) : (
                                        `${word} `
                                    )}
                                </span>
                            ))}
                        </h1>

                        <p className="text-lg text-slate-300 max-w-xl">
                            Bridging the digital gap with reliable, affordable, and high-speed internet.
                            Premium Fiber Broadband and Enterprise Leased Lines for Gujarat.
                        </p>

                        {/* Check Availability Form */}
                        <div id="availability" className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                            <h3 className="text-lg font-semibold mb-4">Check Service Availability</h3>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="flex-1">
                                    <Input
                                        type="text"
                                        placeholder="Enter your pincode"
                                        value={pincode}
                                        onChange={(e) => setPincode(e.target.value)}
                                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 h-12"
                                        maxLength={6}
                                    />
                                </div>
                                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-900 font-semibold h-12 px-8">
                                    <Search className="mr-2 h-4 w-4" />
                                    Check Now
                                </Button>
                            </div>
                        </div>

                        {/* Quick CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" asChild className="bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-900 font-semibold">
                                <Link href="/plans">
                                    View Plans <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="border-white/20 text-white hover:bg-white/10">
                                <Link href="/business/ill">
                                    Enterprise Solutions
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Hero Visual */}
                    <div className="hidden lg:block relative">
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Speed Indicator */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    {/* Outer ring */}
                                    <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20 animate-pulse" style={{ width: "300px", height: "300px" }} />
                                    <div className="absolute inset-4 rounded-full border-2 border-cyan-400/30" style={{ width: "270px", height: "270px" }} />

                                    {/* Speed display */}
                                    <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent flex flex-col items-center justify-center backdrop-blur-sm border border-cyan-500/20">
                                        <span className="text-7xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">1</span>
                                        <span className="text-2xl font-semibold text-cyan-400">Gbps</span>
                                        <span className="text-sm text-slate-400 mt-2">Max Speed</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -top-4 right-0 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-green-500/20">
                                        <Zap className="h-5 w-5 text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-300">Latency</p>
                                        <p className="text-lg font-semibold text-green-400">&lt;5ms</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-8 -left-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-cyan-500/20">
                                        <Signal className="h-5 w-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-300">Uptime</p>
                                        <p className="text-lg font-semibold text-cyan-400">{siteConfig.stats.uptime}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
