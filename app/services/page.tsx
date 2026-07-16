import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Code, Smartphone, Layers, CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Loopwren",
  description: "Our services including Custom Software, App Development, and Product Architecture.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "custom-software",
      title: "Custom Software",
      Icon: Code,
      description: "Tailored web applications and enterprise software built for your specific business needs.",
      included: [
        "Requirements engineering & systems analysis",
        "Full-stack web application development",
        "API design and integration",
        "Database design and optimization",
        "Automated testing and QA"
      ],
      timeline: "3-6 months",
      tech: "Next.js, React, Node.js, PostgreSQL, TypeScript",
    },
    {
      id: "app-development",
      title: "App Development",
      Icon: Smartphone,
      description: "High-performance native and cross-platform mobile applications for iOS and Android.",
      included: [
        "Cross-platform or native development",
        "UI/UX design for mobile interfaces",
        "App Store & Google Play deployment",
        "Push notifications & offline support",
        "Performance profiling and optimization"
      ],
      timeline: "2-5 months",
      tech: "React Native, Flutter, Swift, Kotlin",
    },
    {
      id: "product-architecture",
      title: "Product Architecture",
      Icon: Layers,
      description: "Scalable cloud infrastructure and robust system design to support your growth.",
      included: [
        "Cloud infrastructure setup & migration",
        "Microservices and serverless architecture",
        "CI/CD pipeline configuration",
        "Security audits and implementation",
        "Scalability and performance tuning"
      ],
      timeline: "1-3 months",
      tech: "AWS, Vercel, Docker, Kubernetes, Terraform",
    }
  ];

  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive technical solutions crafted with precision.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service) => (
            <div key={service.id} className="border rounded-2xl p-8 bg-card text-card-foreground shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <service.Icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl font-heading font-bold">{service.title}</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
              
              <Accordion className="w-full">
                <AccordionItem value="included">
                  <AccordionTrigger className="text-lg font-semibold">What's included</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 mt-2">
                      {service.included.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span className="text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="timeline">
                  <AccordionTrigger className="text-lg font-semibold">Typical timeline</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base">{service.timeline}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="tech">
                  <AccordionTrigger className="text-lg font-semibold">Tech we use</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base font-mono bg-muted p-3 rounded-md">{service.tech}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
