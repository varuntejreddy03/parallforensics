"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().optional(),
  email: z.string().email("Invalid email address"),
  subject: z.enum(["General Enquiry", "Product Demo Request", "Training Enquiry", "Partnership", "Other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
    alert("Message sent successfully (Simulation).");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Full Name</label>
        <input
          {...register("name")}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-surface transition-all"
          placeholder="John Doe"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Phone Number</label>
        <input
          {...register("phone")}
          type="tel"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-surface transition-all"
          placeholder="+91 XXXXX XXXXX"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Business Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-surface transition-all"
          placeholder="john@agency.gov"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Subject</label>
        <select
          {...register("subject")}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-surface transition-all appearance-none cursor-pointer"
        >
          <option value="General Enquiry">General Enquiry</option>
          <option value="Product Demo Request">Product Demo Request</option>
          <option value="Training Enquiry">Training Enquiry</option>
          <option value="Partnership">Partnership</option>
          <option value="Other">Other</option>
        </select>
        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Message</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-surface transition-all resize-none"
          placeholder="How can we assist your investigation capabilities?"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-14 rounded-full font-bold text-white bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70"
        style={{ backgroundSize: '200% auto' }}
      >
        {isSubmitting ? "Sending..." : "Submit Inquiry"}
        {!isSubmitting && <span className="group-hover:translate-x-1 transition-transform">→</span>}
      </button>
    </form>
  );
}
