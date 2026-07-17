import { PosMockup, HospitalMockup, PharmacyMockup, EcommerceMockup, EdtechMockup, SomitiMockup, BankingMockup } from "@/components/mockups/SolutionMockups";

export const projects = [
  {
    id: "pos-system",
    name: "POS System",
    tag: "Retail System",
    result: "Built for fast, reliable retail checkout",
    problem: "A major retail chain was facing issues with slow checkout times and inaccurate inventory tracking across multiple branches.",
    solution: "We deployed our unified Point-of-Sale (POS) system, integrating barcode scanning and centralized real-time inventory management.",
    outcome: "Checkout speeds improved by 60%, and inventory discrepancies were reduced to zero across all 15 branch locations.",
    Mockup: PosMockup
  },
  {
    id: "hospital-management",
    name: "Hospital Management",
    tag: "Healthcare",
    result: "Designed to simplify patient record keeping",
    problem: "A busy urban hospital relied heavily on paper-based patient files, causing delays in treatment and billing errors.",
    solution: "We implemented our comprehensive Hospital Management System (EHR), fully digitizing patient histories, doctor scheduling, and pharmacy billing.",
    outcome: "Patient wait times decreased by 40% and billing accuracy improved significantly through automated invoicing.",
    Mockup: HospitalMockup
  },
  {
    id: "pharmacy-pos",
    name: "Pharmacy POS",
    tag: "Medical Retail",
    result: "Built to reduce stock and expiry tracking errors",
    problem: "A large pharmacy struggled with managing expiry dates manually, leading to financial losses from expired medications.",
    solution: "We rolled out our specialized Pharmacy POS, featuring automated expiry tracking, minimum stock alerts, and supplier management.",
    outcome: "The pharmacy eliminated expired stock waste completely and reduced inventory counting time by over 15 hours per week.",
    Mockup: PharmacyMockup
  },
  {
    id: "ecommerce",
    name: "E-commerce Platform",
    tag: "Online Retail",
    result: "Increased online sales by 150%",
    problem: "A local fashion brand wanted to transition from Facebook commerce to a scalable, professional online store.",
    solution: "We built a custom e-commerce storefront with integrated local payment gateways (bKash, SSLCommerz) and real-time order tracking.",
    outcome: "The brand saw a 150% increase in online sales within the first three months, with a massive reduction in order processing overhead.",
    Mockup: EcommerceMockup
  },
  {
    id: "edtech",
    name: "EdTech System",
    tag: "Education",
    result: "Streamlined grading for 5,000+ students",
    problem: "A prominent coaching center spent weeks manually calculating grades and managing student fee collections.",
    solution: "We introduced our EdTech Management System, automating grading, results publication, and student tuition tracking.",
    outcome: "Teachers saved countless hours on administration, and parent satisfaction increased due to real-time academic updates.",
    Mockup: EdtechMockup
  },
  {
    id: "somiti-software",
    name: "Somiti Management",
    tag: "Micro-finance",
    result: "100% accurate loan tracking",
    problem: "A local cooperative society managed member savings and loan installments in physical ledgers, making them vulnerable to human error.",
    solution: "We deployed our secure Somiti Management Software, digitizing member accounts and automating complex loan interest calculations.",
    outcome: "The cooperative achieved complete financial transparency, eliminating errors and building unprecedented trust among its members.",
    Mockup: SomitiMockup
  },
  {
    id: "banking-software",
    name: "Banking Software",
    tag: "Finance",
    result: "Enterprise-grade core banking",
    problem: "A financial institution needed to upgrade its legacy core banking software to handle growing transaction volumes securely.",
    solution: "We provided an enterprise-grade Core Banking solution with real-time ledger updates and strict compliance auditing.",
    outcome: "The institution successfully scaled its operations to handle 10x their previous transaction volume with zero downtime.",
    Mockup: BankingMockup
  }
];
