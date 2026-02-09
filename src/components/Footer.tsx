import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

const footerLinks = {
    retail: [
        { name: "Broadband Plans", href: "/plans" },
        { name: "Coverage Areas", href: "/coverage" },
        { name: "Check Availability", href: "/#availability" },
    ],
    business: [
        { name: "ILL / Leased Lines", href: "/business/ill" },
        { name: "Enterprise Solutions", href: "/services" },
        { name: "Enterprise Quote", href: "/business/ill#quote" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Support", href: "/support" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/legal/privacy" },
        { name: "Terms of Service", href: "/legal/terms" },
        { name: "Acceptable Use Policy", href: "/legal/aup" },
        { name: "Refund Policy", href: "/legal/refund" },
    ],
};

const socialLinks = [
    { name: "Facebook", href: siteConfig.social.facebook, icon: Facebook },
    { name: "Twitter", href: siteConfig.social.twitter, icon: Twitter },
    { name: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
    { name: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
    { name: "YouTube", href: siteConfig.social.youtube, icon: Youtube },
];

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600">
                                <span className="text-lg font-bold text-white">B</span>
                            </div>
                            <span className="text-xl font-bold text-white">
                                {siteConfig.company.name}
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400 mb-4 max-w-xs">
                            {siteConfig.company.description}
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2 text-sm">
                            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                                <Phone className="h-4 w-4" />
                                {siteConfig.contact.phone}
                            </a>
                            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                                <Mail className="h-4 w-4" />
                                {siteConfig.contact.email}
                            </a>
                            <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                                <span>
                                    {siteConfig.address.line1}, {siteConfig.address.line2}<br />
                                    {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Retail Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Retail</h3>
                        <ul className="space-y-2">
                            {footerLinks.retail.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm hover:text-cyan-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Business Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Business</h3>
                        <ul className="space-y-2">
                            {footerLinks.business.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm hover:text-cyan-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm hover:text-cyan-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm hover:text-cyan-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mt-12 pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="p-2 rounded-full bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                        <div className="text-sm text-slate-400">
                            {siteConfig.workingHours}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                        <p>
                            © {new Date().getFullYear()} {siteConfig.company.legalName}. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4 text-xs">
                            <span>GSTIN: {siteConfig.company.gstin}</span>
                            <span>ISP License: {siteConfig.company.ispLicense}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
