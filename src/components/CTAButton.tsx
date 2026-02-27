"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

interface CTAButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline";
}

export function CTAButton({ variant = "primary", className, children, ...props }: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 px-6 py-2";

  const variants = {
    primary: "bg-accent hover:bg-accent/90 text-white shadow-sm",
    outline: "border border-accent text-accent bg-transparent hover:bg-accent hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
