"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { contactInfo } from "@/data";
import { MapPin, Mail, Phone, MessageCircle, Globe, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address";
  if (!data.subject.trim()) errors.subject = "Subject is required";
  if (!data.message.trim()) errors.message = "Message is required";
  else if (data.message.trim().length < 20)
    errors.message = "Message must be at least 20 characters";
  return errors;
}

export function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Static site fallback: open mailto
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const subject = encodeURIComponent(form.subject);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputCls = (field: keyof FormErrors) =>
    `w-full px-4 py-3 bg-white border rounded-lg font-sans text-sm text-charcoal placeholder-slate/50 transition-colors duration-200 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 ${
      errors[field] ? "border-red-400" : "border-slate/20 hover:border-slate/40"
    }`;

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #072318 0%, #0b3d2e 100%)",
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative z-10">
        <AnimateOnScroll>
          <SectionHeading
            number="08"
            label="Contact Us"
            title="Let's Build Something Together"
            subtitle="Reach out to explore investment opportunities, partnerships, or any enquiries."
            light
          />
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <AnimateOnScroll className="lg:col-span-3" direction="left">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 rounded-2xl bg-white/5 border border-gold/20">
                <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center mb-4">
                  <Send className="text-gold" size={26} />
                </div>
                <h3 className="font-serif text-2xl text-cream font-medium mb-2">
                  Message Sent!
                </h3>
                <p className="text-cream/60 font-sans text-sm max-w-xs">
                  Your email client has been opened. We look forward to
                  connecting with you.
                </p>
                <button
                  className="mt-6 text-gold text-sm font-sans hover:underline"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl bg-white/5 border border-gold/15 p-6 md:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-cream/70 text-xs font-sans font-medium mb-1.5 tracking-wide uppercase">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputCls("name")}
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 font-sans">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-cream/70 text-xs font-sans font-medium mb-1.5 tracking-wide uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputCls("email")}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 font-sans">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-cream/70 text-xs font-sans font-medium mb-1.5 tracking-wide uppercase">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className={inputCls("subject")}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1 font-sans">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-cream/70 text-xs font-sans font-medium mb-1.5 tracking-wide uppercase">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your interest or enquiry..."
                    className={inputCls("message") + " resize-none"}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 font-sans">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
                  Send Message
                  <Send size={14} className="ml-2" />
                </Button>

                <p className="text-cream/30 text-xs font-sans">
                  This form opens your email client. For instant replies, use WhatsApp below.
                </p>
              </form>
            )}
          </AnimateOnScroll>

          {/* Contact details */}
          <AnimateOnScroll className="lg:col-span-2" delay={0.15} direction="right">
            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  label: "Office Address",
                  value: contactInfo.address,
                  href: undefined,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: contactInfo.email,
                  href: `mailto:${contactInfo.email}`,
                },
                {
                  icon: Phone,
                  label: "Call",
                  value: contactInfo.phone,
                  href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: contactInfo.whatsapp,
                  href: contactInfo.whatsappUrl,
                },
                {
                  icon: Globe,
                  label: "Website",
                  value: contactInfo.website,
                  href: `https://${contactInfo.website}`,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 p-4 rounded-xl bg-white/[0.04] border border-gold/10 hover:border-gold/25 hover:bg-white/[0.07] transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <item.icon className="text-gold" size={18} />
                  </div>
                  <div>
                    <p className="text-gold/60 text-xs font-sans uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-cream/80 text-sm font-sans hover:text-gold transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-cream/80 text-sm font-sans">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-300 font-sans font-medium text-sm"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Map embed */}
        <AnimateOnScroll delay={0.2} className="mt-12">
          <div className="rounded-2xl overflow-hidden border border-gold/15 shadow-2xl aspect-[4/3] sm:aspect-[16/7] md:aspect-[16/6]">
            <iframe
              title="BFGR Office Location — Banigala, Islamabad"
              src={contactInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
