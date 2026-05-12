import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Terminal, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../lib/LanguageContext';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const { t } = useLanguage();
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('sent');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="w-full px-6 lg:px-24 pb-32">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <span className="font-mono text-primary tracking-[0.3em] text-xs uppercase">
            {t('contact_protocol')}
          </span>
          <h2 className="mt-3 text-4xl md:text-6xl font-black tracking-tighter">
            {t('contact_title1')}{' '}
            <span className="text-gradient-violet">{t('contact_title2')}</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">{t('contact_desc')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {status === 'sent' ? (
              <div className="glass-panel rounded-3xl p-10 flex flex-col items-center justify-center gap-4 h-full min-h-[300px]">
                <Terminal className="text-primary" size={40} />
                <p className="font-mono text-primary text-sm tracking-widest">{t('contact_sent_title')}</p>
                <p className="text-muted-foreground text-sm text-center">{t('contact_sent_desc')}</p>
              </div>
            ) : status === 'error' ? (
              <div className="glass-panel rounded-3xl p-10 flex flex-col items-center justify-center gap-4 h-full min-h-[300px]">
                <AlertCircle className="text-destructive" size={40} />
                <p className="font-mono text-destructive text-sm tracking-widest">ERRO AO ENVIAR</p>
                <p className="text-muted-foreground text-sm text-center">Não foi possível enviar a mensagem. Tente novamente ou entre em contato diretamente pelo e-mail.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                    {t('contact_label_name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t('contact_placeholder_name')}
                    className="glass-panel rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 bg-transparent outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                    {t('contact_label_email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t('contact_placeholder_email')}
                    className="glass-panel rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 bg-transparent outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                    {t('contact_label_msg')}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder={t('contact_placeholder_msg')}
                    className="glass-panel rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 bg-transparent outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:bg-accent hover:text-background transition-all duration-300 mt-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      <span>ENVIANDO...</span>
                    </>
                  ) : (
                    <>
                      <span>{t('contact_submit')}</span>
                      <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-panel rounded-3xl p-8">
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-5">
                {t('contact_status_title')}
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { label: t('contact_status'), value: t('contact_status_val'), color: 'text-emerald-400' },
                  { label: t('contact_location'), value: t('contact_location_val'), color: 'text-foreground' },
                  { label: t('contact_response'), value: t('contact_response_val'), color: 'text-foreground' },
                  { label: t('contact_lang'), value: t('contact_lang_val'), color: 'text-foreground' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center border-b border-border/40 pb-3 last:border-0 last:pb-0">
                    <span className="font-mono text-xs text-muted-foreground">{item.label}</span>
                    <span className={`font-mono text-xs font-bold ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-8">
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-5">
                {t('contact_channels')}
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: Github, label: 'GitHub', sub: 'github.com/MirosmarOliveira', href: 'https://github.com/MirosmarOliveira', external: true },
                  { icon: Linkedin, label: 'LinkedIn', sub: 'in/mirosmar-oliveira', href: 'https://www.linkedin.com/in/mirosmar-oliveira-287b9a1b0/', external: true },
                  { icon: Mail, label: 'E-mail', sub: 'contatomirosmaroliveira@hotmail.com', href: 'mailto:contatomirosmaroliveira@hotmail.com', external: false },
                ].map(({ icon: Icon, label, sub, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground font-mono">{sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}