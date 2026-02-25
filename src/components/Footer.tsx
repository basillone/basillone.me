import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer id="footer" className="bg-cream px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-[1px] bg-ink/10 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Left Column */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
                Let's build something
                <br />
                meaningful together.
              </h2>
              <p className="font-sans text-muted text-sm leading-relaxed max-w-md">
                Currently open to new opportunities and collaborations. Feel
                free to reach out if you'd like to discuss a project or just say
                hello.
              </p>
            </div>

            <div className="mt-12 md:mt-0">
              <span className="font-serif italic text-xl font-bold text-ink">
                A. Chen
              </span>
              
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="flex flex-col md:items-end justify-between">
            <nav className="flex flex-col space-y-4 md:text-right">
              <FooterLink href="mailto:hello@example.com" label="Email" icon={<Mail className="w-4 h-4" />} />
              <FooterLink href="#" label="GitHub" icon={<Github className="w-4 h-4" />} />
              <FooterLink href="#" label="LinkedIn" icon={<Linkedin className="w-4 h-4" />} />
              <FooterLink href="#" label="Twitter" icon={<Twitter className="w-4 h-4" />} />
            </nav>

            
          </div>
        </div>
      </div>
    </footer>;
}
function FooterLink({
  href,
  label,
  icon




}: {href: string;label: string;icon: React.ReactNode;}) {
  return <a href={href} className="group flex items-center md:justify-end space-x-3 text-ink hover:text-accent transition-colors duration-300">
      <span className="font-sans text-sm font-medium tracking-wide relative">
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
      </span>
      <span className="text-muted group-hover:text-accent transition-colors duration-300">
        {icon}
      </span>
    </a>;
}