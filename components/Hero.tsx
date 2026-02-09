import Link from "next/link";
import type { ReactNode } from "react";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  children?: ReactNode;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
}: HeroProps) {
  return (
    <section className="section pt-10 pb-14 md:pt-14 md:pb-20">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        <div>
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h1 className="heading-xl">{title}</h1>
          <p className="body-lg mt-4 max-w-xl">{subtitle}</p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {primaryCta && (
                <Link href={primaryCta.href}>
                  <button className="btn-primary">{primaryCta.label}</button>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <button className="btn-secondary">
                    {secondaryCta.label}
                  </button>
                </Link>
              )}
            </div>
          )}
        </div>

        <div className="card">
          <div className="card-inner">
            {children ?? (
              <div className="space-y-4">
                <p className="text-sm font-medium text-slate-900">
                  Why clients choose Leaf Advocates
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-700" />
                    <span>Clear, practical legal advice for complex matters.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-700" />
                    <span>
                      Dedicated advocates focused on business continuity and
                      risk management.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-700" />
                    <span>Responsive support throughout your legal journey.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

