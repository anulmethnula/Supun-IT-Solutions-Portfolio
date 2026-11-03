"use client";

import type { FormEvent } from "react";
import {
  ArrowUpRight,
  Globe2,
  Mail,
  MessageSquareText,
  Send,
} from "lucide-react";
import { siteConfig } from "@/src/data/site";

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const company = String(form.get("company") || "").trim();
    const subject = String(form.get("subject") || "Supun IT Solutions website enquiry").trim();
    const message = String(form.get("message") || "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : "",
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="relative overflow-hidden bg-white px-5 pb-14 pt-6 sm:px-8 sm:pt-8 lg:px-10 lg:pt-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-14 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-28 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-blue-50/70 to-transparent"
      />

      <section className="relative mx-auto max-w-[1420px]">
        <div className="grid items-start gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-7">
          <aside className="relative overflow-hidden rounded-[28px] border border-white/80 bg-gradient-to-br from-white/92 via-white/86 to-blue-50/80 p-6 shadow-[0_20px_58px_rgba(18,103,244,0.09)] backdrop-blur-2xl sm:p-7 lg:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-14 h-44 w-44 rounded-full bg-gradient-to-br from-blue-500/14 to-cyan-300/18 blur-2xl"
            />

            <div className="relative w-full">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1267F4] to-[#00A7FF] text-white shadow-[0_10px_24px_rgba(18,103,244,0.22)]">
                <MessageSquareText size={23} />
              </div>

              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">Supun IT Solutions</p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-[-0.035em] text-[#071a45]">
                Start a conversation.
              </h1>

              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-blue-100/80 bg-white/84 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_10px_24px_rgba(18,103,244,0.10)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Mail size={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">Email</span>
                    <span className="mt-1 block truncate font-bold text-[#071a45]">{siteConfig.email}</span>
                  </span>
                  <ArrowUpRight className="text-blue-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
                </a>

                <a
                  href={siteConfig.supunGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-blue-100/80 bg-white/84 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_10px_24px_rgba(18,103,244,0.10)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white">
                    <Globe2 size={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">Company</span>
                    <span className="mt-1 block font-bold text-[#071a45]">Supun Group of Companies</span>
                  </span>
                  <ArrowUpRight className="text-blue-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
                </a>
              </div>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-white/80 bg-white/84 p-6 shadow-[0_20px_58px_rgba(18,103,244,0.09)] backdrop-blur-2xl sm:p-7 lg:p-8"
          >
            <div className="mb-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">Send a message</p>
              <h2 className="mt-1.5 text-2xl font-extrabold tracking-[-0.025em] text-[#071a45] sm:text-3xl">Contact our team.</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-bold text-[#071a45]">
                Name
                <input
                  name="name"
                  placeholder="Your name"
                  required
                  className="mt-2 w-full rounded-2xl border border-blue-100 bg-white/88 px-4 py-3 font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/70"
                />
              </label>

              <label className="block text-sm font-bold text-[#071a45]">
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="mt-2 w-full rounded-2xl border border-blue-100 bg-white/88 px-4 py-3 font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/70"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm font-bold text-[#071a45]">
              Company
              <input
                name="company"
                placeholder="Company name"
                className="mt-2 w-full rounded-2xl border border-blue-100 bg-white/88 px-4 py-3 font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/70"
              />
            </label>

            <label className="mt-4 block text-sm font-bold text-[#071a45]">
              Subject
              <input
                name="subject"
                placeholder="How can we help?"
                className="mt-2 w-full rounded-2xl border border-blue-100 bg-white/88 px-4 py-3 font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/70"
              />
            </label>

            <label className="mt-4 block text-sm font-bold text-[#071a45]">
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message..."
                required
                className="mt-2 w-full resize-y rounded-2xl border border-blue-100 bg-white/88 px-4 py-3 font-medium leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/70"
              />
            </label>

            <div className="mt-5">
              <button
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#1267F4] to-[#00A7FF] px-6 py-3 font-extrabold text-white shadow-[0_10px_24px_rgba(18,103,244,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(18,103,244,0.30)]"
                type="submit"
              >
                Send Message <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
