import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const projects = [
  {
    id: '001',
    title: 'Em desenvolvimento',
    tech: 'Em breve',
    desc: 'Estou preparando algo incrível para colocar aqui. Fique ligado!',
    color: 'from-violet-500/20 to-purple-700/5',
  },
  {
    id: '002',
    title: 'Em desenvolvimento',
    tech: 'Em breve',
    desc: 'Ainda em fase de ideação. Volte mais tarde para conferir as novidades.',
    color: 'from-cyan-500/20 to-blue-700/5',
  },
  {
    id: '003',
    title: 'Em desenvolvimento',
    tech: 'Em breve',
    desc: 'Buscando café para transformar em código... Aguarde.',
    color: 'from-emerald-500/20 to-green-700/5',
  }
];

export default function Projects() {
  const { t } = useLanguage();
  
  return (
    <section className="w-full px-6 lg:px-24 pb-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <span className="font-mono text-primary tracking-[0.3em] text-xs uppercase">{t('projects_protocol') || 'PORTFOLIO'}</span>
          <h2 className="mt-3 text-4xl md:text-6xl font-black tracking-tighter">
            {t('projects_title1') || 'Projetos em'} <span className="text-primary">{t('projects_title2') || 'Destaque'}</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">{t('projects_desc')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="h-full"
            >
              <Card className={`h-full flex flex-col justify-between bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 bg-gradient-to-br ${p.color} transition-colors cursor-pointer group`}>
                <CardHeader>
                  <div className="font-mono text-xs text-primary mb-2">PROJECT_{p.id}</div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{p.title}</CardTitle>
                  <CardDescription className="text-sm mt-3">{p.desc}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center pb-6">
                  <div className="flex gap-2 flex-wrap">
                    {p.tech.split(' · ').map(t => (
                      <Badge variant="secondary" key={t} className="font-mono text-[10px] bg-secondary/50">{t}</Badge>
                    ))}
                  </div>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}