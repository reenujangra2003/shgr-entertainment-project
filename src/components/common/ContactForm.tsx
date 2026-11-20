
"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import type { ContactFormPayload } from "@/types/api.types";
import {
  ArrowUpRight,
  CheckCircle2,
  Send,
} from "lucide-react";

import { submitContactForm } from "@/services/contact.service";
import { normalizeApiError } from "@/lib/api/error";

interface ContactFormProps {
  enquiryTypes: string[];
}

export default function ContactForm({
  enquiryTypes,
}: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(
    null
  );

  const submittingRef = useRef(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (submittingRef.current) return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    // FormData here only reads input values. The service sends JSON.
    const formValues = new FormData(form);
    const payload: ContactFormPayload = {
      fullname: String(formValues.get("fullname") ?? "").trim(),
      email: String(formValues.get("email") ?? "").trim(),
      phone: String(formValues.get("phone") ?? "").trim(),
      subject: String(formValues.get("subject") ?? "").trim(),
      message: String(formValues.get("message") ?? "").trim(),
    };

    submittingRef.current = true;
    setLoading(true);
    setSubmitted(false);
    setSubmitError(null);

    try {
      // submitContactForm sends application/json, not multipart/form-data.
      const response = await submitContactForm(payload);

      if (response.code !== 200) {
        // The backend may return validation messages as an object.
        const message = response.message;
        const fieldMessages =
          typeof message === "object" && message !== null
            ? Object.values(message).flat().filter(
                (value): value is string => typeof value === "string"
              )
            : [];

        setSubmitError(
          fieldMessages.length > 0
            ? fieldMessages.join(" ")
            : typeof message === "string" && message.trim()
              ? message
              : "Unable to send your message. Please try again."
        );
        return;
      }

      setSubmitted(true);
      form.reset();
    } catch (error: unknown) {
      // The service already normalizes Axios errors; this also covers raw errors.
      const apiError = normalizeApiError(error);
      setSubmitError(apiError.message);
    } finally {
      submittingRef.current = false;
      setLoading(false);
    }
  };

  const inputClass =
    "h-[47px] w-full rounded-[3px] border border-[#e8dfd2] bg-white px-3.5 text-xs text-[var(--brown)] outline-none transition-all placeholder:text-[#a08f80] focus:border-[var(--gold-dark)] focus:ring-[3px] focus:ring-[rgba(201,138,8,0.1)]";

  const labelClass =
    "mb-2 block text-[9px] font-extrabold tracking-[1px]";

  return (
    <section
      className="bg-[var(--white)] py-16 sm:py-20 lg:py-[105px]"
      id="contact-form"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">

          {/* FORM INTRO */}
          <div className="lg:col-span-5 lg:sticky lg:top-[110px]">
            <span className="mb-4 inline-block text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)] sm:text-sm">
              YOUR NEXT STORY STARTS HERE
            </span>

            <h2 className="font-heading text-[clamp(35px,4.5vw,53px)] leading-[1.2]">
              Tell Us What
              <span className="block italic text-[var(--red-dark)]">
                You're Thinking.
              </span>
            </h2>

            <p className="mt-5 mb-7 max-w-[420px] text-[12px] leading-[1.9] text-[var(--text-secondary)] sm:text-[13px]">
              Whether you have a project proposal, a creative
              collaboration idea or a general question, share
              the details with us.
            </p>

            <div className="grid gap-4 border-t border-b border-[var(--border-gold)] py-6">
              {[
                "Project and production enquiries",
                "Partnership and co-production proposals",
                "Creative and career opportunities",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="flex-none text-[var(--gold-dark)]"
                  />

                  <span className="text-xs text-[var(--text-secondary)]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col items-start gap-2.5">
              <span className="text-[9px] font-extrabold tracking-[1.4px] text-[var(--gold-dark)]">
                DIRECT CONTACT
              </span>

              <a
                href="tel:+919868116252"
                className="inline-flex items-center gap-2.5 text-lg font-extrabold text-[var(--red-dark)] no-underline"
              >
                +91 98681 16252
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="border border-[var(--border-gold)] bg-[var(--ivory)] p-5 sm:p-7 lg:p-[38px]"
            >
              {/* FORM HEADING */}
              <div className="mb-7 flex items-center justify-between gap-5 border-b border-[var(--border-gold)] pb-5 sm:mb-[30px] sm:pb-[22px]">
                <div>
                  <span className="text-[9px] font-extrabold tracking-[1.5px] text-[var(--gold-dark)]">
                    CONTACT FORM
                  </span>

                  <h3 className="mt-2 font-heading text-xl font-semibold sm:text-[26px]">
                    Send Us a Message
                  </h3>
                </div>

                <Send
                  size={24}
                  className="flex-none text-[var(--red-dark)]"
                />
              </div>

              <div className="grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">

                {/* FULL NAME */}
                <div className="mb-4 min-w-0">
                  <label
                    htmlFor="contact-name"
                    className={labelClass}
                  >
                    FULL NAME *
                  </label>

                  <input
                    type="text"
                    id="contact-name"
                    name="fullname"
                    placeholder="Enter your full name"
                    required
                    autoComplete="name"
                    className={inputClass}
                  />
                </div>

                {/* EMAIL */}
                <div className="mb-4 min-w-0">
                  <label
                    htmlFor="contact-email"
                    className={labelClass}
                  >
                    EMAIL ADDRESS *
                  </label>

                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    autoComplete="email"
                    className={inputClass}
                  />
                </div>

                {/* PHONE */}
                <div className="mb-4 min-w-0">
                  <label
                    htmlFor="contact-phone"
                    className={labelClass}
                  >
                    PHONE NUMBER *
                  </label>

                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                    className={inputClass}
                  />
                </div>

                {/* SUBJECT */}
                <div className="mb-4 min-w-0">
                  <label
                    htmlFor="contact-subject"
                    className={labelClass}
                  >
                    SUBJECT *
                  </label>

                  <select
                    id="contact-subject"
                    name="subject"
                    defaultValue=""
                    required
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select enquiry type
                    </option>

                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type === "Career"
                          ? "Career Opportunities"
                          : type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="col-span-full mb-4 min-w-0">
                  <label
                    htmlFor="contact-message"
                    className={labelClass}
                  >
                    YOUR MESSAGE *
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    required
                    className="block min-h-[130px] w-full resize-y rounded-[3px] border border-[#e8dfd2] bg-white px-3.5 py-3 text-xs leading-[1.7] text-[var(--brown)] outline-none transition-all placeholder:text-[#a08f80] focus:border-[var(--gold-dark)] focus:ring-[3px] focus:ring-[rgba(201,138,8,0.1)]"
                  />
                </div>

                {/* SUBMIT */}
                <div className="col-span-full">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-between gap-4 border-0 bg-[var(--red-dark)] px-5 py-4 text-left text-[10px] font-extrabold tracking-[1px] text-white transition-colors duration-300 hover:bg-[var(--brown)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span>
                      {loading
                        ? "SENDING MESSAGE..."
                        : "SEND YOUR MESSAGE"}
                    </span>

                    {loading ? (
                      <span
                        aria-hidden="true"
                        className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                      />
                    ) : (
                      <ArrowUpRight size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* SUCCESS MESSAGE */}
              {submitted && (
                <div
                  className="mt-4 flex items-start gap-2.5 bg-[#edf5e8] p-3 text-[#365c2c]"
                  role="status"
                >
                  <CheckCircle2
                    size={19}
                    className="flex-none"
                  />

                  <p className="m-0 text-[11px] leading-[1.7]">
                    Your message has been sent successfully.
                    We will get back to you soon.
                  </p>
                </div>
              )}

              {/* ERROR MESSAGE */}
              {submitError && (
                <div
                  className="mt-4 border border-red-200 bg-red-50 p-3 text-red-700"
                  role="alert"
                >
                  <p className="m-0 text-[11px] leading-[1.7]">
                    {submitError}
                  </p>
                </div>
              )}

              <p className="mt-3 mb-0 text-[10px] leading-[1.7] text-[var(--text-secondary)]">
                * Required fields. Please provide accurate
                contact details.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
