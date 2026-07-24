import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { districts } from "@/data/districts";
import { ServiceCard } from "@/components/ServiceCard";
import { FadeUpDiv } from "@/components/FadeUpDiv";
import { Code, Smartphone, Layers } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function generateStaticParams() {
  return districts.map((d) => ({
    district: d.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ district: string }> }): Promise<Metadata> {
  const { district: districtSlug } = await params;
  const district = districts.find(d => d.slug === districtSlug);
  
  if (!district) {
    return { title: "Not Found" };
  }

  return {
    title: `Best IT Company in ${district.name} | Software Development | Loopwren`,
    description: `Loopwren is the leading IT company serving ${district.name}. We provide custom software, mobile apps, web development, and AI solutions for businesses in ${district.name}.`,
    openGraph: {
      title: `Best IT Company in ${district.name} | Loopwren`,
      description: `Loopwren is the leading IT company serving ${district.name}. We provide custom software, mobile apps, web development, and AI solutions.`,
    }
  };
}

export default async function DistrictLocationPage({ params }: { params: Promise<{ district: string }> }) {
  const { district: districtSlug } = await params;
  const district = districts.find(d => d.slug === districtSlug);

  if (!district) {
    notFound();
  }

  const services = [
    {
      title: "Custom Software",
      description: `Tailored web applications and enterprise software built for businesses in ${district.name}.`,
      Icon: Code,
    },
    {
      title: "App Development",
      description: "High-performance native and cross-platform mobile applications for iOS and Android.",
      Icon: Smartphone,
    },
    {
      title: "Product Architecture",
      description: "Scalable cloud infrastructure and robust system design to support your growth.",
      Icon: Layers,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Dynamic SEO Hero */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-primary/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUpDiv>
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                Serving {district.name}, Bangladesh
              </div>
            </FadeUpDiv>
            <FadeUpDiv delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-6 text-foreground">
                The Leading <span className="text-primary">IT Company</span> in {district.name}
              </h1>
            </FadeUpDiv>
            <FadeUpDiv delay={0.2}>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Transform your business with cutting-edge software solutions. Loopwren is your trusted technology partner for custom software, mobile apps, and digital transformation in {district.name}.
              </p>
            </FadeUpDiv>
            <FadeUpDiv delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-[#38B6A6] hover:bg-[#38B6A6]/90 text-[#F3EFE7]" })}>
                  Start a project
                </Link>
                <Link href="/services" className={buttonVariants({ size: "lg", variant: "outline", className: "text-foreground border-border hover:bg-muted" })}>
                  View all services
                </Link>
              </div>
            </FadeUpDiv>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeUpDiv>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Software Services in {district.name}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We specialize in bringing complex ideas to life through elegant code and intuitive design for local and global clients.
              </p>
            </FadeUpDiv>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <FadeUpDiv key={idx} delay={idx * 0.1} className="h-full">
                <ServiceCard {...service} />
              </FadeUpDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20 text-[#F3EFE7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUpDiv>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-[#1C2148]">Ready to scale your business in {district.name}?</h2>
            <p className="text-[#1C2148]/80 max-w-2xl mx-auto mb-10 text-lg">
              Let's discuss how we can help bring your vision to reality with precision and care.
            </p>
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-[#1C2148] hover:bg-[#1C2148]/90 text-[#F3EFE7]" })}>Talk to our experts</Link>
          </FadeUpDiv>
        </div>
      </section>
    </div>
  );
}
