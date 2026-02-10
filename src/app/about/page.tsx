import { Metadata } from "next";
import { Shield, Clock, Award, Users, Zap, Globe, TrendingUp, CheckCircle2, Banknote, HeartHandshake, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "About Us - 15+ Years of Excellence",
    description: "Built on over 15 years of industry leadership. BitConnect Technology brings enterprise-grade fiber broadband to Gujarat.",
    alternates: {
        canonical: `${siteConfig.urls.base}/about`,
    },
};

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen selection:bg-primary/20">
            {/* Hero Section with Animated Background Effect */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />

                <div className="container mx-auto px-4 text-center">
                    <Badge variant="outline" className="mb-6 px-4 py-1 text-sm border-primary/30 text-primary bg-primary/5 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                        New Company, Experienced Hands
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                        Built on Experience.<br />
                        Driven by Innovation.
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        While BitConnect is a new name in Gujarat's ISP landscape, our leadership brings over <span className="text-foreground font-semibold">15 years</span> of deep industry expertise to every connection we make.
                    </p>
                </div>
            </section>

            {/* Directors' Experience Section (The "Why Us" Pivot) */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative animate-in slide-in-from-left duration-1000 delay-300">
                            {/* Abstract Visual Representation of 15 Years */}
                            <div className="relative aspect-square max-w-md mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-cyan-500 rounded-full opacity-20 blur-3xl animate-pulse" />
                                <div className="relative h-full w-full border border-border/50 bg-background/50 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-2xl">
                                    <div className="text-9xl font-bold text-primary mb-2">15+</div>
                                    <div className="text-2xl font-medium text-foreground">Years Combined Experience</div>
                                    <div className="mt-8 flex gap-4 justify-center">
                                        <Badge variant="secondary" className="px-3 py-1">Telecom</Badge>
                                        <Badge variant="secondary" className="px-3 py-1">Infrastructure</Badge>
                                        <Badge variant="secondary" className="px-3 py-1">Enterprise</Badge>
                                    </div>
                                </div>
                                {/* Floating Badges */}
                                <div className="absolute -top-6 -right-6 bg-card border shadow-lg p-4 rounded-xl animate-bounce duration-[3000ms]">
                                    <TrendingUp className="w-6 h-6 text-green-500 mb-1" />
                                    <div className="text-xs font-bold">Proven Track Record</div>
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-card border shadow-lg p-4 rounded-xl animate-bounce duration-[4000ms]">
                                    <Users className="w-6 h-6 text-blue-500 mb-1" />
                                    <div className="text-xs font-bold">Industry Leaders</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 animate-in slide-in-from-right duration-1000 delay-300">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">A Fresh Start with a Solid Foundation</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    In an industry often plagued by legacy issues and outdated infrastructure, BitConnect represents the perfect fusion: the agility of a startup backed by the wisdom of veterans.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <Card className="bg-primary/5 border-primary/20">
                                    <CardContent className="p-6">
                                        <Zap className="w-8 h-8 text-primary mb-4" />
                                        <h3 className="font-bold text-lg mb-2">Modern Infrastructure</h3>
                                        <p className="text-sm text-muted-foreground">Built from the ground up using the latest fiber technology, avoiding the "patchwork" networks of older providers.</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-primary/5 border-primary/20">
                                    <CardContent className="p-6">
                                        <Globe className="w-8 h-8 text-primary mb-4" />
                                        <h3 className="font-bold text-lg mb-2">Deep Local Insight</h3>
                                        <p className="text-sm text-muted-foreground">Our directors understand Gujarat's unique terrain and connectivity needs better than national giants.</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <p className="text-muted-foreground italic border-l-4 border-primary pl-4">
                                "We didn't just build another ISP. We built the ISP we wished we had 15 years ago."
                                <br />
                                <span className="text-sm font-semibold not-italic text-foreground mt-2 block">— Director's Vision</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Animated Core Values Infographic */}
            <section className="py-24 bg-muted/20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">The BitConnect Standard</h2>
                        <p className="text-muted-foreground">New technology, old-school values. Here is what sets us apart.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Clock,
                                title: "Zero-Wait Support",
                                desc: "No automated loops. Real people, real solutions.",
                                color: "text-blue-500",
                                delay: "delay-0"
                            },
                            {
                                icon: Shield,
                                title: "Enterprise Grade Security",
                                desc: "DDoS protection and secure routing for every home.",
                                color: "text-purple-500",
                                delay: "delay-150"
                            },
                            {
                                icon: Zap,
                                title: "Gigabit Speeds",
                                desc: "True fiber-to-the-home with symmetrical upload/download.",
                                color: "text-amber-500",
                                delay: "delay-300"
                            },
                            {
                                icon: Banknote,
                                title: "Transparent Pricing",
                                desc: "No hidden charges, no surprise upgrades. What you see is what you pay.",
                                color: "text-green-500",
                                delay: "delay-500"
                            },
                            {
                                icon: HeartHandshake,
                                title: "Community First",
                                desc: "We are built for locals, by locals. We invest back into our community.",
                                color: "text-rose-500",
                                delay: "delay-700"
                            },
                            {
                                icon: Rocket,
                                title: "Future Ready",
                                desc: "Infrastructure scaled for tomorrow's demands, ready for 8K streaming and VR.",
                                color: "text-indigo-500",
                                delay: "delay-1000"
                            }
                        ].map((item, i) => (
                            <div key={i} className={`group relative bg-card hover:bg-card/50 border transition-all duration-500 hover:-translate-y-2 rounded-2xl p-8 hover:shadow-xl animate-in fade-in slide-in-from-bottom-8 ${item.delay}`}>
                                <div className={`w-14 h-14 rounded-xl bg-background border shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${item.color}`}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/5 rounded-2xl transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliance & Trust (Compact) */}
            <section className="py-20 border-t">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <Award className="w-8 h-8" />
                            <div className="text-left">
                                <div className="font-bold">DOT Licensed</div>
                                <div className="text-xs">ISP License: {siteConfig.company.ispLicense}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-8 h-8" />
                            <div className="text-left">
                                <div className="font-bold">GST Registered</div>
                                <div className="text-xs">{siteConfig.company.gstin}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
