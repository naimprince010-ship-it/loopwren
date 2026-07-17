import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { projects } from "@/data/workData";

export const metadata = {
  title: "Our Work | Loopwren",
  description: "A selection of projects we've built for our clients.",
};

export default function WorkPage() {
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
            <Link key={project.id} href={`/work/${project.id}`} className="block h-full">
              <Card 
                className="cursor-pointer group hover:border-primary transition-colors flex flex-col h-full overflow-hidden"
              >
                <div className="h-56 bg-muted relative border-b overflow-hidden">
                  <div className="w-[150%] h-[150%] transform scale-[0.666] origin-top-left">
                    <project.Mockup />
                  </div>
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
                  <CardTitle className="font-heading text-xl">{project.brandName}</CardTitle>
                  <span className="text-sm font-medium text-muted-foreground block mt-1">— {project.name}</span>
                  <CardDescription className="text-base text-primary font-medium mt-2">
                    {project.result}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
