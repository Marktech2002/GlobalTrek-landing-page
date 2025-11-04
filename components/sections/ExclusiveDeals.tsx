"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Calendar, Star, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Deal } from "@/types";
import { formatPrice, formatDuration } from "@/lib/formatters";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ExclusiveDealsProps {
  deals: Deal[];
}

export default function ExclusiveDeals({ deals }: ExclusiveDealsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={sectionRef} className="container mx-auto px-4 lg:px-16 py-16">
      <div className="text-center space-y-6 mb-12 animate-scroll">
        <h2 className="heading-section">Exclusive Travel Deals</h2>
        <p className="body-large max-w-4xl mx-auto">
          Explore hand-picked travel deals offering incredible savings on flights, hotels, and vacation packages to top destinations. Whether it&apos;s a quick getaway or a dream vacation, these limited-time offers make your next adventure more affordable and unforgettable. Act fast, these deals won&apos;t last long!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {deals.map((deal) => (
          <Card key={deal.id} className="overflow-hidden border-[0.6px] border-primary/20 rounded-2xl animate-scroll relative p-1">
            <div className="relative h-[230px] w-full rounded-xl overflow-hidden">
              <Image
                src={deal.image}
                alt={deal.location}
                fill
                className="object-cover"
              />
              {deal.rating && (
                <Badge className="absolute top-2 right-3 glassmorphic text-white gap-1 rounded-full px-2 py-0.5 text-xs">
                  <Star className="w-3 h-3 fill-current" />
                  {deal.rating}
                </Badge>
              )}
            </div>
            <div className="px-1 pt-1 pb-4 space-y-2">
              <div className="flex justify-between items-start gap-2">
                <div className="space-y-0.5 flex-1">
                  <h3 className="font-semibold text-sm leading-tight">{deal.location}</h3>
                  <div className="flex items-center gap-1 text-[14px] text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDuration(deal.duration)}</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-secondary font-semibold text-sm">{formatPrice(deal.price)}</div>
                  <div className="text-[14px] text-muted-foreground">Per Person</div>
                </div>
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