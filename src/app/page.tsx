'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Objectives from '@/components/Objectives';
import Sectors from '@/components/Sectors';
import Agenda from '@/components/Agenda';
import Speakers from '@/components/Speakers';
import Registration from '@/components/Registration';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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