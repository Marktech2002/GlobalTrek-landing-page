"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Destination } from "@/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TopDestinationsProps {
  destinations: Destination[];
}

export default function TopDestinations({ destinations }: TopDestinationsProps) {
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
      <div className="text-center space-y-6 mb-12 animate-scroll">
        <h2 className="heading-section">Explore Top Destinations</h2>
        <p className="body-large max-w-3xl mx-auto">
          Discover the world&apos;s most breathtaking places, handpicked for your next adventure.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {destinations.map((destination, index) => (
          <Card key={destination.id} className={`overflow-hidden border-none animate-scroll ${index === 1 ? 'md:mt-16' : ''}`}>
            <div className={`flex flex-col gap-6 ${index % 2 === 0 ? 'flex-col-reverse' : ''}`}>
              <Image
                src={destination.image}
                alt={destination.name}
                width={411}
                height={467}
                className="w-full h-[400px] object-cover rounded-[32px]"
              />
              <div className="md:p-6 space-y-4">
                <h3 className="heading-card">{destination.name}</h3>
                <p className="body-regular md:max-w-[410px]">
                  {destination.description}{" "}
                  <span className="text-primary font-medium cursor-pointer hover:underline">Read More</span>
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center animate-scroll">
        <Button variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary/10 gap-2">
          See all
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}