import { Metadata } from "next";
import { Building2, Check, Gauge, ShieldCheck, Clock, Globe, HeadphonesIcon, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EnterpriseQuoteForm } from "@/components/forms/EnterpriseQuoteForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "ILL & Leased Lines - Enterprise Connectivity",
    description: "Dedicated bandwidth with symmetric speeds for enterprises. 1:1 contention, 99.9% SLA, static IP blocks, and 24×7 NOC support.",
    alternates: {
        canonical: `${siteConfig.urls.base}/business/ill`,
    },
};

const features = [
    {
        icon: Gauge,
        title: "Dedicated 1:1 Bandwidth",
        description: "No contention, no sharing. Your bandwidth is exclusively yours, guaranteed 24×7.",
    },
    {
        icon: ShieldCheck,
        title: "99.9% Uptime SLA",
        description: "Enterprise-grade SLA with service credits for any downtime beyond guarantee.",
    },
    {
        icon: Clock,
        title: "24×7 NOC Monitoring",
        description: "Proactive network monitoring with immediate response to any issues.",
    },
    {
        icon: Globe,
        title: "Static IP Blocks",
        description: "Get dedicated public IPs (/29, /28 blocks) for hosting and remote access.",
    },
    {
        icon: HeadphonesIcon,
        title: "Priority Support",
        description: "Dedicated account manager and direct escalation path for critical issues.",
    },
];

const comparison = [
    { feature: "Contention Ratio", broadband: "Shared (1:20)", ill: "Dedicated (1:1)" },
    { feature: "Speed Type", broadband: "Asymmetric (varies)", ill: "Symmetric (guaranteed)" },
    { feature: "SLA Uptime", broadband: "Best-effort", ill: "99.9% guaranteed" },
    { feature: "Latency", broadband: "Variable", ill: "<5ms (local)" },
    { feature: "Static IP", broadband: "Optional (₹250/mo)", ill: "Included (blocks available)" },
    { feature: "Support Level", broadband: "Standard (9-7)", ill: "Priority NOC (24×7)" },
    { feature: "Contract Term", broadband: "Monthly", ill: "12/24/36 months" },
    { feature: "Redundancy", broadband: "Single link", ill: "Dual-path available" },
];

const bandwidthOptions = [
    "10 Mbps", "25 Mbps", "50 Mbps", "100 Mbps", "200 Mbps", "500 Mbps", "1 Gbps", "Custom"
];

const faqs = [
    {
        q: "What is the difference between ILL and regular broadband?",
        a: "ILL (Internet Leased Line) provides dedicated, unshared bandwidth with symmetric speeds (same upload and download), guaranteed SLA, and priority support. Regular broadband is shared and best-effort.",
    },
    {
        q: "How is the last-mile connectivity delivered?",
        a: "We primarily use fiber optic cables for last-mile connectivity. In cases where fiber is not feasible, we offer radio (wireless) links as an alternative with similar SLA guarantees.",
    },
    {
        q: "What is the typical installation timeline?",
        a: "Standard installation takes 7-15 working days from contract signing, subject to feasibility survey completion and required permissions.",
    },
    {
        q: "Do you offer redundancy options?",
        a: "Yes, we offer diverse path redundancy with automatic failover for mission-critical applications. This can include dual fiber paths or fiber + radio combination.",
    },
    {
        q: "What static IP options are available?",
        a: "We provide single IPs or blocks (/29 = 8 IPs, /28 = 16 IPs, larger blocks on request). All IPs come with PTR record configuration for email servers.",
    },
    {
        q: "What documents are required for enterprise connections?",
        a: "Typically: Company PAN/GSTIN, Address proof of installation location, Board resolution/Authorization letter, and identity proof of authorized signatory.",
    },
];

export default function ILLPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge variant="outline" className="mb-4 border-cyan-500/30 text-cyan-400">
                            <Building2 className="h-3 w-3 mr-1" />
                            Enterprise Solutions
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            ILL & Leased Lines for{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                                Business
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8">
                            Dedicated, symmetric bandwidth with enterprise SLA. From 10 Mbps to 1 Gbps,
                            get carrier-grade connectivity for your business across Gujarat.
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm">
                            {["1:1 Dedicated", "99.9% SLA", "24×7 NOC", "Static IPs"].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-cyan-400" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Enterprise-Grade Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <Card key={i} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                                        <feature.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4">Broadband vs ILL</h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Understand the key differences between regular broadband and enterprise leased lines.
                    </p>

                    <div className="max-w-4xl mx-auto bg-background rounded-xl border overflow-hidden">
                        <div className="grid grid-cols-3 bg-primary/5 font-semibold">
                            <div className="p-4 border-b">Feature</div>
                            <div className="p-4 border-b border-l">Retail Broadband</div>
                            <div className="p-4 border-b border-l text-primary">ILL / Leased Line</div>
                        </div>
                        {comparison.map((row, i) => (
                            <div key={i} className="grid grid-cols-3 hover:bg-muted/50 transition-colors">
                                <div className="p-4 border-b font-medium">{row.feature}</div>
                                <div className="p-4 border-b border-l text-muted-foreground">{row.broadband}</div>
                                <div className="p-4 border-b border-l text-primary font-medium">{row.ill}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Form */}
            <section id="quote" className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Get Enterprise Quote</h2>
                            <p className="text-muted-foreground mb-8">
                                Fill in your requirements and our enterprise team will contact you with
                                a customized quote within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold mb-3">Available Bandwidth Options</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {bandwidthOptions.map((bw) => (
                                            <Badge key={bw} variant="outline">{bw}</Badge>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-3">Documents Required</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            Company GSTIN / PAN
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            Address proof of installation location
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            Board resolution / Authorization letter
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            ID proof of authorized signatory
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Card>
                                <CardContent className="p-6">
                                    <EnterpriseQuoteForm />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-lg border px-6">
                                    <AccordionTrigger className="hover:no-underline">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    );
}
