// SEO Metadata & Schema.org JSON-LD helper definitions
export const SITE_URL = "https://www.1tax.in";
export const SITE_NAME = "1Tax Advisory — Chartered Accountants & Tax Consultants";
export const PHONE_NUMBER = "+919876543210";
export const WA_NUMBER = "919876543210";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${SITE_URL}/#organization`,
    "name": "1Tax Advisory",
    "alternateName": "1Tax CA Firm",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "image": `${SITE_URL}/logo.png`,
    "description": "Premier Chartered Accountant Firm in Delhi NCR & India specializing in Company Registration, MSME Payment Recovery, GST Refunds, and Income Tax Dispute Litigation.",
    "telephone": PHONE_NUMBER,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi NCR",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6139,
      "longitude": 77.2090
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "19:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "520",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CA & Legal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MSME Payment Recovery",
            "description": "Legal case filing under MSMED Act 2006 for delayed business payments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Income Tax Assessment & Scrutiny",
            "description": "Representation for Sec 148, 143(2) scrutiny and search & seizure cases"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "GST & Inverted Duty Refund",
            "description": "Filing and recovery of accumulated input tax credit refunds"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Startup Registration & Compliance Package",
            "description": "End-to-end Pvt Ltd company incorporation, DPIIT, GST, and accounting setup"
          }
        }
      ]
    }
  };
}

