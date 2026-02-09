import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Terms of Service for BitConnect broadband and internet services. Read our terms and conditions.",
    alternates: {
        canonical: `${siteConfig.urls.base}/legal/terms`,
    },
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
                <h1>Terms of Service</h1>
                <p className="lead">Last updated: February 2024</p>

                <p>
                    These Terms of Service ("Terms") govern your use of internet services
                    provided by {siteConfig.company.legalName} ("{siteConfig.company.name}").
                </p>

                <h2>1. Service Agreement</h2>
                <p>
                    By subscribing to our services, you agree to these Terms, our Privacy Policy,
                    and our Acceptable Use Policy. You must be at least 18 years old to enter
                    into this agreement.
                </p>

                <h2>2. Service Description</h2>
                <p>
                    We provide internet connectivity services including but not limited to:
                </p>
                <ul>
                    <li>Fiber-to-the-home (FTTH) broadband</li>
                    <li>Internet Leased Lines (ILL)</li>
                    <li>Related networking services</li>
                </ul>

                <h2>3. Payment Terms</h2>
                <ul>
                    <li>Services are billed in advance on a monthly/quarterly/annual basis</li>
                    <li>All prices are subject to applicable GST (18%)</li>
                    <li>Payment is due within 7 days of invoice date</li>
                    <li>Late payments may result in service suspension</li>
                </ul>

                <h2>4. Installation</h2>
                <ul>
                    <li>Installation is subject to technical feasibility</li>
                    <li>Standard installation time is 3-5 working days</li>
                    <li>Customer must provide necessary permissions for installation</li>
                    <li>Installation charges as per selected plan apply</li>
                </ul>

                <h2>5. Equipment</h2>
                <ul>
                    <li>Router/ONT provided remains property of {siteConfig.company.name}</li>
                    <li>Refundable deposit applies as per plan terms</li>
                    <li>Equipment must be returned in working condition upon termination</li>
                    <li>Damage to equipment may result in forfeiture of deposit</li>
                </ul>

                <h2>6. Service Level</h2>
                <ul>
                    <li>We strive to maintain 99.9% uptime (or as per SLA for ILL)</li>
                    <li>Speeds are "up to" and may vary based on network conditions</li>
                    <li>Maintenance windows may affect service availability</li>
                </ul>

                <h2>7. Fair Usage Policy</h2>
                <p>
                    Some plans include Fair Usage Policy (FUP). After exceeding FUP limits,
                    speeds may be reduced for the remainder of the billing cycle.
                </p>

                <h2>8. Termination</h2>
                <ul>
                    <li>You may terminate with 30 days written notice</li>
                    <li>We may terminate for violation of Terms or AUP</li>
                    <li>No refunds for prepaid amounts upon early termination</li>
                    <li>Equipment must be returned within 7 days of termination</li>
                </ul>

                <h2>9. Limitation of Liability</h2>
                <p>
                    Our liability is limited to the amount paid by you in the preceding month.
                    We are not liable for indirect, incidental, or consequential damages.
                </p>

                <h2>10. Governing Law</h2>
                <p>
                    These Terms are governed by the laws of India. Any disputes shall be
                    subject to the exclusive jurisdiction of courts in {siteConfig.address.city}, Gujarat.
                </p>

                <h2>Contact</h2>
                <p>
                    For questions about these Terms, contact us at {siteConfig.contact.email}.
                </p>
            </div>
        </div>
    );
}
