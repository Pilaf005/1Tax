/**
 * 1Tax — Full Services Taxonomy
 * 3-tier navigation data: NAV_TABS → categories → services
 *
 * type: 'mega'       → left sidebar (categories) + right panel (sub-services)
 * type: 'specialized'→ full-width card grid, no left sidebar
 */

export const NAV_TABS = [
  /* ─────────────────────────────────────────────
     TAB 1 — Start & Register
  ───────────────────────────────────────────── */
  {
    id: 'start-register',
    label: 'Start & Register',
    icon: 'Rocket',
    type: 'mega',
    categories: [
      {
        id: 'business-registration-startup',
        label: 'Business Registration & Startup',
        icon: 'Building2',
        href: '/services/business-registration-startup',
        services: [
          { label: 'Private Limited Company Registration', href: '/services/private-limited-company' },
          { label: 'Public Limited Company Registration', href: '/services/public-limited-company' },
          { label: 'One Person Company (OPC) Registration', href: '/services/opc-registration' },
          { label: 'LLP Registration & Agreement', href: '/services/llp-registration' },
          { label: 'Partnership Firm Registration', href: '/services/partnership-firm' },
          { label: 'Sole Proprietorship Registration', href: '/services/sole-proprietorship' },
          { label: 'Section 8 / Nidhi / Producer Company', href: '/services/section-8-company' },
          { label: 'Startup India / DPIIT Recognition', href: '/services/startup-india' },
          { label: 'LLP → Pvt Ltd Conversion', href: '/services/llp-to-pvt-conversion' },
        ],
      },
      {
        id: 'business-registrations-licences',
        label: 'Business Registrations & Licences',
        icon: 'FileText',
        href: '/services/business-registrations-licences',
        services: [
          { label: 'PAN / TAN Registration', href: '/services/pan-tan' },
          { label: 'Digital Signature Certificate (DSC)', href: '/services/dsc' },
          { label: 'MSME / Udyam Registration', href: '/services/msme-registration' },
          { label: 'Professional Tax Registration', href: '/services/professional-tax' },
          { label: 'Shops & Establishment Registration', href: '/services/shops-establishment' },
          { label: 'Trade Licence', href: '/services/trade-licence' },
          { label: 'FSSAI Registration & Licence', href: '/services/fssai' },
          { label: 'Import Export Code (IEC)', href: '/services/iec' },
          { label: 'ISO Certification', href: '/services/iso-certification' },
          { label: 'GeM / NSIC Registration', href: '/services/gem-nsic' },
          { label: 'RERA Registration', href: '/services/rera' },
          { label: 'EPFO / ESIC Registration', href: '/services/epfo-esic' },
        ],
      },
      {
        id: 'trademark-ip',
        label: 'Trademark & Intellectual Property',
        icon: 'Shield',
        href: '/services/trademark-ip',
        services: [
          { label: 'Trademark Search', href: '/services/trademark-search' },
          { label: 'Trademark Registration & Filing', href: '/services/trademark-registration' },
          { label: 'Trademark Renewal', href: '/services/trademark-renewal' },
          { label: 'Trademark Objection Reply', href: '/services/trademark-objection' },
          { label: 'Trademark Opposition / Hearing', href: '/services/trademark-opposition' },
          { label: 'Trademark Assignment', href: '/services/trademark-assignment' },
          { label: 'Trademark Litigation', href: '/services/specialized/trademark-litigation', badge: 'Expert' },
          { label: 'Copyright Registration', href: '/services/copyright' },
          { label: 'Patent Registration', href: '/services/patent' },
          { label: 'Design Registration', href: '/services/design-registration' },
          { label: 'IP Advisory & Protection Strategy', href: '/services/ip-advisory' },
        ],
      },
      {
        id: 'msme-services',
        label: 'MSME Services',
        icon: 'Award',
        href: '/services/msme-services',
        services: [
          { label: 'MSME / Udyam Registration', href: '/services/msme-registration' },
          { label: 'MSME Amendment & Compliance', href: '/services/msme-amendment' },
          { label: 'MSME Advisory', href: '/services/msme-advisory' },
          { label: 'Delayed Payment Advisory', href: '/services/delayed-payment-advisory' },
          { label: 'MSME Payment Recovery', href: '/services/specialized/msme-payment-recovery', badge: 'Hot' },
          { label: 'MSME Case Filing & Documentation', href: '/services/msme-case-filing' },
        ],
      },
      {
        id: 'nri-services',
        label: 'NRI Services',
        icon: 'Globe',
        href: '/services/nri-services',
        services: [
          { label: 'NRI ITR Filing', href: '/services/nri-itr-filing' },
          { label: 'NRI Tax Advisory', href: '/services/nri-tax-advisory' },
          { label: 'NRI Property Tax', href: '/services/nri-property-tax' },
          { label: 'Capital Gains for NRIs', href: '/services/nri-capital-gains' },
        ],
      },
      {
        id: 'corporate-secretarial',
        label: 'Corporate Secretarial Services',
        icon: 'BookOpen',
        href: '/services/corporate-secretarial',
        services: [
          { label: 'Board & General Meeting Support', href: '/services/board-meeting-support' },
          { label: 'Minutes Preparation', href: '/services/minutes-preparation' },
          { label: 'Statutory Registers', href: '/services/statutory-registers' },
          { label: 'Shareholder & Director Compliance', href: '/services/shareholder-compliance' },
          { label: 'Corporate Governance', href: '/services/corporate-governance' },
          { label: 'Annual Compliance Calendar', href: '/services/compliance-calendar' },
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────────
     TAB 2 — Tax & GST
  ───────────────────────────────────────────── */
  {
    id: 'tax-gst',
    label: 'Tax & GST',
    icon: 'Receipt',
    type: 'mega',
    categories: [
      {
        id: 'gst-services',
        label: 'GST Services',
        icon: 'Receipt',
        href: '/services/gst-services',
        services: [
          { label: 'GST Registration', href: '/services/gst-registration' },
          { label: 'GST Amendment / Cancellation / Revocation', href: '/services/gst-amendment' },
          { label: 'GST Returns (GSTR-1, 3B, 4, 5, 6, 7)', href: '/services/gst-returns' },
          { label: 'GST Annual Return (GSTR-9 / 9C)', href: '/services/gst-annual-return' },
          { label: 'ITC Reconciliation', href: '/services/itc-reconciliation' },
          { label: 'E-Invoice & E-Way Bill', href: '/services/e-invoice' },
          { label: 'GST Refund', href: '/services/gst-refund' },
          { label: 'Export GST Refund', href: '/services/specialized/export-gst-refund', badge: 'Expert' },
          { label: 'Inverted Duty Structure Refund', href: '/services/specialized/inverted-duty-refund', badge: 'Expert' },
          { label: 'LUT Filing', href: '/services/lut-filing' },
          { label: 'GST Notice Reply', href: '/services/gst-notice-reply' },
          { label: 'GST Audit Support', href: '/services/gst-audit' },
          { label: 'GST Litigation & Appeal', href: '/services/gst-litigation' },
          { label: 'GST Health Check & Advisory', href: '/services/gst-advisory' },
        ],
      },
      {
        id: 'income-tax',
        label: 'Income Tax Services',
        icon: 'TrendingUp',
        href: '/services/income-tax',
        services: [
          { label: 'Individual ITR Filing', href: '/services/itr-individual' },
          { label: 'Business / Company / LLP ITR', href: '/services/itr-business' },
          { label: 'NRI ITR Filing', href: '/services/nri-itr-filing' },
          { label: 'Revised / Belated / Updated ITR', href: '/services/itr-revised' },
          { label: 'Income Tax Refund', href: '/services/income-tax-refund' },
          { label: 'Tax Planning & Saving Advisory', href: '/services/tax-planning' },
          { label: 'Advance Tax & Capital Gains', href: '/services/capital-gains' },
          { label: 'IT Notice Reply', href: '/services/it-notice-reply' },
          { label: 'Income Tax Assessment Cases', href: '/services/specialized/income-tax-assessment', badge: 'Expert' },
          { label: 'Search & Seizure Cases', href: '/services/specialized/search-seizure-cases', badge: 'Hot' },
          { label: 'Tax Appeal & Representation', href: '/services/tax-appeal' },
        ],
      },
      {
        id: 'tds-payroll',
        label: 'TDS & Payroll Compliance',
        icon: 'CreditCard',
        href: '/services/tds-payroll',
        services: [
          { label: 'TDS Registration & Return Filing', href: '/services/tds-returns' },
          { label: 'TDS Calculation & Reconciliation', href: '/services/tds-reconciliation' },
          { label: 'TDS Certificates (Form 16 / 16A)', href: '/services/form-16' },
          { label: 'TDS Correction & Notice Reply', href: '/services/tds-correction' },
          { label: 'Payroll Management', href: '/services/payroll' },
          { label: 'Salary Processing & Structuring', href: '/services/salary-structuring' },
          { label: 'EPF / ESIC Compliance', href: '/services/epfo-esic' },
        ],
      },
      {
        id: 'international-tax',
        label: 'International Tax & Business',
        icon: 'Globe',
        href: '/services/international-tax',
        services: [
          { label: 'Import Export Code (IEC)', href: '/services/iec' },
          { label: 'Export Compliance & GST Advisory', href: '/services/export-compliance' },
          { label: 'Export GST Refund', href: '/services/specialized/export-gst-refund', badge: 'Expert' },
          { label: 'LUT Filing', href: '/services/lut-filing' },
          { label: 'International Business Setup', href: '/services/international-business' },
          { label: 'Transfer Pricing', href: '/services/transfer-pricing' },
        ],
      },
      {
        id: 'legal-compliance',
        label: 'Legal & Compliance Support',
        icon: 'Scale',
        href: '/services/legal-compliance',
        services: [
          { label: 'Legal Notice Support', href: '/services/legal-notice' },
          { label: 'Contract / Agreement Drafting', href: '/services/agreement-drafting' },
          { label: 'NDA, Employment & Vendor Agreements', href: '/services/nda-drafting' },
          { label: 'Tax & GST Dispute Support', href: '/services/tax-dispute' },
          { label: 'Trademark Disputes', href: '/services/trademark-disputes' },
          { label: 'MSME Disputes', href: '/services/msme-disputes' },
          { label: 'Litigation & Representation Support', href: '/services/litigation-support' },
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────────
     TAB 3 — Compliance & Audit
  ───────────────────────────────────────────── */
  {
    id: 'compliance-audit',
    label: 'Compliance & Audit',
    icon: 'ClipboardCheck',
    type: 'mega',
    categories: [
      {
        id: 'accounting-bookkeeping',
        label: 'Accounting & Bookkeeping',
        icon: 'Book',
        href: '/services/accounting-bookkeeping',
        services: [
          { label: 'Bookkeeping / Monthly / Annual Accounting', href: '/services/bookkeeping' },
          { label: 'Cloud Accounting & Ledger Maintenance', href: '/services/cloud-accounting' },
          { label: 'Bank Reconciliation', href: '/services/bank-reconciliation' },
          { label: 'Financial Statement Preparation', href: '/services/financial-statements' },
          { label: 'Year-End Accounts Finalization', href: '/services/year-end-accounts' },
          { label: 'MIS Reports', href: '/services/mis-reports' },
          { label: 'Payroll Processing', href: '/services/payroll' },
        ],
      },
      {
        id: 'audit-assurance',
        label: 'Audit & Assurance',
        icon: 'ClipboardCheck',
        href: '/services/audit-assurance',
        services: [
          { label: 'Statutory Audit', href: '/services/statutory-audit' },
          { label: 'Tax Audit', href: '/services/tax-audit' },
          { label: 'Internal Audit', href: '/services/internal-audit' },
          { label: 'GST Audit Support', href: '/services/gst-audit' },
          { label: 'Company / LLP / Partnership Audit', href: '/services/company-audit' },
          { label: 'NGO / Stock / Special Audit', href: '/services/ngo-audit' },
          { label: 'Due Diligence', href: '/services/due-diligence' },
          { label: 'Internal Control & Risk Assessment', href: '/services/internal-control' },
        ],
      },
      {
        id: 'roc-mca-compliance',
        label: 'ROC & MCA Compliance',
        icon: 'FolderOpen',
        href: '/services/roc-mca-compliance',
        services: [
          { label: 'Annual ROC Filing (AOC-4, MGT-7)', href: '/services/annual-roc-filing' },
          { label: 'Director KYC / DIN / DSC', href: '/services/director-kyc' },
          { label: 'Registered Office / Name / Object Change', href: '/services/company-changes' },
          { label: 'Director Appointment / Resignation', href: '/services/director-appointment' },
          { label: 'Share Transfer / Allotment / Certificates', href: '/services/share-transfer' },
          { label: 'Rights Issue / Bonus / ESOP Support', href: '/services/esop-support' },
          { label: 'Company Conversion / Merger / Closure', href: '/services/company-conversion' },
          { label: 'Strike Off / Revival / Dormant Compliance', href: '/services/strike-off' },
        ],
      },
      {
        id: 'llp-compliance',
        label: 'LLP Compliance',
        icon: 'Users',
        href: '/services/llp-compliance',
        services: [
          { label: 'Form 8 & Form 11 Filing', href: '/services/llp-annual-filing' },
          { label: 'LLP Agreement Amendment', href: '/services/llp-amendment' },
          { label: 'Partner Addition / Removal / Change', href: '/services/llp-partner-change' },
          { label: 'LLP Name / Office Change', href: '/services/llp-name-change' },
          { label: 'LLP Closure / Conversion', href: '/services/llp-closure' },
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────────
     TAB 4 — Advisory & Finance
  ───────────────────────────────────────────── */
  {
    id: 'advisory-finance',
    label: 'Advisory & Finance',
    icon: 'TrendingUp',
    type: 'mega',
    categories: [
      {
        id: 'business-advisory',
        label: 'Business Advisory',
        icon: 'Lightbulb',
        href: '/services/business-advisory',
        services: [
          { label: 'Business Structure Advisory & Planning', href: '/services/business-structure' },
          { label: 'Business Setup & Growth Advisory', href: '/services/business-growth' },
          { label: 'Financial Planning & Analysis', href: '/services/financial-planning' },
          { label: 'Budgeting, Cash Flow & MIS Reporting', href: '/services/budgeting' },
          { label: 'Financial Modelling & Forecasting', href: '/services/financial-modelling' },
          { label: 'Risk Advisory', href: '/services/risk-advisory' },
        ],
      },
      {
        id: 'virtual-cfo',
        label: 'Virtual CFO Services',
        icon: 'BarChart2',
        href: '/services/virtual-cfo',
        services: [
          { label: 'Financial Reporting & MIS Dashboard', href: '/services/financial-reporting' },
          { label: 'Cash Flow Management', href: '/services/cash-flow' },
          { label: 'Budgeting & Forecasting', href: '/services/budgeting' },
          { label: 'Business Performance Analysis', href: '/services/performance-analysis' },
          { label: 'Cost Optimization', href: '/services/cost-optimization' },
          { label: 'Investor / Board Reporting', href: '/services/investor-reporting' },
          { label: 'Fundraising Financial Support', href: '/services/fundraising-support' },
        ],
      },
      {
        id: 'funding-finance',
        label: 'Funding & Finance',
        icon: 'Banknote',
        href: '/services/funding-finance',
        services: [
          { label: 'Business / Working Capital / MSME Loans', href: '/services/business-loans' },
          { label: 'Startup Funding Readiness', href: '/services/startup-funding' },
          { label: 'Investor Readiness & Fundraising Support', href: '/services/investor-readiness' },
          { label: 'Detailed Project Report (DPR) / CMA Data', href: '/services/dpr-cma' },
          { label: 'Financial Projections / Business Plan', href: '/services/financial-projections' },
          { label: 'Financial Model & Loan Documentation', href: '/services/loan-documentation' },
        ],
      },
      {
        id: 'valuation',
        label: 'Valuation Services',
        icon: 'Calculator',
        href: '/services/valuation',
        services: [
          { label: 'Company / Startup Valuation', href: '/services/company-valuation' },
          { label: 'Share / ESOP Valuation', href: '/services/share-valuation' },
          { label: 'Financial Asset Valuation', href: '/services/asset-valuation' },
          { label: 'Transaction / Fundraising Valuation', href: '/services/transaction-valuation' },
          { label: 'Valuation Report', href: '/services/valuation-report' },
        ],
      },
      {
        id: 'restructuring',
        label: 'Business Restructuring & Transactions',
        icon: 'ArrowLeftRight',
        href: '/services/restructuring',
        services: [
          { label: 'Corporate Restructuring / Merger Support', href: '/services/corporate-restructuring' },
          { label: 'Amalgamation / Demerger Support', href: '/services/amalgamation' },
          { label: 'Business Transfer / Company Conversion', href: '/services/business-transfer' },
          { label: 'Corporate & M&A Due Diligence', href: '/services/ma-due-diligence' },
        ],
      },
      {
        id: 'insolvency',
        label: 'Insolvency & Special Situations',
        icon: 'AlertTriangle',
        href: '/services/insolvency',
        services: [
          { label: 'Insolvency Advisory', href: '/services/insolvency-advisory' },
          { label: 'Financial & Debt Restructuring', href: '/services/debt-restructuring' },
          { label: 'Insolvency Documentation', href: '/services/insolvency-docs' },
          { label: 'Recovery Advisory', href: '/services/recovery-advisory' },
          { label: 'Corporate Resolution Support', href: '/services/corporate-resolution' },
        ],
      },
      {
        id: 'forensic-risk',
        label: 'Forensic & Risk Advisory',
        icon: 'Eye',
        href: '/services/forensic-risk',
        services: [
          { label: 'Forensic Audit', href: '/services/forensic-audit' },
          { label: 'Risk Assessment & Management', href: '/services/risk-assessment' },
          { label: 'Fraud Investigation Support', href: '/services/fraud-investigation' },
          { label: 'Compliance Risk Review', href: '/services/compliance-risk' },
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────────
     TAB 5 — ⚡ Specialized (full-width card grid)
  ───────────────────────────────────────────── */
  {
    id: 'specialized',
    label: 'Specialized',
    icon: 'Zap',
    type: 'specialized',
    services: [
      {
        label: 'MSME Payment Recovery',
        href: '/services/specialized/msme-payment-recovery',
        badge: 'Most Demanded',
        badgeVariant: 'hot',
        description: 'File MSME cases & recover delayed payments legally',
        icon: 'Scale',
      },
      {
        label: 'Search & Seizure Cases',
        href: '/services/specialized/search-seizure-cases',
        badge: 'Expert',
        badgeVariant: 'expert',
        description: 'CA representation & protection for IT search operations',
        icon: 'SearchCheck',
      },
      {
        label: 'Income Tax Assessment Cases',
        href: '/services/specialized/income-tax-assessment',
        badge: 'Defence',
        badgeVariant: 'defence',
        description: 'Fight tax demands, scrutiny & reassessment orders',
        icon: 'ShieldCheck',
      },
      {
        label: 'Trademark Litigation',
        href: '/services/specialized/trademark-litigation',
        badge: 'IP Expert',
        badgeVariant: 'expert',
        description: 'Infringement, opposition & trademark enforcement',
        icon: 'Shield',
      },
      {
        label: 'Inverted Duty Structure Refund',
        href: '/services/specialized/inverted-duty-refund',
        badge: 'Refund',
        badgeVariant: 'refund',
        description: 'Claim stuck GST refunds on input tax credit',
        icon: 'RotateCcw',
      },
      {
        label: 'Export GST Refund',
        href: '/services/specialized/export-gst-refund',
        badge: 'Refund',
        badgeVariant: 'refund',
        description: 'IGST & ITC refund for exporters of goods and services',
        icon: 'PackageCheck',
      },
      {
        label: 'GST Assessment & Dispute Support',
        href: '/services/gst-assessment',
        badge: 'Defence',
        badgeVariant: 'defence',
        description: 'Handle GST notices, demands, appeals & litigation',
        icon: 'FileWarning',
      },
      {
        label: 'Tax Notice & Representation',
        href: '/services/tax-notice',
        badge: 'Defence',
        badgeVariant: 'defence',
        description: 'Expert notice response & government hearing representation',
        icon: 'MessageSquareWarning',
      },
      {
        label: 'Complex Tax & Compliance Advisory',
        href: '/services/complex-tax-advisory',
        badge: 'Strategic',
        badgeVariant: 'strategic',
        description: 'Multi-angle advisory for complex business situations',
        icon: 'BrainCircuit',
      },
    ],
  },

  /* ─────────────────────────────────────────────
     TAB 6 — Resources & Tools
  ───────────────────────────────────────────── */
  {
    id: 'resources',
    label: 'Resources & Tools',
    icon: 'Compass',
    type: 'resources',
    sections: [
      {
        title: 'Free Tax & Business Tools',
        icon: 'Calculator',
        items: [
          { label: 'Income Tax Calculator', href: '/tools/income-tax-calculator', badge: 'New', desc: 'Compare Old vs New tax regime' },
          { label: 'GST Rate & Tax Calculator', href: '/tools/gst-calculator', desc: 'Calculate CGST, SGST & IGST in seconds' },
          { label: 'HRA Exemption Calculator', href: '/tools/hra-calculator', desc: 'Calculate rent tax exemption accurately' },
          { label: 'MSME Delayed Interest Calculator', href: '/tools/msme-interest-calculator', desc: 'Calculate 3x bank rate interest claim' },
        ],
      },
      {
        title: 'Knowledge & Updates',
        icon: 'BookOpen',
        items: [
          { label: 'Tax & Compliance Blog', href: '/blog', desc: 'Expert articles, statutory updates & alerts' },
          { label: 'Frequently Asked Questions', href: '/faqs', desc: 'Answers to common CA and business questions' },
          { label: 'Startup Handbook 2026', href: '/startup-package', desc: 'End-to-end founder guide to registration & compliance' },
          { label: 'Legal & Transparency', href: '/privacy-policy', desc: 'Privacy, terms, disclaimer & refund policy' },
        ],
      },
      {
        title: 'Company & Presence',
        icon: 'Building2',
        items: [
          { label: 'About 1Tax Advisory', href: '/about', desc: 'Our practice philosophy, CA team & track record' },
          { label: 'Pan-India Office Locations', href: '/locations', desc: 'Delhi NCR, Mumbai, Bengaluru, Hyderabad & more' },
          { label: 'Contact & Support', href: '/contact', desc: 'Schedule a call, callback, or direct consultation' },
        ],
      },
    ],
    featured: {
      tag: 'Statutory Alert',
      title: 'Tax Compliance Calendar 2026-27',
      description: 'Never miss an Advance Tax, GSTR-3B, or ROC deadline. Download our free CA-verified due date sheet.',
      cta: 'View Deadlines',
      href: '/faqs',
    },
  },
];

/* ─────────────────────────────────────────────
   Flat exports used by other pages
───────────────────────────────────────────── */

/** All 9 specialized/flagship services */
export const specializedServices = NAV_TABS.find((t) => t.id === 'specialized').services;

/** All 24 category objects across the 4 mega tabs */
export const coreServices = NAV_TABS.filter((t) => t.type === 'mega').flatMap((t) => t.categories);

/** All searchable services across all categories + specialized + other option */
export const allSearchableServices = [
  ...specializedServices.map((s, i) => ({
    id: `spec-${s.href || s.label}-${i}`,
    label: s.label,
    category: '⚡ Specialized & Flagship',
    badge: s.badge,
    badgeVariant: s.badgeVariant,
  })),
  ...NAV_TABS.filter((t) => t.type === 'mega').flatMap((tab) =>
    tab.categories.flatMap((cat) =>
      cat.services.map((svc, i) => ({
        id: `svc-${cat.id}-${svc.href || svc.label}-${i}`,
        label: svc.label,
        category: cat.label,
        group: tab.label,
        badge: svc.badge,
      }))
    )
  ),
  { id: 'pkg-startup', label: 'Startup Package (End-to-End Incorporation & Setup)', category: 'Packages' },
  { id: 'custom-other', label: 'Other / Custom Advisory Requirement', category: 'Custom' },
];



