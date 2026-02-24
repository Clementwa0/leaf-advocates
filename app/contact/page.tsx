import { ContactHero, ContactInfoCard, ContactForm, ContactMap, ContactCTA } from "@/components/";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <ContactHero />

      {/* Main Content Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Info & Map */}
            <div className="space-y-8">
              <div className="sticky top-24">
                <ContactInfoCard />
                <div className="mt-8">
                  <ContactMap />
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="lg:sticky lg:top-24">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Separator className="bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ContactCTA />
        </div>
      </section>
    </main>
  );
}