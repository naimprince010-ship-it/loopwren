import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Loopwren",
  description: "Learn more about the story and mission behind Loopwren.",
  openGraph: {
    title: "About Loopwren",
    description: "Learn more about the story and mission behind Loopwren.",
    url: "https://loopwren.com/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  }
};

export default function AboutPage() {
  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        
        <header className="mb-20">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Small, but precise.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are a software development studio built on the belief that great digital products come from focused attention, not sheer volume.
          </p>
        </header>

        <article className="prose prose-lg prose-slate max-w-none space-y-12 text-foreground">
          
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Our Story</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 aspect-square bg-muted rounded-2xl flex items-center justify-center overflow-hidden border border-border">
                {/* Placeholder for founder photo/illustration */}
                <span className="text-muted-foreground font-medium text-sm text-center px-4">Founder Photo / Illustration</span>
              </div>
              <div className="flex-1 space-y-4">
                <p>
                  Loopwren started with a simple observation: many companies were being underserved by large, slow-moving development agencies. Communication got lost in layers of project management, and the actual craft of writing software took a backseat to churning out billable hours.
                </p>
                <p>
                  We wanted to build an alternative—a studio where clients work directly with the engineers building their products. A place where the lines of communication are short, and the standards for quality are exceptionally high.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">The Mission</h2>
            <div className="bg-primary/5 p-8 border-l-4 border-primary rounded-r-2xl">
              <p className="text-xl italic font-medium text-primary">
                "To weave complex technical requirements into elegant, high-performance digital craft."
              </p>
            </div>
            <p className="mt-6">
              The name Loopwren combines two ideas: the "loop" representing the iterative, continuous nature of software development, and the "wren," a small but remarkably loud and precise bird. 
            </p>
            <p className="mt-4">
              We embody that spirit. We intentionally keep our team small so we can remain agile and deeply invested in every project we take on. We don't want to be the biggest agency; we want to be the one you trust to build things right the first time.
            </p>
          </section>
        </article>

      </div>
    </div>
  );
}
