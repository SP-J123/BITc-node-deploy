import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function CTASection() {
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi, I'm interested in BitConnect broadband services.`;

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-cyan-600 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        Ready to Get Connected?
                    </h2>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                        Join hundreds of satisfied customers across Gujarat. Get high-speed fiber
                        broadband installed at your doorstep. Our team is ready to help!
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Button
                            size="lg"
                            className="bg-white text-primary hover:bg-white/90 font-semibold w-full sm:w-auto"
                            asChild
                        >
                            <Link href="/plans">
                                View Plans
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                            asChild
                        >
                            <a href={`tel:${siteConfig.contact.phone}`}>
                                <Phone className="mr-2 h-4 w-4" />
                                {siteConfig.contact.phone}
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold w-full sm:w-auto"
                            asChild
                        >
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-2 h-4 w-4" />
                                WhatsApp Us
                            </a>
                        </Button>
                    </div>

                    {/* Contact Info */}
                    <div className="grid sm:grid-cols-3 gap-6 text-center">
                        <div>
                            <p className="text-white/60 text-sm mb-1">Sales Enquiries</p>
                            <a href={`mailto:${siteConfig.contact.salesEmail}`} className="hover:underline">
                                {siteConfig.contact.salesEmail}
                            </a>
                        </div>
                        <div>
                            <p className="text-white/60 text-sm mb-1">Support</p>
                            <a href={`mailto:${siteConfig.contact.supportEmail}`} className="hover:underline">
                                {siteConfig.contact.supportEmail}
                            </a>
                        </div>
                        <div>
                            <p className="text-white/60 text-sm mb-1">Working Hours</p>
                            <p>{siteConfig.workingHours}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
