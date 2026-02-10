import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us - Get in Touch",
    description: "Contact BitConnect for sales, support, or general inquiries. Visit our office in Vadodara or reach us via phone, email, or WhatsApp.",
    alternates: {
        canonical: `${siteConfig.urls.base}/contact`,
    },
};

export default function ContactPage() {
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi, I have a question about BitConnect services.`;

    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${siteConfig.address.line1}, ${siteConfig.address.city}, ${siteConfig.address.state}`
    )}`;

    return (
        <div className="min-h-screen bg-background selection:bg-primary/20">
            {/* Hero */}
            <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/40 via-slate-900 to-slate-900" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Badge variant="outline" className="mb-6 px-4 py-1 border-cyan-500/50 text-cyan-400 bg-cyan-950/30 backdrop-blur animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Send className="h-3 w-3 mr-2" />
                        Get in Touch
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                        We'd love to hear from you.
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        Have a question about our plans, need technical support, or want to discuss enterprise solutions? Our team is ready to help.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-16 relative z-20 pb-20">
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Contact Information */}
                    <div className="lg:col-span-5 space-y-6">
                        <Card className="border-none shadow-xl bg-card/95 backdrop-blur">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                                <div className="space-y-8">
                                    {/* Office Address */}
                                    <div className="flex gap-4 group">
                                        <div className="p-3 rounded-xl bg-primary/10 h-fit text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-2">Head Office</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {siteConfig.address.line1}<br />
                                                {siteConfig.address.line2}<br />
                                                {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}
                                            </p>
                                            <Button variant="link" className="p-0 h-auto mt-2 text-primary hover:no-underline hover:text-primary/80" asChild>
                                                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                                                    View on Google Maps →
                                                </a>
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex gap-4 group">
                                        <div className="p-3 rounded-xl bg-primary/10 h-fit text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-2">Phone</h3>
                                            <div className="space-y-1">
                                                <p className="text-muted-foreground">
                                                    Sales: <a href={`tel:${siteConfig.contact.phone}`} className="text-foreground hover:text-primary transition-colors font-medium">{siteConfig.contact.phone}</a>
                                                </p>
                                                <p className="text-muted-foreground">
                                                    NOC (24×7): <a href={`tel:${siteConfig.contact.nocPhone}`} className="text-red-500 hover:text-red-600 transition-colors font-medium">{siteConfig.contact.nocPhone}</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex gap-4 group">
                                        <div className="p-3 rounded-xl bg-primary/10 h-fit text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-2">Email</h3>
                                            <div className="space-y-1">
                                                <p className="text-muted-foreground">
                                                    General: <a href={`mailto:${siteConfig.contact.email}`} className="text-foreground hover:text-primary transition-colors">{siteConfig.contact.email}</a>
                                                </p>
                                                <p className="text-muted-foreground">
                                                    Support: <a href={`mailto:${siteConfig.contact.supportEmail}`} className="text-foreground hover:text-primary transition-colors">{siteConfig.contact.supportEmail}</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hours */}
                                    <div className="flex gap-4 group">
                                        <div className="p-3 rounded-xl bg-primary/10 h-fit text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                            <Clock className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-2">Working Hours</h3>
                                            <div className="space-y-1">
                                                <p className="text-muted-foreground">Office: {siteConfig.workingHours}</p>
                                                <p className="text-muted-foreground">Support: {siteConfig.supportHours}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* WhatsApp CTA */}
                                <div className="mt-8 pt-8 border-t">
                                    <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg shadow-green-500/20" asChild>
                                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                            <MessageCircle className="mr-2 h-5 w-5" />
                                            Chat on WhatsApp
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <Card className="border-none shadow-xl h-full">
                            <CardContent className="p-8 md:p-12">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                                    <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                                </div>
                                <ContactForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Map Embed Placeholder (Enhanced) */}
                <div className="mt-12 rounded-2xl overflow-hidden border shadow-lg h-[400px] bg-muted relative group">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-background/50 backdrop-blur-sm z-10 transition-opacity duration-300">
                        <div className="bg-background p-6 rounded-2xl shadow-xl max-w-md w-full">
                            <MapPin className="h-12 w-12 text-primary mx-auto mb-4 animate-bounce" />
                            <h3 className="text-lg font-semibold mb-2">Visit Our Office</h3>
                            <p className="text-muted-foreground mb-6 text-sm">
                                {siteConfig.address.line1}, {siteConfig.address.city}
                            </p>
                            <Button className="w-full" asChild>
                                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                                    Open in Google Maps
                                </a>
                            </Button>
                        </div>
                    </div>
                    {/* Placeholder for actual map iframe if added later */}
                    <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800" />
                </div>
            </div>
        </div>
    );
}
