"use server";

import { cookies } from "next/headers";

const COOKIE_NAME = "admin_session";
const MAX_AGE = 60 * 60 * 24; // 24 hours

export async function login(password: string) {
    // Use server-side environment variable (no NEXT_PUBLIC prefix)
    const validPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (password === validPassword) {
        const cookieStore = await cookies();
        cookieStore.set(COOKIE_NAME, "true", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: MAX_AGE,
            path: "/",
            sameSite: "strict",
        });
        return { success: true };
    }

    return { success: false, message: "Invalid password" };
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_NAME);
    return { success: true };
}

export async function checkAuth() {
    const cookieStore = await cookies();
    return cookieStore.has(COOKIE_NAME);
}
