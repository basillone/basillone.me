import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  size: 'large' | 'normal';
}
const projects: Project[] = [{
  id: '1',
  number: '01',
  title: 'Notaker',
  description: 'A collaborative note-taking app with a focus on simplicity and speed.',
  tags: ['React', 'Firebase', 'UX/UI'],
  gradient: 'from-[#E0C3FC] to-[#8EC5FC]',
  size: 'large'
}, {
  id: '2',
  number: '02',
  title: 'HMM for Speech',
  description: 'Hidden Markov Model implementation for speech pattern recognition.',
  tags: ['Java', 'Data Science', 'Machine Learning'],
  gradient: 'from-[#fad0c4] to-[#ffd1ff]',
  size: 'normal'
}, {
  id: '3',
  number: '03',
  title: 'GPU Accelerated Handwriting Recognition',
  description: 'LSTM RNN implementation for handwriting recognition, optimized with PyTorch for real-time performance.',
  tags: ['PyTorch', 'GPU', 'Deep Learning'],
  gradient: 'from-[#cfd9df] to-[#e2ebf0]',
  size: 'normal'
}];
export function ProjectsSection() {
  return <section id="projects" className="py-24 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 border-t border-ink/10 pt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-ink">
              Projects
            </h2>
          </div>
          
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} className={project.size === 'large' ? 'md:col-span-2' : ''} />)}
        </div>
      </div>
    </section>;
}
function ProjectCard({
  project,
  className = ''



}: {project: Project;className?: string;}) {
  return <motion.article initial={{
    opacity: 0,
    y: 40
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-100px'
  }} transition={{
    duration: 0.8,
    ease: 'easeOut'
  }} className={`group cursor-pointer ${className}`}>
      {/* Image Area */}
      <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/9] mb-6 bg-card">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 transition-transform duration-700 ease-out group-hover:scale-105`} />
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <ArrowUpRight className="w-6 h-6 text-ink" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
        <span className="font-mono text-sm text-accent font-bold pt-1">
          {project.number}
        </span>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
            <h3 className="font-serif text-3xl font-bold text-ink group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => <span key={tag} className="font-sans text-[10px] uppercase tracking-wider text-ink/60 border border-border px-2 py-0.5 rounded-full">
                  {tag}
                </span>)}
            </div>
          </div>

          <p className="font-sans text-muted leading-relaxed max-w-2xl group-hover:text-ink transition-colors duration-300">
            {project.description}
          </p>
        </div>
      </div>
    </motion.article>;
}