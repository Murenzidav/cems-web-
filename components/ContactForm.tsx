"use client";

import { useState } from "react";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { validateContact, type ContactErrors, type ContactPayload } from "@/lib/validation";

const empty: ContactPayload = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  company: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  function update<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        setStatus("error");
        setServerMessage(data.error ?? "Something went wrong. Please try again or call us.");
        return;
      }

      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please try again or WhatsApp us.");
    }
  }

  const fieldClass =
    "mt-1 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 text-navy";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(event) => update("company", event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name" className="text-sm font-semibold text-navy">
          Name
        </label>
        <input
          id="name"
          name="name"
          className={fieldClass}
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          required
        />
        {errors.name ? <p className="mt-1 text-sm text-red">{errors.name}</p> : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-navy">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={fieldClass}
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
          {errors.phone ? <p className="mt-1 text-sm text-red">{errors.phone}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={fieldClass}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
          />
          {errors.email ? <p className="mt-1 text-sm text-red">{errors.email}</p> : null}
        </div>
      </div>
      <p className="text-xs text-muted">Provide a phone number or an email — or both.</p>

      <div>
        <label htmlFor="service" className="text-sm font-semibold text-navy">
          Service
        </label>
        <select
          id="service"
          name="service"
          className={fieldClass}
          value={values.service}
          onChange={(event) => update("service", event.target.value)}
          required
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
        {errors.service ? <p className="mt-1 text-sm text-red">{errors.service}</p> : null}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={fieldClass}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          required
        />
        {errors.message ? <p className="mt-1 text-sm text-red">{errors.message}</p> : null}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gradient rounded-full px-6 py-3 font-semibold disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "success" ? (
        <p className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-800" role="status">
          Thank you. We have received your message and will get back to you.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red" role="alert">
          {serverMessage} You can also call or WhatsApp {site.phone}.
        </p>
      ) : null}
    </form>
  );
}
