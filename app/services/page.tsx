import { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FadeUpDiv } from "@/components/FadeUpDiv";
import { 
  Smartphone, 
  Monitor, 
  Brain, 
  Globe, 
  Cloud, 
  TrendingUp, 
  Users,
  Code2,
  Server,
  ShoppingCart,
  Palette,
  Layers
} from "lucide-react";

export const metadata: Metadata = {
  title: "Software Development Services — Mobile, AI, Web, Cloud | Loopwren",
  description: "Comprehensive software development services including mobile apps, custom software, AI development, web development, cloud services, and more.",
  openGraph: {
    title: "Software Development Services — Mobile, AI, Web, Cloud | Loopwren",
    description: "Comprehensive software development services including mobile apps, custom software, AI development, web development, cloud services, and more.",
    url: "https://loopwren.com/services",
  },
};

import { servicesData } from "@/data/servicesData";

const iconComponents: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-8 h-8 text-primary" />,
  Code: <Code2 className="w-8 h-8 text-primary" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8 text-primary" />,
  Palette: <Palette className="w-8 h-8 text-primary" />,
  Layers: <Layers className="w-8 h-8 text-primary" />
};

const services = Object.entries(servicesData).map(([slug, data]) => ({
  icon: iconComponents[data.iconName] || <Server className="w-8 h-8 text-primary" />,
  name: data.title,
  description: data.shortDescription,
  features: data.features.slice(0, 3), // Show first 3 features
  slug: slug
}));

const technologies = [
  {
    category: "Languages",
    icon: <Code2 className="w-8 h-8 text-primary" />,
    items: ["JavaScript/TypeScript", "PHP", "Python", "Java", ".Net", "HTML5"]
  },
  {
    category: "Platforms",
    icon: <Server className="w-8 h-8 text-primary" />,
    items: ["AWS", "Google Cloud", "Azure", "Oracle", "SAP"]
  }
];

export default function ServicesPage() {
  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From custom software to AI integration, we provide end-to-end development services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <FadeUpDiv key={idx} delay={idx * 0.08} className="h-full">
              <div 
                className="bg-card rounded-2xl p-8 border border-border shadow-sm flex flex-col h-full hover:border-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
              <div className="mb-6 bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3">{service.name}</h3>
              <p className="text-muted-foreground mb-6 flex-1">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="text-sm font-medium text-foreground/80 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-4 border-t border-border">
                <Link href={`/services/${service.slug}`} className={buttonVariants({ variant: "default", className: "w-full" })}>
                  Learn more
                </Link>
              </div>
            </div>
          </FadeUpDiv>
        ))}
        </div>

        {/* Technologies Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We leverage modern languages and reliable platforms to build scalable, high-performance applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, idx) => (
              <FadeUpDiv key={idx} delay={idx * 0.08} className="h-full">
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm flex flex-col h-full hover:border-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group overflow-hidden">
                  <div className="mb-6 bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-6">{tech.category}</h3>
                  <ul className="space-y-3">
                    {tech.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-base font-medium text-foreground/80 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-secondary mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUpDiv>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
