"use client";

import { HtmlLangSync } from "@/components/zainara/use-t";
import { Header } from "@/components/zainara/header";
import { Hero } from "@/components/zainara/hero";
import { About } from "@/components/zainara/about";
import { Services } from "@/components/zainara/services";
import { Gallery } from "@/components/zainara/gallery";
import { Location } from "@/components/zainara/location";
import { Booking } from "@/components/zainara/booking";
import { FAQ } from "@/components/zainara/faq";
import { Footer } from "@/components/zainara/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HtmlLangSync />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Location />
        <Booking />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
