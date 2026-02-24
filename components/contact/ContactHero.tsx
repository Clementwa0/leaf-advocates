import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="bg-slate-950 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Simple Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Get in Touch with{" "}
          <span className="text-primary">Leaf Law Firm</span>
        </h1>
        
        {/* Brief Description */}
        <p className="text-slate-400 mt-3 text-base">
          Professional legal guidance in Nairobi. Reach out for a consultation.
        </p>

        {/* Single CTA Button */}
        <div className="mt-6">
          <Button asChild size="sm" className="gap-2">
            <Link href="tel:+254700000000">
              <Phone className="h-3.5 w-3.5" />
              +254 700 000 000
            </Link>
          </Button>
        </div>
        <div className="w-12 h-0.5 bg-primary/30 mx-auto mt-8" />
      </div>
    </section>
  );
};

export default ContactHero;