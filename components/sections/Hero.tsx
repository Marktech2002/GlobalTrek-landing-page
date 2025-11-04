"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.from(heroRef.current.querySelectorAll(".animate-fade-in"), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section ref={heroRef} className="container mx-auto px-4 lg:px-16 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="heading-hero">
              Your Next <br />
              <span className="text-primary relative inline-block">
                Adventure
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="14"
                  viewBox="0 0 260 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12C86.6667 4 255.2 -3.6 258 12"
                    stroke="#1c77c3"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              {" "} Awaits
            </h1>
            <p className="body-regular max-w-xl">
              Discover unbeatable deals on flights, hotels, and experiences. Whether it&apos;s a beach holiday or a mountain trek, explore, compare, and book with ease.
            </p>
          </div>

          <Button className="rounded-full px-8 text-base bg-primary hover:bg-primary/90 gap-2">
            Start your journey
            <ArrowUpRight className="w-5 h-5" />
          </Button>

          <div className="flex items-center gap-4">
            <Image
              src="/images/customer-avatars.svg"
              alt="Customer avatars"
              width={123}
              height={30}
              className="h-8 w-auto"
            />
            <p className="text-sm text-muted">over 3000+ satisfied customer</p>
          </div>
        </div>

        <div className="animate-fade-in">
          <Image
            src="/images/hero-collage.svg"
            alt="Travel destinations collage"
            width={513}
            height={576}
            className="w-full h-auto rounded-3xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}