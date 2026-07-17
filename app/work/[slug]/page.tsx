import { notFound } from "next/navigation";
import { projects } from "@/data/workData";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);
  if (!project) return { title: "Work Not Found" };
  
  return {
    title: `${project.brandName} — ${project.name} Case Study | Loopwren`,
    description: project.result,
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const ProjectMockup = project.Mockup;

  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Link href="/work" className="mb-8 inline-flex items-center text-sm font-medium hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to all work
        </Link>
        
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {project.tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">{project.brandName}</h1>
          <p className="text-2xl font-heading font-medium text-muted-foreground mb-4">— {project.name}</p>
          <p className="text-xl text-secondary font-medium">{project.result}</p>
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
            <p className="text-lg text-muted-foreground leading-relaxed">{project.problem}</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-heading font-semibold mb-4 text-foreground">Our Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
          </section>
          
          <section className="bg-muted/30 p-8 rounded-xl border">
            <h2 className="text-2xl font-heading font-semibold mb-4 text-foreground">The Result</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.outcome}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
