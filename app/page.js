import { HeroSection } from "@/components/home/HeroSection";
import { ProblemFinder } from "@/components/home/ProblemFinder";
import { SpecializedSection } from "@/components/home/SpecializedSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { AboutSection } from "@/components/home/AboutSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { generateOrganizationSchema } from "@/lib/seo";

export const metadata = {
  title: "1Tax India - Chartered Accountants & Tax Advisory Firm in India",
  description:
    "Top-rated Chartered Accountant firm in Delhi NCR & Pan-India. Expert CA advisory for Company Registration, MSME Payment Recovery, GST Refunds, and Income Tax Scrutiny Litigation.",
  keywords: [
    "Chartered Accountant India",
    "CA Firm in Delhi NCR",
    "MSME Payment Recovery",
    "Company Registration",
    "Income Tax Notice Reply",
    "GST Refund Consultant",
    "Virtual CFO Services",
  ],
  alternates: {
    canonical: "https://www.1tax.in",
  },
  openGraph: {
    title: "1Tax India - Premier Chartered Accountant & Tax Advisory Firm",
    description:
      "Expert CA advisory for Company Registration, MSME Payment Recovery, GST Refunds, and Income Tax Scrutiny Litigation.",
    url: "https://www.1tax.in",
    siteName: "1Tax India",
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  const jsonLd = generateOrganizationSchema();

  return (
    <>
      {/* Schema.org Structured Data for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <HeroSection />
        <ProblemFinder />
        <SpecializedSection />
        <PackagesSection />
        <AboutSection />
        <WhyChooseUs />
        <ProcessTimeline />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
    </>
  );
}
