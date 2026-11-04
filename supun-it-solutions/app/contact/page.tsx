"use client";

import type { FormEvent } from "react";
import { ArrowUpRight, Mail, MessageSquareText, Send, Tag, UserRound, UsersRound } from "lucide-react";
import { siteConfig } from "@/src/data/site";

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const subject = String(form.get("subject") || "General inquiry").trim();
    const message = String(form.get("message") || "").trim();
    const body = [`Name: ${name}`, `Email: ${email}`, `Subject: ${subject}`, "", "Message:", message].join("\n");
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f5faff_48%,#eaf7ff_100%)] px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-blue-300/16 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-[30rem] w-[30rem] rounded-full bg-cyan-300/18 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(120%_100%_at_50%_100%,rgba(18,103,244,.22),rgba(0,167,255,.08)_48%,transparent_49%)]" />

      <section className="relative mx-auto grid max-w-[1440px] items-start gap-8 lg:grid-cols-[0.4fr_0.6fr] lg:gap-12">
        <div className="relative min-w-0 lg:flex lg:min-h-[650px] lg:flex-col lg:justify-center">
          <div className="inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#1267F4]">
            <span>Contact us</span><i className="h-px w-12 bg-gradient-to-r from-[#1267F4] to-[#00A7FF]" />
          </div>
          <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-[#071A45] sm:text-5xl lg:text-[3.6rem]">
            Get in Touch<br />with <span className="bg-gradient-to-r from-[#1267F4] to-[#00A7FF] bg-clip-text text-transparent">Our Team</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">For general inquiries about Supun IT Solutions and our work within the Supun Group of Companies, feel free to contact us.</p>

          <div className="mt-8 space-y-4">
            <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-4 rounded-[22px] border border-white/90 bg-white/75 p-4 shadow-[0_14px_36px_rgba(18,103,244,0.09)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(18,103,244,0.15)]">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#1267F4]"><Mail size={21} /></span>
              <span className="min-w-0 flex-1"><span className="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-400">Email us</span><span className="mt-1 block truncate font-extrabold text-[#071A45]">{siteConfig.email}</span></span>
              <ArrowUpRight size={19} className="text-[#1267F4] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="https://supuncompanies.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-[22px] border border-white/90 bg-white/75 p-4 shadow-[0_14px_36px_rgba(18,103,244,0.09)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(18,103,244,0.15)]">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-50 text-[#00A7FF]"><UsersRound size={22} /></span>
              <span className="min-w-0 flex-1"><span className="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-400">Company</span><span className="mt-1 block truncate font-extrabold text-[#071A45]">Supun Group of Companies</span></span>
              <ArrowUpRight size={19} className="text-[#1267F4] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>

        <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-[32px] border border-white/85 bg-white/68 p-6 shadow-[0_28px_85px_rgba(18,103,244,0.13)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="relative flex items-center gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#1267F4] to-[#00A7FF] text-white shadow-[0_14px_32px_rgba(18,103,244,0.25)]"><Send size={24} /></span>
            <div><p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#1267F4]">Send a message</p><h2 className="mt-1 text-3xl font-extrabold tracking-[-0.04em] text-[#071A45] sm:text-4xl">Contact our team.</h2></div>
          </div>

          <div className="relative mt-8 grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-bold text-[#071A45]">Name<span className="relative mt-2.5 block"><UserRound className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1267F4]" size={19} /><input name="name" placeholder="Your name" required className="w-full rounded-2xl border border-blue-200/90 bg-white/78 py-3.5 pl-12 pr-4 font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#1267F4] focus:ring-4 focus:ring-blue-100/70" /></span></label>
            <label className="block text-sm font-bold text-[#071A45]">Email<span className="relative mt-2.5 block"><Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1267F4]" size={19} /><input name="email" type="email" placeholder="you@example.com" required className="w-full rounded-2xl border border-blue-200/90 bg-white/78 py-3.5 pl-12 pr-4 font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#1267F4] focus:ring-4 focus:ring-blue-100/70" /></span></label>
            <label className="block text-sm font-bold text-[#071A45] sm:col-span-2">Subject<span className="relative mt-2.5 block"><Tag className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1267F4]" size={19} /><input name="subject" placeholder="How can we help?" required className="w-full rounded-2xl border border-blue-200/90 bg-white/78 py-3.5 pl-12 pr-4 font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#1267F4] focus:ring-4 focus:ring-blue-100/70" /></span></label>
            <label className="block text-sm font-bold text-[#071A45] sm:col-span-2">Message<span className="relative mt-2.5 block"><MessageSquareText className="pointer-events-none absolute left-4 top-4 text-[#1267F4]" size={19} /><textarea name="message" rows={6} placeholder="Write your message..." required className="w-full resize-y rounded-2xl border border-blue-200/90 bg-white/78 py-3.5 pl-12 pr-4 font-medium leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#1267F4] focus:ring-4 focus:ring-blue-100/70" /></span></label>
          </div>

          <button className="relative mt-6 inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#1267F4] to-[#00A7FF] px-8 py-3.5 font-extrabold text-white shadow-[0_14px_32px_rgba(18,103,244,0.27)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(18,103,244,0.34)]" type="submit">Send Message <Send size={18} /></button>
        </form>
      </section>
    </main>
  );
}
