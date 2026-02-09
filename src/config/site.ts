export const siteConfig = {
  company: {
    name: "BitConnect",
    legalName: "BitConnect Technology Pvt. Ltd.",
    tagline: "Connecting Gujarat with Speed & Reliability",
    description: "A licensed Class-B ISP delivering reliable, affordable, and high-speed internet connectivity to businesses, institutions, and residential customers across Gujarat.",
    gstin: "24XXXXXXXXXXXXXX",
    cin: "U64202GJ20XXPTCXXXXXX",
    ispLicense: "Class B ISP (Gujarat Service Area)",
    foundedYear: "2020",
  },
  contact: {
    phone: "+91-9714008908",
    whatsapp: "+91-9714008908",
    email: "narendra@bitconnect.in",
    supportEmail: "narendra@bitconnect.in",
    salesEmail: "narendra@bitconnect.in",
    nocPhone: "+91-9714008908",
  },
  address: {
    line1: "R.s.No.629/3p, 631/1p2,632/3p3/p1",
    line2: "Plot No.62, Paliyad Road, Ananddham Green City-1",
    city: "Botad",
    state: "Gujarat",
    pincode: "364710",
    country: "India",
  },
  social: {
    facebook: "https://facebook.com/bitconnect",
    twitter: "https://twitter.com/bitconnect",
    instagram: "https://instagram.com/bitconnect",
    linkedin: "https://linkedin.com/company/bitconnect",
    youtube: "https://youtube.com/@bitconnect",
  },
  workingHours: "Mon-Sat: 10:00 AM - 7:00 PM IST",
  supportHours: "24×7 NOC Support",
  supportSLA: "2-hour response time",
  urls: {
    base: "https://bitconnect.in",
    speedTest: "https://fast.com",
  },
  stats: {
    uptime: "99.9%",
    customers: "500+",
    cities: "15+",
    experience: "5+",
  },
} as const;

export type SiteConfig = typeof siteConfig;
