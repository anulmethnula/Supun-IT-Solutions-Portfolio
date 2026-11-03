"use client";

import type { FormEvent } from "react";
import { Globe2, Mail, Send } from "lucide-react";
import { Eyebrow } from "@/src/components/ui";
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
    <section className="contact-page">
      <div className="contact-copy">
        <Eyebrow>CONTACT</Eyebrow>
        <h1>Let&apos;s build something <em>useful together.</em></h1>
        <p>Supun IT Solutions<br />Supun Group of Companies</p>
        <div className="socials">
          <a href={`mailto:${siteConfig.email}`}><Mail />{siteConfig.email}</a>
          <a href={siteConfig.supunGroupUrl} target="_blank" rel="noopener noreferrer"><Globe2 />Supun Group Website</a>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Name<input name="name" placeholder="Your name" required /></label>
          <label>Email<input name="email" type="email" placeholder="you@company.com" required /></label>
        </div>
        <label>Company<input name="company" placeholder="Company name" /></label>
        <label>Subject<input name="subject" placeholder="How can we help?" /></label>
        <label>Message<textarea name="message" rows={5} placeholder="Tell us about your project" required /></label>
        <button className="btn primary" type="submit">Send Message <Send size={17} /></button>
        <small style={{ color: "#6b7890" }}>This opens your email app with the message addressed to {siteConfig.email}.</small>
      </form>
    </section>
  );
}
