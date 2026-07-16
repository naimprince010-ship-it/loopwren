import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Loopwren Case Studies",
  description: "A selection of projects we've built for our clients.",
  openGraph: {
    title: "Our Work — Loopwren Case Studies",
    description: "A selection of projects we've built for our clients.",
    url: "https://loopwren.com/work",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  }
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
