"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", hp: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (form.hp) {
      // honeypot filled — treat as spam but return success to user
      setStatus("success");
      return;
    }

    if (!form.name || !form.email || !form.message) {
      setError("Please fill name, email and message.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "", hp: "" });
      } else {
        const data = await res.json();
        setError(data?.error || "Failed to send message");
        setStatus("error");
      }
    } catch (err: any) {
      setError(err?.message || "Network error");
      setStatus("error");
    }
  }

  return (
    <div>
      <h3 style={{ marginBottom: "2rem" }}>Send a Message</h3>

      {status === "success" && <div style={{ color: "green", marginBottom: "1rem" }}>Message sent. We'll be in touch shortly.</div>}
      {status === "error" && error && <div style={{ color: "#b91c1c", marginBottom: "1rem" }}>{error}</div>}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label style={{ fontWeight: 600 }}>Name</label>
            <input name="name" value={form.name} onChange={handleChange} type="text" className="input" style={{ padding: "0.8rem", border: "1px solid #ddd", borderRadius: "4px" }} placeholder="Your name" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label style={{ fontWeight: 600 }}>Email</label>
            <input name="email" value={form.email} onChange={handleChange} type="email" className="input" style={{ padding: "0.8rem", border: "1px solid #ddd", borderRadius: "4px" }} placeholder="your@email.com" />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontWeight: 600 }}>Subject</label>
          <input name="subject" value={form.subject} onChange={handleChange} type="text" className="input" style={{ padding: "0.8rem", border: "1px solid #ddd", borderRadius: "4px" }} placeholder="How can we help?" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontWeight: 600 }}>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="input" style={{ padding: "0.8rem", border: "1px solid #ddd", borderRadius: "4px", minHeight: "150px" }} placeholder="Tell us more..."></textarea>
        </div>

        <input name="hp" value={form.hp} onChange={handleChange} type="text" style={{ display: "none" }} aria-hidden="true" />

        <button disabled={status === "sending"} className="btn btn-primary" style={{ height: "50px", justifyContent: "center" }}>
          <Send size={18} style={{ marginRight: "0.5rem" }} /> {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
