import Link from "next/link";
import { ArrowRight, Building2, Check, Gauge, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
    { icon: Gauge, text: "Dedicated 1:1 bandwidth" },
    { icon: ShieldCheck, text: "99.9% uptime SLA" },
    { icon: Clock, text: "24×7 NOC monitoring" },
    { icon: Building2, text: "Static IP blocks included" },
];

export function BusinessSection() {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400 border border-cyan-500/20">
                            <Building2 className="h-4 w-4" />
                            Enterprise Solutions
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                            ILL & Leased Lines for{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                                Business
                            </span>
                        </h2>

                        <p className="text-lg text-slate-300">
                            Dedicated bandwidth with symmetric speeds for enterprises.
                            Whether you need 10 Mbps or 1 Gbps, we deliver carrier-grade
                            connectivity with enterprise SLAs.
                        </p>

                        {/* Features */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-cyan-500/10">
                                        <feature.icon className="h-5 w-5 text-cyan-400" />
                                    </div>
                                    <span>{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-900 font-semibold" asChild>
                                <Link href="/business/ill">
                                    Get Enterprise Quote
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                                <Link href="/services">
                                    Explore Services
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Comparison Table Preview */}
                    <div className="relative">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
                            <h3 className="text-xl font-semibold mb-6">Broadband vs ILL</h3>

                            <div className="space-y-4">
                                {[
                                    { feature: "Bandwidth", broadband: "Shared (1:20)", ill: "Dedicated (1:1)" },
                                    { feature: "Speed Type", broadband: "Asymmetric", ill: "Symmetric" },
                                    { feature: "SLA", broadband: "Best-effort", ill: "99.9% guaranteed" },
                                    { feature: "Static IP", broadband: "Optional (₹250/mo)", ill: "Included" },
                                    { feature: "Support", broadband: "Standard", ill: "Priority NOC" },
                                ].map((row, index) => (
                                    <div key={index} className="grid grid-cols-3 gap-4 py-3 border-b border-white/10 last:border-0">
                                        <div className="text-slate-400 text-sm">{row.feature}</div>
                                        <div className="text-sm">{row.broadband}</div>
                                        <div className="text-cyan-400 text-sm font-medium">{row.ill}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Labels */}
                            <div className="grid grid-cols-3 gap-4 mb-4 text-xs text-slate-500 uppercase tracking-wider">
                                <div></div>
                                <div>Broadband</div>
                                <div className="text-cyan-500">ILL</div>
                            </div>
                        </div>

                        {/* Decorative gradient */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
