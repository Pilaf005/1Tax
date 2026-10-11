'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Rocket, Receipt, ClipboardCheck, Shield, TrendingUp,
  Sparkles, Check, CheckCircle2, Building2, ArrowRight,
  MessageSquare, Clock, Award, FileText, Scale,
  BarChart2, Banknote, FileCheck2, ShieldCheck, ChevronRight
} from 'lucide-react';
import { WA_NUMBER } from '@/lib/seo';

const PILLARS_DATA = [
  // PILLAR 01: Start & Register
  {
    id: 'start-register',
    number: 'Pillar 01',
    title: 'Start & Register',
    subtitle: 'Incorporation & Licences',
    icon: Rocket,
    serviceCount: '12 Services',
    advisory: {
      tag: 'Pillar 01: Entity Formation & Licensing',
      headline: 'Form Your Entity with Zero Rejection Guarantee',
      description: 'Our senior corporate CAs draft MOA/AOA, secure RUN name approval, and liaise directly with the Registrar of Companies (ROC) for seamless pan-India incorporation.',
      badges: [
        'MCA SPICe+ Integrated Filing',
        'DPIIT Fast-Track Recognition',
        'PAN & TAN within 24 Hours',
      ],
      turnaroundTitle: '⚡ Incorporation in 3–5 Days',
      turnaroundDesc: 'Guaranteed MCA approval or full fee refund. Direct access to filing ticket.',
      stat: '4,200+ Companies Formed in Delhi NCR, BLR & Mumbai',
      partner: {
        initials: 'AS',
        name: 'CA Ananya Sharma, FCA',
        role: 'Partner Direct Desk',
        desc: '14+ Yrs ROC & Corporate Advisory',
      },
      ctaText: 'Consult Senior CA on Incorporation',
      waMessage: 'Hello 1Tax! I want to start a new company and need CA guidance on incorporation and licenses.',
      categoryHref: '/services/business-registration-startup',
      categoryLabel: 'Explore All 12 Start & Register Services (Section 8, OPC, Producer Co.)',
    },
    services: [
      {
        id: 'pvt-ltd',
        badge: 'Most Popular for Startups',
        icon: Building2,
        iconColor: '#2563EB',
        iconBg: '#EFF6FF',
        title: 'Private Limited (Pvt Ltd) Company',
        subtitle: 'The gold standard for VC funding, limited liability, and enterprise scale.',
        bullets: [
          '2 DSCs + 2 DINs + Name Reservation (RUN)',
          'Drafting of specialized MOA & AOA by Corporate CA',
          'MCA SPICe+ Part A & B filing + Certificate of Incorporation',
          'Integrated Bank Account, PAN, TAN & EPFO/ESIC registrations',
        ],
        timeline: '⚡ 3–5 Working Days',
        actionText: 'Initiate Pvt Ltd Filing',
        href: '/services/private-limited-company',
      },
      {
        id: 'llp',
        badge: 'Tax-Efficient Structure',
        icon: Scale,
        iconColor: '#0D9488',
        iconBg: '#F0FDFA',
        title: 'Limited Liability Partnership (LLP)',
        subtitle: 'Ideal for consulting firms, agencies, and professional services with zero dividend tax.',
        bullets: [
          'DPIN generation for 2 designated partners',
          'Detailed customized LLP Agreement drafting (Form 3 filing)',
          'ROC scrutiny clearance & statutory partnership registration',
          'Pan-India digital document signing via secure token',
        ],
        timeline: '⏱ 4–6 Working Days',
        actionText: 'Form Your LLP',
        href: '/services/llp-registration',
      },
      {
        id: 'startup-india',
        badge: 'Tax Holiday Ready',
        icon: Award,
        iconColor: '#EA8932',
        iconBg: '#FFF7ED',
        title: 'Startup India DPIIT Certification',
        subtitle: 'Unlock 3-year Section 80-IAC tax holiday, Angel Tax exemption, and fast-track patents.',
        bullets: [
          'Detailed innovation writeup & pitch curation by CA team',
          'DPIIT portal submission with 100% compliance vetting',
          'Inter-Ministerial Board (IMB) tax holiday eligibility review',
          'Government tender bid exemption enablement',
        ],
        timeline: '⚡ 24–48 Hours',
        actionText: 'Claim DPIIT Status',
        href: '/services/startup-india',
      },
      {
        id: 'udyam-msme',
        badge: 'Statutory Pay Protection',
        icon: ShieldCheck,
        iconColor: '#059669',
        iconBg: '#ECFDF5',
        title: 'Udyam / MSME Registration',
        subtitle: 'Statutory rights under MSMED Act 2006 to recover overdue client receivables at 3x bank interest.',
        bullets: [
          'Immediate Udyam Registration Certificate with NIC code mapping',
          'Enrolment in MSME Samadhaan dispute portal',
          'Priority sector lending (PSL) eligibility certification',
          '50% concession on trademark & patent government filing fees',
        ],
        timeline: '✓ Same Day (24h)',
        actionText: 'Get Udyam Certificate',
        href: '/services/msme-registration',
      },
    ],
  },

  // PILLAR 02: Manage Taxes
  {
    id: 'manage-taxes',
    number: 'Pillar 02',
    title: 'Manage Taxes',
    subtitle: 'GST & Income Tax Filings',
    icon: Receipt,
    serviceCount: '14 Services',
    advisory: {
      tag: 'Pillar 02: Direct & Indirect Tax Optimization',
      headline: 'Zero-Penalty Tax Optimization & Guaranteed Filings',
      description: 'From monthly GSTR-1 & 3B reconciliation to complex corporate ITR filings and refund disbursals, our designated tax partners guard your business against audits and interest penalties.',
      badges: [
        '100% Faceless CBDT & GSTN Portals',
        'Automated 2B vs Purchase Register Reco',
        'Advance Tax Planning to Minimize Outflow',
      ],
      turnaroundTitle: '⏱ 24–48h Return Verification',
      turnaroundDesc: 'Zero mismatch assurance with automated GSTR-2B ITC tracking.',
      stat: '₹120+ Cr Tax Handled Annually with 99.4% Timely Filing',
      partner: {
        initials: 'VK',
        name: 'CA Vikas Khanna, FCA, DISA',
        role: 'Partner Direct Desk',
        desc: '16+ Yrs GST & Income Tax Advisory',
      },
      ctaText: 'Consult Tax Partner on Filing',
      waMessage: 'Hello 1Tax! I need expert CA assistance with GST returns and corporate income tax planning.',
      categoryHref: '/services/gst-services',
      categoryLabel: 'Explore All 14 Manage Taxes Services (TDS, International Tax, Scrutiny)',
    },
    services: [
      {
        id: 'itr-business',
        badge: 'Statutory Tax Audit Ready',
        icon: FileText,
        iconColor: '#2563EB',
        iconBg: '#EFF6FF',
        title: 'Corporate & Business ITR Filing',
        subtitle: 'Comprehensive computation, allowable expense deduction, and depreciation optimization.',
        bullets: [
          'Filing of ITR-3, 5, 6 for Companies, LLPs & Firms',
          'Detailed balance sheet & P&L tax adjustment schedule',
          'Advance tax scheduling & MAT credit computation',
          'Immediate ITR-V verification & acknowledgement generation',
        ],
        timeline: '⚡ 2–3 Days Finalization',
        actionText: 'File Business ITR',
        href: '/services/itr-business',
      },
      {
        id: 'gst-returns',
        badge: 'ITC Leakage Prevention',
        icon: Receipt,
        iconColor: '#EA8932',
        iconBg: '#FFF7ED',
        title: 'Monthly GST Retainer (GSTR-1 & 3B)',
        subtitle: 'End-to-end invoice upload, HSN classification, and monthly return submission.',
        bullets: [
          'Automated GSTR-2B vs purchase register reconciliation',
          'Timely filing of monthly/quarterly GSTR-1 & GSTR-3B',
          'E-way bill & E-invoice threshold compliance review',
          'Zero late fee and zero interest filing guarantee',
        ],
        timeline: '⏱ Monthly Retainer',
        actionText: 'Manage GST Returns',
        href: '/services/gst-returns',
      },
      {
        id: 'gst-refund',
        badge: 'Direct Bank Disbursement',
        icon: TrendingUp,
        iconColor: '#059669',
        iconBg: '#ECFDF5',
        title: 'Inverted Duty & Export GST Refund',
        subtitle: 'Fast-track unutilized input tax credit (ITC) refunds for manufacturers and exporters.',
        bullets: [
          'RFD-01 refund calculation under Rule 89(5) & 89(4)',
          'Senior CA certification & turnover verification annexures',
          'Departmental query resolution & deficiency memo reply',
          'Direct bank treasury credit monitoring via PFMS',
        ],
        timeline: '✓ 14–21 Days Payout',
        actionText: 'Claim GST Refund',
        href: '/services/specialized/inverted-duty-refund',
      },
      {
        id: 'tds-payroll',
        badge: 'Zero Notice Processing',
        icon: FileCheck2,
        iconColor: '#7C3AED',
        iconBg: '#F5F3FF',
        title: 'TDS & Payroll Compliance',
        subtitle: 'Flawless tax deduction at source, challan generation, and quarterly return filings.',
        bullets: [
          'Monthly TDS challan calculation (Sec 194C, 194J, 194I)',
          'Quarterly Form 24Q (Salary) & 26Q (Non-Salary) e-filing',
          'Bulk Form 16 & Form 16A download & digital signing',
          'TRACES correction statements & default notice resolution',
        ],
        timeline: '⏱ Quarterly 24Q / 26Q',
        actionText: 'Manage TDS Filings',
        href: '/services/tds-returns',
      },
    ],
  },

  // PILLAR 03: Maintain Compliance
  {
    id: 'maintain-compliance',
    number: 'Pillar 03',
    title: 'Maintain Compliance',
    subtitle: 'ROC, Audits & Bookkeeping',
    icon: ClipboardCheck,
    serviceCount: '10 Services',
    advisory: {
      tag: 'Pillar 03: Corporate Governance & Statutory Audit',
      headline: 'Keep Your Company 100% Audit-Proof & ROC Compliant',
      description: 'Avoid director disqualification, hefty ROC penalty compounding, and statutory defaults with dedicated CA bookkeeping, board minutes, and annual ROC filings.',
      badges: [
        'ICAI Statutory Auditing Standards',
        'MCA V3 Portal Compliant Filing',
        'Real-Time Cloud MIS Dashboards',
      ],
      turnaroundTitle: '⚡ Annual Filing Calendar Automated',
      turnaroundDesc: 'Pre-scheduled statutory milestones to prevent ₹100/day MCA fines.',
      stat: '850+ Retainer Clients Managed with Zero Disqualifications',
      partner: {
        initials: 'RG',
        name: 'CA Rajesh Gupta, FCA',
        role: 'Partner Direct Desk',
        desc: '18+ Yrs Statutory Audit & MCA Compliance',
      },
      ctaText: 'Get Full Compliance Retainer',
      waMessage: 'Hello 1Tax! I want to streamline our company accounting, audit, and annual ROC filings.',
      categoryHref: '/services/accounting-bookkeeping',
      categoryLabel: 'Explore All 10 Compliance Services (Internal Audit, Secretarial, Strike Off)',
    },
    services: [
      {
        id: 'bookkeeping',
        badge: 'Real-Time P&L Tracking',
        icon: FileText,
        iconColor: '#059669',
        iconBg: '#ECFDF5',
        title: 'Cloud Bookkeeping & Monthly MIS',
        subtitle: 'Professional accounting on Zoho Books, Tally Prime, or QuickBooks with monthly financial reporting.',
        bullets: [
          'Daily/weekly transaction categorization & bank reconciliation',
          'Accounts payable & receivable aging analysis',
          'Monthly executive P&L, Balance Sheet & Cash Flow MIS',
          'Year-end schedule finalization for tax auditor sign-off',
        ],
        timeline: '⚡ Monthly Closes',
        actionText: 'Streamline Bookkeeping',
        href: '/services/bookkeeping',
      },
      {
        id: 'statutory-audit',
        badge: 'Mandatory Corporate Sign-Off',
        icon: ClipboardCheck,
        iconColor: '#2563EB',
        iconBg: '#EFF6FF',
        title: 'Statutory & Tax Audit (Sec 44AB)',
        subtitle: 'Independent examination of financial books under Companies Act 2013 and Income Tax Act.',
        bullets: [
          'Comprehensive verification of vouchers, ledgers & inventory',
          'Form 3CA/3CB and Form 3CD tax audit report compilation',
          'Internal control review & risk assessment memorandum',
          'Formal Independent Auditor Report & UDIN generation',
        ],
        timeline: '⏱ Pre-September Deadline',
        actionText: 'Schedule Audit Review',
        href: '/services/statutory-audit',
      },
      {
        id: 'roc-filing',
        badge: 'Director KYC Protected',
        icon: Building2,
        iconColor: '#EA8932',
        iconBg: '#FFF7ED',
        title: 'Annual ROC Filing (AOC-4 & MGT-7)',
        subtitle: 'Mandatory annual secretarial compliance for all active Private Limited, OPC & Section 8 companies.',
        bullets: [
          'Form AOC-4 (Financial Statements, Balance Sheet & Notes)',
          'Form MGT-7/7A (Annual Return & Shareholding Pattern)',
          'Annual Director KYC (DIR-3 KYC Web & e-Form)',
          'Statutory AGM preparation & Directors Report drafting',
        ],
        timeline: '✓ Guaranteed Timely Filing',
        actionText: 'Complete ROC Filing',
        href: '/services/annual-roc-filing',
      },
      {
        id: 'llp-filing',
        badge: 'Zero Penalty Filing',
        icon: FileCheck2,
        iconColor: '#7C3AED',
        iconBg: '#F5F3FF',
        title: 'LLP Annual Compliance (Form 8 & 11)',
        subtitle: 'Statutory annual statements of solvency and partner returns for Limited Liability Partnerships.',
        bullets: [
          'Form 11 Annual Return filing with designated partner verification',
          'Form 8 Statement of Account & Solvency preparation',
          'LLP Agreement amendment filings (Form 3/4) where required',
          'Avoid steep ₹100/day recurring MCA late penalties',
        ],
        timeline: '⏱ May & Oct Deadlines',
        actionText: 'File LLP Compliance',
        href: '/services/llp-annual-filing',
      },
    ],
  },

  // PILLAR 04: Protect Your Business
  {
    id: 'protect-business',
    number: 'Pillar 04',
    title: 'Protect Business',
    subtitle: 'IP, Litigations & Scrutiny',
    icon: Shield,
    serviceCount: '8 Services',
    advisory: {
      tag: 'Pillar 04: Brand Protection & Debt Recovery',
      headline: 'Shield Your Proprietary IP & Enforce B2B Receivables',
      description: 'Protect your brand identity from counterfeiters before the Trade Marks Registry and recover stuck B2B receivables under statutory MSMED Act mechanisms with 3x RBI interest.',
      badges: [
        'CGPDTM Trade Marks Registry Registered',
        'MSME Samadhaan Council Advocacy',
        'Legal Notices Drafted in 24 Hours',
      ],
      turnaroundTitle: '⚡ Legal Notice Dispatched in 24h',
      turnaroundDesc: 'High-conversion formal legal notices with enforceable statutory clauses.',
      stat: '₹50+ Cr Unpaid Receivables Recovered for Indian MSMEs',
      partner: {
        initials: 'SM',
        name: 'CA Siddharth Mehta, LLB, FCA',
        role: 'Partner Direct Desk',
        desc: '15+ Yrs IP Law & Commercial Litigation',
      },
      ctaText: 'Consult Legal & IP Partner',
      waMessage: 'Hello 1Tax! I need urgent legal guidance for a Trademark Dispute / Unpaid Business Invoices.',
      categoryHref: '/services/trademark-ip',
      categoryLabel: 'Explore All 8 Brand & Legal Services (Copyright, Patent, Dispute Defense)',
    },
    services: [
      {
        id: 'trademark-reg',
        badge: 'Pan-India Brand Rights',
        icon: Shield,
        iconColor: '#EA8932',
        iconBg: '#FFF7ED',
        title: 'Trademark Registration & Search',
        subtitle: 'Secure exclusive commercial ownership of your brand name, logo, or tagline across India.',
        bullets: [
          'Exhaustive cross-class phonetical & visual conflict search',
          'Correct NICE classification (Classes 1–45) advisory',
          'Filing of Form TM-A with Registrar of Trade Marks',
          'Instant application number generation to use ™ symbol',
        ],
        timeline: '⚡ Same-Day Filing (TM)',
        actionText: 'Register Trademark',
        href: '/services/trademark-registration',
      },
      {
        id: 'tm-objection',
        badge: 'Hearing Representation',
        icon: Scale,
        iconColor: '#7C3AED',
        iconBg: '#F5F3FF',
        title: 'Trademark Objection & Hearing Defense',
        subtitle: 'Overcome Section 9 & 11 examination objections raised by the Trade Marks Registry.',
        bullets: [
          'Drafting of formal response to Examination Report by IP CA',
          'Affidavit of prior use compilation with documentary proof',
          'Advocacy representation before Registrar at virtual hearing',
          'Acceptance in Trade Marks Journal for trademark registration',
        ],
        timeline: '⏱ 30-Day Legal Deadline',
        actionText: 'Defend TM Objection',
        href: '/services/trademark-objection',
      },
      {
        id: 'msme-recovery',
        badge: '3x RBI Statutory Interest',
        icon: ShieldCheck,
        iconColor: '#059669',
        iconBg: '#ECFDF5',
        title: 'MSME Delayed Payment Recovery',
        subtitle: 'Statutory legal notice and MSEFC Council case filing for unpaid invoices past 45 days.',
        bullets: [
          'Issuance of formal Section 15 statutory demand notice',
          'Online case filing on MSME Samadhaan conciliation portal',
          'Interest calculation at 3x RBI bank rate compounded monthly',
          'Representation before MSEFC Facilitation Council',
        ],
        timeline: '✓ Notice in 24 Hours',
        actionText: 'Recover Unpaid Invoices',
        href: '/services/specialized/msme-payment-recovery',
      },
      {
        id: 'agreements',
        badge: 'Enforceable Legal Protection',
        icon: FileText,
        iconColor: '#2563EB',
        iconBg: '#EFF6FF',
        title: 'Commercial Contracts & Agreements',
        subtitle: 'Custom corporate agreements drafted to protect IP, trade secrets, and operational cash flow.',
        bullets: [
          'Mutual & Non-Mutual Non-Disclosure Agreements (NDAs)',
          'Founder & Shareholder Agreements (SHA) with vesting',
          'Master Service Agreements (MSA) & Vendor Contracts',
          'Employment agreements with IP assignment & non-compete',
        ],
        timeline: '⚡ 48-Hour Turnaround',
        actionText: 'Draft Commercial Contract',
        href: '/services/agreement-drafting',
      },
    ],
  },

  // PILLAR 05: Grow Your Business
  {
    id: 'grow-business',
    number: 'Pillar 05',
    title: 'Grow Your Business',
    subtitle: 'Virtual CFO & Valuation',
    icon: TrendingUp,
    serviceCount: '8 Services',
    advisory: {
      tag: 'Pillar 05: Fractional Leadership & Capital Readiness',
      headline: 'Institutional CFO Guidance for Scaling Enterprises',
      description: 'Gain fractional C-suite financial leadership, banking project reports (CMA/DPR), and IBBI registered valuations to raise venture capital or secure bank working capital debt.',
      badges: [
        'IBBI Registered Valuer Network',
        'Banking CMA & DPR for Working Capital',
        'Investor-Ready Financial Modeling',
      ],
      turnaroundTitle: '⚡ Retainer Onboarding in 48h',
      turnaroundDesc: 'Instant deployment of seasoned CFO leadership and dashboard analytics.',
      stat: '₹240+ Cr Growth Debt & Venture Capital Facilitated',
      partner: {
        initials: 'NK',
        name: 'CA Nitin Kapoor, FCA, CFA',
        role: 'Partner Direct Desk',
        desc: '19+ Yrs Investment Banking & CFO Advisory',
      },
      ctaText: 'Book Senior CFO Strategy Call',
      waMessage: 'Hello 1Tax! I want to explore Virtual CFO retainership and fundraising/loan financial models.',
      categoryHref: '/services/virtual-cfo',
      categoryLabel: 'Explore All 8 Advisory & Growth Services (Project Reports, M&A, Restructuring)',
    },
    services: [
      {
        id: 'virtual-cfo',
        badge: 'Fractional C-Suite Leadership',
        icon: BarChart2,
        iconColor: '#2563EB',
        iconBg: '#EFF6FF',
        title: 'Virtual CFO Retainership',
        subtitle: 'Strategic financial leadership, cash runway management, and executive board reporting.',
        bullets: [
          'Weekly cash-flow monitoring & burn rate optimization',
          'Custom automated KPI dashboards for founders & executives',
          'Investor quarterly financial packs & board deck preparation',
          'Commercial contract financial modeling & pricing review',
        ],
        timeline: '⚡ Monthly Retainer',
        actionText: 'Retain Virtual CFO',
        href: '/services/virtual-cfo',
      },
      {
        id: 'cma-dpr',
        badge: 'Bank Loan Approval Ready',
        icon: FileText,
        iconColor: '#EA8932',
        iconBg: '#FFF7ED',
        title: 'CMA Data & Detailed Project Report (DPR)',
        subtitle: 'Comprehensive banking credit proposals for working capital (CC/OD) and term loans.',
        bullets: [
          'Multi-year past financial analysis & projected balance sheets',
          'Operating statement & fund flow / cash flow projections',
          'Debt Service Coverage Ratio (DSCR) & MPBF calculations',
          'Direct bank liaison with public & private bank managers',
        ],
        timeline: '⏱ 3–5 Working Days',
        actionText: 'Prepare CMA Report',
        href: '/services/dpr-cma',
      },
      {
        id: 'loans',
        badge: 'Competitive Bank Interest',
        icon: Banknote,
        iconColor: '#059669',
        iconBg: '#ECFDF5',
        title: 'Working Capital & Business Loans',
        subtitle: 'Securing lowest-interest working capital credit lines, CGTMSE collateral-free loans, and equipment finance.',
        bullets: [
          'Eligibility screening across 25+ partner banks & NBFCs',
          'Collateral-free CGTMSE loans up to ₹5 Crore for MSMEs',
          'Loan application packaging & compliance documentation',
          'Credit sanction and disbursement follow-up',
        ],
        timeline: '✓ End-to-End Coordination',
        actionText: 'Apply for Business Loan',
        href: '/services/business-loans',
      },
      {
        id: 'valuation',
        badge: 'IBBI & Merchant Banker Certified',
        icon: Award,
        iconColor: '#7C3AED',
        iconBg: '#F5F3FF',
        title: 'Startup & Company Valuation',
        subtitle: 'Statutory valuation reports for equity fundraising, ESOP schemes, and cross-border transactions.',
        bullets: [
          'DCF (Discounted Cash Flow) & NAV valuation methodologies',
          'Rule 11UA Income Tax & Section 56(2)(viib) angel tax compliance',
          'FEMA pricing guidelines for foreign direct investment (FDI)',
          'Certified valuation certificate by IBBI Registered Valuer',
        ],
        timeline: '⚡ 5–7 Days Delivery',
        actionText: 'Get Certified Valuation',
        href: '/services/company-valuation',
      },
    ],
  },
];

export function MajorServicesGrid() {
  const [activeTab, setActiveTab] = useState(0);

  const currentPillar = PILLARS_DATA[activeTab];

  return (
    <section
      id="major-services"
      aria-labelledby="major-services-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto"
    >
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 border shadow-2xs"
          style={{
            backgroundColor: 'var(--color-primary-muted)',
            borderColor: 'var(--color-primary-light)',
            color: 'var(--color-primary-dark)',
          }}
        >
          <Sparkles size={13} className="text-[#EA8932]" />
          <span>360° Statutory &amp; Financial Architecture</span>
        </div>

        <h2
          id="major-services-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4"
          style={{ color: 'var(--color-secondary-dark)' }}
        >
          Complete Financial, Tax &amp; Legal Lifecycle Across{' '}
          <span style={{ color: 'var(--color-primary)' }}>5 Specialized Pillars</span>
        </h2>

        <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--color-text-secondary)' }}>
          From seed incorporation to high-stakes tax litigation and fractional CFO leadership — our senior CA partners guide your enterprise through every regulatory checkpoint in India with zero-penalty assurance.
        </p>

        {/* Credibility Chips */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={15} className="text-emerald-600" />
            Direct Partner Oversight
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={15} className="text-emerald-600" />
            100% Faceless &amp; Digital Execution
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <Building2 size={15} className="text-emerald-600" />
            ICAI &amp; MCA Regulatory Compliant
          </span>
        </div>
      </div>

      {/* 5-PILLAR HORIZONTAL SEGMENTED NAVIGATION TABS */}
      <div className="mb-10">
        <div className="bg-white border rounded-2xl p-2 sm:p-2.5 shadow-sm" style={{ borderColor: 'var(--color-border)' }}>
          {/* Navigator Status Bar */}
          <div className="flex items-center justify-between px-3 py-1.5 border-b mb-2.5 text-xs text-slate-500" style={{ borderColor: 'var(--color-border)' }}>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-primary)' }} />
              <span>Lifecycle Architecture Navigator</span>
            </span>
            <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>
              Pillar 0{activeTab + 1} of 05 Active
            </span>
          </div>

          {/* Tab Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {PILLARS_DATA.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activeTab === idx;

              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`flex flex-col items-start p-3 sm:p-3.5 rounded-xl text-left transition-all relative overflow-hidden cursor-pointer ${
                    isActive
                      ? 'bg-amber-50/50 border-2 shadow-xs'
                      : 'bg-slate-50/70 border border-slate-200/70 hover:bg-slate-100/70 hover:border-slate-300'
                  }`}
                  style={{
                    borderColor: isActive ? 'var(--color-primary)' : undefined,
                  }}
                  aria-selected={isActive}
                  role="tab"
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded ${
                        isActive
                          ? 'bg-[#EA8932] text-white'
                          : 'bg-slate-200/80 text-slate-600'
                      }`}
                    >
                      {pillar.number}
                    </span>
                    <Icon
                      size={17}
                      className={isActive ? 'text-[#EA8932]' : 'text-slate-400'}
                    />
                  </div>

                  <span
                    className="text-xs sm:text-sm font-bold truncate w-full"
                    style={{
                      color: isActive ? 'var(--color-secondary-dark)' : 'var(--color-text-primary)',
                    }}
                  >
                    {pillar.title}
                  </span>
                  <span className="text-[10.5px] sm:text-[11px] text-slate-500 truncate w-full mt-0.5">
                    {pillar.subtitle}
                  </span>

                  {/* Active Bottom Highlight Bar */}
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* DUAL-PANEL MASTER SHOWCASE */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-stretch mb-10">
        
        {/* LEFT PANEL (35% width) - Executive CA Advisory Box */}
        <div
          className="w-full lg:w-[35%] rounded-2xl p-6 sm:p-7 text-white shadow-xl relative flex flex-col justify-between overflow-hidden border"
          style={{
            background: 'linear-gradient(135deg, #0c222e 0%, #173b4d 50%, #0c222e 100%)',
            borderColor: 'rgba(234, 137, 50, 0.25)',
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className="pointer-events-none absolute -top-16 -right-16 w-52 h-52 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: '#EA8932' }}
          />

          <div>
            {/* Header Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold mb-4 border border-white/15 backdrop-blur-sm">
              <Sparkles size={12} className="text-[#EA8932]" />
              <span>{currentPillar.advisory.tag}</span>
            </div>

            {/* Panel Title */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2.5 leading-snug tracking-tight">
              {currentPillar.advisory.headline}
            </h3>

            {/* Panel Description */}
            <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
              {currentPillar.advisory.description}
            </p>

            {/* Trust Badges List */}
            <div className="space-y-2 mb-5">
              {currentPillar.advisory.badges.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-200">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#EA8932] text-white text-[10px] font-bold shrink-0">
                    ✓
                  </div>
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Turnaround Metric Highlight Callout */}
            <div className="bg-white/8 border border-white/15 rounded-xl p-3.5 mb-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[#EA8932] font-bold text-sm sm:text-base">
                <span>{currentPillar.advisory.turnaroundTitle}</span>
              </div>
              <p className="text-[11.5px] text-slate-300 mt-0.5">
                {currentPillar.advisory.turnaroundDesc}
              </p>
            </div>

            {/* Stat Pill */}
            <div className="flex items-center gap-2 text-xs text-slate-200 bg-black/25 px-3.5 py-2 rounded-lg border border-white/10 mb-5">
              <Building2 size={15} className="text-[#EA8932] shrink-0" />
              <span className="truncate">{currentPillar.advisory.stat}</span>
            </div>

            {/* Dedicated Partner Profile micro-card */}
            <div className="bg-white/10 rounded-xl p-3.5 border border-white/15 mb-6 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-xs shrink-0 shadow-2xs border border-white/20"
                style={{ background: 'linear-gradient(135deg, #EA8932 0%, #c2410c 100%)' }}
              >
                {currentPillar.advisory.partner.initials}
              </div>
              <div className="text-left leading-tight">
                <div className="text-[10px] font-semibold text-amber-300 uppercase tracking-wider">
                  {currentPillar.advisory.partner.role}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                  {currentPillar.advisory.partner.name}
                </div>
                <div className="text-[11px] text-slate-300">
                  {currentPillar.advisory.partner.desc}
                </div>
              </div>
            </div>
          </div>

          {/* Left Panel CTA Buttons */}
          <div className="flex flex-col gap-2.5 pt-2 border-t border-white/10">
            <a
              href="#consultation-form"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-white font-bold text-xs sm:text-sm shadow-md transition-all text-center hover:opacity-95 active:scale-98 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #EA8932 0%, #c2410c 100%)',
                boxShadow: '0 4px 14px -2px rgba(234, 137, 50, 0.4)',
              }}
            >
              <span>{currentPillar.advisory.ctaText}</span>
              <ArrowRight size={15} />
            </a>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(currentPillar.advisory.waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-2xs"
            >
              <span
                className="flex h-4 w-4 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: 'var(--color-whatsapp)' }}
              >
                <MessageSquare size={10} />
              </span>
              <span>WhatsApp Instant Query</span>
            </a>
          </div>
        </div>

        {/* RIGHT PANEL (65% width) - 2x2 Grid of Top Services */}
        <div className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {currentPillar.services.map((srv) => {
            const SrvIcon = srv.icon;

            return (
              <div
                key={srv.id}
                className="border rounded-2xl p-5 sm:p-6 bg-white flex flex-col justify-between group transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  borderColor: 'var(--color-border)',
                }}
              >
                <div>
                  {/* Card Header: Icon + Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                      style={{
                        backgroundColor: srv.iconBg,
                        color: srv.iconColor,
                        borderColor: `${srv.iconColor}30`,
                      }}
                    >
                      <SrvIcon size={20} />
                    </div>

                    <span
                      className="text-[10.5px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full border"
                      style={{
                        backgroundColor: srv.iconBg,
                        color: srv.iconColor,
                        borderColor: `${srv.iconColor}40`,
                      }}
                    >
                      {srv.badge}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h4
                    className="text-base sm:text-lg font-extrabold mb-1 tracking-tight leading-snug group-hover:text-[#EA8932] transition-colors"
                    style={{ color: 'var(--color-secondary-dark)' }}
                  >
                    {srv.title}
                  </h4>

                  {/* Subtitle */}
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed line-clamp-2">
                    {srv.subtitle}
                  </p>

                  {/* Scope Bullets */}
                  <div className="space-y-1.5 mb-5 border-t border-b border-slate-100 py-3">
                    {srv.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check size={13} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Timeline + Action Link */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <span className="inline-flex items-center gap-1 font-semibold text-slate-600">
                    <Clock size={12} className="text-[#EA8932]" />
                    {srv.timeline}
                  </span>

                  <Link
                    href={srv.href}
                    className="inline-flex items-center gap-1 font-bold transition-all text-[#0A2540] group-hover:text-[#EA8932] cursor-pointer"
                  >
                    <span>{srv.actionText}</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* BOTTOM DIRECTORY EXPLORATION STRIP */}
      <div
        className="rounded-2xl p-4 sm:p-5 border bg-slate-50/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm shadow-2xs"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div className="flex items-center gap-2.5 text-slate-700 font-medium text-center sm:text-left">
          <Sparkles size={16} className="text-[#EA8932] shrink-0 hidden sm:block" />
          <span>
            {currentPillar.advisory.categoryLabel}{' '}
            <Link
              href={currentPillar.advisory.categoryHref}
              className="font-bold underline text-[#EA8932] hover:opacity-80"
            >
              View Category Roster →
            </Link>
          </span>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border font-bold text-slate-800 hover:bg-slate-100 transition-all shadow-2xs cursor-pointer shrink-0"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <span>View Full 50+ Services Directory</span>
          <ChevronRight size={14} className="text-[#EA8932]" />
        </Link>
      </div>

    </section>
  );
}

