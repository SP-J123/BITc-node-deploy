"use server";

import prisma from "@/lib/prisma";
import {
    checkAvailabilitySchema,
    bookInstallationSchema,
    enterpriseQuoteSchema,
    contactSchema,
    requestCoverageSchema,
    type CheckAvailabilityInput,
    type BookInstallationInput,
    type EnterpriseQuoteInput,
    type ContactInput,
    type RequestCoverageInput,
} from "@/lib/validations";

export type ActionResult = {
    success: boolean;
    message: string;
    leadId?: string;
};

export async function checkAvailability(
    data: CheckAvailabilityInput
): Promise<ActionResult> {
    try {
        const validated = checkAvailabilitySchema.parse(data);

        const lead = await prisma.lead.create({
            data: {
                type: "availability",
                phone: validated.phone,
                pincode: validated.pincode,
                locality: validated.locality,
            },
        });

        return {
            success: true,
            message: "Thank you! Our team will contact you within 2 hours to confirm service availability.",
            leadId: lead.id,
        };
    } catch (error) {
        console.error("Check availability error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again or call us directly.",
        };
    }
}

export async function bookInstallation(
    data: BookInstallationInput
): Promise<ActionResult> {
    try {
        const validated = bookInstallationSchema.parse(data);

        const lead = await prisma.lead.create({
            data: {
                type: "installation",
                name: validated.name,
                phone: validated.phone,
                email: validated.email,
                address: validated.address,
                city: validated.city,
                pincode: validated.pincode,
                plan: validated.plan,
            },
        });

        return {
            success: true,
            message: "Installation booked successfully! Our team will contact you within 2 hours.",
            leadId: lead.id,
        };
    } catch (error) {
        console.error("Book installation error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again or call us directly.",
        };
    }
}

export async function submitEnterpriseQuote(
    data: EnterpriseQuoteInput
): Promise<ActionResult> {
    try {
        const validated = enterpriseQuoteSchema.parse(data);

        const lead = await prisma.lead.create({
            data: {
                type: "enterprise",
                company: validated.company,
                name: validated.name,
                designation: validated.designation,
                email: validated.email,
                phone: validated.phone,
                city: validated.city,
                address: validated.address,
                bandwidth: validated.bandwidth,
                contractTerm: validated.contractTerm,
                staticIp: validated.staticIp,
                message: validated.message,
            },
        });

        return {
            success: true,
            message: "Quote request submitted! Our enterprise team will contact you within 24 hours.",
            leadId: lead.id,
        };
    } catch (error) {
        console.error("Enterprise quote error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again or contact our sales team.",
        };
    }
}

export async function submitContactForm(
    data: ContactInput
): Promise<ActionResult> {
    try {
        const validated = contactSchema.parse(data);

        const lead = await prisma.lead.create({
            data: {
                type: "contact",
                name: validated.name,
                email: validated.email,
                phone: validated.phone,
                subject: validated.subject,
                message: validated.message,
            },
        });

        return {
            success: true,
            message: "Message sent! We'll get back to you soon.",
            leadId: lead.id,
        };
    } catch (error) {
        console.error("Contact form error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again.",
        };
    }
}

export async function requestCoverage(
    data: RequestCoverageInput
): Promise<ActionResult> {
    try {
        const validated = requestCoverageSchema.parse(data);

        const lead = await prisma.lead.create({
            data: {
                type: "coverage",
                name: validated.name,
                phone: validated.phone,
                locality: validated.locality,
                city: validated.city,
                pincode: validated.pincode,
            },
        });

        return {
            success: true,
            message: "Coverage request submitted! We'll notify you when we expand to your area.",
            leadId: lead.id,
        };
    } catch (error) {
        console.error("Request coverage error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again.",
        };
    }
}

// Admin functions
import { checkAuth } from "@/app/actions/auth";

export async function getLeads(type?: string) {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) return [];

    try {
        const leads = await prisma.lead.findMany({
            where: type ? { type } : undefined,
            orderBy: { createdAt: "desc" },
        });
        return leads;
    } catch (error) {
        console.error("Get leads error:", error);
        return [];
    }
}

export async function updateLeadStatus(id: string, status: string) {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) return { success: false, message: "Unauthorized" };

    try {
        await prisma.lead.update({
            where: { id },
            data: { status },
        });
        return { success: true };
    } catch (error) {
        console.error("Update lead error:", error);
        return { success: false };
    }
}
