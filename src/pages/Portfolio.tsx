import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { CourseworkSection } from '../components/CourseworkSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { Footer } from '../components/Footer';
export function Portfolio() {
  return <div className="bg-cream min-h-screen w-full selection:bg-accent selection:text-white">
      <Navigation />

      <main>
        <Hero />
        <CourseworkSection />
        <ProjectsSection />
      </main>

      <Footer />
    </div>;
}