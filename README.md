Site RSA Aviamentos

Visão Geral do Projeto

Este é o website institucional da RSA Aviamentos, uma empresa especializada na venda de linhas e lãs. O objetivo principal do site é apresentar a empresa de forma profissional e objetiva, funcionando como um catálogo digital dos principais produtos. Ele foi desenvolvido com foco em uma experiência de usuário moderna e interativa, utilizando as mais recentes tecnologias web.

Funcionalidades Principais

Catálogo de Produtos: Exibição dos principais produtos (linhas e lãs) com imagens e informações.

Redirecionamento Inteligente: Ao clicar em um produto no catálogo, o usuário é redirecionado diretamente para a página de anúncio correspondente no Mercado Livre ou Shopee.

Atendimento Facilitado:

Chat WhatsApp Flutuante: Um botão de WhatsApp fixo no canto inferior direito da tela para contato rápido.

Página de Contato: Formulário de contato e informações de email/telefone.

Experiência Dinâmica: Um "rolo de lã" interativo que reage a eventos como scroll, cliques e mudança de página, adicionando um toque único à navegação.

Design Moderno: Paleta de cores baseada em tons de salmão e laranja, proporcionando uma identidade visual vibrante e acolhedora.

Tecnologias Utilizadas

Framework: Next.js 14 (React)

Estilização: Tailwind CSS (ou CSS Modules, conforme implementação)

Hospedagem: Vercel

Controle de Versão: Git e GitHub

Paleta de Cores
O projeto utiliza uma paleta de cores que evoca calor e criatividade:
Salmão: #FF6B4A
Laranja: #FF8C42
Laranja Claro: #FFB347

Setup Rápido
Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
Node.js (versão 18 ou superior)
npm (gerenciador de pacotes do Node.js)

Git
Instalação

Clone o repositório:
git clone https://github.com/bielcolares/site-rsaaviamentos.git

Navegue até o diretório do projeto:
cd site-rsaaviamentos

Instale as dependências:
npm install

Variáveis de Ambiente
Crie um arquivo .env.local na raiz do projeto (na mesma pasta deste README.md) e adicione as seguintes variáveis. Você pode copiar o conteúdo de um arquivo .env.example se ele existir.
# URLs para redirecionamento de produtos
NEXT_PUBLIC_MERCADO_LIVRE_URL=https://www.mercadolivre.com.br/seller/SEU_ID_LOJA_MERCADO_LIVRE<br/>
NEXT_PUBLIC_SHOPEE_URL=https://shopee.com.br/SEU_USUARIO_SHOPEE
# Informações de contato
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_EMAIL_CONTATO=contato@rsaaviamentos.com.br
# Chave para serviço de envio de e-mail (se houver formulário de contato integrado)
EMAIL_SERVICE_API_KEY=SUA_CHAVE_API_DE_EMAIL

Como Rodar Localmente
Após a instalação das dependências e configuração das variáveis de ambiente, inicie o servidor de desenvolvimento:
npm run dev
Abra seu navegador e acesse: http://localhost:3000
O site será carregado e as alterações no código serão refletidas automaticamente.

Estrutura de Pastas
A estrutura do projeto está organizada da seguinte forma:

site-rsaaviamentos/
├── public/
│   ├── images/             # Imagens estáticas do site (algodao.png, fachada.png, logo-completo.png, etc.)
│   └── ...                 # Outros arquivos públicos (favicons, etc.)
├── src/
│   ├── app/                # Rotas e layout principal do Next.js App Router
│   │   ├── favicon.ico
│   │   ├── globals.css     # Estilos globais
│   │   ├── layout.js       # Layout principal da aplicação
│   │   └── page.js         # Página inicial (Home)
│   ├── app/atendimento/    # Página de atendimento/contato
│   │   └── page.js
│   ├── app/catalogo/       # Página do catálogo de produtos
│   │   └── page.js
│   └── components/         # Componentes React reutilizáveis
│       ├── Catalogo/       # Componente de exibição do catálogo
│       ├── Catalogo.jsx
│       ├── Conceito/       # Componente de seção "Conceito" ou "Sobre"
│       ├── Conceito.jsx
│       ├── Footer/         # Componente de rodapé
│       ├── Footer.jsx
│       ├── Header/         # Componente de cabeçalho e navegação
│       ├── Header.jsx
│       ├── Hero/           # Componente da seção Hero (com rolo de lã dinâmico)
│       ├── Hero.jsx
│       ├── WhatsApp/       # Componente do botão flutuante do WhatsApp
│       └── WhatsApp.jsx
├── .gitignore              # Arquivos e pastas a serem ignorados pelo Git
├── eslint.config.mjs       # Configuração do ESLint para linting de código
├── jsconfig.json           # Configuração do JavaScript para o VS Code
├── next.config.mjs         # Configuração do Next.js
├── package-lock.json       # Bloqueio de versões das dependências
├── package.json            # Metadados do projeto e scripts
└── postcss.config.mjs      # Configuração do PostCSS

Deploy
Este projeto está configurado para deploy contínuo na Vercel. Qualquer push para a branch main no GitHub irá automaticamente acionar um novo deploy na plataforma Vercel.
Para mais detalhes sobre o deploy no Vercel, consulte a documentação oficial do Next.js: Next.js deployment documentation.

Contato
Para dúvidas, sugestões ou suporte técnico, entre em contato com a equipe de desenvolvimento:
Email: contato@rsaaviamentos.com.br