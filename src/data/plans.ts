export interface Plan {
    id: string;
    name: string;
    speed: number;
    speedUnit: "Mbps" | "Gbps";
    monthlyPrice: number;
    quarterlyPrice: number;
    annualPrice: number;
    fup: string;
    installationFee: number;
    installationFeeText?: string;
    routerDeposit: number;
    routerDepositText?: string;
    bestFor: string;
    features: string[];
    popular?: boolean;
    enterprise?: boolean;
}

export const plans: Plan[] = [
    {
        id: "basic",
        name: "Basic",
        speed: 50,
        speedUnit: "Mbps",
        monthlyPrice: 499,
        quarterlyPrice: 1347,
        annualPrice: 4790,
        fup: "Unlimited",
        installationFee: 1000,
        routerDeposit: 2000,
        routerDepositText: "Refundable",
        bestFor: "Home users & light browsing",
        features: [
            "50 Mbps download speed",
            "Unlimited data",
            "Free Wi-Fi router",
            "Standard support",
        ],
    },
    {
        id: "popular",
        name: "Popular",
        speed: 100,
        speedUnit: "Mbps",
        monthlyPrice: 799,
        quarterlyPrice: 2157,
        annualPrice: 7670,
        fup: "Unlimited",
        installationFee: 0,
        installationFeeText: "Free",
        routerDeposit: 2000,
        routerDepositText: "Refundable",
        bestFor: "Families & HD streaming",
        features: [
            "100 Mbps download speed",
            "Unlimited data",
            "Free installation",
            "Free dual-band router",
            "Priority support",
        ],
        popular: true,
    },
    {
        id: "pro",
        name: "Pro",
        speed: 200,
        speedUnit: "Mbps",
        monthlyPrice: 1499,
        quarterlyPrice: 4047,
        annualPrice: 14390,
        fup: "3000 GB @ 50 Mbps thereafter",
        installationFee: 0,
        installationFeeText: "Free",
        routerDeposit: 0,
        routerDepositText: "Free router",
        bestFor: "Gamers & work from home",
        features: [
            "200 Mbps download speed",
            "3000 GB high-speed data",
            "Free installation",
            "Free high-performance router",
            "Priority support",
            "Static IP available",
        ],
    },
    {
        id: "ultra",
        name: "Ultra",
        speed: 1,
        speedUnit: "Gbps",
        monthlyPrice: 2999,
        quarterlyPrice: 8097,
        annualPrice: 28790,
        fup: "Unlimited",
        installationFee: 0,
        installationFeeText: "Free",
        routerDeposit: 0,
        routerDepositText: "Free router",
        bestFor: "Power users & large families",
        features: [
            "1 Gbps download speed",
            "Truly unlimited data",
            "Free installation",
            "Free enterprise-grade router",
            "24×7 priority support",
            "Free static IP",
            "Dedicated account manager",
        ],
        enterprise: true,
    },
];

export const billingDiscounts = {
    monthly: 0,
    quarterly: 10,
    annual: 20,
} as const;

export const gstRate = 18;

export const getPrice = (
    plan: Plan,
    billing: "monthly" | "quarterly" | "annual"
): number => {
    switch (billing) {
        case "monthly":
            return plan.monthlyPrice;
        case "quarterly":
            return plan.quarterlyPrice;
        case "annual":
            return plan.annualPrice;
    }
};

export const formatPrice = (amount: number): string => {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(amount);
};
