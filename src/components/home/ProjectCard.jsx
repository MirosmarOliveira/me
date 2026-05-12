import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ index, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-panel glass-panel-hover aspect-video rounded-3xl p-7 md:p-8 group cursor-pointer transition-all duration-500"
    >
      <div className="h-full flex flex-col justify-between">
        <span className="font-mono text-xs text-muted-foreground">
          PROJECT_00{index + 1}
        </span>
        <div>
          <p className="text-xs text-muted-foreground font-mono mb-1">
            {subtitle}
          </p>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}