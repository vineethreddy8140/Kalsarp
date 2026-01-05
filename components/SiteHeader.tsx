"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const services = [
  { href: "/kalsarpa", label: "KalSarpa Yog" },
  { href: "/narayan-nagbali", label: "Narayan Nagbali" },
  { href: "/tripindi", label: "Tripindi Shraddha" },
  { href: "/mahamritunjay", label: "Mahamrityunjaya Jap" },
  { href: "/rudra-abhishek", label: "Rudra Abhishek" },
  { href: "/muhurtas", label: "Muhurtas" },
];

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link href={href} className={`nav-link ${active ? "active" : ""}`}>
      {children}
    </Link>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false); // mobile
  const [svcOpen, setSvcOpen] = useState(false); // desktop dropdown
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) {
        setSvcOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        {/* Brand */}
        <Link href="/" className="brand">
          <span className="brand-mark">ॐ</span>
          <span className="brand-text">
            Shree Ajit Vasant <span className="brand-strong">Chandwadkar</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop" ref={menuRef}>
          <NavLink href="/">Home</NavLink>

          <button
            className={`nav-link nav-btn ${svcOpen ? "active" : ""}`}
            onClick={() => setSvcOpen((v) => !v)}
            type="button"
            aria-haspopup="menu"
            aria-expanded={svcOpen}
          >
            Services <span className="caret">▾</span>
          </button>

          {svcOpen && (
            <div className="dropdown" role="menu">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="dropdown-item"
                  onClick={() => setSvcOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          <NavLink href="/shirdi">Shirdi</NavLink>
          <NavLink href="/how-to-reach">How to Reach</NavLink>
          <NavLink href="/contact">Contact</NavLink>

          {/* CTA */}
          <a
            className="nav-cta"
            href="https://wa.me/919371004172"
            target="_blank"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-panel">
          <Link className="mobile-link" href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <div className="mobile-group">
            <div className="mobile-group-title">Services</div>
            {services.map((s) => (
              <Link
                key={s.href}
                className="mobile-link"
                href={s.href}
                onClick={() => setOpen(false)}
              >
                {s.label}
              </Link>
            ))}
          </div>

          <Link
            className="mobile-link"
            href="/shirdi"
            onClick={() => setOpen(false)}
          >
            Shirdi
          </Link>

          <Link
            className="mobile-link"
            href="/how-to-reach"
            onClick={() => setOpen(false)}
          >
            How to Reach
          </Link>

          <Link
            className="mobile-link"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

          <a
            className="mobile-cta"
            href="https://wa.me/919371004172"
            target="_blank"
          >
            💬 WhatsApp Now
          </a>
        </div>
      )}
    </header>
  );
}
