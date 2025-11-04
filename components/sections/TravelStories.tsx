"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Clock, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Story } from "@/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TravelStoriesProps {
  stories: Story[];
}

export default function TravelStories({ stories }: TravelStoriesProps) {
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
        <h2 className="heading-section">Travel Guides & Tips</h2>
        <p className="body-large max-w-4xl mx-auto">
          Discover expert advice, insider tips, and inspiring stories to help you plan your next adventure. From budget travel hacks to hidden gems around the world, our guides cover everything you need to travel smarter and experience more.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <Card className="border-[0.6px] border-border rounded-[24px] animate-scroll pb-4 flex flex-col gap-6 overflow-visible">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[520px] w-full -mt-6 rounded-[24px] overflow-hidden">
            <Image
              src={stories[0].image}
              alt={stories[0].title}
              fill
              className="object-cover rounded-[24px]"
            />
            <Badge className="absolute top-8 right-4 glassmorphic text-white gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium">
              <Clock className="w-4 h-4" />
              {stories[0].readTime}
            </Badge>
          </div>
          <div className="px-6 flex flex-col gap-4 -mt-2">
            <div className="flex flex-wrap gap-2">
              {stories[0].tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-mediu bg-black/5">
                  {tag}
                </Badge>
              ))}
            </div>
            <h3 className="heading-card text-xl lg:text-2xl">{stories[0].title}</h3>
            <p className="body-regular text-sm text-muted-foreground line-clamp-2">
              {stories[0].excerpt}
            </p>
            <div className="flex justify-end mt-auto">
              <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 border border-primary text-primary hover:bg-primary/10">
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>

        <div className="flex flex-col gap-6">
          {stories.slice(1, 3).map((post) => (
            <Card key={post.id} className="overflow-hidden border-[0.6px] border-border rounded-[24px] animate-scroll pb-4 flex flex-col gap-4">
              <div className="relative h-[180px] w-full rounded-t-[24px] -mt-6 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 right-4 glassmorphic text-white gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </Badge>
              </div>
              <div className="px-6 flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium bg-muted/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="heading-card text-base lg:text-lg">{post.title}</h3>
                <p className="body-regular text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex justify-end mt-auto">
                  <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 border border-primary text-primary hover:bg-primary/10">
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center animate-scroll">
        <Button variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary/10 gap-2">
          View all articles
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}