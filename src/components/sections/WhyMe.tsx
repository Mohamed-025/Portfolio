"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const qa = [
  {
    q: "Why combine Data Analytics and Front-end Development?",
    a: "Because understanding data is valuable, but knowing how to transform ideas into functional digital experiences creates another level of opportunity.",
  },
  {
    q: "What makes me business-minded?",
    a: "My experience as a business owner and working with operational data taught me that technical solutions should serve real business needs.",
  },
  {
    q: "How do I approach challenges?",
    a: "I focus on understanding the problem first, breaking it into manageable parts, and building practical solutions.",
  },
  {
    q: "What can I bring to a team?",
    a: "A combination of analytical thinking, technical knowledge, adaptability, ownership, and a willingness to keep learning.",
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
