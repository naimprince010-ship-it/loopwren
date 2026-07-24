"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#12162C] to-[#262B57] text-[#F3EFE7] py-24 sm:py-32">
      {/* Subtle animated background mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-24 -right-24 md:-top-48 md:-right-48 w-96 h-96 md:w-[600px] md:h-[600px] border-[40px] border-[#38B6A6] rounded-full mix-blend-overlay blur-3xl"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-6 leading-tight"
          >
            Weaving code <br className="hidden sm:block" />
            into digital <span className="text-[#E8A33D]">craft.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-[#8FD9CB] mb-10 max-w-2xl"
          >
            We are a top software development company in Bangladesh. A small but precise studio building custom software, POS, and mobile applications tailored for your unique business needs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-[#38B6A6] hover:bg-[#38B6A6]/90 text-[#F3EFE7]" })}>Start a project</Link>
            <Link href="/work" className={buttonVariants({ size: "lg", variant: "outline", className: "text-foreground border-border hover:bg-muted" })}>View our work</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
