import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  category: string;
}
const courses: Course[] = [{
  id: '1',
  code: 'CS 78',
  title: 'Deep Learning',
  description: 'Introduction to deep learning concepts, architectures, and applications in AI.',
  category: 'Computer Science'
}, {
  id: '2',
  code: 'MATH 201',
  title: 'Linear Algebra',
  description: 'Vectors, matrices, transformations, and their applications in computing.',
  category: 'Mathematics'
}, {
  id: '3',
  code: 'DES 150',
  title: 'Visual Communication',
  description: 'Principles of typography, layout, and visual hierarchy in design.',
  category: 'Design'
}, {
  id: '4',
  code: 'CS 301',
  title: 'Data Structures',
  description: 'Advanced data organization, algorithms, and complexity analysis.',
  category: 'Computer Science'
}, {
  id: '5',
  code: 'STAT 200',
  title: 'Probability & Statistics',
  description: 'Statistical reasoning, distributions, and data analysis methods.',
  category: 'Mathematics'
}, {
  id: '6',
  code: 'DES 280',
  title: 'Interaction Design',
  description: 'User-centered design, prototyping, and digital product design.',
  category: 'Design'
}];
export function CourseworkSection() {
  return <section id="coursework" className="py-24 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 border-t border-ink/10 pt-8">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
            
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink">
            Relevant Coursework
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {courses.map((course, index) => <CourseCard key={course.id} course={course} index={index} />)}
        </div>
      </div>
    </section>;
}
function CourseCard({
  course,
  index



}: {course: Course;index: number;}) {
  return <motion.article initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-50px'
  }} transition={{
    duration: 0.6,
    delay: index * 0.1,
    ease: 'easeOut'
  }} className="group relative flex flex-col h-full p-6 border border-transparent hover:border-accent/30 bg-transparent hover:bg-white dark:hover:bg-card dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:rounded-[8px] transition-all duration-500 ease-out">
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-xs text-accent font-medium tracking-wider">
          {course.code}
        </span>
        <span className="font-sans text-[10px] uppercase tracking-widest text-muted border border-border px-2 py-1 rounded-full">
          {course.category}
        </span>
      </div>

      <h3 className="font-serif text-2xl font-bold text-ink mb-3 group-hover:text-accent transition-colors duration-300">
        {course.title}
      </h3>

      <p className="font-sans text-sm text-muted leading-relaxed mb-6 flex-grow">
        {course.description}
      </p>

      <div className="mt-auto pt-4 border-t border-border/50 flex items-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
        <span className="font-sans text-xs font-medium tracking-wider mr-2">
          VIEW SYLLABUS
        </span>
        <ArrowUpRight className="w-3 h-3" />
      </div>
    </motion.article>;
}