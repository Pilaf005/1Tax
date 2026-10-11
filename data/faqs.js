// 1Tax High-Ranking SEO FAQ Catalog
export const faqCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'notices', label: 'Tax & GST Notices' },
  { id: 'recovery', label: 'MSME & Refunds' },
  { id: 'corporate', label: 'Incorporation & IP' },
  { id: 'advisory', label: 'CA Advisory & NRI' },
];

export const globalFaqs = [
  {
    id: 'it-notice-148-reply',
    category: 'notices',
    categoryLabel: 'Income Tax Scrutiny',
    question: 'What immediate legal steps should I take if I receive an Income Tax notice under Section 148 or 143(2)?',
    answer:
      'Verify the notice authenticity using the Document Identification Number (DIN) on the Income Tax e-filing portal. Request the reasons recorded by the Assessing Officer under Section 148A(b) within 30 days. Do not submit unvetted disclosures. Our Senior Chartered Accountants conduct a comprehensive 24-hour audit of your AIS, TIS, and books to draft an airtight legal rebuttal citing ITAT and High Court precedents, preventing adverse ex-parte assessment orders and penalty proceedings.',
    tag: 'Litigation Defense',
    sla: '24–48 Hr Emergency Audit',
    featured: true,
  },
  {
    id: 'gst-drc01-scn-reply',
    category: 'notices',
    categoryLabel: 'GST Disputes',
    question: 'How do I reply to a GST Show Cause Notice in Form DRC-01 for GSTR-2B vs GSTR-3B ITC mismatches?',
    answer:
      'File your formal legal response in Form DRC-06 within the statutory 30-day window. Perform an invoice-level reconciliation between your purchase registers and the supplier’s GSTR-1 filings. Where suppliers defaulted bona fide, cite CBIC Circular No. 183/15/2022-GST and CA certification guidelines to defend your Input Tax Credit. Our indirect tax team drafts comprehensive factual and legal replies to drop Section 73/74 demands and secure 100% penalty waivers.',
    tag: 'GST SCN Defense',
    sla: '30-Day Response Window',
    featured: true,
  },
  {
    id: 'msme-45-day-recovery',
    category: 'recovery',
    categoryLabel: 'MSME Recovery & 43B(h)',
    question: 'How does the MSME 45-day payment rule under Section 43B(h) work, and how can delayed dues be recovered?',
    answer:
      'Under Section 43B(h) of the Income Tax Act, corporate buyers must pay registered Micro and Small Enterprises within 15 days (without agreement) or 45 days (with written contract), failing which the buyer cannot claim the expense as a tax deduction. If your corporate buyers default beyond 45 days, 1Tax files statutory recovery claims under Section 18 of the MSMED Act before the MSEFC, demanding the principal amount plus mandatory compound interest at 3x the RBI bank rate.',
    tag: 'MSMED Act 2006',
    sla: '3x RBI Compound Interest',
    featured: true,
  },
  {
    id: 'gst-inverted-duty-export-refund',
    category: 'recovery',
    categoryLabel: 'GST Capital Release',
    question: 'How can manufacturers and exporters unlock stuck GST refunds under the Inverted Duty Structure (RFD-01)?',
    answer:
      'Under Section 54(3) of the CGST Act and Rule 89(5), businesses whose input tax rates exceed output tax rates can claim 100% refund of unutilized accumulated ITC. Applications must be filed on the GST portal via Form RFD-01 within 2 years. 1Tax reconciles electronic credit ledgers against GSTR-2B, verifies ICEGATE shipping bills for zero-rated exports, and responds to officer deficiency memos (RFD-03) within 15 days to release working capital directly to your bank account.',
    tag: 'Capital Release',
    sla: '10–14 Day Processing',
    featured: true,
  },
  {
    id: 'pvt-ltd-incorporation-cost-hidden-fees',
    category: 'corporate',
    categoryLabel: 'Company Incorporation',
    question: 'What is the actual cost to incorporate a Private Limited Company in India, and are there hidden charges?',
    answer:
      'Official incorporation costs comprise SPICe+ MCA filing fees, state-specific stamp duty on MOA/AOA, Digital Signature Certificates (Class 3 DSC), and Director Identification Numbers (DIN). Online aggregators often advertise ₹499 teaser rates, only to bill surprise charges for stamp duty, PAN/TAN generation, INC-20A Commencement of Business certification, and first-year statutory audits. 1Tax provides a 100% fixed upfront quote covering government fees, name approval, incorporation, and post-incorporation setup with zero hidden surcharges.',
    tag: 'Fixed Upfront Pricing',
    sla: '3–5 Working Days',
    featured: true,
  },
  {
    id: 'trademark-objection-section-9-11',
    category: 'corporate',
    categoryLabel: 'Intellectual Property',
    question: 'How do you defend Trademark objections under Section 9 (Absolute Grounds) and Section 11 (Relative Grounds)?',
    answer:
      'A formal legal rebuttal to the Trademark Examination Report must be filed via Form TM-M within 30 days. For Section 9 objections (alleged descriptive or non-distinctive mark), we draft evidence of acquired distinctiveness supported by commercial user affidavits, sales invoices, and promotional spend. For Section 11 objections (alleged similarity to existing marks), we demonstrate phonetic, visual, and conceptual distinction under the established Anti-Dissection Rule before the Trade Marks Registry.',
    tag: 'IP Protection',
    sla: '30-Day Response Window',
    featured: false,
  },
  {
    id: 'nri-repatriation-15ca-15cb-lower-tds',
    category: 'advisory',
    categoryLabel: 'NRI Taxation & FEMA',
    question: 'How can an NRI repatriate funds from Indian property sales, and why are Form 15CA & 15CB required?',
    answer:
      'Under FEMA regulations, Non-Resident Indians can repatriate up to $1 Million USD per financial year from their NRO accounts. Authorized dealer banks mandate Form 15CB (a statutory tax determination certificate certified by an active Chartered Accountant) alongside Form 15CA filed on the tax portal. To avoid standard 20% to 30% TDS deduction at source on property sales, 1Tax applies for a Lower or Nil TDS Deduction Certificate under Section 197 before the sale deed execution.',
    tag: 'NRI Taxation & FEMA',
    sla: 'Form 15CA/CB in 24 Hrs',
    featured: false,
  },
  {
    id: 'startup-80iac-tax-exemption',
    category: 'corporate',
    categoryLabel: 'Startup India Benefits',
    question: 'How can early-stage startups claim 100% tax exemption for 3 consecutive years under Section 80-IAC?',
    answer:
      'Incorporated Private Limited companies or LLPs with innovative products/services can qualify for a 100% deduction of profits for 3 consecutive financial years out of their first 10 years. 1Tax secures official DPIIT recognition, structures your corporate cap table and entity filings to satisfy Inter-Ministerial Board (IMB) guidelines, and drafts comprehensive business innovation dossiers for Section 80-IAC approval and Angel Tax exemptions.',
    tag: 'Startup India 80-IAC',
    sla: 'Turnkey DPIIT Structuring',
    featured: false,
  },
  {
    id: 'faceless-ca-delivery-model',
    category: 'advisory',
    categoryLabel: 'Pan-India Delivery',
    question: 'How does 1Tax’s 100% Faceless CA delivery work across 28 Indian states without visiting physical offices?',
    answer:
      'Leveraging the government’s national digital infrastructure — including MCA-21, GSTN, and Income Tax Faceless Assessment (NeAC) — 100% of tax filings, scrutiny replies, and corporate registrations are managed electronically via encrypted digital systems. Clients across all 28 Indian states and global NRI hubs receive dedicated Senior CA partner consultation via direct WhatsApp channels and video conferences, with zero need for physical office visits.',
    tag: 'Pan-India 28 States',
    sla: 'Zero Physical Visits',
    featured: false,
  },
  {
    id: 'ca-firm-vs-aggregators',
    category: 'advisory',
    categoryLabel: 'Advisory Quality',
    question: 'Why should growing businesses choose a dedicated Chartered Accountant firm over generic online aggregators?',
    answer:
      'Online legal portals operate as sales call centers, passing client files to entry-level telecallers and quietly outsourcing filings to unvetted freelancers with zero legal accountability during scrutiny. 1Tax is an active Chartered Accountant practice where your company is paired directly with a certified Fellow Chartered Accountant (FCA). You receive strategic advisory, audit-proof litigation defense, and the strict confidentiality privilege mandated under the Chartered Accountants Act.',
    tag: 'Direct Partner Access',
    sla: '15-Min CA Response SLA',
    featured: true,
  },
];
