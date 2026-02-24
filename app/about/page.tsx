export default function AboutPage() {
  return (
    <div className="section py-10 md:py-14">
      <header className="max-w-3xl">
        <p className="eyebrow">About the firm</p>
        <h1 className="heading-xl mt-3">Leaf Advocates LLC.</h1>
        <p className="body-lg mt-4">
          Leaf Advocates LLC is a modern law firm focused on providing clear,
          commercially aware legal advice to businesses, families, and
          professionals.
        </p>
      </header>

      <section className="mt-10 grid gap-8 md:grid-cols-3">
        <div className="card md:col-span-2">
          <div className="card-inner space-y-4">
            <h2 className="heading-md">Our approach</h2>
            <p className="body-md">
              We combine technical legal expertise with a practical appreciation
              of our clients&apos; commercial and personal priorities. Matters
              are handled by lean teams, ensuring that advice is responsive,
              consistent, and grounded in a real understanding of your context.
            </p>
            <p className="body-md">
              We emphasise proactive risk management, clear documentation, and
              transparent communication. Where appropriate, we work alongside
              other advisors such as accountants, tax consultants, and
              transaction advisors to deliver cohesive outcomes.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-inner space-y-3">
            <h2 className="heading-md">At a glance</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Corporate & commercial</li>
              <li>• Litigation & dispute resolution</li>
              <li>• Employment & labour</li>
              <li>• Property & conveyancing</li>
              <li>• Family law and private clients</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="card">
          <div className="card-inner space-y-3">
            <h2 className="heading-md">Our clients</h2>
            <p className="body-md">
              Our client base includes founders and start-ups, established
              companies, SMEs, family-owned businesses, professionals, and
              families planning for intergenerational wealth transfer.
            </p>
            <p className="body-md">
              While matters often originate in Kenya, we regularly coordinate
              with counsel in other jurisdictions where cross-border issues
              arise.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-inner space-y-3">
            <h2 className="heading-md">How we work</h2>
            <p className="body-md">
              Engagements typically begin with a focused consultation to clarify
              objectives, timelines, and key risks. We then recommend the most
              suitable fee structure for the matter, including hourly billing,
              capped fees, or retainer arrangements where appropriate.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

