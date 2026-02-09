"use client";

import { useState } from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Check, Zap, Phone, MessageCircle, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { plans, formatPrice, billingDiscounts } from "@/data/plans";
import { getLiveCities } from "@/data/coverage";
import { siteConfig } from "@/config/site";
import { BookInstallationForm } from "@/components/forms/BookInstallationForm";

type BillingPeriod = "monthly" | "quarterly" | "annual";

export default function PlansPage() {
    const [billing, setBilling] = useState<BillingPeriod>("monthly");
    const [selectedCity, setSelectedCity] = useState<string>("all");
    const [selectedPlan, setSelectedPlan] = useState<string>("");
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const cities = getLiveCities();
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi, I'm interested in BitConnect broadband plans.`;

    const getPrice = (plan: typeof plans[0]) => {
        switch (billing) {
            case "monthly":
                return plan.monthlyPrice;
            case "quarterly":
                return plan.quarterlyPrice;
            case "annual":
                return plan.annualPrice;
        }
    };

    const getBillingLabel = () => {
        switch (billing) {
            case "monthly":
                return "/month";
            case "quarterly":
                return "/quarter";
            case "annual":
                return "/year";
        }
    };

    const handleBookInstallation = (planId: string) => {
        setSelectedPlan(planId);
        setIsBookingOpen(true);
    };

    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary/5 to-cyan-500/5 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge variant="outline" className="mb-4">
                            <Zap className="h-3 w-3 mr-1" />
                            Fiber Broadband Plans
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Choose Your Perfect Plan
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            High-speed fiber broadband for every need. From casual browsing to
                            power-user speeds, find your perfect match. All plans include free
                            Wi-Fi router and 24×7 support.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="py-8 border-b sticky top-16 bg-background/95 backdrop-blur z-40">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Billing Toggle */}
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium">Billing:</span>
                            <Tabs value={billing} onValueChange={(v) => setBilling(v as BillingPeriod)}>
                                <TabsList>
                                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                                    <TabsTrigger value="quarterly">
                                        Quarterly
                                        <Badge variant="secondary" className="ml-2 text-xs">
                                            {billingDiscounts.quarterly}% off
                                        </Badge>
                                    </TabsTrigger>
                                    <TabsTrigger value="annual">
                                        Annual
                                        <Badge variant="secondary" className="ml-2 text-xs">
                                            {billingDiscounts.annual}% off
                                        </Badge>
                                    </TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>

                        {/* City Filter */}
                        <div className="flex items-center gap-2">
                            <Filter className="h-4 w-4 text-muted-foreground" />
                            <Select value={selectedCity} onValueChange={setSelectedCity}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select city" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Cities</SelectItem>
                                    {cities.map((city) => (
                                        <SelectItem key={city.slug} value={city.slug}>
                                            {city.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plans Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {plans.map((plan) => (
                            <Card
                                key={plan.id}
                                className={`relative flex flex-col ${plan.popular
                                        ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]"
                                        : "hover:border-primary/50"
                                    } transition-all`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <Badge className="bg-gradient-to-r from-primary to-cyan-500 text-white border-0">
                                            Most Popular
                                        </Badge>
                                    </div>
                                )}

                                <CardHeader className="pb-4">
                                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                                    <CardDescription>{plan.bestFor}</CardDescription>
                                </CardHeader>

                                <CardContent className="flex-1">
                                    {/* Speed */}
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-4xl font-bold">{plan.speed}</span>
                                        <span className="text-lg text-muted-foreground">{plan.speedUnit}</span>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold">{formatPrice(getPrice(plan))}</span>
                                            <span className="text-muted-foreground">{getBillingLabel()}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            + 18% GST applicable
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-sm">
                                            <Check className="h-4 w-4 text-green-500 shrink-0" />
                                            <span>{plan.fup} data</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-sm">
                                            <Check className="h-4 w-4 text-green-500 shrink-0" />
                                            <span>
                                                Installation: {plan.installationFeeText || formatPrice(plan.installationFee)}
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2 text-sm">
                                            <Check className="h-4 w-4 text-green-500 shrink-0" />
                                            <span>
                                                Router: {plan.routerDepositText || `${formatPrice(plan.routerDeposit)} deposit`}
                                            </span>
                                        </li>
                                        {plan.features.slice(3).map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm">
                                                <Check className="h-4 w-4 text-green-500 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter className="flex flex-col gap-2">
                                    <Button
                                        className={`w-full ${plan.popular
                                                ? "bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90"
                                                : ""
                                            }`}
                                        variant={plan.popular ? "default" : "outline"}
                                        onClick={() => handleBookInstallation(plan.id)}
                                    >
                                        Book Installation
                                    </Button>
                                    <Button variant="ghost" size="sm" className="w-full" asChild>
                                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                            <MessageCircle className="mr-2 h-4 w-4" />
                                            Talk to Sales
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {/* GST Disclaimer */}
                    <div className="mt-8 text-center text-sm text-muted-foreground">
                        <p>* All prices are exclusive of 18% GST. Actual billing will include applicable taxes.</p>
                        <p>* Installation charges and router deposit may apply based on your location and plan.</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto grid gap-4">
                        {[
                            {
                                q: "What is FUP (Fair Usage Policy)?",
                                a: "FUP limits the high-speed data you can use per month. After exceeding FUP, speed reduces to ensure fair usage for all customers. Our Unlimited plans have no FUP restrictions.",
                            },
                            {
                                q: "Is the router deposit refundable?",
                                a: "Yes, the router deposit is fully refundable when you return the equipment in working condition at the end of your subscription.",
                            },
                            {
                                q: "How long does installation take?",
                                a: "Standard installation is completed within 3-5 working days from booking, subject to feasibility at your location.",
                            },
                            {
                                q: "Can I upgrade my plan later?",
                                a: "Absolutely! You can upgrade your plan anytime. The new plan will be effective from your next billing cycle.",
                            },
                        ].map((faq, i) => (
                            <div key={i} className="bg-background rounded-lg p-6 border">
                                <h3 className="font-semibold mb-2">{faq.q}</h3>
                                <p className="text-muted-foreground text-sm">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 bg-gradient-to-r from-primary to-cyan-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Need help choosing?</h2>
                    <p className="mb-6 text-white/80">Our team is ready to help you find the perfect plan.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button variant="secondary" size="lg" asChild>
                            <a href={`tel:${siteConfig.contact.phone}`}>
                                <Phone className="mr-2 h-4 w-4" />
                                Call Us
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-2 h-4 w-4" />
                                WhatsApp
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Booking Dialog */}
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                <DialogContent className="max-w-lg">
                    <DialogHeader>
                        <DialogTitle>Book Installation</DialogTitle>
                        <DialogDescription>
                            Fill in your details and we'll get your connection set up quickly.
                        </DialogDescription>
                    </DialogHeader>
                    <BookInstallationForm
                        selectedPlan={selectedPlan}
                        onSuccess={() => setIsBookingOpen(false)}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
}
