import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Terms of Service - BitConnect",
    description: "Review the Terms of Service for BitConnect Internet services.",
};

export default function TermsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
                <p className="text-muted-foreground">Effective Date: February 1, 2024</p>
            </div>

            <section>
                <h2>1. Service Description</h2>
                <p>
                    {siteConfig.company.legalName} ("BitConnect") provides high-speed internet access and related services to subscribers. The service is provided on a "best-effort" basis, subject to technical feasibility and network availability.
                </p>
            </section>

            <section>
                <h2>2. Subscriber Obligations</h2>
                <ul>
                    <li>The subscriber agrees to use the service in compliance with all applicable laws and regulations, including the Indian IT Act, 2000.</li>
                    <li>The subscriber is responsible for the security of their Wi-Fi password and any activity originating from their connection.</li>
                    <li>The subscriber must provide valid KYC documents as proof of identity and address before service activation.</li>
                </ul>
            </section>

            <section>
                <h2>3. Billing and Payments</h2>
                <ul>
                    <li><strong>Prepaid Plans:</strong> Service is billed in advance. Renewal payments must be made before the expiry of the current plan to avoid disconnection.</li>
                    <li><strong>Postpaid Plans:</strong> Bills are generated monthly and must be paid by the due date to avoid late fees or suspension.</li>
                    <li><strong>Taxes:</strong> All plans are exclusive of GST (18%) unless specified otherwise.</li>
                    <li><strong>Installation Charges:</strong> Non-refundable installation charges apply for new connections as per the plan selected.</li>
                </ul>
            </section>

            <section>
                <h2>4. Fair Usage Policy (FUP)</h2>
                <p>
                    Unlimited plans are subject to a commercial Fair Usage Policy to ensure network quality for all users. If a user exceeds the specified data limit (3300 GB/month for residential plans), speed may be reduced for the remainder of the billing cycle.
                </p>
            </section>

            <section>
                <h2>5. Limitation of Liability</h2>
                <p>
                    BitConnect shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, data, or business opportunities, arising out of the use or inability to use the service. Our maximum liability is limited to the subscription fee paid for the affected period.
                </p>
            </section>

            <section>
                <h2>6. Force Majeure</h2>
                <p>
                    BitConnect is not liable for service interruptions caused by events beyond our reasonable control, such as acts of God, fire, flood, riots, strikes, fiber cuts by third parties, or regulatory orders.
                </p>
            </section>

            <section>
                <h2>7. Dispute Resolution</h2>
                <p>
                    Any disputes arising out of this agreement shall be subject to the exclusive jurisdiction of the courts in {siteConfig.address.city}, {siteConfig.address.state}.
                </p>
            </section>

            <section>
                <h2>8. Changes to Terms</h2>
                <p>
                    We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of the new terms.
                </p>
            </section>
        </div>
    );
}
