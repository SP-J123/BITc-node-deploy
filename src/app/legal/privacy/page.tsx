import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for BitConnect Technology Private Limited. Learn how we collect, use, and protect your personal information.",
    alternates: {
        canonical: `${siteConfig.urls.base}/legal/privacy`,
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
                <h1>Privacy Policy</h1>
                <p className="lead">
                    Last updated: February 2024
                </p>

                <p>
                    {siteConfig.company.legalName} ("{siteConfig.company.name}", "we", "us", or "our")
                    is committed to protecting your privacy. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you use our services.
                </p>

                <h2>Information We Collect</h2>

                <h3>Personal Information</h3>
                <p>We may collect the following personal information:</p>
                <ul>
                    <li>Name, email address, phone number</li>
                    <li>Residential or business address</li>
                    <li>Government-issued ID (for KYC verification)</li>
                    <li>Payment and billing information</li>
                    <li>Service usage data and preferences</li>
                </ul>

                <h3>Automatically Collected Information</h3>
                <p>When you access our website, we may automatically collect:</p>
                <ul>
                    <li>IP address and device information</li>
                    <li>Browser type and operating system</li>
                    <li>Pages viewed and time spent</li>
                    <li>Referral source</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>We use the collected information to:</p>
                <ul>
                    <li>Provide and maintain our internet services</li>
                    <li>Process your transactions and send related information</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send promotional communications (with your consent)</li>
                    <li>Comply with legal obligations and regulatory requirements</li>
                    <li>Improve our services and user experience</li>
                </ul>

                <h2>Information Sharing</h2>
                <p>
                    We do not sell your personal information. We may share your information with:
                </p>
                <ul>
                    <li>Service providers who assist in our operations</li>
                    <li>Government authorities when required by law</li>
                    <li>Professional advisors (lawyers, accountants)</li>
                </ul>

                <h2>Data Security</h2>
                <p>
                    We implement appropriate technical and organizational measures to protect
                    your personal information against unauthorized access, alteration, disclosure,
                    or destruction.
                </p>

                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information (subject to legal requirements)</li>
                    <li>Opt-out of marketing communications</li>
                </ul>

                <h2>Cookies</h2>
                <p>
                    Our website uses cookies to enhance your browsing experience. You can
                    control cookie settings through your browser preferences.
                </p>

                <h2>Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. We will notify you
                    of any changes by posting the new policy on this page.
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have questions about this Privacy Policy, please contact us at:
                </p>
                <ul>
                    <li>Email: {siteConfig.contact.email}</li>
                    <li>Phone: {siteConfig.contact.phone}</li>
                    <li>Address: {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}</li>
                </ul>
            </div>
        </div>
    );
}
