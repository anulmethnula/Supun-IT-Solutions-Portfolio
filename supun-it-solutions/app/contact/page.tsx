"use client";

import type { FormEvent } from "react";
import { ArrowUpRight, Mail, MessageSquareText, Send } from "lucide-react";
import { siteConfig } from "@/src/data/site";

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const body = [`Name: ${name}`, `Email: ${email}`, "", "Message:", message].join("\n");
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Contact from Supun IT Solutions website")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute left-[8%] top-16 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[5%] top-28 h-80 w-80 rounded-full bg-cyan-300/14 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-blue-50/80 to-transparent" />

      <section className="relative mx-auto max-w-[1320px]">
        <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
          <div className="relative overflow-hidden rounded-[30px] border border-white/85 bg-gradient-to-br from-blue-50/85 via-white/72 to-cyan-50/75 p-7 shadow-[0_24px_70px_rgba(18,103,244,0.1)] backdrop-blur-2xl sm:p-9 lg:p-10">
            <div aria-hidden="true" className="absolute -left-20 -top-20 h-60 w-60 rounded-full border-[34px] border-blue-400/8" />
            <div aria-hidden="true" className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-300/20 blur-2xl" />

            <div className="relative">
              <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1267F4] to-[#00A7FF] text-white shadow-[0_12px_28px_rgba(18,103,244,0.24)]">
                <MessageSquareText size={24} />
              </span>
              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600">Contact us</p>
              <h1 className="mt-3 max-w-md text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-[#071a45] sm:text-5xl">We&apos;re here to help.</h1>
              <p className="mt-5 max-w-md text-base leading-7 text-slate-600">For general questions about Supun IT Solutions and our work within the Supun Group of Companies, send us a message.</p>
            </div>

            <a href={`mailto:${siteConfig.email}`} className="group relative mt-7 flex max-w-md items-center gap-4 rounded-2xl border border-white/90 bg-white/70 p-4 shadow-[0_10px_28px_rgba(18,103,244,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(18,103,244,0.14)]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1267F4] transition group-hover:bg-[#1267F4] group-hover:text-white"><Mail size={19} /></span>
              <span className="min-w-0 flex-1"><span className="block text-[10px] font-extrabold uppercase tracking-[0.17em] text-slate-400">Email us</span><span className="mt-1 block truncate font-bold text-[#071a45]">{siteConfig.email}</span></span>
              <ArrowUpRight className="text-blue-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
            </a>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[30px] border border-white/85 bg-white/78 p-7 shadow-[0_24px_70px_rgba(18,103,244,0.1)] backdrop-blur-2xl sm:p-9 lg:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600">Send a message</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.035em] text-[#071a45]">Contact our team</h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">Complete the short form below and your email application will prepare the message for you.</p>

            <div className="mt-7 space-y-5">
              <label className="block text-sm font-bold text-[#071a45]">Name<input name="name" placeholder="Your name" required className="mt-2.5 w-full rounded-2xl border border-blue-100/90 bg-white/80 px-4 py-3.5 font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/70" /></label>
              <label className="block text-sm font-bold text-[#071a45]">Email<input name="email" type="email" placeholder="you@example.com" required className="mt-2.5 w-full rounded-2xl border border-blue-100/90 bg-white/80 px-4 py-3.5 font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/70" /></label>
              <label className="block text-sm font-bold text-[#071a45]">Message<textarea name="message" rows={5} placeholder="Write your message..." required className="mt-2.5 w-full resize-y rounded-2xl border border-blue-100/90 bg-white/80 px-4 py-3.5 font-medium leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/70" /></label>
            </div>

            <button className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#1267F4] to-[#00A7FF] px-7 py-3.5 font-extrabold text-white shadow-[0_12px_28px_rgba(18,103,244,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(18,103,244,0.30)]" type="submit">Send Message <Send size={18} /></button>
          </form>
        </div>
      </section>
    </main>
  );
}
