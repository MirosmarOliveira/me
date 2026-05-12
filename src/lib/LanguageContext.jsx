import React, { createContext, useContext, useState } from 'react';

const translations = {
  pt: {
    // Navbar
    nav_home: 'Home',
    nav_skills: 'Skills',
    nav_projects: 'Projetos',
    nav_contact: 'Contato',
    nav_cta: 'INITIALIZE CONTACT',

    // Hero
    hero_protocol: 'SEJA BEM-VINDO // FULL-STACK ENGINEER',
    hero_h1_line1: 'ENGENHARIA',
    hero_h1_line2: 'DE SOFTWARE',
    hero_h1_line3: '& SOLUÇÕES WEB',
    hero_desc: 'Graduado em Análise e Desenvolvimento de Sistemas e apaixonado por tecnologia. Gosto de descobrir como as coisas funcionam e de inventar soluções para problemas reais. Minha maior habilidade é a criação de sistemas web e APIs RESTful robustas utilizando Java e Spring Boot.',
    hero_cta_contact: 'INICIAR CONTATO',
    hero_cta_skills: 'VER SKILLS',
    hero_available: 'DISPONÍVEL',

    // Skills
    skills_protocol: 'System Protocol 02 // Tech Stack',
    skills_title1: 'NEURAL',
    skills_title2: 'STACK',
    skills_desc: 'Tecnologias que compõem o meu arsenal de desenvolvimento — cada ferramenta selecionada com precisão cirúrgica.',

    // Projects
    projects_protocol: 'My Place // Work Laboratory',
    projects_title1: 'WORK',
    projects_title2: 'LABORATORY',
    projects_desc: 'Projetos construídos com precisão de engenharia — cada um um experimento em performance e experiência.',

    // Contact
    contact_protocol: 'System Protocol 04 // Communication Channel',
    contact_title1: 'INITIALIZE',
    contact_title2: 'CONTACT',
    contact_desc: 'Ficou interessado? Quer tirar alguma dúvida ou discutir uma oportunidade? Se você procura um desenvolvedor apaixonado por tecnologia e focado em resolver problemas, vamos conversar. Estabeleça uma conexão — responderei em menos de 24 horas!',
    contact_label_name: '> IDENTIFICADOR',
    contact_label_email: '> ENDEREÇO DE RETORNO',
    contact_label_msg: '> PAYLOAD DA MENSAGEM',
    contact_placeholder_name: 'Mirosmar Oliveira',
    contact_placeholder_email: 'contatomirosmaroliveira@hotmail.com',
    contact_placeholder_msg: 'Descreva como posso te ajudar ou qual é o seu projeto...',
    contact_submit: 'TRANSMITIR MENSAGEM',
    contact_sent_title: '> MESSAGE_TRANSMITTED',
    contact_sent_desc: 'Mensagem recebida. Conexão estabelecida com sucesso.',
    contact_status_title: '> SYSTEM_STATUS',
    contact_status: 'STATUS',
    contact_status_val: 'DISPONÍVEL PARA PROJETOS',
    contact_location: 'LOCALIZAÇÃO',
    contact_location_val: 'Brasil, UTC-3',
    contact_response: 'RESPOSTA',
    contact_response_val: '< 24 HORAS',
    contact_lang: 'IDIOMAS',
    contact_lang_val: 'PT-BR · EN',
    contact_channels: '> CANAIS DE COMUNICAÇÃO',
  },
  en: {
    nav_home: 'Home',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    nav_cta: 'INITIALIZE CONTACT',

    hero_protocol: 'WELCOME // FULL-STACK ENGINEER',
    hero_h1_line1: 'SOFTWARE',
    hero_h1_line2: 'ENGINEERING',
    hero_h1_line3: '& WEB SOLUTIONS',
    hero_desc: 'Graduated in Systems Analysis and Development and passionate about technology. I love discovering how things work and inventing solutions for real-world problems. My core expertise is building robust web systems and RESTful APIs using Java and Spring Boot.',
    hero_cta_contact: 'INITIALIZE CONTACT',
    hero_cta_skills: 'VIEW SKILLS',
    hero_available: 'AVAILABLE',

    skills_protocol: 'System Protocol 02 // Tech Stack',
    skills_title1: 'NEURAL',
    skills_title2: 'STACK',
    skills_desc: 'Technologies that make up my development arsenal — each tool selected with surgical precision.',

    projects_protocol: 'My Place // Work Laboratory',
    projects_title1: 'WORK',
    projects_title2: 'LABORATORY',
    projects_desc: 'Projects built with engineering precision — each one an experiment in performance and experience.',

    contact_protocol: 'My Place // Communication Channel',
    contact_title1: 'INITIALIZE',
    contact_title2: 'CONTACT',
    contact_desc: 'Interested? Have a question or want to discuss an opportunity? If you\'re looking for a passionate developer focused on solving problems, let\'s talk. Establish a connection — I\'ll respond in under 24 hours!',
    contact_label_name: '> IDENTIFIER',
    contact_label_email: '> RETURN ADDRESS',
    contact_label_msg: '> MESSAGE PAYLOAD',
    contact_placeholder_name: 'Your name or company',
    contact_placeholder_email: 'contatomirosmaroliveira@hotmail.com',
    contact_placeholder_msg: 'Describe how I can help you or what your project is...',
    contact_submit: 'TRANSMIT MESSAGE',
    contact_sent_title: '> MESSAGE_TRANSMITTED',
    contact_sent_desc: 'Message received. Connection established successfully.',
    contact_status_title: '> SYSTEM_STATUS',
    contact_status: 'STATUS',
    contact_status_val: 'AVAILABLE FOR PROJECTS',
    contact_location: 'LOCATION',
    contact_location_val: 'Brazil, UTC-3',
    contact_response: 'RESPONSE',
    contact_response_val: '< 24 HOURS',
    contact_lang: 'LANGUAGES',
    contact_lang_val: 'PT-BR · EN',
    contact_channels: '> COMMUNICATION CHANNELS',
  },
};

const LanguageContext = createContext({ lang: 'pt', t: () => '', toggleLang: () => { } });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'pt');

  const toggleLang = () => {
    const next = lang === 'pt' ? 'en' : 'pt';
    setLang(next);
    localStorage.setItem('lang', next);
  };

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);