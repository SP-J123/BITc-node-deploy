import { z } from "zod";

const phoneRegex = /^[+]?[0-9]{10,14}$/;
const pincodeRegex = /^[1-9][0-9]{5}$/;

export const checkAvailabilitySchema = z.object({
    pincode: z
        .string()
        .regex(pincodeRegex, "Please enter a valid 6-digit pincode"),
    locality: z.string().min(2, "Please enter your locality/area"),
    phone: z
        .string()
        .regex(phoneRegex, "Please enter a valid phone number"),
});

export type CheckAvailabilityInput = z.infer<typeof checkAvailabilitySchema>;

export const bookInstallationSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().regex(phoneRegex, "Please enter a valid phone number"),
    email: z.string().email("Please enter a valid email address"),
    address: z.string().min(10, "Please enter your complete address"),
    city: z.string().min(2, "Please select your city"),
    pincode: z.string().regex(pincodeRegex, "Please enter a valid 6-digit pincode"),
    plan: z.string().min(1, "Please select a plan"),
});

export type BookInstallationInput = z.infer<typeof bookInstallationSchema>;

export const enterpriseQuoteSchema = z.object({
    company: z.string().min(2, "Company name is required"),
    name: z.string().min(2, "Contact person name is required"),
    designation: z.string().optional(),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().regex(phoneRegex, "Please enter a valid phone number"),
    city: z.string().min(2, "Please enter your city"),
    address: z.string().min(10, "Please enter your complete address"),
    bandwidth: z.string().min(1, "Please select required bandwidth"),
    contractTerm: z.string().min(1, "Please select contract term"),
    staticIp: z.enum(["no", "yes-single", "yes-block"]),
    message: z.string().optional(),
});

export type EnterpriseQuoteInput = z.infer<typeof enterpriseQuoteSchema>;

export const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().regex(phoneRegex, "Please enter a valid phone number"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(20, "Message must be at least 20 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const requestCoverageSchema = z.object({
    locality: z.string().min(2, "Please enter your locality/area"),
    city: z.string().min(2, "Please enter your city"),
    pincode: z.string().regex(pincodeRegex, "Please enter a valid 6-digit pincode"),
    phone: z.string().regex(phoneRegex, "Please enter a valid phone number"),
    name: z.string().optional(),
});

export type RequestCoverageInput = z.infer<typeof requestCoverageSchema>;
