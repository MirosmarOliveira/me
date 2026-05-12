import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '../lib/LanguageContext';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projetos', href: '/projects' },
  { label: 'Contato', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-5 inset-x-0 mx-auto z-50 w-[94%] max-w-6xl"
    >
      <div className={`glass-panel rounded-2xl px-6 md:px-8 py-3.5 flex items-center justify-between transition-shadow duration-500 ${scrolled ? 'shadow-2xl shadow-black/40' : 'shadow-lg shadow-black/20'}`}>

        {/* Logo */}
        <div className="flex-1">
          <Link to="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
            <span className="font-mono font-bold tracking-tighter text-lg text-foreground group-hover:text-primary transition-colors">
              Mirosmar Oliveira
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.href}>
                <Button
                  asChild
                  variant={isActive ? 'secondary' : 'ghost'}
                  size="sm"
                  className={isActive ? 'font-bold' : 'text-muted-foreground'}
                >
                  <Link to={link.href}>
                    {link.label}
                  </Link>
                </Button>
              </li>
            );
          })}
        </ul>

        {/* Right Side */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-2 xl:gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLang}
            title="Mudar Idioma"
            className="shrink-0"
          >
            <Globe size={16} />
            <span className="sr-only">Toggle language</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild size="sm" className="rounded-full font-bold tracking-wider text-xs px-4 xl:px-5 shrink-0">
            <Link to="/contact">
              {t('nav_cta') || 'FALE COMIGO'}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLang}
          >
            <Globe size={16} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-2xl mt-2 px-6 py-6 lg:hidden"
        >
          <ul className="flex flex-col gap-5 text-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Button
                  key={link.href}
                  asChild
                  variant={isActive ? 'secondary' : 'ghost'}
                  className={`justify-start ${isActive ? 'font-bold' : 'text-muted-foreground'}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <Link to={link.href}>
                    {link.label}
                  </Link>
                </Button>
              );
            })}
            <Button asChild className="mt-4 rounded-full font-bold">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
              >
                {t('nav_cta') || 'FALE COMIGO'}
              </Link>
            </Button>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}