import { Shield, Clock, Users, Award } from "lucide-react";
import { siteConfig } from "@/config/site";

const indicators = [
    {
        icon: Shield,
        value: siteConfig.stats.uptime,
        label: "Uptime SLA",
        description: "Enterprise-grade reliability",
    },
    {
        icon: Clock,
        value: "24×7",
        label: "Local Support",
        description: "Gujarat-based NOC team",
    },
    {
        icon: Users,
        value: siteConfig.stats.customers,
        label: "Happy Customers",
        description: "Homes & businesses connected",
    },
    {
        icon: Award,
        value: `${siteConfig.stats.experience} Years`,
        label: "Experience",
        description: "Serving Gujarat since 2020",
    },
];

export function TrustIndicators() {
    return (
        <section className="py-12 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {indicators.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="p-3 rounded-xl bg-primary/10 mb-4">
                                <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-foreground mb-1">
                                {item.value}
                            </div>
                            <div className="font-semibold text-foreground mb-1">
                                {item.label}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
