"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Statistic } from "@/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WhoWeAreProps {
  statistics: Statistic[];
}

export default function WhoWeAre({ statistics }: WhoWeAreProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll(".animate-scroll"), {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 lg:px-16 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center md:gap-[179px]">
        <div className="animate-scroll">
          <Image
            src="/images/who-we-are.svg"
            alt="Person enjoying scenic view"
            width={513}
            height={584}
            className="w-full h-auto rounded-[32px] object-cover"
          />
        </div>

        <div className="space-y-8 animate-scroll">
          <div className="space-y-6">
            <h2 className="heading-section">Who We Are</h2>
            <p className="body-large text-[16px] max-w-[358px] md:max-w-[561px]">
              At Globetrek, we&apos;re passionate about making travel easy, affordable, and memorable. With years of experience and a deep love for exploring the world, we&apos;ve built a platform that brings the best travel deals right to your fingertips.&quot;
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-2xl">
              {statistics.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-2">
                  <div className="statistic-large">
                    {stat.value >= 1000 ? `${Math.floor(stat.value / 1000)}K+` : `${stat.value}${stat.suffix || ''}`}
                  </div>
                  <p className="text-base text-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary/10 gap-2">
              Learn more about us
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}