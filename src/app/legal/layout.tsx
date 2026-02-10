"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, FileText, Lock, AlertTriangle, RefreshCcw } from "lucide-react";

const sidebarNavItems = [
    {
        title: "Privacy Policy",
        href: "/legal/privacy",
        icon: Lock,
    },
    {
        title: "Terms of Service",
        href: "/legal/terms",
        icon: FileText,
    },
    {
        title: "Acceptable Use Policy",
        href: "/legal/aup",
        icon: AlertTriangle,
    },
    {
        title: "Refund Policy",
        href: "/legal/refund",
        icon: RefreshCcw,
    },
];

interface LegalLayoutProps {
    children: React.ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-background">
            {/* Header Strip */}
            <div className="bg-muted/50 border-b py-12">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-3 mb-4 text-primary">
                        <Shield className="h-8 w-8" />
                        <h1 className="text-3xl font-bold tracking-tight">Legal Center</h1>
                    </div>
                    <p className="text-muted-foreground max-w-2xl">
                        Transparency is key to our relationship. Here you'll find important information regarding our services, your privacy, and our terms of use.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-12 gap-10">
                    {/* Sidebar Navigation */}
                    <aside className="lg:col-span-3">
                        <nav className="sticky top-24 space-y-2">
                            {sidebarNavItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-muted",
                                        pathname === item.href
                                            ? "bg-primary/10 text-primary hover:bg-primary/15"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    </aside>

                    {/* Content Area */}
                    <div className="lg:col-span-9">
                        <div className="prose prose-slate dark:prose-invert max-w-none">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
