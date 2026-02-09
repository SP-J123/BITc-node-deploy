"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { enterpriseQuoteSchema, type EnterpriseQuoteInput } from "@/lib/validations";
import { submitEnterpriseQuote } from "@/app/actions/leads";
import { siteConfig } from "@/config/site";
import { toast } from "sonner";

export function EnterpriseQuoteForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<EnterpriseQuoteInput>({
        resolver: zodResolver(enterpriseQuoteSchema),
    });

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=I submitted an enterprise quote request. Looking forward to hearing from your team.`;

    const onSubmit = async (data: EnterpriseQuoteInput) => {
        setIsSubmitting(true);
        try {
            const result = await submitEnterpriseQuote(data);
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
                <h3 className="text-xl font-semibold mb-2">Quote Request Submitted!</h3>
                <p className="text-muted-foreground mb-4">
                    Our enterprise team will contact you within 24 hours.
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
                <div className="col-span-2 space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input id="company" {...register("company")} placeholder="Your company name" />
                    {errors.company && <p className="text-sm text-destructive">{errors.company.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="name">Contact Person *</Label>
                    <Input id="name" {...register("name")} placeholder="Your name" />
                    {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="designation">Designation</Label>
                    <Input id="designation" {...register("designation")} placeholder="IT Manager" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" {...register("email")} placeholder="you@company.com" />
                    {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" {...register("phone")} placeholder="+91 XXXXXXXXXX" />
                    {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" {...register("city")} placeholder="Ahmedabad" />
                    {errors.city && <p className="text-sm text-destructive">{errors.city.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="bandwidth">Required Bandwidth *</Label>
                    <Select onValueChange={(v) => setValue("bandwidth", v)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select bandwidth" />
                        </SelectTrigger>
                        <SelectContent>
                            {["10 Mbps", "25 Mbps", "50 Mbps", "100 Mbps", "200 Mbps", "500 Mbps", "1 Gbps", "Custom"].map((bw) => (
                                <SelectItem key={bw} value={bw}>{bw}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.bandwidth && <p className="text-sm text-destructive">{errors.bandwidth.message}</p>}
                </div>

                <div className="col-span-2 space-y-2">
                    <Label htmlFor="address">Installation Address *</Label>
                    <Input id="address" {...register("address")} placeholder="Complete office address" />
                    {errors.address && <p className="text-sm text-destructive">{errors.address.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="contractTerm">Contract Term *</Label>
                    <Select onValueChange={(v) => setValue("contractTerm", v)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select term" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="12">12 Months</SelectItem>
                            <SelectItem value="24">24 Months</SelectItem>
                            <SelectItem value="36">36 Months</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.contractTerm && <p className="text-sm text-destructive">{errors.contractTerm.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="staticIp">Static IP Required *</Label>
                    <Select onValueChange={(v) => setValue("staticIp", v as "no" | "yes-single" | "yes-block")}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="yes-single">Yes - Single IP</SelectItem>
                            <SelectItem value="yes-block">Yes - IP Block</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.staticIp && <p className="text-sm text-destructive">{errors.staticIp.message}</p>}
                </div>

                <div className="col-span-2 space-y-2">
                    <Label htmlFor="message">Additional Requirements</Label>
                    <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Any specific requirements, redundancy needs, etc."
                        rows={3}
                    />
                </div>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                    </>
                ) : (
                    "Submit Quote Request"
                )}
            </Button>
        </form>
    );
}
