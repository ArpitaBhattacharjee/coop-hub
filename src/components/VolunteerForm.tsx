"use client";
import { useState } from "react";

export default function VolunteerForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("Sending...");
    const res = await fetch("/api/volunteers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        message: data.get("message"),
      }),
    });
    const result = await res.json();
    if (res.ok) {
      setStatus("Thank you! We will contact you soon.");
      form.reset();
    } else {
      setStatus(result.error || "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" required />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="message">Message (optional)</label>
      <textarea id="message" name="message" rows={4} />

      <button type="submit" className="button">Sign up</button>
      <div role="status" aria-live="polite">{status}</div>
    </form>
  );
}