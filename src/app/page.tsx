"use client";

import * as React from "react";
import { useState } from "react";
import "./globals.css";

export default function BlackBoxCaresLandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <main className="bg-blackbox-background text-blackbox-text max-w-3xl mx-auto px-4 py-12 text-center space-y-12">
      <section>
        <h1 className="text-4xl font-bold text-blackbox-text">BlackBox Cares</h1>
        <p className="text-xl italic mt-2">A quiet companion for when your mind and money stop getting along.</p>
      </section>

      <section className="text-left space-y-4">
        <h2 className="text-2xl font-semibold">What Is BlackBox Cares?</h2>
        <p>BlackBox Cares is a real-time financial monitoring system designed to help people with bipolar disorder, gambling addiction, early-stage dementia, or other cognitive and emotional challenges. It watches gently in the background — noticing when your spending behaviour slips, and offering support before things spiral.</p>
      </section>

      <section className="text-left space-y-4">
        <h2 className="text-2xl font-semibold">Why We Exist</h2>
        <p>After a manic episode wrecked my finances, relationships, and stability, I didn’t need a spreadsheet. I needed a lifeline. BlackBox Cares is the thing I wish I’d had: a system that sees when you&apos;re slipping — and sends help, gently.</p>
        <p>This is for people who live with mental health volatility, and the quiet financial fallout that so often follows.</p>
      </section>

      <section className="text-left space-y-4">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <ul className="list-disc list-inside">
          <li><strong>Secure Bank Integration</strong> – via Plaid; no credentials stored</li>
          <li><strong>Spending Pattern Analysis</strong> – personalized baselines, behavioural shifts</li>
          <li><strong>Custom Alert Thresholds</strong> – set your own limits for peace of mind</li>
          <li><strong>Trusted Contact Alerts</strong> – notify someone when support is needed</li>
          <li><strong>Multi-Channel Notifications</strong> – via SMS and in-app</li>
          <li><strong>REST API</strong> – integrates with other wellness tools and platforms</li>
        </ul>
      </section>

      <section className="text-left space-y-4">
        <h2 className="text-2xl font-semibold">Who It’s For</h2>
        <ul className="list-disc list-inside">
          <li>People with bipolar navigating manic or depressive spending</li>
          <li>Those in gambling recovery who want preemptive support</li>
          <li>Caregivers of people with early-stage dementia</li>
          <li>Anyone vulnerable to impulse spending during emotional upheaval</li>
        </ul>
      </section>

      <section className="text-left space-y-4">
        <h2 className="text-2xl font-semibold">Our Vision</h2>
        <p><strong>This isn’t just fintech. It’s dignity tech.</strong></p>
        <p>BlackBox Cares offers calm, intelligent financial tracking that works <em>with</em> your mind — not against it. We believe in agency <em>and</em> support, privacy <em>and</em> care.</p>
        <p>We’re preparing for a pilot launch. If you’re interested in using BlackBox Cares or partnering to test it, we’d love to hear from you.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Join the Waitlist</h2>
        {submitted ? (
          <p className="mt-4 text-green-600">Thanks for signing up. We&apos;ll be in touch soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 mt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full max-w-sm px-4 py-2 border rounded"
            />
            <button
              type="submit"
              className="bg-blackbox-primary text-white px-6 py-3 text-lg hover:opacity-90 rounded"
            >
              Join the Waitlist
            </button>
          </form>
        )}
        <p className="mt-2">Or email: <a className="underline" href="mailto:j.gilla.dev@gmail.com">gillatechnologiesltd@gmail.com</a></p>
      </section>

      <footer className="pt-12 text-sm text-gray-500">
        Created by someone who’s been there. For everyone who still is.<br />
        <a className="underline" href="https://github.com/j-gilla/blackbox" target="_blank">View Code on GitHub</a>
      </footer>
    </main>
  );
}
