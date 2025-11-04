"use client";

import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SearchForm() {
  return (
    <section className="container mx-auto px-4 lg:px-16 py-8">
      <Card className="p-8 shadow-box border-0 rounded-[32px]">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-end">
          <div className="flex-1">
            <h2 className="text-xl font-normal mb-2">
              find your <br />
              <span className="font-semibold">DESTINATION</span>
            </h2>
          </div>

          <div className="flex-1 space-y-1 w-full">
            <label className="label-regular text-base">Destination</label>
            <div className="flex items-center justify-between gap-4 border-b-0 pb-2 cursor-pointer">
              <span className="text-sm text-muted flex-1">Enter City Name</span>
              <ChevronDown className="w-5 h-5 text-muted flex-shrink-0" />
            </div>
          </div>

          <div className="flex-1 space-y-1 w-full">
            <label className="label-regular text-base">Date</label>
            <div className="flex items-center justify-between gap-4 border-b-0 pb-2 cursor-pointer">
              <span className="text-sm text-muted flex-1">From - To</span>
              <ChevronDown className="w-5 h-5 text-muted flex-shrink-0" />
            </div>
          </div>

          <div className="flex-1 space-y-1 w-full">
            <label className="label-regular text-base">Guest</label>
            <div className="flex items-center justify-between gap-4 border-b-0 pb-2 cursor-pointer">
              <span className="text-sm text-muted flex-1">No. of Guest</span>
              <ChevronDown className="w-5 h-5 text-muted flex-shrink-0" />
            </div>
          </div>

          <Button className="rounded-full bg-primary px-8 hover:bg-primary/90 gap-2 md:text-base">
            <Search className="w-4 h-4" />
            Search
          </Button>
        </div>
      </Card>
    </section>
  );
}