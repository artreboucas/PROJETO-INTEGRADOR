# 🌱 Semeando Saberes — MVP Web

Sistema de Gestão de Feiras Agroecológicas Locais — Projeto Integrado III (ADS0038), UFCA.

## 👥 Equipe

- Arthur Rebouças do Carmo — 2025019454
- Sheila Matias Barroso — 2025014897
- Carlos Rodrigo Ferreira da Silva — 2025014304
- Vitoria Cavalcante Souza — 2025019481

## 🎯 Sobre o projeto

O Semeando Saberes conecta agricultores familiares a uma rede de apoio técnico e profissional, reunindo capacitações, consultorias, agenda e acompanhamento de treinamentos em uma única aplicação web.

O MVP foi desenvolvido a partir do protótipo de alta fidelidade do EP1 e das decisões arquiteturais do EP2. O público principal é formado por agricultores familiares e pequenos produtores agroecológicos. A Rede de Apoio representa universidades, institutos, organizações e especialistas que oferecem conhecimento e suporte.

### Principais funcionalidades do MVP

- Login com seleção de perfil;
- Cadastro e recuperação de senha simulados;
- Dashboard do produtor;
- Catálogo e busca de capacitações;
- Tela de detalhes e inscrição em capacitação;
- Consulta de treinamentos e progresso;
- Solicitação e acompanhamento de consultorias;
- Agenda de eventos;
- Perfil do produtor;
- Dashboard da Rede de Apoio;
- Criação de capacitações;
- Criação de consultorias;
- Validações básicas e feedback visual;
- Persistência local do perfil de sessão para demonstração.

## 🧰 Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| React | Construção da interface como SPA e componentização |
| TypeScript | Tipagem estática e maior segurança durante o desenvolvimento |
| Vite | Servidor de desenvolvimento e build da aplicação |
| React Router | Navegação entre as telas do MVP |
| Lucide React | Ícones da interface |
| CSS | Design responsivo, layout, estados e identidade visual |
| LocalStorage | Persistência simples da sessão e dados da demonstração |
| Git/GitHub | Versionamento e colaboração |
| Figma | Prototipação e referência visual do EP1 |

> **Nota de escopo:** o EP2 descreve uma arquitetura futura com API Python, banco relacional, JWT, armazenamento de arquivos e serviços de e-mail. Nesta versão acadêmica do MVP, as operações são simuladas no frontend para manter a aplicação executável sem infraestrutura externa. A separação modular foi mantida para facilitar a evolução posterior para a API prevista no EP2.

## 🗂️ Estrutura do projeto

```text
semeando-saberes-mvp/
├── public/
├── src/
│   ├── components/       # Espaço para componentes compartilhados
│   ├── data/             # Dados simulados do MVP
│   │   └── mockData.ts
│   ├── pages/            # Espaço reservado para evolução das páginas
│   ├── utils/
│   │   └── storage.ts    # Persistência local da sessão
│   ├── main.tsx          # Rotas, telas e componentes da aplicação
│   └── styles.css        # Identidade visual e responsividade
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## ▶️ Instalação e execução

### Pré-requisitos

- Node.js 18 ou superior;
- npm;
- Git.

### 1. Clonar o projeto

```bash
git clone https://github.com/artreboucas/PROJETO-INTEGRADOR.git
cd PROJETO-INTEGRADOR
```

Caso esta pasta seja copiada para outro repositório, entre no diretório do MVP antes de continuar.

### 2. Instalar dependências

```bash
npm install
```

### 3. Executar em desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local. Normalmente:

```text
http://localhost:5173/
```

### 4. Gerar versão de produção

```bash
npm run build
```

### 5. Visualizar o build

```bash
npm run preview
```

## 🌾 Como utilizar a aplicação

### Produtor

1. Na tela inicial, selecione **Produtor**.
2. Entre no sistema.
3. No dashboard, consulte seus indicadores e próximos eventos.
4. Acesse **Capacitações** para pesquisar os treinamentos disponíveis.
5. Abra uma capacitação e clique em **Inscrever-me na capacitação**.
6. Consulte **Meus Treinamentos** para acompanhar o progresso.
7. Em **Consultorias**, solicite apoio técnico e acompanhe as solicitações.
8. Em **Agenda**, visualize os próximos cursos e atendimentos.
9. Em **Perfil**, atualize seus dados.

### Rede de Apoio

1. Saia do sistema ou abra a aplicação novamente.
2. Na tela de login, selecione **Rede de Apoio**.
3. Acesse o dashboard da rede.
4. Use **Criar Capacitação** para publicar um treinamento.
5. Use **Criar Consultoria** para disponibilizar atendimento técnico.

### Recuperação de senha

O fluxo de recuperação está representado no MVP de forma demonstrativa: o usuário informa o e-mail, acessa a etapa de código e retorna à tela de login. O envio real de e-mail será integrado posteriormente ao serviço previsto na arquitetura do EP2.

## 🌎 Impacto social

A solução procura reduzir a dificuldade de acesso a conhecimento técnico enfrentada por agricultores familiares que participam de feiras agroecológicas. Ao centralizar capacitações, consultorias e compromissos, a plataforma pode facilitar a busca por orientação, apoiar a melhoria da produção e aproximar produtores de universidades, institutos e outras organizações.

A aplicação também pode contribuir para a inclusão digital no campo, fortalecer a economia local e gerar, em uma evolução futura, dados úteis para planejamento de ações de extensão e políticas públicas.

## 🏗️ Relação com o EP2

O EP2 definiu uma arquitetura Cliente-Servidor, com frontend React/TypeScript, Tailwind CSS, API Python e banco relacional. O MVP atual implementa a camada web e simula as operações que seriam realizadas pela API e pelo banco. Essa decisão reduz a infraestrutura necessária para a demonstração e mantém o foco do EP3 nas principais jornadas de usuário.

## 🔗 Entregáveis anteriores

- Protótipo Figma: https://www.figma.com/design/Ikzoi5h2P2utdvvWbDfaKz/ProjetoIntegrador3
- Protótipo navegável: https://fish-rem-46688004.figma.site/
- GitHub do projeto: https://github.com/artreboucas/PROJETO-INTEGRADOR

## 📌 Próximos passos

- Implementar API REST em Python/FastAPI;
- Integrar banco relacional;
- Implementar autenticação JWT e RBAC real;
- Persistir inscrições, consultorias e agenda no backend;
- Integrar envio de e-mails;
- Integrar armazenamento de arquivos e materiais técnicos;
- Criar painel administrativo com indicadores reais.
