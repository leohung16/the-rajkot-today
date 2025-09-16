import Link from "next/link";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { siteConfig, getWhatsAppLink } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-12 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-sm text-black/70 dark:text-white/70">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center group">
            <div className="flex flex-col">
              <div className="flex items-center whitespace-nowrap leading-none">
                <span className="text-xl font-extrabold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">The Rajkot</span>
                <span className="ml-2 text-[9px] font-bold uppercase text-white bg-red-600 px-2 py-0.5 rounded-full">Today</span>
              </div>
              <div className="text-[8px] text-gray-600 dark:text-gray-400 font-medium tracking-wide uppercase mt-1 whitespace-nowrap">
                Your Trusted News Source
              </div>
            </div>
          </div>
          <p className="text-xs whitespace-nowrap">
            © {new Date().getFullYear()} Built by {siteConfig.teamName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <div className="flex items-center gap-2">
              <a aria-label="Instagram" href="https://www.instagram.com/the_rajkot_today?igsh=eWVsYjQ0OXRjdGt5&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-black/10 dark:border-white/15 flex items-center justify-center text-black/70 dark:text-white/70 hover:text-red-600 hover:border-red-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 6.001A6 6 0 1 0 12 18a6 6 0 0 0 0-11.999z"/></svg>
              </a>
              <a aria-label="YouTube" href="https://www.youtube.com/@therajkottoday" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-black/10 dark:border-white/15 flex items-center justify-center text-black/70 dark:text-white/70 hover:text-red-600 hover:border-red-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a aria-label="Twitter" href="https://x.com/the_rajkot?s=21" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-black/10 dark:border-white/15 flex items-center justify-center text-black/70 dark:text-white/70 hover:text-red-600 hover:border-red-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zM17.083 19.77h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a aria-label="WhatsApp" href="https://wa.me/917265010921" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-black/10 dark:border-white/15 flex items-center justify-center text-black/70 dark:text-white/70 hover:text-red-600 hover:border-red-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
              </a>
            </div>
            <LocaleSwitcher />
          </div>
          <div className="mt-3 text-xs opacity-90 w-full">
            <div className="flex flex-wrap items-start gap-x-4 gap-y-2">
              <div className="flex items-start gap-2 basis-full sm:basis-auto max-w-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
                <span className="break-words leading-snug sm:leading-normal">{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm3.2 1l6.8 5.1L19.8 5H5.2zM20 19V7.25l-8 6-8-6V19h16z"/></svg>
                <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.85 22 2 13.15 2 2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/></svg>
                <a className="underline" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
                <a className="underline" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


