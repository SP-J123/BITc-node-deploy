import { Network, Server, Shield, Cpu, Globe, Layers } from "lucide-react";

const badges = [
    {
        icon: Network,
        title: "Carrier-Grade Network",
        description: "Enterprise-level infrastructure",
    },
    {
        icon: Server,
        title: "Tier-1 Peering",
        description: "Direct upstream connections",
    },
    {
        icon: Layers,
        title: "OFC Backbone",
        description: "100% fiber optic network",
    },
    {
        icon: Shield,
        title: "DDoS Protected",
        description: "Enterprise security included",
    },
    {
        icon: Cpu,
        title: "Mikrotik Certified",
        description: "Professional-grade routing",
    },
    {
        icon: Globe,
        title: "IPv6 Ready",
        description: "Future-proof connectivity",
    },
];

export function TechBadges() {
    return (
        <section className="py-12 bg-muted/30 border-y">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                        Powered by Industry-Leading Technology
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-background transition-colors"
                        >
                            <div className="p-3 rounded-xl bg-primary/10 mb-3">
                                <badge.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
                            <p className="text-xs text-muted-foreground">{badge.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
