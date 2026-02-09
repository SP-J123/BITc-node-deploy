export interface City {
    name: string;
    slug: string;
    status: "live" | "coming-soon";
    district?: string;
}

export const cities: City[] = [
    // Major cities - Live
    { name: "Ahmedabad", slug: "ahmedabad", status: "live", district: "Ahmedabad" },
    { name: "Vadodara", slug: "vadodara", status: "live", district: "Vadodara" },
    { name: "Surat", slug: "surat", status: "live", district: "Surat" },
    { name: "Rajkot", slug: "rajkot", status: "live", district: "Rajkot" },
    { name: "Gandhinagar", slug: "gandhinagar", status: "live", district: "Gandhinagar" },
    { name: "Bhavnagar", slug: "bhavnagar", status: "live", district: "Bhavnagar" },

    // Growing cities - Live
    { name: "Jamnagar", slug: "jamnagar", status: "live", district: "Jamnagar" },
    { name: "Junagadh", slug: "junagadh", status: "live", district: "Junagadh" },
    { name: "Anand", slug: "anand", status: "live", district: "Anand" },
    { name: "Mehsana", slug: "mehsana", status: "live", district: "Mehsana" },
    { name: "Nadiad", slug: "nadiad", status: "live", district: "Kheda" },
    { name: "Bharuch", slug: "bharuch", status: "live", district: "Bharuch" },

    // Coming soon cities
    { name: "Morbi", slug: "morbi", status: "coming-soon", district: "Morbi" },
    { name: "Navsari", slug: "navsari", status: "coming-soon", district: "Navsari" },
    { name: "Vapi", slug: "vapi", status: "coming-soon", district: "Valsad" },
    { name: "Valsad", slug: "valsad", status: "coming-soon", district: "Valsad" },
    { name: "Porbandar", slug: "porbandar", status: "coming-soon", district: "Porbandar" },
    { name: "Surendranagar", slug: "surendranagar", status: "coming-soon", district: "Surendranagar" },
    { name: "Patan", slug: "patan", status: "coming-soon", district: "Patan" },
    { name: "Godhra", slug: "godhra", status: "coming-soon", district: "Panchmahal" },
];

export const getLiveCities = (): City[] =>
    cities.filter(city => city.status === "live");

export const getComingSoonCities = (): City[] =>
    cities.filter(city => city.status === "coming-soon");

export const getCityBySlug = (slug: string): City | undefined =>
    cities.find(city => city.slug === slug);
