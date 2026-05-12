import React from 'react';
import { motion } from 'framer-motion';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const skillGroups = [
  {
    category: 'Back-end',
    color: 'from-violet-500 to-purple-700',
    skills: [
      { name: 'Java', iconUrl: `${CDN}/java/java-original.svg` },
      { name: 'Spring Boot', iconUrl: `${CDN}/spring/spring-original.svg` },
      { name: 'Hibernate', iconUrl: `${CDN}/hibernate/hibernate-original.svg` },
      { name: 'MySQL', iconUrl: `${CDN}/mysql/mysql-original.svg` },
      { name: 'PHP', iconUrl: `${CDN}/php/php-original.svg` },
      { name: 'C#', iconUrl: `${CDN}/csharp/csharp-original.svg` },
    ],
  },
  {
    category: 'Front-end',
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'HTML5', iconUrl: `${CDN}/html5/html5-original.svg` },
      { name: 'CSS3', iconUrl: `${CDN}/css3/css3-original.svg` },
      { name: 'JavaScript', iconUrl: `${CDN}/javascript/javascript-original.svg` },
      { name: 'React.js', iconUrl: `${CDN}/react/react-original.svg` },
      { name: 'Next.js', iconUrl: `${CDN}/nextjs/nextjs-original.svg` },
      { name: 'Vue.js', iconUrl: `${CDN}/vuejs/vuejs-original.svg` },
    ],
  },
  // ... (adicione os outros grupos conforme necessário)
];

export default function Skills() {
  return (
    <section className="w-full px-6 lg:px-24 pb-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-primary tracking-[0.3em] text-xs uppercase">EXPLORANDO TECNOLOGIAS</span>
          <h2 className="mt-3 text-4xl md:text-6xl font-black tracking-tighter">
            Skills & <span className="text-gradient-violet">Expertise</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold font-mono tracking-tight">{group.category}</h3>
                <div className={`h-px flex-1 bg-gradient-to-r ${group.color} opacity-20`} />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {group.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass-panel group relative overflow-hidden rounded-2xl p-6 flex flex-col items-center justify-center gap-4 border border-border/40 hover:border-primary/50 transition-all cursor-pointer"
                  >
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="w-12 h-12 relative z-10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                      <img 
                        src={skill.iconUrl} 
                        alt={skill.name} 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors relative z-10 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}