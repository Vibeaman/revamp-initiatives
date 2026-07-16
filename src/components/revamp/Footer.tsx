import { Mail, Phone, Instagram, Globe, Facebook, Linkedin } from "lucide-react";
import { Music2 } from "lucide-react";
import logo from "@/assets/logo.png";

const contacts = [
  { icon: Mail, label: "revampinitiatives@gmail.com", href: "mailto:revampinitiatives@gmail.com" },
  { icon: Phone, label: "0909 000 9999", href: "tel:09090009999" },
];

const socials = [
  { icon: Instagram, label: "@therevamp_initiatives", href: "https://instagram.com/therevamp_initiatives" },
  { icon: Facebook, label: "The Revamp Initiatives", href: "https://facebook.com/TheRevampInitiatives" },
  { icon: Music2, label: "@therevampinitiatives", href: "https://tiktok.com/@therevampinitiatives" },
  { icon: Linkedin, label: "Revamp Initiatives", href: "https://linkedin.com/company/revamp-initiatives" },
  { icon: Globe, label: "therevampinitiatives.org", href: "https://www.therevampinitiatives.org" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Revamp Initiatives" className="h-12 w-12 rounded-full" />
              <span className="text-display text-2xl font-bold text-gold">Revamp Initiatives</span>
            </div>
            <p className="mt-5 max-w-md text-cream/70">
              A Nigerian creative social impact hub empowering vulnerable communities through creativity,
              skills, and sustainable development.
            </p>
          </div>
          <div>
            <h4 className="text-display text-sm font-semibold uppercase tracking-[0.25em] text-gold">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              {contacts.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a href={href} className="group inline-flex items-center gap-3 hover:text-gold">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/15 bg-cream/5 transition-colors group-hover:border-gold/60 group-hover:bg-gold/10 group-hover:text-gold">
                      <Icon size={15} strokeWidth={2} />
                    </span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-display text-sm font-semibold uppercase tracking-[0.25em] text-gold">Follow</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              {socials.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="group inline-flex items-center gap-3 hover:text-gold"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/15 bg-cream/5 transition-colors group-hover:border-gold/60 group-hover:bg-gold/10 group-hover:text-gold">
                      <Icon size={15} strokeWidth={2} />
                    </span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={`chip-${label}`}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-ink"
                >
                  <Icon size={16} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} Revamp Initiatives. Encourage creativity for social impact.</p>
          <p>Made with intention in Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
