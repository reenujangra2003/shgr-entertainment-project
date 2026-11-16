
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Handshake,
  MonitorPlay,
  Film,
  Building2,
  Landmark,
  Users,
  Upload,
  Send,
  CheckCircle2,
} from "lucide-react";

const partnerTypes = [
  {
    icon: Handshake,
    number: "01",
    title: "Co-producers & Financiers",
    description:
      "Participate in well-planned devotional and fiction projects.",
  },
  {
    icon: MonitorPlay,
    number: "02",
    title: "OTT Platforms & Broadcasters",
    description: "Collaborate on original and commissioned content.",
  },
  {
    icon: Film,
    number: "03",
    title: "Distributors",
    description: "Bring our films to wider audiences.",
  },
  {
    icon: Landmark,
    number: "04",
    title: "Temples, Trusts & Cultural Institutions",
    description: "Develop content rooted in heritage and tradition.",
  },
  {
    icon: Building2,
    number: "05",
    title: "Government & Institutional Bodies",
    description: "Create films for cultural and public-interest programmes.",
  },
  {
    icon: Users,
    number: "06",
    title: "Creators & Talent",
    description:
      "Join our network of writers, directors, actors and technicians.",
  },
];

const careerRoles = [
  "Writer",
  "Assistant Director",
  "Editor",
  "Cinematographer",
  "Production Manager",
  "Designer",
  "Intern",
  "Other",
];

const inputClass =
  "block min-w-0 w-full rounded-[3px] border border-[#e8dfd2] bg-[#fffdf8] px-[14px] py-[13px] text-[12px] text-[var(--brown)] outline-none transition placeholder:text-[#a08f80] focus:border-[var(--gold-dark)] focus:bg-white focus:ring-[3px] focus:ring-[rgba(201,138,8,0.10)]";

const labelClass =
  "mb-[9px] block text-[9px] font-extrabold tracking-[1px] text-[var(--brown)]";

export default function Partner() {
  const [formType, setFormType] = useState("Partnership Enquiry");
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isCareer = formType === "Career Application";

  const handleFormTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormType(event.target.value);
    setSubmitted(false);
    setFileName("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // Connect your backend/API or email service here.
    // formData contains the submitted fields and uploaded file.
    console.log(
      "Partner enquiry:",
      Object.fromEntries(formData.entries())
    );

    setSubmitted(true);
    event.currentTarget.reset();
    setFileName("");
  };

  return (
    <main className="overflow-hidden bg-white text-[var(--brown)]">
      {/* HERO */}
      <section className="relative bg-[radial-gradient(circle_at_85%_20%,rgba(249,197,38,0.15),transparent_28%),var(--ivory)] py-[75px] md:py-[90px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pb-16 md:pb-24">
            <span className="mb-5 inline-block text-[14px] font-extrabold tracking-[2px] text-[var(--gold-dark)]">
              PARTNERSHIPS &amp; COLLABORATIONS
            </span>

            <h1 className="max-w-5xl font-heading text-[clamp(42px,6vw,76px)] font-semibold leading-[1.12] tracking-[-2px]">
              Great Stories
              <span className="block italic text-[var(--red-dark)]">
                Begin With Great Partnerships.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-[14px] leading-[1.9] text-[var(--text-secondary)]">
              We believe meaningful cinema is built through shared vision,
              creative collaboration and the right partnerships. Let&apos;s
              explore what we can create together.
            </p>

            <a
              href="#partner-opportunities"
              className="group mt-7 inline-flex items-center gap-3 border-b border-[var(--gold-dark)] pb-[9px] text-[10px] font-extrabold tracking-[1.3px] text-[var(--brown)]"
            >
              EXPLORE OPPORTUNITIES
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
              />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-[17px] gap-y-3 border-t border-[var(--border-gold)] py-5 text-[9px] font-extrabold tracking-[1.3px] text-[var(--text-secondary)]">
            <span>CREATIVE PARTNERSHIPS</span>
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--gold-dark)]" />
            <span>PRODUCTION COLLABORATIONS</span>
            <span className="h-[5px] w-[5px] rounded-full bg-[var(--gold-dark)]" />
            <span>CAREER OPPORTUNITIES</span>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP OPPORTUNITIES */}
      <section
        className="bg-white py-[75px] md:py-[105px]"
        id="partner-opportunities"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-9 flex flex-col justify-between gap-[17px] md:mb-[55px] lg:flex-row lg:items-end lg:gap-10">
            <div>
              <span className="mb-5 inline-block text-[14px] font-extrabold tracking-[2px] text-[var(--gold-dark)]">
                LET&apos;S WORK TOGETHER
              </span>

              <h2 className="max-w-[700px] font-heading text-[clamp(36px,4.5vw,55px)] font-semibold leading-[1.2]">
                Who We Welcome
                <span className="block italic text-[var(--red-dark)]">
                  As Partners.
                </span>
              </h2>
            </div>

            <p className="mb-[5px] max-w-[390px] text-[13px] leading-[1.9] text-[var(--text-secondary)]">
              We are open to collaborations with individuals and
              organisations who share our interest in meaningful storytelling
              and quality content.
            </p>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-[var(--border-gold)] sm:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map((partner) => {
              const Icon = partner.icon;

              return (
                <article
                  key={partner.number}
                  className="group relative flex min-h-[235px] flex-col border-b border-r border-[var(--border-gold)] p-6 transition-colors duration-300 hover:bg-[var(--ivory)] md:min-h-[260px] md:p-[29px]"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-[var(--gold-dark)]">
                      {partner.number}
                    </span>
                    <Icon
                      size={27}
                      strokeWidth={1.5}
                      className="text-[var(--red-dark)] transition-transform duration-300 group-hover:-translate-y-1"
                    />
                  </div>

                  <h3 className="mb-3 max-w-[290px] font-heading text-[21px] font-semibold leading-[1.35] md:text-[23px]">
                    {partner.title}
                  </h3>

                  <p className="mb-6 max-w-[300px] text-[12px] leading-[1.8] text-[var(--text-secondary)]">
                    {partner.description}
                  </p>

                  <a
                    href="#partner-enquiry"
                    onClick={() => {
                      setFormType("Partnership Enquiry");
                      setSubmitted(false);
                    }}
                    aria-label={`Enquire about ${partner.title}`}
                    className="group/link mt-auto inline-flex w-fit items-center gap-2.5 text-[9px] font-extrabold tracking-[0.8px] text-[var(--red-dark)]"
                  >
                    DISCUSS A PARTNERSHIP
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/link:translate-x-[3px] group-hover/link:-translate-y-[3px]"
                    />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* ENQUIRY FORM */}
      <section
        className="bg-[var(--ivory)] py-[75px] md:py-[105px]"
        id="partner-enquiry"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[5fr_7fr] lg:gap-12">
            {/* FORM INTRO */}
            <div className="lg:sticky lg:top-[110px] lg:self-start">
              <span className="mb-5 inline-block text-[14px] font-extrabold tracking-[2px] text-[var(--gold-dark)]">
                START A CONVERSATION
              </span>

              <h2 className="max-w-[440px] font-heading text-[clamp(37px,4.5vw,53px)] font-semibold leading-[1.2]">
                Let&apos;s Create
                <span className="block italic text-[var(--red-dark)]">
                  Something Meaningful.
                </span>
              </h2>

              <p className="mb-8 mt-[22px] max-w-[420px] text-[13px] leading-[1.9] text-[var(--text-secondary)]">
                Tell us a little about yourself, your organisation or your
                creative interests. Our team can take the conversation
                forward.
              </p>

              <div className="flex flex-col items-start gap-[9px] border-y border-[var(--border-gold)] py-5">
                <span className="text-[9px] font-extrabold tracking-[1.2px] text-[var(--gold-dark)]">
                  CAREERS &amp; GENERAL ENQUIRIES
                </span>
                <strong className="text-[15px] text-[var(--brown)]">
                  Email address to be added
                </strong>
                <small className="text-[10px] leading-[1.6] text-[var(--text-secondary)]">
                  Please replace this placeholder with the official SHGR
                  Entertainment email.
                </small>
              </div>

              <div className="mt-[35px]">
                <span className="text-[9px] font-extrabold tracking-[1.6px] text-[var(--gold-dark)]">
                  SHGR ENTERTAINMENT
                </span>
                <p className="mt-2.5 font-heading text-[25px] italic leading-[1.5] text-[var(--brown)]">
                  Stories That Inspire.
                  <br />
                  Cinema That Endures.
                </p>
              </div>
            </div>

            {/* FORM */}
            <form
              className="border border-[var(--border-gold)] bg-white p-6 shadow-[0_12px_35px_rgba(201,138,8,0.10)] sm:p-[38px]"
              id="custom-partner-enquiry-form"
              onSubmit={handleSubmit}
            >
              <div className="mb-[30px] flex items-center justify-between gap-5 border-b border-[#eee5d8] pb-[23px]">
                <div>
                  <span className="text-[9px] font-extrabold tracking-[1.5px] text-[var(--gold-dark)]">
                    ENQUIRY FORM
                  </span>
                  <h3 className="mt-[9px] font-heading text-[20px] font-semibold sm:text-[25px]">
                    Tell Us About Your Interest
                  </h3>
                </div>
                <Send
                  size={24}
                  className="shrink-0 text-[var(--red-dark)]"
                />
              </div>

              {/* ENQUIRY TYPE */}
              <div className="mb-6">
                <label htmlFor="custom-partner-form-type" className={labelClass}>
                  I AM INTERESTED IN
                </label>
                <select
                  id="custom-partner-form-type"
                  name="enquiryType"
                  value={formType}
                  onChange={handleFormTypeChange}
                  className={`${inputClass} min-h-[47px] cursor-pointer`}
                >
                  <option>Partnership Enquiry</option>
                  <option>Career Application</option>
                </select>
              </div>

              <div className="grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
                {/* NAME */}
                <div className="mb-[17px] min-w-0">
                  <label htmlFor="partner-name" className={labelClass}>
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    id="partner-name"
                    name="name"
                    placeholder="Enter your full name"
                    className={`${inputClass} h-[47px]`}
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="mb-[17px] min-w-0">
                  <label htmlFor="partner-email" className={labelClass}>
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    id="partner-email"
                    name="email"
                    placeholder="Enter your email"
                    className={`${inputClass} h-[47px]`}
                    required
                  />
                </div>

                {/* PHONE */}
                <div className="mb-[17px] min-w-0">
                  <label htmlFor="partner-phone" className={labelClass}>
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    id="partner-phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    className={`${inputClass} h-[47px]`}
                  />
                </div>

                {/* ORGANISATION */}
                <div className="mb-[17px] min-w-0">
                  <label htmlFor="partner-organisation" className={labelClass}>
                    ORGANISATION / COMPANY
                  </label>
                  <input
                    type="text"
                    id="partner-organisation"
                    name="organisation"
                    placeholder="Company or organisation"
                    className={`${inputClass} h-[47px]`}
                  />
                </div>

                {/* CAREER ROLE */}
                {isCareer && (
                  <div className="col-span-1 mb-[17px] min-w-0 sm:col-span-2">
                    <label htmlFor="partner-role" className={labelClass}>
                      ROLE APPLIED FOR *
                    </label>
                    <select
                      id="partner-role"
                      name="role"
                      required
                      defaultValue=""
                      className={`${inputClass} min-h-[47px] cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select your preferred role
                      </option>
                      {careerRoles.map((role) => (
                        <option value={role} key={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* MESSAGE */}
                <div className="col-span-1 mb-[17px] min-w-0 sm:col-span-2">
                  <label htmlFor="partner-message" className={labelClass}>
                    {isCareer
                      ? "INTRODUCE YOURSELF *"
                      : "TELL US ABOUT YOUR PROPOSAL *"}
                  </label>
                  <textarea
                    id="partner-message"
                    name="message"
                    rows={5}
                    placeholder={
                      isCareer
                        ? "Share your experience, skills and interests..."
                        : "Tell us about your organisation, project or collaboration idea..."
                    }
                    className={`${inputClass} min-h-[125px] resize-y leading-[1.7]`}
                    required
                  />
                </div>

                {/* FILE UPLOAD */}
                <div className="col-span-1 mb-[22px] min-w-0 sm:col-span-2">
                  <div>
                    <label
                      htmlFor="partner-attachment"
                      className="flex cursor-pointer items-center gap-[15px] border border-dashed border-[#cdbb9f] bg-[var(--ivory)] p-[17px] text-[var(--red-dark)] transition-colors duration-300 hover:border-[var(--gold-dark)] hover:bg-[#fff9ed]"
                    >
                      <Upload size={19} />
                      <span className="flex flex-col gap-[5px]">
                        <strong className="text-[12px] text-[var(--brown)]">
                          {isCareer
                            ? "Upload CV / Portfolio"
                            : "Attach Portfolio / Proposal"}
                        </strong>
                        <small className="text-[10px] text-[var(--text-secondary)]">
                          PDF, DOC, DOCX or image files
                        </small>
                      </span>
                    </label>

                    <input
                      type="file"
                      id="partner-attachment"
                      name="attachment"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="sr-only"
                      onChange={(event) =>
                        setFileName(event.target.files?.[0]?.name || "")
                      }
                    />

                    {fileName && (
                      <span className="mt-[9px] block break-all text-[11px] text-[var(--text-secondary)]">
                        {fileName}
                      </span>
                    )}
                  </div>
                </div>

                {/* SUBMIT */}
                <div className="col-span-1 sm:col-span-2">
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-between gap-[15px] bg-[var(--red-dark)] px-[19px] py-4 text-[10px] font-extrabold tracking-[1px] text-white transition-colors duration-300 hover:bg-[var(--brown)]"
                  >
                    SUBMIT YOUR ENQUIRY
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>
              </div>

              {submitted && (
                <div
                  className="mt-[18px] flex items-start gap-2.5 bg-[#edf5e8] p-[14px] text-[#365c2c]"
                  role="status"
                >
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
                  <p className="text-[11px] leading-[1.7]">
                    Your form has been validated. Connect the form to your
                    backend or email service to receive submissions.
                  </p>
                </div>
              )}

              <p className="mt-[15px] text-[10px] leading-[1.7] text-[var(--text-secondary)]">
                * Required fields. Please ensure your contact details and
                uploaded documents are correct.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
