import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const {
    scrollY
  } = useScroll();
  // Add background blur when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
  };
  const navLinks = [{
    name: 'WORK',
    href: '#projects'
  }, {
    name: 'COURSES',
    href: '#coursework'
  }, {
    name: 'ABOUT',
    href: '#hero'
  }, {
    name: 'CONTACT',
    href: '#footer'
  }];
  return <motion.nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-cream/80 backdrop-blur-md border-border py-4' : 'bg-transparent border-transparent py-6'}`} initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1]
  }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="group">

        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => <a key={link.name} href={link.href} className="relative text-xs font-sans font-medium tracking-[0.2em] text-ink hover:text-accent transition-colors duration-300 group py-2">
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </a>)}
          <button onClick={toggleTheme} aria-label="Toggle theme" className="text-ink hover:text-accent transition-colors duration-300 p-1">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile: theme toggle + menu */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="text-ink hover:text-accent transition-colors duration-300 p-1">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <span className="text-xs font-sans font-medium tracking-widest text-ink">
            MENU
          </span>
        </div>
      </div>
    </motion.nav>;
}