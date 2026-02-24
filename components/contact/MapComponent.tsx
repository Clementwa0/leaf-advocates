"use client";

export default function MapComponent() {
  return (
    <div className="w-full h-[400px] md:h-full rounded-2xl overflow-hidden shadow-md">
      <iframe
        title="Leaf Law Firm Location"
        src="https://www.google.com/maps?q=Nairobi,Kenya&output=embed"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
        aria-label="Map showing Leaf Law Firm location in Nairobi"
      />
    </div>
  );
}