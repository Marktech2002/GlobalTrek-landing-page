import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import SearchForm from "@/components/sections/SearchForm";
import WhoWeAre from "@/components/sections/WhoWeAre";
import OurCommitment from "@/components/sections/OurCommitment";
import TopDestinations from "@/components/sections/TopDestinations";
import ExclusiveDeals from "@/components/sections/ExclusiveDeals";
import TravelStories from "@/components/sections/TravelStories";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import {
  mockDestinations,
  mockDeals,
  mockStories,
  mockTestimonials,
  mockFAQs,
  mockStatistics,
  mockCommitments,
} from "@/lib/mockData";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SearchForm />
        <WhoWeAre statistics={mockStatistics} />
        <OurCommitment commitments={mockCommitments} />
        <TopDestinations destinations={mockDestinations} />
        <ExclusiveDeals deals={mockDeals} />
        <TravelStories stories={mockStories} />
        <Testimonials testimonials={mockTestimonials} />
        <FAQ faqs={mockFAQs} />
        <Footer />
      </main>
    </div>
  );
}