import Link from "next/link";
import { ArrowLeft, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <div className="p-4 rounded-full bg-muted mb-4">
                <WifiOff className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
                The page you are looking for doesn't exist or has been moved.
                It looks like you've hit a dead end in our fiber network.
            </p>
            <div className="flex gap-4">
                <Button asChild>
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href="/contact">Contact Support</Link>
                </Button>
            </div>
        </div>
    );
}
