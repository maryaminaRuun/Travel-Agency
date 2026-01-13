import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  hp?: string;
};

export async function POST(req: Request) {
  try {
    const data: ContactBody = await req.json();
    const { name, email, subject, message, hp } = data;

    // simple honeypot check
    if (hp) return NextResponse.json({ ok: true }, { status: 200 });

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // If SENDGRID_API_KEY is configured, send email via SendGrid
    if (process.env.SENDGRID_API_KEY) {
      const to = process.env.CONTACT_RECEIVER_EMAIL || "info@airlinktravel.so";
      const payload = {
        personalizations: [{ to: [{ email: to }], subject: subject || "New contact message" }],
        from: { email, name: name || "Website visitor" },
        content: [{ type: "text/plain", value: message }],
      };

      const resp = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) {
        console.error("SendGrid error", await resp.text());
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
      }
    } else {
      // fallback: log to server
      console.log("Contact form submission:", { name, email, subject, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
