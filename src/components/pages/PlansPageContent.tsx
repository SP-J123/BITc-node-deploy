"use client";

import { useState } from "react";
import { Check, Zap, Phone, MessageCircle, ArrowRight, Wifi, Download, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { plans, formatPrice, billingDiscounts } from "@/data/plans";
import { getLiveCities } from "@/data/coverage";
import { siteConfig } from "@/config/site";
import { BookInstallationForm } from "@/components/forms/BookInstallationForm";

type BillingPeriod = "monthly" | "quarterly" | "annual";

export function PlansPageContent() {
    const [billing, setBilling] = useState<BillingPeriod>("quarterly"); // Default to Quarterly for better value perception
    const [selectedCity, setSelectedCity] = useState<string>("all");
    const [selectedPlan, setSelectedPlan] = useState<string>("");
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const cities = getLiveCities();
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi, I'm interested in BitConnect broadband plans.`;

    const getPrice = (plan: typeof plans[0]) => {
        switch (billing) {
            case "monthly": return plan.monthlyPrice;
            case "quarterly": return plan.quarterlyPrice;
            case "annual": return plan.annualPrice;
        }
    };

    const getEquivalentMonthly = (plan: typeof plans[0]) => {
        const price = getPrice(plan);
        if (billing === "quarterly") return Math.round(price / 3);
        if (billing === "annual") return Math.round(price / 12);
        return price;
    };

    const handleBookInstallation = (planId: string) => {
        setSelectedPlan(planId);
        setIsBookingOpen(true);
    };

    return (
        <div className="min-h-screen bg-background selection:bg-primary/20">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-700" />

                <div className="container mx-auto px-4 text-center">
                    <Badge variant="outline" className="mb-6 px-4 py-1 text-sm border-primary/30 text-primary bg-primary/5 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Wifi className="h-3 w-3 mr-2" />
                        Superfast Fiber Broadband
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                        Speed that Matches <br />
                        <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">Your Ambition</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        Choose the perfect plan for streaming, gaming, and working from home.
                        Experience 99.9% uptime with Gujarat's most reliable network.
                    </p>
                </div>
            </section>

            {/* Controls Section (Sticky) */}
            <section className="sticky top-16 z-40 bg-background/80 backdrop-blur-md border-b border-white/5 py-6 transition-all">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                        {/* Billing Toggle */}
                        <div className="flex items-center gap-3 bg-muted/50 p-1 rounded-full border">
                            {(["monthly", "quarterly", "annual"] as const).map((period) => (
                                <button
                                    key={period}
                                    onClick={() => setBilling(period)}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${billing === period
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {period.charAt(0).toUpperCase() + period.slice(1)}
                                    {period !== "monthly" && (
                                        <Badge variant="secondary" className="ml-2 text-[10px] h-4 px-1 bg-white/20 text-white border-0">
                                            {period === "quarterly" ? `${billingDiscounts.quarterly}%` : `${billingDiscounts.annual}%`} OFF
                                        </Badge>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* City Filter */}
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-muted-foreground hidden sm:inline">Showing plans for:</span>
                            <Select value={selectedCity} onValueChange={setSelectedCity}>
                                <SelectTrigger className="w-[180px] bg-background border-primary/20 focus:ring-primary/20">
                                    <SelectValue placeholder="Select city" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Everywhere</SelectItem>
                                    {cities.map((city) => (
                                        <SelectItem key={city.slug} value={city.slug}>{city.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plans Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {plans.map((plan, index) => {
                            const price = getPrice(plan);
                            const monthlyEq = getEquivalentMonthly(plan);

                            return (
                                <Card
                                    key={plan.id}
                                    className={`relative group flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border-muted ${plan.popular
                                        ? "border-primary/50 bg-gradient-to-b from-primary/5 to-background scale-[1.02] shadow-xl shadow-primary/10"
                                        : "bg-card hover:border-primary/30"
                                        } animate-in fade-in slide-in-from-bottom-8`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                            <Badge className="bg-gradient-to-r from-primary to-cyan-500 border-0 px-4 py-1 text-sm shadow-lg">
                                                Most Popular
                                            </Badge>
                                        </div>
                                    )}

                                    <CardHeader className="pb-4 text-center">
                                        <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                                        <div className="flex items-center justify-center gap-2 mt-4 text-primary">
                                            <Download className="w-5 h-5" />
                                            <span className="text-4xl font-extrabold tracking-tight">{plan.speed}</span>
                                            <span className="text-xl font-medium text-muted-foreground">{plan.speedUnit}</span>
                                        </div>
                                        <CardDescription className="mt-2">{plan.bestFor}</CardDescription>
                                    </CardHeader>

                                    <div className="px-6 py-4 bg-muted/30 border-y border-border/50 text-center">
                                        <div className="text-3xl font-bold flex items-center justify-center gap-1">
                                            <span className="text-lg text-muted-foreground">₹</span>
                                            {formatPrice(monthlyEq).replace(/[^0-9,]/g, '')}
                                            <span className="text-sm font-normal text-muted-foreground">/mo*</span>
                                        </div>
                                        {billing !== "monthly" && (
                                            <div className="text-xs text-muted-foreground mt-1">
                                                billed {billing} at {formatPrice(price)}
                                            </div>
                                        )}
                                    </div>

                                    <CardContent className="flex-1 pt-6">
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-sm">
                                                <div className="mt-1 p-0.5 rounded-full bg-green-500/10 text-green-500">
                                                    <Check className="w-3 h-3" />
                                                </div>
                                                <span className="text-muted-foreground"><strong className="text-foreground">{plan.fup}</strong> Data</span>
                                            </li>
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm">
                                                    <div className="mt-1 p-0.5 rounded-full bg-green-500/10 text-green-500">
                                                        <Check className="w-3 h-3" />
                                                    </div>
                                                    <span className="text-muted-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>

                                    <CardFooter className="flex flex-col gap-3 pb-8">
                                        <Button
                                            className={`w-full h-11 text-base ${plan.popular ? 'bg-gradient-to-r from-primary to-cyan-600 shadow-lg shadow-primary/20' : ''}`}
                                            variant={plan.popular ? "default" : "outline"}
                                            onClick={() => handleBookInstallation(plan.id)}
                                        >
                                            Choose Plan <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </div>

                    <div className="mt-12 text-center space-y-2 text-sm text-muted-foreground animate-in fade-in duration-1000 delay-500">
                        <p>* Prices are exclusive of 18% GST. Final invoice will include applicable taxes.</p>
                        <p>Installation charges may vary by location. Security deposit is 100% refundable.</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-20 bg-muted/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Why BitConnect Fiber?</h2>
                        <p className="text-muted-foreground">More than just speed, it's about reliability and experience.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-background p-8 rounded-2xl border hover:border-primary/50 transition-colors">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Symmetrical Speeds</h3>
                            <p className="text-muted-foreground">Upload as fast as you download. Perfect for video calls, cloud backups, and content creators.</p>
                        </div>
                        <div className="bg-background p-8 rounded-2xl border hover:border-primary/50 transition-colors">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Active Monitoring</h3>
                            <p className="text-muted-foreground">Proactive network scanning means we often fix issues before you even notice them.</p>
                        </div>
                        <div className="bg-background p-8 rounded-2xl border hover:border-primary/50 transition-colors">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Local Support</h3>
                            <p className="text-muted-foreground">Support teams based in your city, not a remote call center. Rapid on-ground response.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10" />
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Still not sure?</h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
                        Talk to our experts. We will analyse your usage and recommend the best plan for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="h-12 px-8 text-lg" variant="default" asChild>
                            <a href={`tel:${siteConfig.contact.phone}`}>
                                <Phone className="mr-2 h-5 w-5" />
                                Call Sales
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-lg bg-background" asChild>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
                                WhatsApp Us
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Booking Dialog */}
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                <DialogContent className="max-w-lg sm:max-w-xl p-0 overflow-hidden bg-background">
                    <div className="p-6 border-b bg-muted/30">
                        <DialogHeader>
                            <DialogTitle className="text-2xl">Get Connected 🚀</DialogTitle>
                            <DialogDescription>
                                Enter your details below. Our team will contact you within 2 business hours.
                            </DialogDescription>
                        </DialogHeader>
                    </div>
                    <div className="p-6">
                        <BookInstallationForm
                            selectedPlan={selectedPlan}
                            onSuccess={() => setIsBookingOpen(false)}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
