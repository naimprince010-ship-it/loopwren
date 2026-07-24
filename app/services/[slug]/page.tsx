import { servicesData } from "@/data/servicesData";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { FadeUpDiv } from "@/components/FadeUpDiv";
import { CheckCircle, Code, Smartphone, Palette, ShoppingCart, Layers } from "lucide-react";

// Helper to render lucide icons dynamically by name
const IconMap: Record<string, React.ElementType> = {
  Code,
  Smartphone,
  Palette,
  ShoppingCart,
  Layers,
};

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  
  if (!service) {
    return { title: "Not Found" };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const Icon = IconMap[service.iconName] || Layers;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#12162C] to-[#262B57] text-[#F3EFE7] py-24 sm:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeUpDiv>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#38B6A6]/20 rounded-xl">
                <Icon className="w-8 h-8 text-[#38B6A6]" />
              </div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-[#F3EFE7]">
                {service.title}
              </h1>
            </div>
            <p className="text-xl text-[#8FD9CB] max-w-2xl">
              {service.shortDescription}
            </p>
          </FadeUpDiv>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-2 prose prose-lg prose-headings:font-heading prose-headings:font-bold max-w-none text-foreground/80 prose-a:text-primary">
              <FadeUpDiv>
                <div dangerouslySetInnerHTML={{ __html: service.content }} />
              </FadeUpDiv>
            </div>

            {/* Right Sidebar - Features */}
            <div>
              <FadeUpDiv delay={0.2}>
                <div className="bg-muted/30 border border-border/50 rounded-2xl p-8 sticky top-24">
                  <h3 className="text-2xl font-heading font-bold mb-6">Key Features</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUpDiv>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
