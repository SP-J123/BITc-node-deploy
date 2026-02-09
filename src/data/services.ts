import {
    Wifi,
    Building2,
    Router,
    Network,
    Cable,
    Cctv,
    Globe,
    Server,
    type LucideIcon
} from "lucide-react";

export interface Service {
    id: string;
    name: string;
    shortName: string;
    description: string;
    features: string[];
    icon: LucideIcon;
    href: string;
    highlight?: boolean;
}

export const services: Service[] = [
    {
        id: "ftth",
        name: "Retail Broadband (FTTH)",
        shortName: "Fiber Broadband",
        description: "High-speed fiber-to-the-home internet for residential customers. Experience blazing fast speeds up to 1 Gbps with truly unlimited data.",
        features: [
            "Speeds from 50 Mbps to 1 Gbps",
            "Fiber-to-the-home technology",
            "Low latency for gaming & video calls",
            "Free Wi-Fi router included",
            "24×7 customer support",
        ],
        icon: Wifi,
        href: "/plans",
        highlight: true,
    },
    {
        id: "ill",
        name: "ILL / Leased Lines",
        shortName: "Leased Lines",
        description: "Dedicated, symmetric bandwidth for enterprises with guaranteed SLA. Perfect for businesses requiring reliable, high-performance connectivity.",
        features: [
            "1:1 dedicated bandwidth",
            "Symmetric upload/download speeds",
            "99.9% uptime SLA",
            "Static IP blocks included",
            "24×7 NOC monitoring",
        ],
        icon: Building2,
        href: "/business/ill",
        highlight: true,
    },
    {
        id: "wifi",
        name: "Wi-Fi Solutions",
        shortName: "Wi-Fi Setup",
        description: "Complete wireless networking solutions including mesh systems for homes and enterprise-grade hotspots for commercial spaces.",
        features: [
            "Mesh Wi-Fi for complete coverage",
            "Guest network setup",
            "Hotspot management systems",
            "Access point installation",
            "Network security configuration",
        ],
        icon: Router,
        href: "/services#wifi",
    },
    {
        id: "managed-router",
        name: "Managed Routers / CPE",
        shortName: "Managed CPE",
        description: "Professional-grade customer premises equipment with remote management, monitoring, and proactive maintenance.",
        features: [
            "Enterprise-grade routers",
            "Remote configuration & updates",
            "24×7 monitoring",
            "Automatic failover support",
            "Performance optimization",
        ],
        icon: Network,
        href: "/services#managed-router",
    },
    {
        id: "lan",
        name: "LAN Setup & Structured Cabling",
        shortName: "LAN & Cabling",
        description: "Professional network infrastructure design and installation for offices, buildings, and campuses.",
        features: [
            "Cat6/Cat6A cabling",
            "Rack & patch panel setup",
            "Network switches installation",
            "Cable management solutions",
            "Testing & certification",
        ],
        icon: Cable,
        href: "/services#lan",
    },
    {
        id: "cctv",
        name: "CCTV Networking",
        shortName: "CCTV Network",
        description: "Reliable network infrastructure for IP-based surveillance systems with remote viewing capabilities.",
        features: [
            "IP camera network setup",
            "NVR/DVR connectivity",
            "Remote viewing configuration",
            "Secure network isolation",
            "Bandwidth optimization",
        ],
        icon: Cctv,
        href: "/services#cctv",
    },
    {
        id: "static-ip",
        name: "Static IP Addresses",
        shortName: "Static IPs",
        description: "Public static IP addresses for hosting services, remote access, and enterprise applications.",
        features: [
            "Single static IP from ₹250/month",
            "IP blocks (/29, /28 available)",
            "PTR records configuration",
            "Works with any plan",
            "Quick activation",
        ],
        icon: Globe,
        href: "/services#static-ip",
    },
    {
        id: "vps",
        name: "VPS Hosting",
        shortName: "VPS Hosting",
        description: "Virtual private servers hosted in our Gujarat data centers with low latency and local support.",
        features: [
            "Gujarat-based hosting",
            "Low latency connectivity",
            "SSD storage",
            "Full root access",
            "Local technical support",
        ],
        icon: Server,
        href: "/services#vps",
    },
];

export const getServiceById = (id: string): Service | undefined =>
    services.find(service => service.id === id);

export const getHighlightedServices = (): Service[] =>
    services.filter(service => service.highlight);
