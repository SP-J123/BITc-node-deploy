import { checkAuth } from "@/app/actions/auth";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { LeadsDashboard } from "@/components/admin/LeadsDashboard";

export default async function AdminPage() {
    const isAuthenticated = await checkAuth();

    return (
        <div className="container mx-auto px-4 py-8">
            {isAuthenticated ? (
                <LeadsDashboard />
            ) : (
                <AdminLoginForm />
            )}
        </div>
    );
}
