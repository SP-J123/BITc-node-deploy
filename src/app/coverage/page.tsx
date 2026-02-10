import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { CoveragePageContent } from "@/components/pages/CoveragePageContent";

export const metadata: Metadata = {
    title: "Coverage Area - Fiber Connectivity Map",
    description: "Check fiber availability in your city. We are live in Vadodara, Ahmedabad, Surat, and expanding rapidly across Gujarat.",
    alternates: {
        canonical: `${siteConfig.urls.base}/coverage`,
    },
};

export default function CoveragePage() {
    return <CoveragePageContent />;
}
