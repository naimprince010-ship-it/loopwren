import { solutionsData } from "@/data/solutionsData";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { PosMockup, HospitalMockup, PharmacyMockup, EcommerceMockup, EdtechMockup, SomitiMockup, BankingMockup } from "@/components/mockups/SolutionMockups";

type Props = {
  params: { slug: string };
};

const MockupMap: Record<string, React.ReactNode> = {
  "pos-system": <PosMockup />,
  "hospital-management": <HospitalMockup />,
  "pharmacy-pos": <PharmacyMockup />,
  "ecommerce": <EcommerceMockup />,
  "edtech": <EdtechMockup />,
  "somiti-software": <SomitiMockup />,
  "banking-software": <BankingMockup />
};

export function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const data = solutionsData[params.slug];
  if (!data) {
    return { title: "Solution Not Found" };
  }
  return {
    title: `${data.brandName} — ${data.seoTitle}`,
    description: data.seoDescription,
    openGraph: {
      title: data.seoTitle,
      description: data.seoDescription,
      url: `https://loopwren.com/solutions/${params.slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    }
  };
}

export default function SolutionDetail({ params }: Props) {
  const data = solutionsData[params.slug];
  if (!data) {
    notFound();
  }

  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Link href="/solutions" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to all solutions
        </Link>
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2 text-foreground">{data.brandName}</h1>
          <p className="text-2xl font-heading font-medium text-muted-foreground mb-6">— {data.title}</p>
          <p className="text-xl text-muted-foreground max-w-2xl">{data.seoDescription}</p>
        </header>

        <div className="mb-16">
          <div className="aspect-video w-full">
            {MockupMap[params.slug]}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4 italic">Interface preview</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 prose prose-lg prose-slate max-w-none text-foreground prose-headings:font-heading prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl" dangerouslySetInnerHTML={{ __html: data.content }} />
          
          {/* Sidebar CTA & Features */}
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-semibold text-xl mb-4">Key Features</h3>
              <ul className="space-y-3 mb-8">
                {data.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start text-sm text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <Link 
                  href="/contact" 
                  className={buttonVariants({ variant: "default", className: "w-full shadow-md" })}
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
          </div>
        </div>
      </div>
    </div>
  );
}
