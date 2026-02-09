"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { submitContactForm } from "@/app/actions/leads";
import { toast } from "sonner";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactInput>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactInput) => {
        setIsSubmitting(true);
        try {
            const result = await submitContactForm(data);
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
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                    We'll get back to you as soon as possible.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input id="name" {...register("name")} placeholder="John Doe" />
                    {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" {...register("phone")} placeholder="+91 XXXXXXXXXX" />
                    {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" {...register("email")} placeholder="you@example.com" />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input id="subject" {...register("subject")} placeholder="How can we help?" />
                {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    "Send Message"
                )}
            </Button>
        </form>
    );
}
