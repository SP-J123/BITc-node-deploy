"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { bookInstallationSchema, type BookInstallationInput } from "@/lib/validations";
import { bookInstallation } from "@/app/actions/leads";
import { plans } from "@/data/plans";
import { getLiveCities } from "@/data/coverage";
import { siteConfig } from "@/config/site";
import { toast } from "sonner";

interface BookInstallationFormProps {
    selectedPlan?: string;
    onSuccess?: () => void;
}

export function BookInstallationForm({ selectedPlan, onSuccess }: BookInstallationFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const cities = getLiveCities();

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<BookInstallationInput>({
        resolver: zodResolver(bookInstallationSchema),
        defaultValues: {
            plan: selectedPlan || "",
        },
    });

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=I just booked an installation on your website. Looking forward to getting connected!`;

    const onSubmit = async (data: BookInstallationInput) => {
        setIsSubmitting(true);
        try {
            const result = await bookInstallation(data);
            if (result.success) {
                setIsSuccess(true);
                toast.success(result.message);
                onSuccess?.();
            } else {
                toast.error(result.message);
            }
        } catch {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Installation Booked!</h3>
                <p className="text-muted-foreground mb-4">
                    Our team will contact you within 2 hours.
                </p>
                <Button asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Chat with us on WhatsApp
                    </a>
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                        id="name"
                        {...register("name")}
                        placeholder="Your name"
                    />
                    {errors.name && (
                        <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                        id="phone"
                        {...register("phone")}
                        placeholder="+91 XXXXXXXXXX"
                    />
                    {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone.message}</p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your@email.com"
                />
                {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="address">Full Address *</Label>
                <Input
                    id="address"
                    {...register("address")}
                    placeholder="House/Flat, Street, Area"
                />
                {errors.address && (
                    <p className="text-sm text-destructive">{errors.address.message}</p>
                )}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Select onValueChange={(value) => setValue("city", value)} defaultValue={watch("city")}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                            {cities.map((city) => (
                                <SelectItem key={city.slug} value={city.name}>
                                    {city.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.city && (
                        <p className="text-sm text-destructive">{errors.city.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="pincode">Pincode *</Label>
                    <Input
                        id="pincode"
                        {...register("pincode")}
                        placeholder="6-digit pincode"
                        maxLength={6}
                    />
                    {errors.pincode && (
                        <p className="text-sm text-destructive">{errors.pincode.message}</p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="plan">Select Plan *</Label>
                <Select
                    onValueChange={(value) => setValue("plan", value)}
                    defaultValue={selectedPlan}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Choose a plan" />
                    </SelectTrigger>
                    <SelectContent>
                        {plans.map((plan) => (
                            <SelectItem key={plan.id} value={plan.id}>
                                {plan.name} - {plan.speed} {plan.speedUnit}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {errors.plan && (
                    <p className="text-sm text-destructive">{errors.plan.message}</p>
                )}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                    </>
                ) : (
                    "Book Installation"
                )}
            </Button>
        </form>
    );
}
