"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQ as FAQType } from "@/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FAQProps {
  faqs: FAQType[];
}

export default function FAQ({ faqs: initialFaqs }: FAQProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [faqs, setFaqs] = useState(
    initialFaqs.map((faq) => ({ ...faq, isOpen: false }))
  );

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll(".animate-scroll"), {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  const toggleFAQ = (id: string) => {
    setFaqs((prev) =>
      prev.map((faq) =>
        faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <section ref={sectionRef} className="container mx-auto px-4 lg:px-16 py-16">
      <div className="text-center space-y-6 mb-12 animate-scroll">
        <h2 className="heading-section">Frequently Asked Questions</h2>
        <p className="body-large max-w-3xl mx-auto">
          Have questions about your upcoming trip? We&apos;ve got you covered! Below are some of the most common queries we receive.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border-b border-border pb-4 animate-scroll"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex items-center justify-between text-left py-4 hover:text-primary transition-colors group"
              aria-expanded={faq.isOpen}
              aria-controls={`faq-answer-${faq.id}`}
            >
              <span className="font-semibold text-lg pr-8 group-hover:text-primary transition-colors">
                {faq.question}
              </span>
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-primary/20 group-hover:bg-primary/10 transition-all">
                {faq.isOpen ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-primary" />
                )}
              </div>
            </button>
            <div
              id={`faq-answer-${faq.id}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${faq.isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="body-regular text-muted-foreground pt-2 pb-4 pr-8">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}