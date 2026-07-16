"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const projects = [
  {
    id: "project-alpha",
    name: "Project Alpha",
    tag: "Web App",
    result: "Increased conversion by 40%",
    problem: "The client was struggling with a legacy system that was slow, hard to maintain, and causing a high bounce rate on their primary conversion funnel.",
    solution: "We rebuilt the core application using Next.js and a modern serverless backend, optimizing the critical rendering path and completely redesigning the user interface.",
    outcome: "The new platform launched on time and resulted in a 40% increase in conversion rate within the first month, along with a 60% reduction in hosting costs.",
  },
  {
    id: "beta-mobile",
    name: "Beta Mobile",
    tag: "Mobile App",
    result: "Top 10 in App Store category",
    problem: "The startup needed a cross-platform mobile application to complement their existing web service, but had limited time and budget to reach the market before a major event.",
    solution: "We utilized React Native to build a high-performance cross-platform app, sharing a significant portion of the business logic with their web frontend.",
    outcome: "The app was completed 2 weeks ahead of schedule and achieved a top 10 ranking in its category within a week of launch, maintaining a 4.8-star average rating.",
  },
  {
    id: "gamma-enterprise",
    name: "Gamma Enterprise",
    tag: "Enterprise System",
    result: "Automated 20h of manual work/week",
    problem: "An enterprise client's operations team was spending over 20 hours a week manually syncing data between three disparate legacy systems.",
    solution: "We engineered a robust middle-tier integration layer using Node.js and message queues, creating a unified dashboard for operations to monitor data flow.",
    outcome: "The automated system completely eliminated the manual data entry, saving the team over 20 hours a week and reducing data synchronization errors to zero.",
  }
];

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  if (selectedProject) {
    return (
      <div className="py-24 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
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
          
          <div className="mt-12 space-y-12">
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
              className="cursor-pointer group hover:border-primary transition-colors flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 bg-muted rounded-t-xl overflow-hidden relative border-b">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-background/80 transition-opacity backdrop-blur-sm">
                  <span className="font-semibold text-primary">View Case Study</span>
                </div>
              </div>
              <CardHeader className="flex-1">
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
