"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi, I'm interested in BitConnect broadband services.`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg transition-all hover:bg-green-600 hover:scale-105 hover:shadow-xl group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="h-6 w-6" />
            <span className="hidden sm:inline font-medium">Chat with us</span>

            {/* Pulse animation */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-300"></span>
            </span>
        </a>
    );
}
