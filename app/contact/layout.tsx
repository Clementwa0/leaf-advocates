import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Leaf Law Firm | Professional Legal Services in Nairobi",
  description:
    "Contact Leaf Law Firm for trusted legal representation in Nairobi, Kenya. Schedule your consultation today.",
  openGraph: {
    title: "Contact Leaf Law Firm",
    description:
      "Professional legal consultation and representation in Nairobi.",
    url: "https://leaflawfirm.com/contact",
    siteName: "Leaf Law Firm",
    locale: "en_KE",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Leaf Law Firm",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nairobi",
              addressCountry: "KE",
            },
            telephone: "+254700000000",
            openingHours: "Mo-Fr 08:00-17:00",
          }),
        }}
      />
    </>
  );
}