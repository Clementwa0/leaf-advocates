export default function ContactPage() {
  return (
    <div className="section py-10 md:py-14">
      <header className="max-w-3xl">
        <p className="eyebrow">Contact</p>
        <h1 className="heading-xl mt-3">Connect with Leaf Advocates.</h1>
        <p className="body-lg mt-4">
          Use the details below as placeholders for the firm&apos;s contact
          information and preferred communication channels.
        </p>
      </header>

      <section className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="card">
          <div className="card-inner space-y-4">
            <h2 className="heading-md">Send a brief message</h2>
            <p className="body-md">
              This form is a front-end placeholder and is not connected to any
              backend service. It can later be integrated with email, a CRM, or
              another intake system.
            </p>
            <form className="grid gap-4 md:grid-cols-2" aria-label="Contact form">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-800">
                  Full name
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-600/70"
                    placeholder="Your name"
                  />
                </label>
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-800">
                  Email
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-600/70"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-800">
                  Phone (optional)
                  <input
                    type="tel"
                    className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-600/70"
                    placeholder="+254 ..."
                  />
                </label>
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-800">
                  Matter type
                  <select className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-600/70">
                    <option>Corporate / Commercial</option>
                    <option>Litigation / Dispute</option>
                    <option>Property / Conveyancing</option>
                    <option>Employment / Labour</option>
                    <option>Family / Private client</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-800">
                  Brief overview
                  <textarea
                    className="mt-1 min-h-[120px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-600/70"
                    placeholder="Share a short description of your matter. Please avoid including sensitive details at this stage."
                  />
                </label>
              </div>
              <div className="md:col-span-2">
                <button type="button" className="btn-primary">
                  Submit (placeholder only)
                </button>
              </div>
            </form>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="card">
            <div className="card-inner space-y-2 text-sm text-slate-700">
              <h2 className="heading-md">Contact details</h2>
              <p>Email: info@leafadvocates.co.ke</p>
              <p>Phone: +254 700 000 000</p>
              <p>Office hours: Monday – Friday, 8:30am – 5:00pm (EAT)</p>
            </div>
          </div>
          <div className="card">
            <div className="card-inner space-y-2 text-sm text-slate-700">
              <h3 className="font-semibold text-slate-900">Office location</h3>
              <p>
                Placeholder for physical address and map embed. This can later be
                replaced with a live map and detailed directions.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

