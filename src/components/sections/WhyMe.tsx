"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const qa = [
  {
    q: "Why combine Data Analytics and Front-end Development?",
    a: "Data tells me what matters. Front-end lets me do something about it. I never liked choosing between understanding a problem and fixing it, so I learned to do both.",
  },
  {
    q: "What makes me business-minded?",
    a: "I ran my own small business for three years while studying. When the results are yours alone, you learn fast to care about outcomes, not appearances.",
  },
  {
    q: "How do I approach challenges?",
    a: "I slow down first. I make sure I understand what is really going on, break it into small pieces, and solve them one at a time. It sounds simple because it is, and it works.",
  },
  {
    q: "What can I bring to a team?",
    a: "Someone who genuinely cares. I dig into the details, ask the awkward questions, and own my work. Running my own business taught me there is no one else to pass it to.",
  },
];

/** A small chat-style exchange: pick a question, read the answer. */
export function WhyMe() {
  const [i, setI] = useState(0);
  return (
    <section id="why" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Why work with me" title="What Makes Me Different?" />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div role="tablist" aria-label="Questions" className="flex flex-col gap-2">
            {qa.map((item, idx) => (
              <button
                key={item.q}
                role="tab"
                id={`q-${idx}`}
                aria-selected={i === idx}
                aria-controls="answer-panel"
                type="button"
                onClick={() => setI(idx)}
                className={cn(
                  "rounded-2xl border px-5 py-4 text-left text-[0.95rem] transition",
                  i === idx ? "border-accent bg-accent/10 text-fg" : "border-line text-muted hover:text-fg",
                )}
              >
                <span className="mr-3 font-mono text-xs text-accent">Q{idx + 1}</span>
                {item.q}
              </button>
            ))}
          </div>
          <div id="answer-panel" role="tabpanel" aria-labelledby={`q-${i}`} className="card relative flex flex-col justify-between gap-6 p-6 sm:p-8">
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-accent/15 px-4 py-3 text-sm text-fg">{qa[i].q}</div>
            <div className="max-w-[92%] rounded-2xl rounded-tl-sm border border-line bg-elevated px-5 py-4 text-lg leading-relaxed">
              {qa[i].a}
            </div>
            <p className="font-mono text-xs text-muted">{i + 1} / {qa.length} &middot; Mohamed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
