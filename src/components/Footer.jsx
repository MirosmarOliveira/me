import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full border-t border-border/30 mt-auto">
      <div className="glass-panel w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-mono font-bold tracking-tighter text-foreground">Mirosmar Oliveira</span>
            </div>
            <p className="font-mono text-xs text-muted-foreground">
              &copy; {year} — Todos os direitos reservados
            </p>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex gap-6">
            {[
              { label: 'Home', to: '/' },
              { label: 'Skills', to: '/skills' },
              { label: 'Projetos', to: '/projects' },
              { label: 'Contato', to: '/contact' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/MirosmarOliveira', label: 'GitHub', target: '_blank' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/mirosmar-oliveira-287b9a1b0/', label: 'LinkedIn', target: '_blank' },
              { icon: Mail, href: 'mailto:contatomirosmaroliveira@hotmail.com', label: 'Email', target: '' },
            ].map(({ icon: Icon, href, label, target }) => (
              <a
                key={label}
                href={href}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom stripe */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <p className="text-center font-mono text-[10px] text-muted-foreground/40 py-3">
          BUILT WITH REACT · FRAMER MOTION · TAILWIND CSS · NEURAL BRUTALISM v1.0
        </p>
      </div>
    </footer>
  );
}