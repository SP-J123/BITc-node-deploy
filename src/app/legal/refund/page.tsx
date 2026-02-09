import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Refund & Cancellation Policy",
    description: "Refund and cancellation policy for BitConnect broadband services. Understand our refund terms and cancellation process.",
    alternates: {
        canonical: `${siteConfig.urls.base}/legal/refund`,
    },
};

export default function RefundPolicyPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
                <h1>Refund & Cancellation Policy</h1>
                <p className="lead">Last updated: February 2024</p>

                <p>
                    This policy outlines the refund and cancellation terms for services
                    provided by {siteConfig.company.legalName}.
                </p>

                <h2>Cancellation Policy</h2>

                <h3>Service Cancellation</h3>
                <ul>
                    <li>You may cancel your subscription with 30 days written notice</li>
                    <li>Cancellation requests can be submitted via email to {siteConfig.contact.supportEmail}</li>
                    <li>Service will continue until the end of the current billing cycle</li>
                    <li>Early cancellation of annual plans may not be eligible for refunds</li>
                </ul>

                <h3>Before Installation</h3>
                <ul>
                    <li>Full refund if cancelled before installation begins</li>
                    <li>Partial refund (minus processing fees) if cancelled after site survey</li>
                </ul>

                <h2>Refund Policy</h2>

                <h3>Eligible for Refund</h3>
                <ul>
                    <li>Service not provided due to technical infeasibility</li>
                    <li>Cancellation before installation (full refund)</li>
                    <li>Router security deposit upon return of equipment in working condition</li>
                </ul>

                <h3>Not Eligible for Refund</h3>
                <ul>
                    <li>Services already consumed (pro-rated billing applies)</li>
                    <li>Early termination of contract plans</li>
                    <li>Suspension due to AUP violations</li>
                    <li>Installation charges once installation is complete</li>
                </ul>

                <h2>Router Deposit Refund</h2>
                <ul>
                    <li>Refundable upon return of router/ONT in working condition</li>
                    <li>Equipment must be returned within 7 days of termination</li>
                    <li>Deductions apply for damaged or missing equipment</li>
                    <li>Refund processed within 15 working days of equipment receipt</li>
                </ul>

                <h2>Refund Process</h2>
                <ol>
                    <li>Submit cancellation request via email</li>
                    <li>Return equipment (if applicable)</li>
                    <li>Refund eligibility will be assessed</li>
                    <li>Eligible refunds processed within 15 working days</li>
                    <li>Refund credited to original payment method or bank account</li>
                </ol>

                <h2>Pro-Rated Billing</h2>
                <p>
                    For mid-cycle cancellations where refund is applicable, we calculate
                    refunds on a pro-rated basis:
                </p>
                <ul>
                    <li>Monthly plans: Daily pro-ration</li>
                    <li>Quarterly/Annual plans: Monthly pro-ration</li>
                </ul>

                <h2>Disputes</h2>
                <p>
                    If you believe you're entitled to a refund that was denied, please
                    contact our support team at {siteConfig.contact.supportEmail}. We will
                    review your case within 7 working days.
                </p>

                <h2>Contact</h2>
                <p>
                    For refund and cancellation queries, contact us at:
                </p>
                <ul>
                    <li>Email: {siteConfig.contact.supportEmail}</li>
                    <li>Phone: {siteConfig.contact.phone}</li>
                </ul>
            </div>
        </div>
    );
}
