import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Acceptable Use Policy - BitConnect",
    description: "Guidelines for acceptable use of BitConnect Internet services.",
};

export default function AUPPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-4">Acceptable Use Policy (AUP)</h1>
                <p className="text-muted-foreground">Ensuring a safe and secure internet for everyone.</p>
            </div>

            <section>
                <p>
                    This Acceptable Use Policy specifies the actions prohibited by BitConnect to users of the Internet Service. Users may not use our network to transmit, distribute, or store material:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>In violation of any applicable law or regulation, including the IT Act, 2000.</li>
                    <li>That infringes on copyright, trademark, trade secret, or other intellectual property rights.</li>
                    <li>That is obscene, defamatory, constitutes an illegal threat, or violates export control laws.</li>
                </ul>
            </section>

            <section>
                <h2>1. Prohibited Activities</h2>
                <ul className="list-decimal pl-6 space-y-2">
                    <li><strong>Spamming:</strong> Sending unsolicited bulk email or messages.</li>
                    <li><strong>Hacking:</strong> Attempting to gain unauthorized access to any other computer system or network.</li>
                    <li><strong>Malware Distribution:</strong> Distributing viruses, worms, trojan horses, or other malicious code.</li>
                    <li><strong>Phishing:</strong> Engaging in fraudulent activities to obtain sensitive personal information.</li>
                    <li><strong>Denial of Service (DoS):</strong> Launching attacks that disrupt service availability for others.</li>
                    <li><strong>IP Spoofing:</strong> Faking IP headers to conceal the origin of traffic.</li>
                </ul>
            </section>

            <section>
                <h2>2. Enforcement</h2>
                <p>
                    BitConnect reserves the right to monitor the network for violations of this policy. We may take any of the following actions upon discovering a violation:
                </p>
                <ul>
                    <li>Issuing a warning to the user.</li>
                    <li>Suspending or terminating the user's account without notice.</li>
                    <li>Reporting the activity to law enforcement agencies as required by law.</li>
                </ul>
            </section>

            <section>
                <h2>3. Reporting Violations</h2>
                <p>
                    Please report any violations of this policy to our Abuse team at abuse@bitconnect.in (or contact support).
                </p>
            </section>
        </div>
    );
}
