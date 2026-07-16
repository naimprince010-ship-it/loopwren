"use client";

import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Code, Smartphone, Layers, CheckCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      title: "Custom Software",
      description: "Tailored web applications and enterprise software built for your specific business needs.",
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

  const whyUs = [
    "Small, focused team of experts",
    "Direct communication with founders",
    "Quality-first engineering approach",
    "Transparent pricing and timelines",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Services Strip */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We specialize in bringing complex ideas to life through elegant code and intuitive design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Loopwren */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Why Loopwren?</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                We believe in craftsmanship over volume. By taking on fewer projects, we ensure that every line of code we write meets our rigorous standards of quality and performance.
              </p>
              <ul className="space-y-4">
                {whyUs.map((point, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="font-medium text-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="flex-1 relative">
              <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-border/50">
                <Layers className="w-32 h-32 text-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A transparent, iterative process designed to deliver exceptional results.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20 text-[#F3EFE7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-[#1C2148]">Have a project in mind?</h2>
          <p className="text-[#1C2148]/80 max-w-2xl mx-auto mb-10 text-lg">
            Let's discuss how we can help bring your vision to reality with precision and care.
          </p>
          <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-[#1C2148] hover:bg-[#1C2148]/90 text-[#F3EFE7]" })}>Start a project</Link>
        </div>
      </section>
    </div>
  );
}
