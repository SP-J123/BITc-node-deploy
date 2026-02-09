import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://bitconnect.in";
    const currentDate = new Date();

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/plans`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/business/ill`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/coverage`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/support`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/legal/privacy`,
            lastModified: currentDate,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/legal/terms`,
            lastModified: currentDate,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/legal/aup`,
            lastModified: currentDate,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/legal/refund`,
            lastModified: currentDate,
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}
