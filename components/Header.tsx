import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-heading text-2xl font-bold text-foreground">
            Loopwren<span className="text-primary">.</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/solutions" className="transition-colors hover:text-primary">
            Solutions
          </Link>
          <Link href="/services" className="transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/work" className="transition-colors hover:text-primary">
            Work
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/contact" className={buttonVariants({ variant: "default" })}>Get in touch</Link>
        </div>
      </div>
    </header>
  );
}
