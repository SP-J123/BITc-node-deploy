import { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, MessageCircle, Phone, Mail, Clock, CheckCircle2, Activity, Zap, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
    title: "Support Center - 24/7 Help & Resources",
    description: "Get help with your BitConnect connection. Troubleshoot issues, view FAQs, contact our NOC team, or reach customer care via WhatsApp.",
    alternates: {
        canonical: `${siteConfig.urls.base}/support`,
    },
};

const faqs = [
    {
        category: "Connection Issues",
        items: [
            {
                q: "My internet is not working. What should I do?",
                a: "First, check if the router power and fiber lights are on. Try restarting the router by unplugging it for 30 seconds. If the issue persists, contact our support team.",
            },
            {
                q: "Internet is slow. How can I improve speed?",
                a: "Check if other devices are using bandwidth. Try connecting via ethernet instead of Wi-Fi. Restart your router. Run a speed test at fast.com. Contact us if speeds are consistently below your plan.",
            },
            {
                q: "My Wi-Fi keeps disconnecting. What's wrong?",
                a: "This could be due to interference. Try changing Wi-Fi channel in router settings, placing the router in a central location, or upgrading to a mesh Wi-Fi system for larger homes.",
            },
        ],
    },
    {
        category: "Billing & Payments",
        items: [
            {
                q: "How can I pay my bill?",
                a: "You can pay via UPI, net banking, debit/credit card, or at our office. We also accept Paytm and bank transfers. Payment details are on your monthly invoice.",
            },
            {
                q: "When is my billing date?",
                a: "Billing date is typically the date of your connection activation. You'll receive an invoice via email and SMS before the due date.",
            },
            {
                q: "Is GST included in the advertised price?",
                a: "Our advertised prices are exclusive of 18% GST. The final bill amount will include applicable GST.",
            },
        ],
    },
    {
        category: "Account & Service",
        items: [
            {
                q: "How do I upgrade my plan?",
                a: "Contact our support team via phone or WhatsApp. Plan upgrades take effect from your next billing cycle. No installation charges for upgrades.",
            },
            {
                q: "Can I relocate my connection?",
                a: "Yes, relocation is possible within our service areas. Contact support at least 3 days before your planned move. Relocation charges may apply.",
            },
            {
                q: "How do I cancel my subscription?",
                a: "Contact support with your request. Please note the notice period and any applicable cancellation fees as per your agreement. Router deposit will be refunded after equipment return.",
            },
        ],
    },
];

export default function SupportPage() {
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi, I need help with my BitConnect connection.`;

    return (
        <div className="min-h-screen bg-background selection:bg-primary/20">
            {/* Hero */}
            <section className="relative py-20 lg:py-32 overflow-hidden border-b">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

                <div className="container mx-auto px-4 text-center">
                    <Badge variant="outline" className="mb-6 px-4 py-1 text-sm border-primary/30 text-primary bg-primary/5 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <HelpCircle className="h-3 w-3 mr-2" />
                        Support Center
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                        How can we help you today?
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        Search our knowledge base, check network status, or get in touch with our expert support team.
                    </p>

                    <div className="max-w-md mx-auto relative animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <Search className="h-5 w-5" />
                        </div>
                        <Input
                            placeholder="Search for answers (e.g., 'slow speed', 'bill payment')"
                            className="pl-10 h-14 bg-background/50 backdrop-blur-xl border-primary/20 focus-visible:ring-primary text-lg shadow-lg rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Network Status & Quick Actions */}
            <section className="py-12 -mt-8 relative z-10">
                <div className="container mx-auto px-4">
                    {/* Status Banner */}
                    <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 delay-500">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                                <div className="relative h-3 w-3 bg-green-500 rounded-full" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-green-700 dark:text-green-400">All Systems Operational</h3>
                                <p className="text-xs text-green-600/80 dark:text-green-400/80">Network Status: Normal • Last updated: Just now</p>
                            </div>
                        </div>
                        <Button variant="outline" size="sm" className="border-green-500/30 text-green-600 hover:bg-green-500/10 hover:text-green-700">
                            View Status Page
                        </Button>
                    </div>

                    {/* Support Channels */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg mb-1">Call Support</h3>
                                <p className="text-sm text-muted-foreground mb-4">{siteConfig.workingHours}</p>
                                <Button variant="outline" className="w-full" asChild>
                                    <a href={`tel:${siteConfig.contact.phone}`}>Call {siteConfig.contact.phone}</a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-green-500/20">
                            <CardContent className="p-6">
                                <div className="p-3 rounded-xl bg-green-500/10 w-fit mb-4">
                                    <MessageCircle className="h-6 w-6 text-green-600" />
                                </div>
                                <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                                <p className="text-sm text-muted-foreground mb-4">Fastest response time</p>
                                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Chat Now</a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="p-3 rounded-xl bg-orange-500/10 w-fit mb-4">
                                    <Mail className="h-6 w-6 text-orange-600" />
                                </div>
                                <h3 className="font-bold text-lg mb-1">Email Support</h3>
                                <p className="text-sm text-muted-foreground mb-4">For detailed queries</p>
                                <Button variant="outline" className="w-full" asChild>
                                    <a href={`mailto:${siteConfig.contact.supportEmail}`}>Send Email</a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-red-500/20 bg-red-500/5">
                            <CardContent className="p-6">
                                <div className="p-3 rounded-xl bg-red-500/10 w-fit mb-4">
                                    <Activity className="h-6 w-6 text-red-600" />
                                </div>
                                <h3 className="font-bold text-lg mb-1">NOC Emergency</h3>
                                <p className="text-sm text-muted-foreground mb-4">24x7 Critical Issues</p>
                                <Button variant="destructive" className="w-full bg-red-600 hover:bg-red-700" asChild>
                                    <a href={`tel:${siteConfig.contact.nocPhone}`}>Call NOC</a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {faqs.map((category, i) => (
                            <div key={i} className="space-y-4">
                                <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                                    <Zap className="h-5 w-5" />
                                    {category.category}
                                </h3>
                                <Accordion type="single" collapsible className="space-y-3">
                                    {category.items.map((faq, j) => (
                                        <AccordionItem key={j} value={`${i}-${j}`} className="bg-card rounded-xl border px-4 shadow-sm">
                                            <AccordionTrigger className="hover:no-underline text-left font-medium py-4">
                                                {faq.q}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                                                {faq.a}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SLA Commitment */}
            <section className="py-20 bg-muted/30 border-t">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Our Service Commitment</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
                        We don't just provide internet; we provide peace of mind. Our support SLAs are designed to keep you connected.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Card className="bg-background border-none shadow-xl">
                            <CardHeader>
                                <Clock className="h-10 w-10 text-primary mx-auto mb-2" />
                                <CardTitle className="text-4xl font-bold text-foreground">2 hrs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-medium">Response Time</p>
                                <p className="text-sm text-muted-foreground mt-1">For all ticket queries</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-background border-none shadow-xl">
                            <CardHeader>
                                <CheckCircle2 className="h-10 w-10 text-green-500 mx-auto mb-2" />
                                <CardTitle className="text-4xl font-bold text-foreground">24 hrs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-medium">Resolution Time</p>
                                <p className="text-sm text-muted-foreground mt-1">For standard technical issues</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-background border-none shadow-xl">
                            <CardHeader>
                                <Activity className="h-10 w-10 text-red-500 mx-auto mb-2" />
                                <CardTitle className="text-4xl font-bold text-foreground">4 hrs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-medium">Critical Response</p>
                                <p className="text-sm text-muted-foreground mt-1">For major outages affecting multiple users</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
