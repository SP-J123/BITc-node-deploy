import Link from "next/link";
import { ArrowRight, Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { plans, formatPrice } from "@/data/plans";

export function PlansPreview() {
    // Show only first 4 plans for preview
    const previewPlans = plans.slice(0, 4);

    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <Badge variant="outline" className="mb-4">
                        <Zap className="h-3 w-3 mr-1" />
                        Broadband Plans
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Choose Your Perfect Plan
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        From everyday browsing to power-user speeds, we have a plan that fits your needs.
                        All plans include free Wi-Fi router and 24×7 support.
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {previewPlans.map((plan) => (
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
                                        <span className="text-2xl font-bold">{formatPrice(plan.monthlyPrice)}</span>
                                        <span className="text-muted-foreground">/month</span>
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
                                    {plan.installationFeeText === "Free" && (
                                        <li className="flex items-center gap-2 text-sm">
                                            <Check className="h-4 w-4 text-green-500 shrink-0" />
                                            <span>Free installation</span>
                                        </li>
                                    )}
                                    {plan.routerDepositText === "Free router" && (
                                        <li className="flex items-center gap-2 text-sm">
                                            <Check className="h-4 w-4 text-green-500 shrink-0" />
                                            <span>Free Wi-Fi router</span>
                                        </li>
                                    )}
                                    <li className="flex items-center gap-2 text-sm">
                                        <Check className="h-4 w-4 text-green-500 shrink-0" />
                                        <span>24×7 support</span>
                                    </li>
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    className={`w-full ${plan.popular
                                            ? "bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90"
                                            : ""
                                        }`}
                                    variant={plan.popular ? "default" : "outline"}
                                    asChild
                                >
                                    <Link href="/plans">
                                        Get Started
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center">
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/plans">
                            View All Plans & Compare
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
