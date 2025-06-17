"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Objectives from "@/components/landing/Objectives";
import Sectors from "@/components/landing/Sectors";
import Agenda from "@/components/landing/Agenda";
import Speakers from "@/components/landing/Speakers";
import Registration from "@/components/landing/Registration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Objectives />
      <Sectors />
      <Agenda />
      <Speakers />
      <Registration />
      <Contact />
      <Footer />
    </div>
  );
}
