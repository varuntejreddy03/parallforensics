"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CTAButton } from "@/components/CTAButton";
import { CheckCircle2 } from "lucide-react";

// Indian Phone Number regex: allows optional +91 or 91, space/dash, and 10 digits starting with 6-9
const phoneRegex = /^(?:\+?91[\-\s]?)?[6789]\d{9}$/;

const contactSchema = z.object({
  name: z.string().min(2, "Full Name is required"),
  phone: z.string().regex(phoneRegex, "Invalid Indian phone number. Format: +91 9876543210"),
  email: z.string().email("Invalid email address"),
  subject: z.enum(["General Enquiry", "Product Demo Request", "Training Enquiry", "Partnership", "Other"]),
  message: z.string().min(20, "Message must be at least 20 characters long"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactFormExtended() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: "General Enquiry"
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    // TODO: Wire form to a service like Formspree or EmailJS
    // Example: await fetch('https://formspree.io/f/your-endpoint', { method: 'POST', body: JSON.stringify(data) })

    // Simulating API latency
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form Submitted:", data);
    reset();
    setIsSuccess(true);
  };

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <div className="relative">

      {/* Success Toast Overlay */}
      {isSuccess && (
        <div className="absolute top-0 left-0 right-0 z-50 transform -translate-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-4 rounded-xl shadow-lg flex items-center gap-4">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
            <div>
              <p className="font-bold text-sm">Thank you!</p>
              <p className="text-sm opacity-90">We&apos;ll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Full Name <span className="text-red-500">*</span></label>
          <input
            {...register("name")}
            className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-300 focus:ring-red-500/50' : 'border-slate-200 focus:border-accent focus:ring-accent/50'} focus:outline-none focus:ring-2 bg-surface transition-all`}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Phone Number <span className="text-red-500">*</span></label>
            <input
              {...register("phone")}
              type="tel"
              className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-300 focus:ring-red-500/50' : 'border-slate-200 focus:border-accent focus:ring-accent/50'} focus:outline-none focus:ring-2 bg-surface transition-all`}
              placeholder="+91 98765 43210"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Email ID <span className="text-red-500">*</span></label>
            <input
              {...register("email")}
              type="email"
              className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-300 focus:ring-red-500/50' : 'border-slate-200 focus:border-accent focus:ring-accent/50'} focus:outline-none focus:ring-2 bg-surface transition-all`}
              placeholder="john@agency.gov"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Subject</label>
          <select
            {...register("subject")}
            className={`w-full px-4 py-3 rounded-xl border ${errors.subject ? 'border-red-300 focus:ring-red-500/50' : 'border-slate-200 focus:border-accent focus:ring-accent/50'} focus:outline-none focus:ring-2 bg-surface transition-all appearance-none cursor-pointer`}
          >
            <option value="General Enquiry">General Enquiry</option>
            <option value="Product Demo Request">Product Demo Request</option>
            <option value="Training Enquiry">Training Enquiry</option>
            <option value="Partnership">Partnership</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Message <span className="text-red-500">*</span></label>
          <textarea
            {...register("message")}
            rows={5}
            className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-300 focus:ring-red-500/50' : 'border-slate-200 focus:border-accent focus:ring-accent/50'} focus:outline-none focus:ring-2 bg-surface transition-all resize-none`}
            placeholder="How can we assist with your forensic requirements?"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <CTAButton type="submit" disabled={isSubmitting} className="w-full h-14 text-lg shadow-lg">
          {isSubmitting ? "Sending..." : "Send Message"}
        </CTAButton>
      </form>
    </div>
  );
}
