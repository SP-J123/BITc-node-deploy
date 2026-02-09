"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { requestCoverageSchema, type RequestCoverageInput } from "@/lib/validations";
import { requestCoverage } from "@/app/actions/leads";
import { toast } from "sonner";

export function RequestCoverageForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RequestCoverageInput>({
        resolver: zodResolver(requestCoverageSchema),
    });

    const onSubmit = async (data: RequestCoverageInput) => {
        setIsSubmitting(true);
        try {
            const result = await requestCoverage(data);
            if (result.success) {
                setIsSuccess(true);
                toast.success(result.message);
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
                <h3 className="text-xl font-semibold mb-2">Request Submitted!</h3>
                <p className="text-muted-foreground">
                    We'll notify you when we expand to your area.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="name">Your Name (Optional)</Label>
                <Input id="name" {...register("name")} placeholder="Your name" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="locality">Locality / Area *</Label>
                <Input id="locality" {...register("locality")} placeholder="Your locality or area name" />
                {errors.locality && <p className="text-sm text-destructive">{errors.locality.message}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" {...register("city")} placeholder="City name" />
                    {errors.city && <p className="text-sm text-destructive">{errors.city.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="pincode">Pincode *</Label>
                    <Input id="pincode" {...register("pincode")} placeholder="6-digit pincode" maxLength={6} />
                    {errors.pincode && <p className="text-sm text-destructive">{errors.pincode.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" {...register("phone")} placeholder="+91 XXXXXXXXXX" />
                {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                    </>
                ) : (
                    "Request Coverage"
                )}
            </Button>
        </form>
    );
}
