import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Refund Policy - BitConnect",
    description: "Refund and cancellation policy for BitConnect services.",
};

export default function RefundPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-4">Refund & Cancellation Policy</h1>
                <p className="text-muted-foreground">Understanding our billing and refund terms.</p>
            </div>

            <section>
                <h2>1. Cancellation</h2>
                <p>
                    Subscribers may cancel their service at any time by providing a written notice or contacting customer support. Disconnection will take effect at the end of the current billing cycle.
                </p>
            </section>

            <section>
                <h2>2. Refunds</h2>
                <ul>
                    <li><strong>Installation Charges:</strong> Installation and activation charges are strictly non-refundable once the service has been provisioned.</li>
                    <li><strong>Prepaid Plans:</strong> Monthly prepaid plan charges are non-refundable. If you cancel mid-month, the service will remain active until the expiry date, but no pro-rata refund will be issued.</li>
                    <li><strong>Long-term Plans:</strong> For annual or semi-annual plans, refunds are processed on a pro-rata basis ONLY if the cancellation request is due to proven service inability (e.g., relocation to a non-serviceable area) or persistent technical issues unresolved by our team for &gt;7 days. The refund amount will be calculated after deducting the charges for the months already used (at standard monthly rates, forfeiting any long-term discounts) and a processing fee of ₹500.</li>
                </ul>
            </section>

            <section>
                <h2>3. Security Deposit</h2>
                <p>
                    The security deposit for the ONU/Router (if applicable) is fully refundable upon return of the equipment in good working condition. Damages to the equipment may result in deduction from the deposit. The refund will be processed within 15 working days after equipment return.
                </p>
            </section>

            <section>
                <h2>4. Disputes</h2>
                <p>
                    If you believe you have been billed incorrectly, please contact support within 7 days of the invoice date. We will investigate and issue a credit note if an error is found.
                </p>
            </section>

            <section>
                <h2>Contact Us</h2>
                <p>
                    For any billing or refund related queries, please email us at <a href={`mailto:${siteConfig.contact.supportEmail}`} className="text-primary hover:underline">{siteConfig.contact.supportEmail}</a> or call {siteConfig.contact.phone}.
                </p>
            </section>
        </div>
    );
}
