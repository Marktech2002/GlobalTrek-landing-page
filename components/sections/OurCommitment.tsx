"use client";

import { useEffect, useRef } from "react";
import { Book, MapPin, Phone, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Commitment } from "@/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface OurCommitmentProps {
  commitments: Commitment[];
}

const iconMap = {
  book: Book,
  "route-square": MapPin,
  "call-outgoing": Phone,
  people: Users,
};

export default function OurCommitment({ commitments }: OurCommitmentProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll(".animate-scroll"), {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 lg:px-16 py-16">
      <div className="text-center space-y-6 mb-12 animate-scroll">
        <h2 className="heading-section">Our Commitment to You</h2>
        <p className="body-large max-w-[810px] mx-auto">
          We&apos;re dedicated to making your travel experience seamless, safe, and enjoyable. Count on us for transparent pricing, exceptional support, and unforgettable journeys
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {commitments.map((commitment) => {
          const Icon = iconMap[commitment.icon as keyof typeof iconMap];
          return (
            <Card key={commitment.id} className="p-6 space-y-4 text-center animate-scroll border-none shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="heading-card text-lg">{commitment.title}</h3>
              <p className="body-regular text-sm md:not-first:max-w-[360px]">{commitment.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}