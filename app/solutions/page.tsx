import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Store, 
  Stethoscope, 
  Pill, 
  ShoppingCart, 
  GraduationCap, 
  Users, 
  Landmark,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export const metadata = {
  title: "Software Solutions — POS, Hospital, Pharmacy, Banking | Loopwren",
  description: "Ready-to-deploy software systems for your business.",
  openGraph: {
    title: "Software Solutions — POS, Hospital, Pharmacy, Banking | Loopwren",
    description: "Ready-to-deploy software systems for your business.",
    url: "https://loopwren.com/solutions",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  }
};

const solutions = [
  {
    brandName: "Loopwren Vendo",
    title: "POS System",
    slug: "pos-system",
    icon: Store,
    description: "Comprehensive point-of-sale management tailored for modern retail environments.",
    features: ["Real-time inventory tracking", "Barcode scanning & receipt printing", "Daily sales & profit reporting", "Multi-store management"],
  },
  {
    brandName: "Loopwren Vitals",
    title: "Hospital Management System",
    slug: "hospital-management",
    icon: Stethoscope,
    description: "A complete digital infrastructure for clinics, hospitals, and diagnostic centers.",
    features: ["Patient records & history (EHR)", "Doctor appointment scheduling", "Automated billing & invoicing", "Pharmacy & lab integration"],
  },
  {
    brandName: "Loopwren Rx",
    title: "Pharmacy POS",
    slug: "pharmacy-pos",
    icon: Pill,
    description: "Specialized inventory and sales software designed specifically for pharmacies.",
    features: ["Medicine expiry date tracking", "Stock alert notifications", "Supplier & purchase management", "Fast checkout processing"],
  },
  {
    brandName: "Loopwren Bazaar",
    title: "E-commerce Platform",
    slug: "ecommerce",
    icon: ShoppingCart,
    description: "Scalable online storefronts with integrated payment gateways and order tracking.",
    features: ["Custom-branded storefront", "Secure payment integrations", "Live order tracking", "Customer accounts & reviews"],
  },
  {
    brandName: "Loopwren Learn",
    title: "EdTech System",
    slug: "edtech",
    icon: GraduationCap,
    description: "End-to-end management software for schools, colleges, and coaching centers.",
    features: ["Online class integration", "Automated results & grading", "Student fee & due management", "Attendance tracking"],
  },
  {
    brandName: "Loopwren Shonchoy",
    title: "Somiti/Cooperative Management",
    slug: "somiti-software",
    icon: Users,
    description: "Secure and transparent software for managing cooperatives, somitis, and micro-finance.",
    features: ["Member account management", "Savings & deposit tracking", "Loan installment calculations", "Automated penalty & interest"],
  },
  {
    brandName: "Loopwren Vault",
    title: "Banking Software",
    slug: "banking-software",
    icon: Landmark,
    description: "Core banking solutions for financial institutions requiring enterprise-grade security.",
    features: ["Secure account ledgers", "Real-time transaction processing", "Loan & mortgage processing", "Audit trails & compliance"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-foreground">
            Our Solutions
          </h1>
          <p className="text-xl text-muted-foreground">
            Powerful, industry-specific software systems engineered to streamline your operations. Deploy our proven solutions today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <div 
              key={idx} 
              className="group relative bg-card rounded-2xl border border-border p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-7 h-7" />
                </div>
                <Badge variant="secondary" className="bg-[#38B6A6]/10 text-[#38B6A6] hover:bg-[#38B6A6]/20 border-none font-medium">
                  Ready to deploy
                </Badge>
              </div>
              
              <Link href={`/solutions/${solution.slug}`} className="hover:text-primary transition-colors block">
                <h3 className="text-2xl font-heading font-bold mb-1">{solution.brandName}</h3>
                <span className="text-sm font-medium text-muted-foreground mb-3 block">— {solution.title}</span>
              </Link>
              <p className="text-muted-foreground mb-8 min-h-[48px]">
                {solution.description}
              </p>
              
              <div className="mb-10 flex-grow">
                <ul className="space-y-3">
                  {solution.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-3 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col gap-3 mt-auto w-full">
                <Link 
                  href="/contact" 
                  className={buttonVariants({ variant: "default", className: "w-full" })}
                >
                  Get this for my business
                </Link>
                <Link 
                  href="/contact" 
                  className={buttonVariants({ variant: "outline", className: "w-full" })}
                >
                  See demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
