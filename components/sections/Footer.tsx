"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="container mx-auto px-4 lg:px-16 py-16">
      <div className="border border-primary/20 rounded-[32px] p-8 lg:p-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-8">
            <h3 className="text-5xl font-normal">GlobeTrek</h3>
            <div className="space-y-4">
              <h4 className="text-xl font-normal">Stay Updated with the Latest Travel Deals</h4>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="border-b border-border pb-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="ghost"
                  className="text-muted hover:text-foreground py-2 px-4 h-auto border"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-xl text-muted hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/destination" className="text-xl text-muted hover:text-primary transition-colors">
                Destination
              </Link>
              <Link href="/deals" className="text-xl text-muted hover:text-primary transition-colors">
                Special Deals
              </Link>
              <Link href="/about" className="text-xl text-muted hover:text-primary transition-colors">
                About us
              </Link>
              <Link href="/contact" className="text-xl text-muted hover:text-primary transition-colors">
                Contact us
              </Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Policies</h4>
            <nav className="flex flex-col gap-4">
              <Link href="/terms" className="text-xl text-muted hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-xl text-muted hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-xl text-muted hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </nav>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </Link>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-muted">Discover our app</h4>
              <div className="flex gap-4">
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-xs text-left">
                      <div className="text-[8px]">GET IT ON</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </div>
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                    <div className="text-xs text-left">
                      <div className="text-[8px]">Download on the</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}