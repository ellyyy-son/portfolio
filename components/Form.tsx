"use client"
import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "bf970cd1-b9c6-4812-a6e0-dc43c35cfe84");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full lg:w-[70%] mx-auto flex flex-col gap-6 rounded-2xl bg-white/10 p-8 text-white shadow-lg backdrop-blur">

        {/* Name */}
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Name</label>
            <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="rounded-lg border border-[#00FFFF] bg-transparent p-3 text-white placeholder-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
            />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Email</label>
            <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="rounded-lg border border-[#00FFFF] bg-transparent p-3 text-white placeholder-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
            />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Message</label>
            <textarea
            name="message"
            required
            rows={4}
            placeholder="Write your message here..."
            className="resize-none rounded-lg border border-[#00FFFF] bg-transparent p-3 text-white placeholder-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
            />
        </div>

        {/* Button */}
        <button
            type="submit"
            className="mt-2 rounded-lg bg-[#00FFFF] p-2 font-semibold text-black transition hover:bg-white/90"
        >
            Submit Form
        </button>

        {/* Result message */}
        {result && (
            <span className="text-center text-sm text-green-300">{result}</span>
        )}
    </form>

  );
}