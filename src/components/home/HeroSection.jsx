import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../lib/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full px-6 lg:px-24 pt-32 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-primary tracking-[0.3em] text-xs uppercase"
            >
              {t('hero_protocol')}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85]"
            >
              {t('hero_h1_line1')} <br />
              <span className="text-gradient-violet">{t('hero_h1_line2')}</span> <br />
              {t('hero_h1_line3')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-4 max-w-xl text-base text-muted-foreground leading-relaxed"
            >
              {t('hero_desc')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-3 mt-6"
            >
              <Link
                to="/contact"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-bold tracking-wide hover:bg-accent hover:text-background transition-all group"
              >
                {t('hero_cta_contact')}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/skills"
                className="flex items-center gap-2 glass-panel rounded-full px-6 py-3 text-sm font-bold tracking-wide hover:border-primary/40 transition-all"
              >
                <Layers size={14} />
                {t('hero_cta_skills')}
              </Link>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 opacity-30 blur-xl" />
              <div className="relative w-60 h-72 md:w-72 md:h-80 rounded-3xl overflow-hidden glass-panel border border-border/30">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </div>

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-panel rounded-full px-4 py-1.5 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  {t('hero_available')}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}