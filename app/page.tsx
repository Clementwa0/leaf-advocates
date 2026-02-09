import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { BlogCard } from "@/components/BlogCard";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Leaf Advocates LLC"
        title="Modern legal counsel for growing businesses and families."
        subtitle="Leaf Advocates LLC provides clear, practical legal advice across corporate, employment, property, and family law — with a focus on long-term partnership."
        primaryCta={{
          label: "Book a consultation",
          href: "/book-consultation",
        }}
        secondaryCta={{
          label: "Explore our services",
          href: "/services",
        }}
      />

      {/* Practice Areas Preview */}
      <section className="section pb-16">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Practice Areas</p>
            <h2 className="heading-lg mt-2">
              Strategic legal support for key moments.
            </h2>
            <p className="body-md mt-2 max-w-2xl">
              Whether you are incorporating a new company, resolving a dispute, or
              safeguarding family assets, our team provides grounded, practical
              guidance.
            </p>
          </div>
          <Link href="/services">
            <button className="btn-secondary">View all services</button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Corporate & Commercial"
            description="Company registration, shareholder agreements, commercial contracts, and compliance frameworks aligned with your growth plans."
          />
          <ServiceCard
            title="Litigation & Dispute Resolution"
            description="Representation in commercial and civil disputes, arbitration, mediation, and negotiations to protect your position."
          />
          <ServiceCard
            title="Property & Conveyancing"
            description="Land transactions, titles, leases, and due diligence for individuals, developers, and institutional investors."
          />
        </div>
      </section>

      {/* Insights Preview */}
      <section className="section pb-16">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Insights</p>
            <h2 className="heading-lg mt-2">
              Legal perspectives in plain language.
            </h2>
            <p className="body-md mt-2 max-w-2xl">
              Brief explainers and updates to help clients navigate evolving
              regulation and risk.
            </p>
          </div>
          <Link href="/insights">
            <button className="btn-secondary">Visit Insights</button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <BlogCard
            category="Corporate"
            title="Key documents for early-stage companies"
            excerpt="From shareholder agreements to key commercial contracts, we highlight the core documents every growing business should prioritise."
            meta="3 min read • Placeholder insight"
          />
          <BlogCard
            category="Employment"
            title="Designing compliant HR policies"
            excerpt="How thoughtful employment contracts and policies can reduce disputes and support a healthy workplace."
            meta="5 min read • Placeholder insight"
          />
          <BlogCard
            category="Property"
            title="Essential checks before acquiring land"
            excerpt="Due diligence steps to consider before entering into a land purchase or long-term lease."
            meta="4 min read • Placeholder insight"
          />
        </div>
      </section>

      {/* Contact Preview */}
      <section className="section pb-20">
        <div className="card">
          <div className="card-inner flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="heading-lg mt-2">Start a conversation.</h2>
              <p className="body-md mt-2 max-w-xl">
                Share a brief overview of your matter and preferred timelines. A
                member of our team will respond with next steps and proposed
                consultation slots.
              </p>
              <div className="mt-3 text-sm text-slate-700">
                <p>Email: info@leafadvocates.co.ke</p>
                <p>Phone: +254 700 000 000</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link href="/book-consultation">
                <button className="btn-primary w-full justify-center md:w-auto">
                  Book a consultation
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-secondary w-full justify-center md:w-auto">
                  Contact the firm
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

