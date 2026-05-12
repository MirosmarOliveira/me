# Mirosmar Oliveira - Engenheiro Full-Stack | Portfolio Pessoal

Bem-vindo ao repositório do meu portfólio pessoal. Este projeto foi desenvolvido com foco em alta performance, usabilidade e uma identidade visual marcante ("Neural Brutalism"). O objetivo é apresentar minhas habilidades, projetos e formas de contato através de uma experiência imersiva e interativa.

## 🚀 Tecnologias e Ecossistema

Este projeto foi construído utilizando tecnologias modernas do ecossistema front-end para garantir escalabilidade e renderização fluida:

*   **React 19 + Vite**: O núcleo da aplicação, garantindo um ambiente de desenvolvimento rápido e um build de produção otimizado.
*   **Tailwind CSS (v3)**: Framework utilitário utilizado para a construção e estilização de todo o design system.
*   **Shadcn UI**: Componentes de interface modulares, acessíveis e customizáveis (como Botões, Dropdowns, Cards, etc).
*   **Framer Motion**: Biblioteca responsável por todas as animações dinâmicas, transições de página e micro-interações ("hover effects").
*   **Next Themes**: Gerenciamento automático e persistente do estado de modo Escuro/Claro (Dark/Light mode).
*   **React Router DOM**: Roteamento client-side para navegação suave entre as seções (Home, Skills, Projetos, Contato) sem recarregamento da página.
*   **Lucide React**: Biblioteca de ícones vetoriais modernos e leves.

## 📁 Estrutura do Projeto e Arquitetura

A base de código foi estruturada de forma clara para facilitar a manutenção e escalabilidade. Abaixo está a visão geral das responsabilidades de cada diretório:

```text
src/
├── components/          # Componentes globais da aplicação
│   ├── ui/              # Componentes de UI padronizados e reutilizáveis baseados no Shadcn UI (Alert, Button, Card, Dropdown, etc).
│   ├── Layout.jsx       # Wrapper principal que estrutura todas as páginas (engloba Navbar e Footer).
│   ├── Navbar.jsx       # Navegação principal, com toggle de Idiomas (PT/EN) e toggle de Tema (Dark/Light).
│   ├── Footer.jsx       # Rodapé padrão da aplicação.
│   └── NeuralBackground.jsx # Componente visual de background interativo (canvas) que percorre toda a aplicação.
│
├── pages/               # Páginas roteadas da aplicação
│   ├── Home.jsx         # Página inicial com o Hero Section e apresentação principal.
│   ├── Skills.jsx       # Renderização dinâmica do stack tecnológico.
│   ├── Projects.jsx     # Showcase de projetos, construído com Cards Shadcn e animações do Framer Motion.
│   └── Contact.jsx      # Formulário interativo para contato direto, com validação e feedback visual.
│
├── lib/                 # Utilitários e configurações lógicas
│   ├── LanguageContext.jsx # Provedor de Contexto para a Internacionalização (Tradução Inglês/Português) persistida no localStorage.
│   └── utils.js         # Funções utilitárias auxiliares, como o merge condicional de classes (clsx + tailwind-merge).
│
├── hooks/               # Custom React Hooks
│   └── use-mobile.jsx   # Hook para detecção inteligente de quebra de layout mobile/desktop.
│
├── App.jsx              # Ponto central de roteamento e injeção de provedores (Theme, Language).
└── main.jsx             # Ponto de entrada do React que monta a aplicação no DOM.
```

## ✨ Funcionalidades Principais

*   **Identidade Visual e Micro-Interações:** Utilização extensiva de glassmorphism (efeito vidro) e backgrounds com malhas neurais interativas utilizando renderização otimizada em Canvas.
*   **Modo Escuro / Claro Dinâmico:** Alternância de tema gerenciada através do botão interativo no cabeçalho. As preferências do usuário são salvas de forma nativa no navegador via `localStorage`.
*   **Internacionalização Embutida (i18n):** Todo o conteúdo de texto da plataforma (Hero, Skills, Projetos e Contato) altera dinamicamente entre Português e Inglês com apenas um clique na Navbar.
*   **Navegação Responsiva:** Estrutura "Mobile First", onde o menu de desktop comprime-se inteligentemente em um "Menu Hambúrguer" acessível em tablets e smartphones.

## 🛠️ Como Executar o Projeto Localmente

Siga os passos abaixo para testar e rodar o código na sua máquina:

1. **Clone o repositório:**
   ```bash
   git clone [url-do-repositorio]
   cd [nome-do-repositorio]
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o Servidor de Desenvolvimento:**
   ```bash
   npm run dev
   ```
   > A aplicação estará disponível em `http://localhost:5173`. Modificações no código refletirão automaticamente (Hot Module Replacement - HMR).

4. **Gerar Build de Produção:**
   ```bash
   npm run build
   ```
   > Os arquivos finais super otimizados estarão disponíveis dentro da pasta `dist/`.

---

*Desenvolvido com precisão e lógica de Engenharia de Interfaces.*
