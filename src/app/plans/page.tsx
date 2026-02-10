import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PlansPageContent } from "@/components/pages/PlansPageContent";

export const metadata: Metadata = {
    title: "Broadband Plans - High Speed Fiber Internet",
    description: "Affordable fiber broadband plans offering speeds up to 1 Gbps. Monthly, quarterly, and annual billing options available.",
    alternates: {
        canonical: `${siteConfig.urls.base}/plans`,
    },
};

export default function PlansPage() {
    return <PlansPageContent />;
}
