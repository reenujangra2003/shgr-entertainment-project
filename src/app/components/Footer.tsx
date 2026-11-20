"use client";

import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ArrowUp,
  ArrowRight,
  Send,
} from "lucide-react";
import { useProfile } from "@/context/ProfileContext";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "What We Do", href: "/#services" },
  { label: "Our Genres", href: "/#genres" },
  { label: "Why SHGR", href: "/#why-shgr" },
  { label: "Our Process", href: "/#process" },
  { label: "Projects", href: "/#projects" },
  { label: "Collaborate", href: "/#collaborate" },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Footer() {
  const profile = useProfile();
  const socialLinks = [
    {
      name: "Instagram",
      url: profile?.instagram,
      icon: FaInstagram,
    },
    {
      name: "Facebook",
      url: profile?.facebook,
      icon: FaFacebook,
    },
    {
      name: "YouTube",
      url: profile?.youtube,
      icon: FaYoutube,
    },
  ].filter((social) => social.url);

  console.log("Shared Profile:", profile);
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Enter your phone number.";
    } else if (!/^[+]?[\d\s()-]{7,18}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Enter a subject.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Enter your message.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Connect your contact API here.
    console.log("Contact form data:", form);

    setSubmitted(true);
    setForm(initialForm);
  };

  const inputClass =
    "block min-h-[44px] w-full rounded-none border-0 border-b border-white/50 bg-transparent px-3 py-3 font-body text-[12px] text-white outline-none transition-colors duration-300 placeholder:text-white/75 focus:border-[var(--gold)] focus:ring-0";

  const errorClass = "mt-1 block text-[10px] text-[var(--gold-light)]";

  return (
    <footer
      className="overflow-hidden bg-[var(--red-dark)] text-white"
      id="contact"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contact CTA */}
        <div className="flex flex-col items-start justify-between gap-7 border-b border-white/30 py-10 sm:py-12 lg:flex-row lg:items-center lg:py-9">
          <div>
            <span className="mb-3 block text-[10px] font-extrabold tracking-[2px] text-[var(--gold-light)]">
              LET&apos;S CONNECT
            </span>

            <h2 className="font-heading text-[36px] font-medium leading-[1.18] text-white sm:text-[46px] lg:text-[55px]">
              Have a story to tell?
              <br />
              <em className="text-[var(--gold-light)]">Let&apos;s talk.</em>
            </h2>
          </div>

          <Link
            href="/partner-form"
            className="group inline-flex items-center gap-3 border-b border-[var(--gold-light)] pb-2 text-[11px] font-extrabold tracking-[1px] text-white transition-all duration-300 hover:gap-5"
          >
            PARTNER WITH US
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Footer Main Grid */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.1fr_0.7fr_1.1fr_1.3fr] lg:gap-9 lg:py-14 xl:gap-10">
          {/* Brand */}
          <div className="max-w-[400px]">
            <Link
              href="/"
              className="mb-5 inline-flex"
              aria-label="SHGR Entertainment Home"
            >
              <img
                src="/images/logo.png"
                alt="SHGR Entertainment"
                className="h-auto w-[145px] object-contain"
              />
            </Link>

            <h3 className="mb-4 font-heading text-[20px] font-semibold leading-[1.55] text-white">
              Stories That Inspire.
              <br />
              <span className="italic text-[var(--gold-light)]">
                Cinema That Endures.
              </span>
            </h3>

            <p className="font-body text-[13px] leading-[1.9] text-white/85">
              An Indian film and web series production house creating devotional
              and fiction stories rooted in culture, emotion and craft.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-heading text-[21px] font-semibold text-[var(--gold-light)]">
              Explore
            </h4>

            <ul className="m-0 list-none space-y-3 p-0">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-[13px] font-semibold text-white/85 transition-colors duration-300 hover:text-[var(--gold-light)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="mb-6 font-heading text-[21px] font-semibold text-[var(--gold-light)]">
              Contact & Offices
            </h4>

            <div className="space-y-5">
              {/*  Office */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[var(--gold-light)]"
                />
                <div>
                  <span className="mb-1 block text-[9px] font-extrabold tracking-[1px] text-[var(--gold-light)]">
                    OFFICE ADDRESS
                  </span>
                  <p className="font-body text-[12px] leading-[1.75] text-white/85">
                    {profile?.address ?? (
                      <>
                        545, Arun Vihar, Sector 37,
                        <br />
                        Noida, Gautam Budh Nagar,
                        <br />
                        Uttar Pradesh – 201301.
                      </>
                    )}
                  </p>
                </div>
              </div>


              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[var(--gold-light)]"
                />
                <div>
                  <span className="mb-1 block text-[9px] font-extrabold tracking-[1px] text-[var(--gold-light)]">
                    DELHI ADDRESS
                  </span>
                  <p className="font-body text-[12px] leading-[1.75] text-white/85">
                    {profile?.address1 ?? (
                      <>
                        8B/F/F, Guru Nanak Market,
                        <br />
                        Lajpat Nagar-4, Defence Colony,
                        <br />
                        South-East, NCT Of Delhi- 110024
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Contact Person */}
              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-1 shrink-0 text-[var(--gold-light)]"
                />
                <div>
                  <span className="mb-1 block text-[9px] font-extrabold tracking-[1px] text-[var(--gold-light)]">
                    CONTACT PERSON
                  </span>
                  <p className="font-body text-[12px] text-white/85">
                    Shashi Kulshreshtha
                  </p>
                  <a
                    href="tel:+{profile?.phone}"
                    className="mt-1 block font-body text-[12px] font-bold text-white transition-colors hover:text-[var(--gold-light)]"
                  >
                    +91 {profile?.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-1 shrink-0 text-[var(--gold-light)]"
                />
                <div>
                  <span className="mb-1 block text-[9px] font-extrabold tracking-[1px] text-[var(--gold-light)]">
                    EMAIL
                  </span>
                  <p className="font-body text-[12px] text-white/85">
                    {profile?.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          {/* <div>
            <h4 className="mb-5 font-heading text-[21px] font-semibold text-[var(--gold-light)]">
              Send an Enquiry
            </h4>

            <p className="mb-5 font-body text-[13px] leading-[1.7] text-white/85">
              Have a proposal or collaboration idea? Write to us.
            </p>

            {submitted && (
              <div
                className="mb-4 border border-[var(--gold-light)]/40 bg-white/10 p-3 text-[11px] leading-[1.6] text-[var(--gold-light)]"
                role="status"
              >
                Your details have been validated. Please connect the contact API
                to receive enquiries.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
             
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="min-w-0">
                  <input
                    type="text"
                    name="name"
                    aria-label="Your name"
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    className={inputClass}
                  />
                  {errors.name && (
                    <small className={errorClass}>{errors.name}</small>
                  )}
                </div>

                <div className="min-w-0">
                  <input
                    type="email"
                    name="email"
                    aria-label="Email address"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    className={inputClass}
                  />
                  {errors.email && (
                    <small className={errorClass}>{errors.email}</small>
                  )}
                </div>
              </div>

            
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="min-w-0">
                  <input
                    type="tel"
                    name="phone"
                    aria-label="Phone number"
                    placeholder="Phone Number *"
                    value={form.phone}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.phone)}
                    className={inputClass}
                  />
                  {errors.phone && (
                    <small className={errorClass}>{errors.phone}</small>
                  )}
                </div>

                <div className="min-w-0">
                  <input
                    type="text"
                    name="subject"
                    aria-label="Subject"
                    placeholder="Subject *"
                    value={form.subject}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.subject)}
                    className={inputClass}
                  />
                  {errors.subject && (
                    <small className={errorClass}>{errors.subject}</small>
                  )}
                </div>
              </div>

           
              <div className="mt-3">
                <textarea
                  name="message"
                  rows={3}
                  aria-label="Your message"
                  placeholder="Your Message *"
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  className={`${inputClass} min-h-[95px] resize-y`}
                />
                {errors.message && (
                  <small className={errorClass}>{errors.message}</small>
                )}
              </div>

          
              <button
                type="submit"
                className="group mt-2 flex w-full items-center justify-between bg-white px-4 py-3 text-[10px] font-extrabold tracking-[1px] text-[var(--red-dark)] transition-all duration-300 hover:bg-[var(--gold-light)]"
              >
                SEND ENQUIRY
                <Send
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </div> */}


          <div>
            <h4 className="mb-6 font-heading text-[21px] font-semibold text-[var(--gold-light)]">
              Get In Touch
            </h4>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--black)]"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/30 py-6 sm:flex-row sm:items-center sm:gap-5">
          <p className="font-body text-[11px] text-white/85">
            © {currentYear ?? 2026}{" "}
            <strong className="text-[var(--gold-light)]">
              SHGR Entertainment.
            </strong>{" "}
            All Rights Reserved.
          </p>

          <span className="text-[9px] font-extrabold tracking-[1.3px] text-white/85">
            MADE FOR STORIES. BUILT ON CRAFT.
          </span>

          <Link
            href="/#home"
            className="inline-flex items-center gap-2 text-[10px] font-extrabold tracking-[1px] text-white transition-colors duration-300 hover:text-[var(--gold-light)]"
          >
            BACK TO TOP
            <ArrowUp size={15} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
