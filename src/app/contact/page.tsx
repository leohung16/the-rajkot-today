import ContactClient from "./ContactClient";
import { siteConfig, getWhatsAppLink } from "@/config/site";

export default function ContactPage() {
  return (
    <>
      <div className="text-sm text-black/70 dark:text-white/70 mb-4">
        <div>{siteConfig.address}</div>
        <div className="mt-1">
          <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <span className="mx-2">•</span>
          <a className="underline" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
          <span className="mx-2">•</span>
          <a className="underline" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
      <ContactClient />
    </>
  );
}


