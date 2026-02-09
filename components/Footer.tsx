import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200/80 bg-slate-950 text-slate-200">
      <div className="section py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="eyebrow text-emerald-400">Leaf Advocates LLC</p>
            <p className="mt-2 text-sm font-medium text-slate-100">
              Modern, responsive legal counsel for businesses and individuals.
            </p>
            <p className="mt-4 text-xs text-slate-400 max-w-md">
              This site contains general information only and does not constitute
              legal advice. For guidance tailored to your circumstances, please
              book a consultation with our team.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Quick Links
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-emerald-300"
                >
                  About the Firm
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-emerald-300"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="transition hover:text-emerald-300"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="transition hover:text-emerald-300"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Legal & Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>
                <Link
                  href="/privacy-policy"
                  className="transition hover:text-emerald-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="transition hover:text-emerald-300"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-emerald-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="mt-4 text-xs text-slate-400">
              <p>Email: info@leafadvocates.co.ke</p>
              <p>Phone: +254 700 000 000</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-slate-800 pt-4 text-xs text-slate-500 md:flex-row md:items-center">
          <p>© {year} Leaf Advocates LLC. All rights reserved.</p>
          <p>Designed for clarity, professionalism, and trust.</p>
        </div>
      </div>
    </footer>
  );
}

