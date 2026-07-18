import { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { 
  Smartphone, 
  Monitor, 
  Brain, 
  Globe, 
  Cloud, 
  TrendingUp, 
  Users 
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

const services = [
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    name: "Mobile App Development",
    description: "Build robust, scalable iOS, Android, and cross-platform applications.",
    features: ["iOS & Android", "React Native", "High Performance"]
  },
  {
    icon: <Monitor className="w-8 h-8 text-primary" />,
    name: "Custom Software Development",
    description: "Tailor-made software solutions like ERP, CRM, and CMS for your business.",
    features: ["Enterprise ERP", "Custom CRM", "Scalable CMS"]
  },
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    name: "AI Development",
    description: "Integrate Generative AI, NLP, and AI agents into your workflows.",
    features: ["Generative AI", "NLP", "AI Agent Integration"]
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    name: "Web Development",
    description: "Professional websites, e-commerce platforms, and web portals.",
    features: ["E-commerce", "Web Portals", "Responsive Sites"]
  },
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    name: "Cloud Services",
    description: "Seamless cloud migration, reliable hosting, and infrastructure maintenance.",
    features: ["Migration", "Hosting", "Maintenance"]
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    name: "Digital Marketing",
    description: "Data-driven SEO, SEM, and social media marketing to boost your presence.",
    features: ["SEO", "SEM", "Social Media"]
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    name: "IT Staff Augmentation",
    description: "Extend your team with our dedicated, skilled software developers.",
    features: ["Dedicated Devs", "Flexible Scaling", "Top Talent"]
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
            <div 
              key={idx}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm flex flex-col hover:border-primary transition-colors group"
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
                <Link href="/contact" className={buttonVariants({ variant: "default", className: "w-full" })}>
                  Get a quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
