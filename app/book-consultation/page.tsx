import Link from "next/link";

export default function BookConsultationPage() {
  return (
    <div className="section py-10 md:py-14">
      <header className="max-w-3xl">
        <p className="eyebrow">Book Consultation</p>
        <h1 className="heading-xl mt-3">Schedule time with Leaf Advocates.</h1>
        <p className="body-lg mt-4">
          Use this page as the starting point for client intake. The sections
          below are placeholders and can later be connected to an online booking
          tool, form, or CRM workflow.
        </p>
      </header>

      <section className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <div className="card">
            <div className="card-inner space-y-3">
              <h2 className="heading-md">How consultations work</h2>
              <p className="body-md">
                Initial consultations are used to understand your objectives,
                timelines, and any urgent risks. The firm will then provide a
                proposed scope of work and confirm the fee structure before
                proceeding.
              </p>
              <p className="body-md">
                For corporate and transactional matters, you may be asked to
                share key documents in advance. For disputes or ongoing
                litigation, kindly share any existing pleadings, correspondence,
                or orders where available.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-inner space-y-3">
              <h2 className="heading-md">What to prepare</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• A brief description of your matter.</li>
                <li>• Relevant dates and upcoming deadlines.</li>
                <li>• The main questions you would like addressed.</li>
                <li>• Any existing contracts, correspondence, or court documents.</li>
              </ul>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="card">
            <div className="card-inner space-y-4">
              <h2 className="heading-md">Next Steps</h2>
              <p className="body-md">
                This sidebar can later host an embedded booking widget or form.
                For now, you can direct clients to the online booking placeholder
                page.
              </p>
              <Link href="/book-consultation/online-booking">
                <button className="btn-primary w-full justify-center">
                  Go to online booking
                </button>
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-inner space-y-2 text-sm text-slate-700">
              <h3 className="font-semibold text-slate-900">
                Consultation disclaimer
              </h3>
              <p>
                A consultation does not in itself create an ongoing retainer.
                Formal engagement terms will be shared where the firm is able to
                act and conflict checks have been completed.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

