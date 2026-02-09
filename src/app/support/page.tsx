import { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, MessageCircle, Phone, Mail, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Support - Help & FAQs",
    description: "Get help with BitConnect broadband. FAQs, troubleshooting tips, contact support, and check network status.",
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
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary/5 to-cyan-500/5 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge variant="outline" className="mb-4">
                            <HelpCircle className="h-3 w-3 mr-1" />
                            Support Center
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            How Can We Help?
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Find answers to common questions, troubleshoot issues, or reach our
                            support team for personalized assistance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="py-12 border-b">
                <div className="container mx-auto px-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6 text-center">
                                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                                <h3 className="font-semibold mb-1">Call Support</h3>
                                <p className="text-sm text-muted-foreground mb-3">{siteConfig.workingHours}</p>
                                <Button variant="outline" size="sm" asChild>
                                    <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6 text-center">
                                <MessageCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                                <h3 className="font-semibold mb-1">WhatsApp</h3>
                                <p className="text-sm text-muted-foreground mb-3">Quick responses</p>
                                <Button variant="outline" size="sm" className="text-green-600" asChild>
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Chat Now</a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6 text-center">
                                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                                <h3 className="font-semibold mb-1">Email Support</h3>
                                <p className="text-sm text-muted-foreground mb-3">Detailed queries</p>
                                <Button variant="outline" size="sm" asChild>
                                    <a href={`mailto:${siteConfig.contact.supportEmail}`}>Email Us</a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6 text-center">
                                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                                <h3 className="font-semibold mb-1">NOC (24×7)</h3>
                                <p className="text-sm text-muted-foreground mb-3">Critical issues</p>
                                <Button variant="outline" size="sm" asChild>
                                    <a href={`tel:${siteConfig.contact.nocPhone}`}>Emergency Line</a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Network Status */}
            <section className="py-8 bg-green-50 dark:bg-green-950/20">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="font-medium">All Systems Operational</span>
                        <Badge variant="outline" className="text-green-600 border-green-500/30">
                            Network Status: Normal
                        </Badge>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

                    <div className="max-w-3xl mx-auto space-y-8">
                        {faqs.map((category, i) => (
                            <div key={i}>
                                <h3 className="text-lg font-semibold mb-4 text-primary">{category.category}</h3>
                                <Accordion type="single" collapsible className="space-y-2">
                                    {category.items.map((faq, j) => (
                                        <AccordionItem key={j} value={`${i}-${j}`} className="bg-background rounded-lg border px-6">
                                            <AccordionTrigger className="hover:no-underline text-left">
                                                {faq.q}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground">
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

            {/* SLA Info */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Our Support SLA</h2>
                        <p className="text-muted-foreground mb-8">
                            We're committed to resolving your issues quickly and efficiently.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-6">
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <p className="text-3xl font-bold text-primary">2 hrs</p>
                                    <p className="text-sm text-muted-foreground">First Response Time</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <p className="text-3xl font-bold text-primary">24 hrs</p>
                                    <p className="text-sm text-muted-foreground">Issue Resolution (Standard)</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <p className="text-3xl font-bold text-primary">4 hrs</p>
                                    <p className="text-sm text-muted-foreground">Critical Issue Response</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 bg-gradient-to-r from-primary to-cyan-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
                    <p className="mb-6 text-white/80">Our team is ready to assist you.</p>
                    <Button variant="secondary" size="lg" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </section>
        </>
    );
}
