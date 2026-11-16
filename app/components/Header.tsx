
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Expertise", href: "/our-expertise" },
  { name: "Our Services", href: "/our-services" },
  { name: "Our Team", href: "/our-team" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-[1000] w-full border-b-1 border-b-[var(--gold)] bg-[var(--ivory)]">

      {/* Desktop / Mobile Header */}
      <div className="relative mx-auto flex h-[70px] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[80px] lg:px-0">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="relative z-10 flex shrink-0 items-center"
        >
          <img
            src="/images/logo.png"
            alt="SHGR Entertainment"
            className="h-[50px] w-[135px] object-contain lg:h-[55px] lg:w-[145px]"
          />
        </Link>

        {/* Desktop Navigation - Exact Center */}
        <nav className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 items-center gap-6 xl:gap-[30px] lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`group relative flex h-full items-center whitespace-nowrap font-heading text-[13px] font-semibold transition-colors duration-300 xl:text-[14px] ${
                  active
                    ? "text-[var(--red)]"
                    : "text-[var(--red-dark)] hover:text-[var(--red)]"
                }`}
              >
                {link.name}

                {/* Hover Underline */}
                <span
                  className={`absolute bottom-[17px] left-0 h-[2px] w-full origin-left bg-[image:var(--gradient-red)] transition-transform duration-300 ease-in-out ${
                    active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="relative z-10 hidden shrink-0 lg:block">
          <Link
            href="/partner-form"
            className="group flex h-[44px] w-[158px] items-center justify-center gap-2 rounded-[3px] bg-[image:var(--gradient-red)] font-body text-[11px] font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-gold)] xl:h-[46px] xl:w-[172px] xl:text-[12px]"
          >
            <span>Partner With Us</span>
            <ArrowRight
              size={15}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative z-10 flex h-[40px] w-[40px] items-center justify-center border border-[var(--border-gold)] text-[var(--red-dark)] transition-colors hover:bg-[var(--cream)] lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute left-0 top-full w-full border-b border-[var(--border-gold)] bg-[var(--black)] px-5 shadow-[var(--shadow-dark)] transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[600px] flex-col">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={`flex items-center justify-between border-b border-[rgba(249,197,38,0.15)] py-4 font-heading text-[14px] font-semibold transition-colors ${
                  active
                    ? "text-[var(--gold)]"
                    : "text-[var(--ivory)] hover:text-[var(--gold)]"
                }`}
              >
                {link.name}
                <ArrowUpRight
                  size={15}
                  className="text-[var(--gold-dark)]"
                />
              </Link>
            );
          })}

          <Link
            href="/partner-form"
            onClick={closeMenu}
            className="mt-5 flex h-[46px] items-center justify-center gap-3 rounded-[3px] bg-[image:var(--gradient-red)] font-body text-xs font-extrabold text-white"
          >
            Partner With Us
            <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
