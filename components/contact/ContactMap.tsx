"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/contact/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-muted animate-pulse rounded-2xl" />
  ),
});

export default function ContactMap() {
  return <Map />;
}