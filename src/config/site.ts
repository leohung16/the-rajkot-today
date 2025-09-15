export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://allzyapp.in",
  brandName: "The Rajkot Today",
  teamName: "allzygroup",
  address: "University Marg, Rajkot 360005, Gujarat, India",
  email: "support@allzyapp.in",
  phone: "+91 7265010921",
  whatsapp: "+91 7265010921",
};

export function getWhatsAppLink(): string {
  const digits = siteConfig.whatsapp.replace(/\D/g, "");
  const intl = digits.startsWith("91") ? digits : `91${digits}`;
  return `https://wa.me/${intl}`;
}


