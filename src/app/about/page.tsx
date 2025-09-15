import { siteConfig, getWhatsAppLink } from "@/config/site";

export const metadata = {
  title: "About | The Rajkot Today",
  description:
    "About The Rajkot Today — purpose, editorial values, and contact information.",
};

export default function AboutPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-4">About The Rajkot Today</h1>
      <div className="space-y-4 text-black/80 dark:text-white/80">
        <p>
          The Rajkot Today is a local-first digital news portal covering Rajkot —
          from city updates and politics to business, sports, technology, and
          culture. Our aim is to deliver fast, factual, and mobile-friendly news
          to the community.
        </p>
        <p>
          We follow clear editorial values: accuracy, transparency, and service
          to our readers. Have a story tip or feedback? Reach out anytime.
        </p>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Contact</h2>
          <ul className="mt-2 text-sm">
            <li>Address: {siteConfig.address}</li>
            <li>Email: <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li>Phone: <a className="underline" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></li>
            <li>WhatsApp: <a className="underline" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">{siteConfig.whatsapp}</a></li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Team</h2>
          <p className="text-sm mt-2">allzygroup</p>
          <p className="text-sm mt-1">Editor: Ruturaj Parmar</p>
        </div>
      </div>
    </div>
  );
}


