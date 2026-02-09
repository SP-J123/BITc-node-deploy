"use client";

import { useState, useEffect } from "react";
import { Download, Filter, Loader2, Check, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getLeads, updateLeadStatus } from "@/app/actions/leads";
import { logout } from "@/app/actions/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// Type definition (reused)
type Lead = {
    id: string;
    type: string;
    name: string | null;
    phone: string;
    email: string | null;
    city: string | null;
    address: string | null;
    pincode: string | null;
    plan: string | null;
    company: string | null;
    bandwidth: string | null;
    message: string | null;
    status: string;
    createdAt: Date;
};

const leadTypes = [
    { value: "all", label: "All Types" },
    { value: "availability", label: "Availability Check" },
    { value: "installation", label: "Installation" },
    { value: "enterprise", label: "Enterprise Quote" },
    { value: "contact", label: "Contact" },
    { value: "coverage", label: "Coverage Request" },
];

export function LeadsDashboard() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [typeFilter, setTypeFilter] = useState("all");
    const [search, setSearch] = useState("");
    const router = useRouter();

    useEffect(() => {
        loadLeads();
    }, []);

    useEffect(() => {
        let filtered = leads;

        if (typeFilter !== "all") {
            filtered = filtered.filter((lead) => lead.type === typeFilter);
        }

        if (search) {
            const searchLower = search.toLowerCase();
            filtered = filtered.filter(
                (lead) =>
                    lead.name?.toLowerCase().includes(searchLower) ||
                    lead.phone.includes(search) ||
                    lead.email?.toLowerCase().includes(searchLower) ||
                    lead.city?.toLowerCase().includes(searchLower)
            );
        }

        setFilteredLeads(filtered);
    }, [leads, typeFilter, search]);

    const loadLeads = async () => {
        setIsLoading(true);
        const data = await getLeads();
        setLeads(data as Lead[]);
        setIsLoading(false);
    };

    const handleStatusChange = async (id: string, status: string) => {
        const result = await updateLeadStatus(id, status);
        if (result.success) {
            setLeads((prev) =>
                prev.map((lead) => (lead.id === id ? { ...lead, status } : lead))
            );
            toast.success("Status updated");
        } else {
            toast.error("Failed to update status");
        }
    };

    const handleLogout = async () => {
        await logout();
        router.refresh();
    };

    const exportToCSV = () => {
        const headers = ["ID", "Type", "Name", "Phone", "Email", "City", "Plan", "Company", "Status", "Created"];
        const rows = filteredLeads.map((lead) => [
            lead.id,
            lead.type,
            lead.name || "",
            lead.phone,
            lead.email || "",
            lead.city || "",
            lead.plan || "",
            lead.company || "",
            lead.status,
            new Date(lead.createdAt).toISOString(),
        ]);

        const csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");
        const blob = new Blob([csvContent], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
        a.click();
    };

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h1 className="text-3xl font-bold">Leads Dashboard</h1>
                <div className="flex gap-2">
                    <Button onClick={exportToCSV} variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Export CSV
                    </Button>
                    <Button onClick={handleLogout} variant="destructive">
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </Button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {leadTypes.slice(1).map((type) => {
                    const count = leads.filter((l) => l.type === type.value).length;
                    return (
                        <Card key={type.value}>
                            <CardContent className="p-4 text-center">
                                <p className="text-2xl font-bold">{count}</p>
                                <p className="text-sm text-muted-foreground">{type.label}</p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {leadTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Input
                    placeholder="Search by name, phone, email, city..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="max-w-sm"
                />
            </div>

            {/* Leads Table */}
            {isLoading ? (
                <div className="flex justify-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
            ) : filteredLeads.length === 0 ? (
                <Card>
                    <CardContent className="py-12 text-center text-muted-foreground">
                        No leads found.
                    </CardContent>
                </Card>
            ) : (
                <div className="overflow-x-auto rounded-md border">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b bg-muted/50">
                                <th className="p-3 text-left text-sm font-medium">Type</th>
                                <th className="p-3 text-left text-sm font-medium">Contact</th>
                                <th className="p-3 text-left text-sm font-medium">Details</th>
                                <th className="p-3 text-left text-sm font-medium">Status</th>
                                <th className="p-3 text-left text-sm font-medium">Date</th>
                                <th className="p-3 text-left text-sm font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredLeads.map((lead) => (
                                <tr key={lead.id} className="border-b hover:bg-muted/30">
                                    <td className="p-3">
                                        <Badge variant="outline" className="capitalize">
                                            {lead.type}
                                        </Badge>
                                    </td>
                                    <td className="p-3">
                                        <p className="font-medium">{lead.name || "—"}</p>
                                        <p className="text-sm text-muted-foreground">{lead.phone}</p>
                                        <p className="text-sm text-muted-foreground">{lead.email || "—"}</p>
                                    </td>
                                    <td className="p-3 max-w-xs">
                                        {lead.city && <p className="text-sm">City: {lead.city}</p>}
                                        {lead.plan && <p className="text-sm">Plan: {lead.plan}</p>}
                                        {lead.company && <p className="text-sm">Company: {lead.company}</p>}
                                        {lead.bandwidth && <p className="text-sm">Bandwidth: {lead.bandwidth}</p>}
                                        {lead.message && (
                                            <p className="text-sm text-muted-foreground truncate">{lead.message}</p>
                                        )}
                                    </td>
                                    <td className="p-3">
                                        <Select
                                            value={lead.status}
                                            onValueChange={(v) => handleStatusChange(lead.id, v)}
                                        >
                                            <SelectTrigger className="w-[120px]">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="new">New</SelectItem>
                                                <SelectItem value="contacted">Contacted</SelectItem>
                                                <SelectItem value="converted">Converted</SelectItem>
                                                <SelectItem value="closed">Closed</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </td>
                                    <td className="p-3 text-sm text-muted-foreground">
                                        {new Date(lead.createdAt).toLocaleDateString("en-IN")}
                                    </td>
                                    <td className="p-3">
                                        <div className="flex gap-1">
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className="h-8 w-8 text-green-600"
                                                onClick={() => handleStatusChange(lead.id, "converted")}
                                            >
                                                <Check className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className="h-8 w-8 text-red-600"
                                                onClick={() => handleStatusChange(lead.id, "closed")}
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}
