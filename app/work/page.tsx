"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

import { PosMockup, HospitalMockup, PharmacyMockup, EcommerceMockup, EdtechMockup, SomitiMockup, BankingMockup } from "@/components/mockups/SolutionMockups";

const projects = [
  {
    id: "pos-system",
    name: "POS System",
    tag: "Retail System",
    result: "Reduced checkout time by 60%",
    problem: "A major retail chain was facing issues with slow checkout times and inaccurate inventory tracking across multiple branches.",
    solution: "We deployed our unified Point-of-Sale (POS) system, integrating barcode scanning and centralized real-time inventory management.",
    outcome: "Checkout speeds improved by 60%, and inventory discrepancies were reduced to zero across all 15 branch locations.",
    Mockup: PosMockup
  },
  {
    id: "hospital-management",
    name: "Hospital Management",
    tag: "Healthcare",
    result: "Automated 100% of patient records",
    problem: "A busy urban hospital relied heavily on paper-based patient files, causing delays in treatment and billing errors.",
    solution: "We implemented our comprehensive Hospital Management System (EHR), fully digitizing patient histories, doctor scheduling, and pharmacy billing.",
    outcome: "Patient wait times decreased by 40% and billing accuracy improved significantly through automated invoicing.",
    Mockup: HospitalMockup
  },
  {
    id: "pharmacy-pos",
    name: "Pharmacy POS",
    tag: "Medical Retail",
    result: "Zero expired stock waste",
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

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  if (selectedProject) {
    const ProjectMockup = selectedProject.Mockup;
    return (
      <div className="py-24 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Button variant="ghost" onClick={() => setSelectedProject(null)} className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all work
          </Button>
          
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {selectedProject.tag}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{selectedProject.name}</h1>
            <p className="text-xl text-secondary font-medium">{selectedProject.result}</p>
          </div>

          <div className="mb-12">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-border">
               <ProjectMockup />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4 italic">Product preview</p>
          </div>
          
          <div className="mt-12 space-y-12 max-w-4xl">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-foreground">The Problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{selectedProject.problem}</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4 text-foreground">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{selectedProject.solution}</p>
            </section>
            
            <section className="bg-muted/30 p-8 rounded-xl border">
              <h2 className="text-2xl font-heading font-semibold mb-4 text-foreground">The Result</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{selectedProject.outcome}</p>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Work</h1>
          <p className="text-xl text-muted-foreground">
            A selection of projects we've built for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="cursor-pointer group hover:border-primary transition-colors flex flex-col overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-56 bg-muted relative border-b">
                <project.Mockup />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-background/80 transition-opacity backdrop-blur-sm z-10">
                  <span className="font-semibold text-primary">View Case Study</span>
                </div>
              </div>
              <CardHeader className="flex-1 bg-card">
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 bg-secondary/20 text-secondary-foreground rounded text-xs font-medium">
                    {project.tag}
                  </span>
                </div>
                <CardTitle className="font-heading text-xl">{project.name}</CardTitle>
                <CardDescription className="text-base text-primary font-medium mt-2">
                  {project.result}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
