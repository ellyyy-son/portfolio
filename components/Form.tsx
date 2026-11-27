"use client";
import { useState } from "react";
import { Pokeball } from "./Whimsy";

type Status = "idle" | "sending" | "success" | "error";

const MESSAGES: Record<Exclude<Status, "idle">, string> = {
  sending: "Throwing Poké Ball…",
  success: "Gotcha! Your message was caught. I'll get back to you soon!",
  error: "Oh no! The message broke free. Please try again.",
};

const inputClasses =
  "rounded-2xl border-2 border-lav-200 bg-lav-50 p-3 text-sm text-ink placeholder-ink-soft/60 transition focus:border-lav-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-lav-200";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "bf970cd1-b9c6-4812-a6e0-dc43c35cfe84");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="textbox mx-auto flex w-full flex-col gap-5 p-6 text-ink lg:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Write your message here…"
          className={`resize-none ${inputClasses}`}
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 self-center rounded-full border-2 border-ink bg-butter px-8 py-3 text-sm font-bold text-ink shadow-[0_4px_0_var(--color-ink)] transition-all hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_var(--color-ink)] disabled:opacity-60"
      >
        <span className="flex items-center gap-2">
          <Pokeball className="h-5 w-5 text-lav-400" />
          Send Message
        </span>
      </button>

      {/* Result message */}
      {status !== "idle" && (
        <p
          role="status"
          className={`text-center text-sm font-semibold ${
            status === "error" ? "text-rose-500" : "text-lav-600"
          }`}
        >
          {MESSAGES[status]}
        </p>
      )}
    </form>
  );
}
