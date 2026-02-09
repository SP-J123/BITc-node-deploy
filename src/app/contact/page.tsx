import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
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
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary/5 to-cyan-500/5 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge variant="outline" className="mb-4">Contact Us</Badge>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Whether you have a question about our services, need support, or
                            want to explore partnership opportunities, we're here to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    {/* Office Address */}
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex gap-4">
                                                <div className="p-3 rounded-xl bg-primary/10 h-fit">
                                                    <MapPin className="h-6 w-6 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold mb-1">Head Office</h3>
                                                    <p className="text-muted-foreground">
                                                        {siteConfig.address.line1}<br />
                                                        {siteConfig.address.line2}<br />
                                                        {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}
                                                    </p>
                                                    <Button variant="link" className="p-0 h-auto mt-2" asChild>
                                                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                                                            View on Google Maps →
                                                        </a>
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Phone */}
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex gap-4">
                                                <div className="p-3 rounded-xl bg-primary/10 h-fit">
                                                    <Phone className="h-6 w-6 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold mb-1">Phone</h3>
                                                    <p className="text-muted-foreground mb-1">
                                                        Sales & Support: <a href={`tel:${siteConfig.contact.phone}`} className="text-primary hover:underline">{siteConfig.contact.phone}</a>
                                                    </p>
                                                    <p className="text-muted-foreground">
                                                        NOC (24×7): <a href={`tel:${siteConfig.contact.nocPhone}`} className="text-primary hover:underline">{siteConfig.contact.nocPhone}</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Email */}
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex gap-4">
                                                <div className="p-3 rounded-xl bg-primary/10 h-fit">
                                                    <Mail className="h-6 w-6 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold mb-1">Email</h3>
                                                    <p className="text-muted-foreground mb-1">
                                                        General: <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">{siteConfig.contact.email}</a>
                                                    </p>
                                                    <p className="text-muted-foreground mb-1">
                                                        Sales: <a href={`mailto:${siteConfig.contact.salesEmail}`} className="text-primary hover:underline">{siteConfig.contact.salesEmail}</a>
                                                    </p>
                                                    <p className="text-muted-foreground">
                                                        Support: <a href={`mailto:${siteConfig.contact.supportEmail}`} className="text-primary hover:underline">{siteConfig.contact.supportEmail}</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Hours */}
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex gap-4">
                                                <div className="p-3 rounded-xl bg-primary/10 h-fit">
                                                    <Clock className="h-6 w-6 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold mb-1">Working Hours</h3>
                                                    <p className="text-muted-foreground mb-1">
                                                        Office: {siteConfig.workingHours}
                                                    </p>
                                                    <p className="text-muted-foreground">
                                                        Support: {siteConfig.supportHours}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* WhatsApp CTA */}
                                <div className="mt-8">
                                    <Button size="lg" className="w-full bg-green-500 hover:bg-green-600" asChild>
                                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                            <MessageCircle className="mr-2 h-5 w-5" />
                                            Chat on WhatsApp
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                                    <ContactForm />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Embed */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="rounded-xl overflow-hidden border h-[400px] bg-muted flex items-center justify-center">
                        <div className="text-center p-8">
                            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                            <p className="text-muted-foreground mb-4">
                                Google Maps embed will appear here.<br />
                                Configure NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to enable.
                            </p>
                            <Button variant="outline" asChild>
                                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                                    Open in Google Maps
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
