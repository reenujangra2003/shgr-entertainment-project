
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  ChevronDown,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

const faqs = [
  {
    question: "What kind of content does SHGR Entertainment produce?",
    answer:
      "We produce devotional films, fiction films and web series, along with short-form and episodic content.",
  },
  {
    question: "Do you accept scripts from new writers?",
    answer:
      "Yes. Please follow the submission guidelines on this page.",
  },
  {
    question: "Do you work on commissioned or co-produced projects?",
    answer:
      "Yes. We are open to commissioned work, co-productions and partnerships.",
  },
  {
    question: "Where are you located?",
    answer:
      "We have offices in Noida (Uttar Pradesh) and Delhi.",
  },
  {
    question: "How can I contact the team?",
    answer:
      "Use the contact form on this page or call +91 98681 16252.",
  },
];

const contactCards: {
  icon: LucideIcon;
  label: string;
  title: string;
  link?: string;
  linkText?: string;
  placeholder?: string;
}[] = [
  {
    icon: Phone,
    label: "CALL OUR TEAM",
    title: "Let's Talk",
    link: "tel:+919868116252",
    linkText: "+91 98681 16252",
  },
  {
    icon: Mail,
    label: "EMAIL ENQUIRIES",
    title: "Write to Us",
    placeholder: "Official email to be added",
  },
  {
    icon: MessageCircle,
    label: "START A DISCUSSION",
    title: "Share Your Idea",
    link: "#contact-form",
    linkText: "Send an Enquiry",
  },
];

const offices = [
  {
    number: "01",
    label: "REGISTERED OFFICE",
    city: "Noida",
    address: [
      "545, Arun Vihar, Sector 37,",
      "Noida, Gautam Budh Nagar,",
      "Uttar Pradesh – 201301.",
    ],
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=545+Arun+Vihar+Sector+37+Noida+201301",
  },
  {
    number: "02",
    label: "DELHI OFFICE",
    city: "Delhi",
    address: [
      "171, First Floor, AGCR Enclave,",
      "Delhi – 110092.",
    ],
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=171+AGCR+Enclave+Delhi+110092",
  },
];

const enquiryTypes = [
  "General Enquiry",
  "Project Proposal",
  "Partnership",
  "Career",
  "Script Submission",
  "Other",
];

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Connect this data to your backend or email service.
    console.log(
      "Contact enquiry:",
      Object.fromEntries(formData.entries())
    );

    setSubmitted(true);
    form.reset();
  };

  return (
    <main className="custom-contact-page w-full overflow-hidden bg-[var(--white)] font-body text-[var(--brown)]">

      {/* HERO */}
      <section className="bg-[radial-gradient(circle_at_85%_20%,rgba(249,197,38,0.15),transparent_28%),var(--ivory)] pt-14 sm:pt-16 lg:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="pb-16 sm:pb-20 lg:pb-[95px]">
            <span className="mb-5 inline-block text-xs font-extrabold tracking-[2px] text-[var(--gold-dark)] sm:text-sm">
              GET IN TOUCH WITH SHGR
            </span>

            <h1 className="font-heading text-[clamp(38px,6vw,76px)] font-semibold leading-[1.12] tracking-[-1.5px] sm:tracking-[-2px]">
              Let's Start
              <span className="block italic text-[var(--red-dark)]">
                a Conversation.
              </span>
            </h1>

            <p className="mt-5 mb-6 text-[13px] leading-[1.9] text-[var(--text-secondary)] sm:text-sm">
              Have a story, project idea or collaboration in mind?
              We'd love to hear from you. Connect with our team and
              let's explore the possibilities together.
            </p>

            <a
              href="#contact-form"
              className="group inline-flex items-center gap-3 border-b border-[var(--gold-dark)] pb-[9px] text-[10px] font-extrabold tracking-[1.3px] text-[var(--brown)] no-underline"
            >
              SEND AN ENQUIRY
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
              />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-[var(--border-gold)] py-5 text-[8px] font-extrabold tracking-[1px] text-[var(--text-secondary)] sm:gap-x-[17px] sm:text-[9px]">
            <span>PROJECT ENQUIRIES</span>
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--gold-dark)]" />
            <span>PARTNERSHIPS</span>
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--gold-dark)]" />
            <span>GENERAL QUERIES</span>
          </div>

        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="bg-[var(--white)] py-16 sm:py-20 lg:pt-[90px] lg:pb-[100px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-8 sm:mb-10">
            <span className="mb-4 inline-block text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)] sm:text-sm">
              CONNECT WITH US
            </span>

            <h2 className="font-heading text-[clamp(35px,4.5vw,54px)] leading-[1.2]">
              We'd Be Glad
              <span className="block italic text-[var(--red-dark)]">
                to Hear From You.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.label}
                  className="group min-h-[210px] border border-[var(--border-gold)] bg-[var(--ivory)] p-6 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[var(--shadow-gold)] sm:min-h-[230px] sm:p-[27px]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center border border-[var(--border-gold)] bg-[var(--white)] text-[var(--red-dark)]">
                    <Icon size={23} strokeWidth={1.6} />
                  </div>

                  <span className="mb-2 block text-[9px] font-extrabold tracking-[1.4px] text-[var(--gold-dark)]">
                    {card.label}
                  </span>

                  <h3 className="mb-3 font-heading text-2xl font-semibold">
                    {card.title}
                  </h3>

                  {card.link ? (
                    <a
                      href={card.link}
                      className="group/link inline-flex items-center gap-2 text-xs font-extrabold text-[var(--red-dark)] no-underline"
                    >
                      {card.linkText}
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover/link:translate-x-[3px] group-hover/link:-translate-y-[3px]"
                      />
                    </a>
                  ) : (
                    <p className="m-0 text-xs text-[var(--text-secondary)]">
                      {card.placeholder}
                    </p>
                  )}
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section className="bg-[var(--ivory)] py-16 sm:py-20 lg:py-[95px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-9 flex flex-col justify-between gap-4 sm:mb-11 lg:flex-row lg:items-end lg:gap-9">
            <div>
              <span className="mb-4 inline-block text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)] sm:text-sm">
                FIND US
              </span>

              <h2 className="font-heading text-[clamp(35px,4.5vw,54px)] leading-[1.2]">
                Our Office
                <span className="block italic text-[var(--red-dark)]">
                  Locations.
                </span>
              </h2>
            </div>

            <p className="mb-1 max-w-[380px] text-[12px] leading-[1.8] text-[var(--text-secondary)] sm:text-[13px]">
              Connect with SHGR Entertainment at our offices in
              Noida and Delhi.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {offices.map((office) => (
              <article
                key={office.number}
                className="group relative min-h-[255px] border border-[var(--border-gold)] bg-[var(--white)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-dark)] sm:min-h-[280px] sm:p-8"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-[9px] font-extrabold tracking-[1.4px] text-[var(--gold-dark)]">
                    {office.number} / {office.label}
                  </span>

                  <MapPin
                    size={23}
                    className="text-[var(--red-dark)]"
                  />
                </div>

                <h3 className="mb-3 font-heading text-[30px] font-semibold sm:text-[33px]">
                  {office.city}
                </h3>

                <p className="mb-6 text-[12px] leading-[1.9] text-[var(--text-secondary)] sm:text-[13px]">
                  {office.address.map((line, index) => (
                    <span key={line}>
                      {line}
                      {index !== office.address.length - 1 && <br />}
                    </span>
                  ))}
                </p>

                <a
                  href={office.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group/map inline-flex items-center gap-2 border-b border-[var(--gold-dark)] pb-[7px] text-[9px] font-extrabold tracking-[1px] text-[var(--red-dark)] no-underline"
                >
                  VIEW LOCATION
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover/map:translate-x-[3px] group-hover/map:-translate-y-[3px]"
                  />
                </a>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        className="bg-[var(--white)] py-16 sm:py-20 lg:py-[105px]"
        id="contact-form"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">

            {/* Form Intro */}
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
                  <div key={point} className="flex items-center gap-3">
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

            {/* Form */}
            <div className="lg:col-span-7">
              <form
                className="border border-[var(--border-gold)] bg-[var(--ivory)] p-5 sm:p-7 lg:p-[38px]"
                onSubmit={handleSubmit}
              >
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

                  {/* Full Name */}
                  <div className="mb-4 min-w-0">
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-[9px] font-extrabold tracking-[1px]"
                    >
                      FULL NAME *
                    </label>

                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      autoComplete="name"
                      className="h-[47px] w-full rounded-[3px] border border-[#e8dfd2] bg-white px-3.5 text-xs text-[var(--brown)] outline-none transition-all placeholder:text-[#a08f80] focus:border-[var(--gold-dark)] focus:ring-[3px] focus:ring-[rgba(201,138,8,0.1)]"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-4 min-w-0">
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-[9px] font-extrabold tracking-[1px]"
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
                      className="h-[47px] w-full rounded-[3px] border border-[#e8dfd2] bg-white px-3.5 text-xs text-[var(--brown)] outline-none transition-all placeholder:text-[#a08f80] focus:border-[var(--gold-dark)] focus:ring-[3px] focus:ring-[rgba(201,138,8,0.1)]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-4 min-w-0">
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-[9px] font-extrabold tracking-[1px]"
                    >
                      PHONE NUMBER
                    </label>

                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      autoComplete="tel"
                      className="h-[47px] w-full rounded-[3px] border border-[#e8dfd2] bg-white px-3.5 text-xs text-[var(--brown)] outline-none transition-all placeholder:text-[#a08f80] focus:border-[var(--gold-dark)] focus:ring-[3px] focus:ring-[rgba(201,138,8,0.1)]"
                    />
                  </div>

                  {/* Subject */}
                  <div className="mb-4 min-w-0">
                    <label
                      htmlFor="contact-subject"
                      className="mb-2 block text-[9px] font-extrabold tracking-[1px]"
                    >
                      SUBJECT *
                    </label>

                    <select
                      id="contact-subject"
                      name="subject"
                      defaultValue=""
                      required
                      className="h-[47px] w-full cursor-pointer rounded-[3px] border border-[#e8dfd2] bg-white px-3.5 text-xs text-[var(--brown)] outline-none transition-all focus:border-[var(--gold-dark)] focus:ring-[3px] focus:ring-[rgba(201,138,8,0.1)]"
                    >
                      <option value="" disabled>
                        Select enquiry type
                      </option>

                      {enquiryTypes.map((type) => (
                        <option
                          key={type}
                          value={type}
                        >
                          {type === "Career" ? "Career Opportunities" : type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="col-span-full mb-4 min-w-0">
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-[9px] font-extrabold tracking-[1px]"
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

                  {/* Submit */}
                  <div className="col-span-full">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-between gap-4 border-0 bg-[var(--red-dark)] px-5 py-4 text-left text-[10px] font-extrabold tracking-[1px] text-white transition-colors duration-300 hover:bg-[var(--brown)]"
                    >
                      SEND YOUR MESSAGE
                      <ArrowUpRight size={18} />
                    </button>
                  </div>

                </div>

                {submitted && (
                  <div
                    className="mt-4 flex items-start gap-2.5 bg-[#edf5e8] p-3 text-[#365c2c]"
                    role="status"
                  >
                    <CheckCircle2 size={19} className="flex-none" />

                    <p className="m-0 text-[11px] leading-[1.7]">
                      Form validated successfully. Connect your backend
                      or email service to receive this enquiry.
                    </p>
                  </div>
                )}

                <p className="mt-3 mb-0 text-[10px] leading-[1.7] text-[var(--text-secondary)]">
                  * Required fields. Please provide accurate contact details.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--ivory)] py-16 sm:py-20 lg:py-[105px]" id="faqs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-9 lg:grid-cols-12 lg:gap-10">

            {/* FAQ Intro */}
            <div className="lg:col-span-4 lg:sticky lg:top-[110px] lg:self-start">
              <span className="mb-4 inline-block text-[10px] font-extrabold tracking-[2px] text-[var(--gold-dark)] sm:text-sm">
                GOOD TO KNOW
              </span>

              <h2 className="font-heading text-[clamp(35px,4.5vw,53px)] leading-[1.2]">
                Frequently
                <span className="block italic text-[var(--red-dark)]">
                  Asked Questions.
                </span>
              </h2>

              <p className="mt-5 mb-7 max-w-[420px] text-[12px] leading-[1.9] text-[var(--text-secondary)] sm:text-[13px]">
                Find answers to some common questions about our
                content, submissions, partnerships and contact details.
              </p>

              <a
                href="#contact-form"
                className="group inline-flex items-center gap-2 border-b border-[var(--gold-dark)] pb-2 text-[9px] font-extrabold tracking-[1px] text-[var(--red-dark)] no-underline"
              >
                STILL HAVE A QUESTION?
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                />
              </a>
            </div>

            {/* FAQ Accordion */}
            <div className="lg:col-span-8">
              <div className="border-t border-[var(--border-gold)]">
                {faqs.map((faq, index) => {
                  const isActive = activeFaq === index;

                  return (
                    <div
                      key={faq.question}
                      className="border-b border-[var(--border-gold)]"
                    >
                      <button
                        type="button"
                        className="grid w-full grid-cols-[25px_minmax(0,1fr)_20px] items-center gap-3 bg-transparent px-0 py-5 text-left text-[var(--brown)] sm:grid-cols-[35px_minmax(0,1fr)_25px] sm:gap-[15px] sm:px-[5px] sm:py-[23px]"
                        aria-expanded={isActive}
                        onClick={() =>
                          setActiveFaq(isActive ? -1 : index)
                        }
                      >
                        <span className="text-[10px] font-extrabold text-[var(--gold-dark)]">
                          0{index + 1}
                        </span>

                        <span className="text-xs font-bold leading-[1.6] sm:text-sm">
                          {faq.question}
                        </span>

                        <ChevronDown
                          size={20}
                          className={`text-[var(--red-dark)] transition-transform duration-300 ${
                            isActive ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isActive && (
                        <div className="pb-5 pl-[35px] sm:pb-[22px] sm:pl-[55px]">
                          <p className="m-0 max-w-[600px] text-[11px] leading-[1.9] text-[var(--text-secondary)] sm:text-xs">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING */}
      {/* <section className="bg-[var(--white)] py-16 text-center sm:py-20 lg:py-[85px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <MessageCircle
            size={30}
            strokeWidth={1.5}
            className="mx-auto mb-5 text-[var(--gold-dark)]"
          />

          <h2 className="mx-auto mb-7 max-w-[750px] font-heading text-[clamp(34px,4.5vw,55px)] leading-[1.2]">
            Every Great Story
            <span className="block italic text-[var(--red-dark)]">
              Starts With a Conversation.
            </span>
          </h2>

          <a
            href="#contact-form"
            className="group inline-flex items-center gap-5 bg-[var(--red-dark)] px-[22px] py-[15px] text-[10px] font-extrabold tracking-[1.2px] text-white no-underline transition-colors duration-300 hover:bg-[var(--brown)]"
          >
            GET IN TOUCH
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

        </div>
      </section> */}

    </main>
  );
}
