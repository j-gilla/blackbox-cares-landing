
export default function BlackboxLandingPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-center space-y-12">
      <section>
        <h1 className="text-4xl font-bold">Blackbox</h1>
        <p className="text-xl italic mt-2">A quiet companion for when your mind and money stop getting along.</p>
          <button className="mt-6 text-lg px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">Join the Waitlist</button>
      </section>

      <section className="text-left space-y-4">
        <h2 className="text-2xl font-semibold">What Is Blackbox?</h2>
        <p>Blackbox is a real-time financial monitoring system designed to help people with bipolar disorder, gambling addiction, early-stage dementia, or other cognitive and emotional challenges. It watches gently in the background — noticing when your spending behaviour slips, and offering support before things spiral.</p>
      </section>

      <section className="text-left space-y-4">
        <h2 className="text-2xl font-semibold">Why We Exist</h2>
        <p>After a manic episode wrecked my finances, relationships, and stability, I didn’t need a spreadsheet. I needed a lifeline. Blackbox is the thing I wish I’d had: a system that sees when you're slipping — and sends help, gently.</p>
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
        <p>Blackbox offers calm, intelligent financial tracking that works <em>with</em> your mind — not against it. We believe in agency <em>and</em> support, privacy <em>and</em> care.</p>
        <p>We’re preparing for a pilot launch. If you’re interested in using Blackbox or partnering to test it, we’d love to hear from you.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Join the Waitlist</h2>
        <p>Be the first to try Blackbox.<br />Sign up for early access. No pressure, no spam — just an invitation when we’re ready.</p>
        <button className="mt-6 text-lg px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">Join the Waitlist</button>
        <p className="mt-2">Or email: <a className="underline" href="mailto:j.gilla.dev@gmail.com">j.gilla.dev@gmail.com</a></p>
      </section>

      <footer className="pt-12 text-sm text-gray-500">
        Created by someone who’s been there. For everyone who still is.<br />
        <a className="underline" href="https://github.com/j-gilla/blackbox" target="_blank">View Code on GitHub</a>
      </footer>
    </main>
  );
}
