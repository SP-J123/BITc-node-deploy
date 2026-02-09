"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";

const navigation = {
    retail: [
        { name: "Broadband Plans", href: "/plans" },
        { name: "Coverage Areas", href: "/coverage" },
    ],
    business: [
        { name: "ILL / Leased Lines", href: "/business/ill" },
        { name: "Enterprise Solutions", href: "/services" },
    ],
    support: [
        { name: "Help & FAQs", href: "/support" },
        { name: "Contact Us", href: "/contact" },
    ],
};

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-cyan-500">
                            <span className="text-lg font-bold text-white">B</span>
                        </div>
                        <span className="text-xl font-bold text-foreground">
                            {siteConfig.company.name}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {/* Retail Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-1">
                                    Retail <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                {navigation.retail.map((item) => (
                                    <DropdownMenuItem key={item.name} asChild>
                                        <Link href={item.href}>{item.name}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Business Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-1">
                                    Business <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                {navigation.business.map((item) => (
                                    <DropdownMenuItem key={item.name} asChild>
                                        <Link href={item.href}>{item.name}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Support Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-1">
                                    Support <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                {navigation.support.map((item) => (
                                    <DropdownMenuItem key={item.name} asChild>
                                        <Link href={item.href}>{item.name}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Button variant="ghost" asChild>
                            <Link href="/about">About</Link>
                        </Button>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center space-x-3">
                        <ThemeToggle />
                        <Button variant="outline" size="sm" asChild>
                            <a href={`tel:${siteConfig.contact.phone}`}>
                                <Phone className="mr-2 h-4 w-4" />
                                Call Us
                            </a>
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-600/90" asChild>
                            <Link href="/plans">Get Started</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="flex lg:hidden items-center space-x-2">
                        <ThemeToggle />
                        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                <div className="flex flex-col space-y-6 mt-8">
                                    {/* Retail Section */}
                                    <div>
                                        <h3 className="font-semibold text-lg mb-3 text-muted-foreground">Retail</h3>
                                        <div className="flex flex-col space-y-2">
                                            {navigation.retail.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="text-foreground hover:text-primary py-2"
                                                    onClick={() => setMobileOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Business Section */}
                                    <div>
                                        <h3 className="font-semibold text-lg mb-3 text-muted-foreground">Business</h3>
                                        <div className="flex flex-col space-y-2">
                                            {navigation.business.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="text-foreground hover:text-primary py-2"
                                                    onClick={() => setMobileOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Support Section */}
                                    <div>
                                        <h3 className="font-semibold text-lg mb-3 text-muted-foreground">Support</h3>
                                        <div className="flex flex-col space-y-2">
                                            {navigation.support.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="text-foreground hover:text-primary py-2"
                                                    onClick={() => setMobileOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        href="/about"
                                        className="text-foreground hover:text-primary py-2 font-medium"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        About Us
                                    </Link>

                                    {/* Mobile CTAs */}
                                    <div className="flex flex-col space-y-3 pt-4 border-t">
                                        <Button variant="outline" asChild>
                                            <a href={`tel:${siteConfig.contact.phone}`}>
                                                <Phone className="mr-2 h-4 w-4" />
                                                Call Us
                                            </a>
                                        </Button>
                                        <Button className="bg-gradient-to-r from-primary to-cyan-600" asChild>
                                            <Link href="/plans" onClick={() => setMobileOpen(false)}>
                                                Get Started
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
