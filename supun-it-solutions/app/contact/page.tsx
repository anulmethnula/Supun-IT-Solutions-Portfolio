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
    <main className="relative overflow-hidden bg-white px-5 pb-20 pt-12 sm:px-8 lg:px-10 lg:pt-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-40 h-96 w-96 rounded-full bg-cyan-300/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-blue-50/80 to-transparent"
      />

      <section className="relative mx-auto max-w-[1420px]">
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
          <aside className="relative flex h-full min-h-[560px] overflow-hidden rounded-[30px] border border-white/80 bg-gradient-to-br from-white/92 via-white/84 to-blue-50/80 p-7 shadow-[0_24px_70px_rgba(18,103,244,0.10)] backdrop-blur-2xl sm:p-9 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-300/20 blur-2xl"
            />

            <div className="relative flex w-full flex-col justify-center">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1267F4] to-[#00A7FF] text-white shadow-[0_12px_30px_rgba(18,103,244,0.25)]">
                <MessageSquareText size={26} />
              </div>

              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-600">Supun IT Solutions</p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-[#071a45] sm:text-4xl">
                Start a conversation.
              </h1>

              <div className="mt-9 space-y-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-blue-100/80 bg-white/80 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_28px_rgba(18,103,244,0.10)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Mail size={20} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Email</span>
                    <span className="mt-1 block truncate font-bold text-[#071a45]">{siteConfig.email}</span>
                  </span>
                  <ArrowUpRight className="text-blue-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={19} />
                </a>

                <a
                  href={siteConfig.supunGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-blue-100/80 bg-white/80 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_28px_rgba(18,103,244,0.10)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white">
                    <Globe2 size={20} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Company</span>
                    <span className="mt-1 block font-bold text-[#071a45]">Supun Group of Companies</span>
                  </span>
                  <ArrowUpRight className="text-blue-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={19} />
                </a>
              </div>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="h-full min-h-[560px] rounded-[30px] border border-white/80 bg-white/80 p-6 shadow-[0_24px_70px_rgba(18,103,244,0.10)] backdrop-blur-2xl sm:p-8 lg:p-10"
          >
            <div className="mb-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">Send a message</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.025em] text-[#071a45] sm:text-3xl">Contact our team.</h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-bold text-[#071a45]">
                Name
                <input
                  name="name"
                  placeholder="Your name"
                  required
                  className="mt-2 w-full rounded-2xl border border-blue-100 bg-white/85 px-4 py-3.5 font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/70"
                />
              </label>

              <label className="block text-sm font-bold text-[#071a45]">
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="mt-2 w-full rounded-2xl border border-blue-100 bg-white/85 px-4 py-3.5 font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/70"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-bold text-[#071a45]">
              Company
              <input
                name="company"
                placeholder="Company name"
                className="mt-2 w-full rounded-2xl border border-blue-100 bg-white/85 px-4 py-3.5 font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/70"
              />
            </label>

            <label className="mt-5 block text-sm font-bold text-[#071a45]">
              Subject
              <input
                name="subject"
                placeholder="How can we help?"
                className="mt-2 w-full rounded-2xl border border-blue-100 bg-white/85 px-4 py-3.5 font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/70"
              />
            </label>

            <label className="mt-5 block text-sm font-bold text-[#071a45]">
              Message
              <textarea
                name="message"
                rows={6}
                placeholder="Write your message..."
                required
                className="mt-2 w-full resize-y rounded-2xl border border-blue-100 bg-white/85 px-4 py-3.5 font-medium leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100/70"
              />
            </label>

            <div className="mt-6">
              <button
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#1267F4] to-[#00A7FF] px-6 py-3.5 font-extrabold text-white shadow-[0_12px_28px_rgba(18,103,244,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(18,103,244,0.32)]"
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
