import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import {
  ArrowRight,
  Boxes,
  Cable,
  CircuitBoard,
  Cpu,
  Handshake,
  Layers,
  Network,
  Rocket,
  Sparkles,
  TrendingUp,
  Mail,
  Phone,
} from "lucide-react";
import { Reveal } from "./Reveal";
import heroTech from "@/assets/hero-tech.jpg";
import partnershipBg from "@/assets/partnership-bg.jpg";
import warehouse from "@/assets/warehouse.jpg";
import productsHardware from "@/assets/products-hardware.jpg";
import networkMap from "@/assets/network-map.jpg";
import teamHandshake from "@/assets/team-handshake.jpg";


function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-primary">{children}</p>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={heroTech}
        alt="Abstract circuitry and semiconductor infrastructure"
        width={1920}
        height={1088}
        className="drift-slow absolute inset-0 size-full object-cover opacity-60"
      />
      <div className="veil absolute inset-0" />
      <div className="grid-lines absolute inset-0" />
      <div className="absolute -left-40 top-1/3 size-[34rem] rounded-full bg-primary/12 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28">
        <Reveal>
          <div className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            B2B Technology Distribution
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 max-w-4xl text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-7xl">
            <span className="text-accent-gradient">Powering the Technology</span>
            <br />
            Distribution Network
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Bright Maryada Distribution Pvt Ltd is building a reliable B2B technology distribution
            network connecting quality technology products with businesses across the supply chain.
          </p>
        </Reveal>
        <Reveal delay={340}>
          <div className="mt-11 flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-115"
            >
              Explore Products <ArrowRight className="size-4" />
            </a>
            <a
              href="#partnerships"
              className="glass-panel inline-flex items-center rounded-md px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary/50"
            >
              Partner With Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const trust = [
  { icon: Network, label: "B2B Technology Distribution" },
  { icon: Layers, label: "Growing Product Portfolio" },
  { icon: Boxes, label: "Reliable Supply Network" },
  { icon: Handshake, label: "Long-Term Partnerships" },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-border bg-surface/50">
      <div className="mx-auto grid max-w-7xl gap-px px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {trust.map((t, i) => (
          <Reveal key={t.label} delay={i * 90}>
            <div className="flex items-center gap-4 px-2 py-4 lg:px-6">
              <t.icon className="size-5 shrink-0 text-primary" />
              <span className="font-display text-sm font-bold tracking-tight">{t.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <Reveal>
            <SectionLabel>ABOUT</SectionLabel>
            <h2 className="max-w-xl text-3xl leading-tight sm:text-5xl">
              Building the Future of Technology Distribution
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
              Bright Maryada Distribution Pvt Ltd is focused on building a dependable and scalable
              B2B technology distribution network. We connect technology products with businesses
              through strong sourcing, distribution and long-term partnerships.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a
              href="#why"
              className="mt-10 inline-flex items-center gap-2 rounded-md border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
            >
              About Bright Maryada <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="relative overflow-hidden rounded-xl border border-border">
            <img
              src={warehouse}
              alt="Technology distribution warehouse aisle with stocked shelving"
              loading="lazy"
              width={1408}
              height={1200}
              className="aspect-[5/4] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          </div>

        </Reveal>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <section id="products" className="relative border-y border-border bg-surface/40 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel>PORTFOLIO</SectionLabel>
          <h2 className="max-w-2xl text-3xl leading-tight sm:text-5xl">Our Technology Portfolio</h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A growing portfolio of technology hardware, components and accessories designed to serve
            the evolving needs of the B2B technology ecosystem.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-14 overflow-hidden rounded-xl border border-border">
            <img
              src={productsHardware}
              alt="Intel processors and memory modules for B2B technology distribution"
              loading="lazy"
              width={1600}
              height={900}
              className="aspect-[16/7] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const flow = [
  { title: "Technology Suppliers", icon: Cpu },
  { title: "BRIGHT MARYADA", icon: CircuitBoard, highlight: true },
  { title: "B2B Distribution Network", icon: Network },
  { title: "Business Partners", icon: Boxes },
];

export function DistributionNetwork() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute left-1/2 top-0 size-[40rem] -translate-x-1/2 rounded-full bg-primary/8 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>DISTRIBUTION NETWORK</SectionLabel>
            <h2 className="text-3xl leading-tight sm:text-5xl">
              Connecting Technology With Opportunity
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We aim to create an efficient technology distribution network that connects suppliers
              with businesses through dependable B2B partnerships.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl border border-border">
              <img
                src={networkMap}
                alt="Illustrated map of connected distribution hubs across India"
                loading="lazy"
                width={1600}
                height={1000}
                className="w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="mx-auto w-full max-w-xl">
            {flow.map((node, i) => (
              <div key={node.title}>
                <Reveal delay={i * 140}>
                  <div
                    className={`glass-panel flex items-center gap-4 rounded-xl px-7 py-6 ${
                      node.highlight ? "glow-ring bg-surface-elevated/80" : ""
                    }`}
                  >
                    <node.icon
                      className={`size-5 shrink-0 ${node.highlight ? "text-primary" : "text-muted-foreground"}`}
                    />
                    <span
                      className={`font-display font-bold tracking-tight ${
                        node.highlight ? "text-lg" : "text-base text-foreground/90"
                      }`}
                    >
                      {node.title}
                    </span>
                    {node.highlight && (
                      <span className="pulse-node ml-auto size-2 rounded-full bg-primary" />
                    )}
                  </div>
                </Reveal>
                {i < flow.length - 1 && (
                  <div className="mx-auto h-12 w-px overflow-hidden">
                    <div className="flow-line size-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

const why = [
  { icon: Cable, title: "Reliable", copy: "Focused on dependable sourcing and supply." },
  { icon: TrendingUp, title: "Scalable", copy: "Built to grow with the technology market." },
  {
    icon: Handshake,
    title: "Partnership Driven",
    copy: "Focused on long-term B2B relationships.",
  },
  {
    icon: Rocket,
    title: "Future Ready",
    copy: "Continuously expanding into new technology categories.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative border-y border-border bg-surface/40 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <SectionLabel>WHY BRIGHT MARYADA</SectionLabel>
            <h2 className="max-w-2xl text-3xl leading-tight sm:text-5xl">
              A distribution partner built on fundamentals
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative overflow-hidden rounded-xl border border-border">
              <img
                src={teamHandshake}
                alt="Business partners shaking hands in a modern office"
                loading="lazy"
                width={1400}
                height={1000}
                className="aspect-[7/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 90}>
              <div className="card-hover glass-panel h-full rounded-xl p-10">
                <w.icon className="size-8 text-primary" />
                <h3 className="mt-10 text-2xl">{w.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {w.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Partnerships() {
  return (
    <section id="partnerships" className="relative overflow-hidden py-32 lg:py-44">
      <img
        src={partnershipBg}
        alt="Abstract data centre corridor with blue light"
        loading="lazy"
        width={1920}
        height={912}
        className="absolute inset-0 size-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="veil absolute inset-0 opacity-80" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <SectionLabel>PARTNERSHIPS</SectionLabel>
          <h2 className="text-3xl leading-tight sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something Bigger
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We are building relationships across the technology ecosystem and are open to working
            with suppliers, distributors, wholesalers and system integrators.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-115"
            >
              Become a Partner <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="glass-panel inline-flex items-center rounded-md px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary/50"
            >
              Contact Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const leaders = [{ name: "Drishti Bafna" }, { name: "Jahanvi Kavadia" }];

export function Leadership() {
  return (
    <section id="leadership" className="relative border-y border-border bg-surface/40 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel>LEADERSHIP</SectionLabel>
          <h2 className="text-3xl leading-tight sm:text-5xl">Leadership</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 120}>
              <div className="card-hover glass-panel h-full rounded-xl p-10">
                <div className="glow-ring flex size-12 items-center justify-center rounded-md bg-surface-elevated font-display text-sm font-bold text-primary">
                  {l.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-8 text-2xl">{l.name}</h3>
                <p className="mt-1.5 text-xs font-semibold tracking-[0.2em] text-primary">
                  DIRECTOR
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 rounded-xl border border-border px-8 py-8">
            <p className="text-xs font-semibold tracking-[0.24em] text-muted-foreground">
              STRATEGIC ADVISORY
            </p>
            <p className="mt-4 font-display text-lg font-bold tracking-tight">
              Maryada Technologies Pvt Ltd
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Advisory support by <span className="text-foreground">Arihant Kavadia</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const enquiryTypes = [
  "Product enquiry",
  "Supplier partnership",
  "Distribution / wholesale",
  "System integration",
  "Other",
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setError(null);
    const { error: insertError } = await supabase.from("enquiries").insert({
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      enquiry_type: String(data.get("enquiry") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    setSending(false);
    if (insertError) {
      setError("We couldn't send your enquiry. Please try again or reach us directly.");
      return;
    }
    form.reset();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <SectionLabel>CONTACT</SectionLabel>
            <h2 className="text-3xl leading-tight sm:text-5xl">Let&apos;s Talk</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Have a product enquiry or interested in working with us? We&apos;d love to hear from
              you.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <form
              className="glass-panel mt-10 grid gap-5 rounded-xl p-8 sm:grid-cols-2"
              onSubmit={handleSubmit}
            >
              <Field label="Name" name="name" />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
              <label className="sm:col-span-2">
                <span className="text-xs font-semibold tracking-[0.16em] text-muted-foreground">
                  ENQUIRY
                </span>
                <select
                  name="enquiry"
                  required
                  defaultValue={enquiryTypes[0]}
                  className="mt-2 w-full rounded-md border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                >
                  {enquiryTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="text-xs font-semibold tracking-[0.16em] text-muted-foreground">
                  MESSAGE
                </span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full resize-none rounded-md border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
              <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-115 disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send Enquiry"} <ArrowRight className="size-4" />
                </button>
                <a
                  href="mailto:brightmaryada@gmail.com"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <Mail className="size-4" /> Email Us
                </a>
                <a
                  href="tel:+918310596804"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <Phone className="size-4" /> +91 83105 96804
                </a>
                {sent && (
                  <p className="text-sm text-primary">
                    Thank you — we have received your enquiry and will get back to you shortly.
                  </p>
                )}
                {error && <p className="text-sm text-destructive">{error}</p>}
              </div>
            </form>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="glass-panel h-full rounded-xl p-8">
            <p className="text-xs font-semibold tracking-[0.24em] text-muted-foreground">
              WHAT HAPPENS NEXT
            </p>
            <ol className="mt-8 space-y-7">
              {[
                { t: "We review your enquiry", c: "Requirements and product categories are assessed." },
                { t: "Our team responds", c: "You hear back from us as soon as possible." },
                { t: "We map the supply", c: "Sourcing, pricing and delivery are aligned to your needs." },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="glow-ring flex size-8 shrink-0 items-center justify-center rounded-md bg-surface-elevated font-display text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-base font-bold tracking-tight">{s.t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.c}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-9 border-t border-border pt-6 text-sm text-muted-foreground">
              Prefer email? Write to us at{" "}
              <a href="mailto:brightmaryada@gmail.com" className="text-primary hover:underline">
                brightmaryada@gmail.com
              </a>
              .
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Or message us at{" "}
              <a href="tel:+918310596804" className="text-primary hover:underline">
                +91 83105 96804
              </a>
              .
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label>
      <span className="text-xs font-semibold tracking-[0.16em] text-muted-foreground">
        {label.toUpperCase()}
      </span>
      <input
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-md border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </label>
  );
}
