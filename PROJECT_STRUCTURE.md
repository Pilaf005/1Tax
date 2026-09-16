# 1Tax CA Firm — Complete Project File & Folder Structure (User Website)

This repository contains the complete, production-grade folder and file structure for the **1Tax User-Facing Website**, structured for Next.js App Router, 100% SEO-readiness, and backend API handlers.

---

## Complete Directory & File Structure

```
one-tax/
├── app/
│   ├── layout.js                          # Root Layout Stub
│   ├── page.js                            # Home Page Route Stub
│   ├── not-found.js                       # 404 Route Stub
│   ├── sitemap.js                         # XML Sitemap Route Stub
│   ├── robots.js                          # Robots.txt Route Stub
│   ├── manifest.js                        # Manifest Route Stub
│   ├── globals.css                        # CSS Entrypoint (@import "tailwindcss")
│   │
│   ├── (marketing)/                       # Marketing & Regional Routes
│   │   ├── about/page.js                  # /about
│   │   ├── contact/page.js                # /contact
│   │   ├── faqs/page.js                   # /faqs
│   │   ├── startup-package/page.js        # /startup-package
│   │   └── locations/
│   │       ├── page.js                    # /locations
│   │       └── [city]/page.js             # /locations/[city]
│   │
│   ├── services/                          # Services Engine Routes
│   │   ├── page.js                        # /services
│   │   ├── [slug]/page.js                 # /services/[slug]
│   │   └── specialized/                   # High-Value Practice Routes
│   │       ├── msme-payment-recovery/page.js
│   │       ├── search-seizure-cases/page.js
│   │       ├── income-tax-assessment/page.js
│   │       ├── trademark-litigation/page.js
│   │       ├── inverted-duty-refund/page.js
│   │       └── export-gst-refund/page.js
│   │
│   ├── blog/                              # Knowledge & Tax Updates
│   │   ├── page.js                        # /blog
│   │   └── [slug]/page.js                 # /blog/[slug]
│   │
│   ├── (legal)/                           # Compliance & Policies
│   │   ├── privacy-policy/page.js         # /privacy-policy
│   │   ├── terms/page.js                  # /terms
│   │   ├── disclaimer/page.js             # /disclaimer
│   │   └── refund-policy/page.js          # /refund-policy
│   │
│   └── api/                               # Backend API Handlers
│       ├── leads/route.js                 # /api/leads
│       ├── upload/route.js                # /api/upload
│       ├── contact/route.js               # /api/contact
│       ├── services/route.js              # /api/services
│       └── faqs/route.js                  # /api/faqs
│
├── components/
│   ├── layout/                            # Layout Shell Components
│   │   ├── AppLayoutClient.jsx
│   │   ├── Header.jsx
│   │   ├── MegaMenu.jsx
│   │   ├── Footer.jsx
│   │   ├── FloatingWhatsApp.jsx
│   │   └── MobileActionBar.jsx
│   │
│   ├── home/                              # Homepage Sections
│   │   ├── HeroSection.jsx
│   │   ├── ProblemFinder.jsx
│   │   ├── SpecializedSection.jsx
│   │   ├── MajorServicesGrid.jsx
│   │   ├── StartupPackageBanner.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── ProcessTimeline.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── FAQSection.jsx
│   │   └── FinalCTA.jsx
│   │
│   ├── services/                          # Service Detail Components
│   │   ├── ServiceHero.jsx
│   │   ├── ServiceAudience.jsx
│   │   ├── ServiceProcess.jsx
│   │   ├── DocumentChecklist.jsx
│   │   ├── RelatedServices.jsx
│   │   └── SpecializedTemplate.jsx
│   │
│   ├── forms/                             # Form & Upload Components
│   │   ├── ConsultationModal.jsx
│   │   ├── InstantCallbackForm.jsx
│   │   ├── ServiceEnquiryForm.jsx
│   │   ├── ComplexCaseAssessmentForm.jsx
│   │   └── DocumentUploadDropzone.jsx
│   │
│   ├── blog/                              # Blog Components
│   │   ├── BlogCard.jsx
│   │   └── BlogHeader.jsx
│   │
│   └── ui/                                # Reusable UI Atoms
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Badge.jsx
│       ├── Input.jsx
│       ├── Textarea.jsx
│       ├── Select.jsx
│       └── Accordion.jsx
│
├── data/                                  # Structured Data Stubs
│   ├── services.js
│   ├── packages.js
│   ├── faqs.js
│   ├── testimonials.js
│   ├── locations.js
│   └── blogs.js
│
└── lib/                                   # Core Utility Stubs
    ├── db.js
    ├── seo.js
    ├── attribution.js
    ├── whatsapp.js
    └── validation.js
```
