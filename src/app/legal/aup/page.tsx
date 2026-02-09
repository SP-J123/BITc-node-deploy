import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Acceptable Use Policy",
    description: "Acceptable Use Policy for BitConnect internet services. Understand permitted and prohibited uses of our network.",
    alternates: {
        canonical: `${siteConfig.urls.base}/legal/aup`,
    },
};

export default function AUPPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
                <h1>Acceptable Use Policy</h1>
                <p className="lead">Last updated: February 2024</p>

                <p>
                    This Acceptable Use Policy ("AUP") governs your use of internet services
                    provided by {siteConfig.company.legalName}. Violation of this policy may
                    result in suspension or termination of services.
                </p>

                <h2>Prohibited Activities</h2>
                <p>You may not use our services to:</p>

                <h3>Illegal Activities</h3>
                <ul>
                    <li>Violate any applicable local, state, national, or international law</li>
                    <li>Transmit content that is illegal, harmful, or promotes illegal activities</li>
                    <li>Infringe on intellectual property rights of others</li>
                </ul>

                <h3>Network Abuse</h3>
                <ul>
                    <li>Launch denial-of-service (DoS) attacks</li>
                    <li>Attempt to gain unauthorized access to systems or data</li>
                    <li>Distribute viruses, malware, or other harmful code</li>
                    <li>Operate open proxies, open relays, or TOR exit nodes</li>
                    <li>Send unsolicited bulk email (spam)</li>
                </ul>

                <h3>Harmful Content</h3>
                <ul>
                    <li>Distribute child sexual abuse material (CSAM)</li>
                    <li>Engage in harassment, stalking, or threats</li>
                    <li>Promote hatred or violence against individuals or groups</li>
                </ul>

                <h3>Commercial Restrictions</h3>
                <ul>
                    <li>Resell or redistribute internet services without authorization</li>
                    <li>Run commercial hosting services on retail plans</li>
                    <li>Use services in ways that negatively impact other users</li>
                </ul>

                <h2>Permitted Use</h2>
                <p>Our services are intended for:</p>
                <ul>
                    <li>Personal web browsing and communication</li>
                    <li>Streaming media for personal entertainment</li>
                    <li>Online gaming</li>
                    <li>Work from home activities</li>
                    <li>Educational purposes</li>
                    <li>Business use (on appropriate plans)</li>
                </ul>

                <h2>Enforcement</h2>
                <p>
                    We reserve the right to investigate violations of this AUP. Upon confirmation
                    of a violation, we may:
                </p>
                <ul>
                    <li>Issue a warning</li>
                    <li>Temporarily suspend service</li>
                    <li>Permanently terminate service</li>
                    <li>Report activities to law enforcement</li>
                </ul>

                <h2>Reporting Violations</h2>
                <p>
                    To report abuse or violations of this policy, please contact us at{" "}
                    {siteConfig.contact.supportEmail} with relevant details.
                </p>

                <h2>TRAI DND Compliance</h2>
                <p>
                    We comply with TRAI regulations regarding Do Not Disturb (DND) preferences.
                    If you have registered for DND and receive promotional messages, please
                    contact us to update your preferences.
                </p>
            </div>
        </div>
    );
}
