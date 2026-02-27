"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

export function SectionWrapper({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("py-20", className)}
    >
      <div className="container mx-auto px-6 md:px-12">
        {children}
      </div>
    </motion.section>
  );
}
