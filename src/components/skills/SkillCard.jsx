import React from 'react';
import { motion } from 'framer-motion';

export default function SkillCard({ name, iconUrl, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.08, y: -4 }}
      className="glass-panel glass-panel-hover rounded-2xl p-4 flex flex-col items-center gap-3 cursor-default transition-all duration-300 group"
    >
      <img
        src={iconUrl}
        alt={name}
        className="w-10 h-10 object-contain group-hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.6)] transition-all duration-300"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div className="hidden w-10 h-10 items-center justify-center rounded-lg bg-primary/20 text-primary font-mono font-bold text-sm">
        {name.slice(0, 2).toUpperCase()}
      </div>
      <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
        {name}
      </span>
    </motion.div>
  );
}