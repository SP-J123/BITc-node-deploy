import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Privacy Policy - BitConnect",
    description: "Read our Privacy Policy to understand how we collect, use, and protect your personal information in compliance with Indian laws.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-muted-foreground">Last Updated: February 2024</p>
            </div>

            <section>
                <h2>1. Introduction</h2>
                <p>
                    {siteConfig.company.legalName} ("BitConnect", "we", "us", or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines our practices regarding the collection, use, disclosure, and protection of your data when you use our website ({siteConfig.urls.base}) and internet services.
                </p>
                <p>
                    We comply with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and other applicable laws of India.
                </p>
            </section>

            <section>
                <h2>2. Information We Collect</h2>
                <p>We collect various types of information to provide and improve our services to you:</p>
                <ul>
                    <li>
                        <strong>Personal Information:</strong> Name, address, email address, phone number, government-issued ID (Aadhaar, PAN, Voter ID) for KYC as mandated by the Department of Telecommunications (DoT).
                    </li>
                    <li>
                        <strong>Billing Information:</strong> Payment details, transaction history, and GST information.
                    </li>
                    <li>
                        <strong>Technical Information:</strong> IP address, MAC address, device type, browser type, and usage logs as required for network security and regulatory compliance.
                    </li>
                </ul>
            </section>

            <section>
                <h2>3. How We Use Your Information</h2>
                <p>We use your information for the following purposes:</p>
                <ul>
                    <li>To provision and manage your internet connection.</li>
                    <li>To process billing and payments.</li>
                    <li>To verify your identity (KYC) in compliance with DoT regulations.</li>
                    <li>To safeguard our network and prevent fraud or illegal activities.</li>
                    <li>To communicate with you regarding service updates, outages, and support tickets.</li>
                    <li>To comply with legal obligations and requests from law enforcement agencies.</li>
                </ul>
            </section>

            <section>
                <h2>4. Data Sharing and Disclosure</h2>
                <p>
                    We do not sell your personal information to third parties. However, we may share your information in the following circumstances:
                </p>
                <ul>
                    <li>
                        <strong>Service Providers:</strong> With trusted partners who assist us in operating our business, such as payment gateways and upstream bandwidth providers, subject to confidentiality agreements.
                    </li>
                    <li>
                        <strong>Legal Requirements:</strong> We are legally legally obligated to disclose information to Indian Law Enforcement Agencies (LEAs) and regulatory bodies (such as TRAI and DoT) upon lawful request, without prior notice to you.
                    </li>
                    <li>
                        <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.
                    </li>
                </ul>
            </section>

            <section>
                <h2>5. Data Security</h2>
                <p>
                    We implement reasonable security practices and procedures as required by the IT Act, 2000, to protect your data from unauthorized access, alteration, disclosure, or destruction. This includes technical measures like encryption, firewalls, and secure access controls.
                </p>
            </section>

            <section>
                <h2>6. Data Retention</h2>
                <p>
                    We retain your personal information and usage logs for the duration mandated by the Department of Telecommunications (currently minimum 2 years for usage logs) and for as long as necessary to provide services and comply with legal obligations.
                </p>
            </section>

            <section>
                <h2>7. Your Rights</h2>
                <p>
                    Subject to applicable laws, you may have the right to access, correct, or update your personal information. You can manage your account details through our support team.
                </p>
            </section>

            <section>
                <h2>8. Cookies</h2>
                <p>
                    We use cookies to enhance your experience on our website. You can control cookie preferences through your browser settings.
                </p>
            </section>

            <section>
                <h2>9. Grievance Officer</h2>
                <p>
                    In accordance with the Information Technology Act, 2000, and rules made thereunder, the name and contact details of the Grievance Officer are provided below:
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4 not-prose">
                    <p className="font-medium">Narendra (Grievance Officer)</p>
                    <p>{siteConfig.company.legalName}</p>
                    <p>{siteConfig.address.city}, {siteConfig.address.state}</p>
                    <p>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">{siteConfig.contact.email}</a></p>
                </div>
            </section>

            <section>
                <h2>10. Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
                </p>
            </section>
        </div>
    );
}
