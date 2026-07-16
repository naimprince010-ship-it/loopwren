import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Loopwren",
  description: "Get in touch with Loopwren for your software and app development needs.",
  openGraph: {
    title: "Contact Loopwren",
    description: "Get in touch with Loopwren for your software and app development needs.",
    url: "https://loopwren.com/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  }
};

export default function ContactPage() {
  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Let's talk.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Have a project in mind? Fill out the form below or reach out directly. We'd love to hear about what you're building.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Form */}
          <div className="bg-card p-8 rounded-2xl shadow-sm border">
            <h2 className="text-2xl font-heading font-semibold mb-6">Send a message</h2>
            <ContactForm />
          </div>

          {/* Right Column: Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-6">Direct Contact</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a href="mailto:hello@loopwren.com" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@loopwren.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">
                      Remote <br />
                      Working globally
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-6">Social</h2>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61591668553652" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors text-foreground"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
