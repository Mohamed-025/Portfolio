"use client";

import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Status = "idle" | "sending" | "opened" | "sent" | "error";
type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!emailRe.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.subject.trim().length < 3) e.subject = "Please add a short subject.";
  if (f.message.trim().length < 10) e.message = "Please write at least 10 characters.";
  return e;
}

export function Contact() {
  const canSend = Boolean(profile.contactEndpoint || profile.email);
  const [fields, setFields] = useState<Fields>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const set = (k: keyof Fields) => (ev: { target: { value: string } }) => setFields((f) => ({ ...f, [k]: ev.target.value }));

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length) return;

    if (profile.contactEndpoint) {
      setStatus("sending");
      setError("");
      try {
        const res = await fetch(profile.contactEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(fields),
        });
        if (!res.ok) throw new Error(`The form service answered with status ${res.status}.`);
        setStatus("sent");
      } catch (err) {
        setError(err instanceof Error ? err.message : "The message could not be sent.");
        setStatus("error");
      }
      return;
    }

    // No server endpoint: open the visitor's email app. Nothing is sent until they send it there.
    const body = `${fields.message}\n\n${fields.name}\n${fields.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(body)}`;
    setStatus("opened");
  }

  const input =
    "mt-1.5 w-full rounded-xl border border-line bg-surface px-4 py-3 text-[0.95rem] text-fg placeholder:text-muted/60 focus:border-accent";

  return (
    <section id="contact" className="section border-t border-line bg-surface/40">
      <div className="container-x">
        <SectionHeading eyebrow="Contact & Let's Connect" title="Have a Project or Opportunity in Mind?">
          I&apos;m always interested in meaningful opportunities, interesting projects, and collaborations where I can contribute through
          data, technology, and problem-solving.
        </SectionHeading>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <ul className="space-y-3">
            {profile.email ? (
              <li>
                <a href={`mailto:${profile.email}`} className="card flex items-center gap-4 p-4 transition hover:border-accent/50">
                  <Mail className="text-accent" size={20} aria-hidden />
                  <span><span className="block text-xs text-muted">Email</span>{profile.email}</span>
                </a>
              </li>
            ) : null}
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-4 p-4 transition hover:border-accent/50">
                <Linkedin className="text-accent" size={20} aria-hidden />
                <span><span className="block text-xs text-muted">LinkedIn</span>linkedin.com/in/mohamedeid25</span>
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-4 p-4 transition hover:border-accent/50">
                <Github className="text-accent" size={20} aria-hidden />
                <span><span className="block text-xs text-muted">GitHub</span>github.com/Mohamed-025</span>
              </a>
            </li>
          </ul>

          {canSend ? (
            <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8" aria-label="Contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="c-name" label="Name" error={errors.name}>
                  <input id="c-name" name="name" autoComplete="name" className={input} value={fields.name} onChange={set("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "c-name-err" : undefined} />
                </Field>
                <Field id="c-email" label="Email" error={errors.email}>
                  <input id="c-email" name="email" type="email" autoComplete="email" className={input} value={fields.email} onChange={set("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "c-email-err" : undefined} />
                </Field>
              </div>
              <Field id="c-subject" label="Subject" error={errors.subject}>
                <input id="c-subject" name="subject" className={input} value={fields.subject} onChange={set("subject")} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "c-subject-err" : undefined} />
              </Field>
              <Field id="c-message" label="Message" error={errors.message}>
                <textarea id="c-message" name="message" rows={5} className={input} value={fields.message} onChange={set("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "c-message-err" : undefined} />
              </Field>
              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" disabled={status === "sending"} className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-bg transition hover:brightness-110 disabled:opacity-60">
                  {status === "sending" ? "Sending..." : profile.contactEndpoint ? "Send message" : "Open in email app"}
                </button>
                <p role="status" aria-live="polite" className="text-sm text-muted">
                  {status === "sent" ? "Message sent. Thank you." : null}
                  {status === "opened" ? "Your email app should now be open with the message ready. It is not sent until you send it there." : null}
                  {status === "error" ? <span className="text-red-400">Not sent. {error} Please use LinkedIn instead.</span> : null}
                </p>
              </div>
            </form>
          ) : (
            <div className="card p-6 sm:p-8">
              <h3 className="text-lg font-semibold">Best way to reach me</h3>
              <p className="mt-2 leading-relaxed text-muted">
                Send me a message on LinkedIn. A direct contact form is not connected on this site yet, so I would rather not show one
                that cannot deliver.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">{label}</label>
      {children}
      {error ? <p id={`${id}-err`} className="mt-1.5 text-xs text-red-400">{error}</p> : null}
    </div>
  );
}
