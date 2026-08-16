# 🌱 Sistema de Gestão de Feiras Agroecológicas Locais

> - UNIVERSIDADE FEDERAL DO CARIRI - UFCA
> - Curso de Análise e Desenvolvimento de Sistemas (ADS) 
> - Projeto Integrado III (ADS0038)
> - Prof. Dr. Luís Fabrício de Freitas Souza

## 👥 Equipe

| Nome | Matrícula |
|---|---|
| Arthur Rebouças do Carmo | 2025019454 |
| Sheila Matias Barroso | 2025014897 |
| Carlos Rodrigo Ferreira da Silva | 2025014304 |
| Vitoria Cavalcante Souza | 2025019481 |

---
# HISTÓRICO DE ENTREGÁVEIS:

## 🎨 [EP1] Protótipo Navegável (Figma)

🔗 **[Acessar protótipo no Figma](https://www.figma.com/design/Ikzoi5h2P2utdvvWbDfaKz/ProjetoIntegrador3?node-id=0-1&t=vYjMJ6uE4YkdTvjr-1)**

📸 **[Telas prototipadas](https://github.com/artreboucas/PROJETO-INTEGRADOR/blob/main/projeto-integrado-3/README_PI3.md#-telas-do-prot%C3%B3tipo)** 

## 🖥️ [EP2] Modelo Arquitetural do MVP Web

🔗 **[Acessar ao relatório](https://drive.google.com/drive/folders/1UF5wMLXgTJ-15nbzdrMTHb3-gcTI3dZY?usp=sharing)**

## 🖥️ [EP3] Prototipação do Wireframe e do Sitemap do MVP
⬇️⬇️⬇️ A seguir ⬇️⬇️⬇️


# 📂 DESCRIÇÃO DO PROJETO:

## 🎯 Objetivo do sistema

Conectar agricultores familiares a uma rede de apoio técnico e profissional (universidades, institutos de pesquisa e secretarias), atuando como uma ponte digital entre as necessidades do campo e a oferta de conhecimento especializado, conectando três perfis:

- **Produtor** — acessa capacitações, consultorias, agenda e histórico de treinamentos.
- **Rede de Apoio** — cria e gerencia capacitações e consultorias oferecidas.
- **Administrador** — gerencia o sistema como um todo.

## ❓ Problema que busca resolver

Agricultores familiares envolvidos em feiras agroecológicas enfrentam desafios complexos no manejo do plantio, na logística de distribuição, na conservação dos produtos e na adequação a exigências legais. Nossa solução visa sanar essa problemática ao conectar, de forma totalmente gratuita, esses produtores a uma rede de especialistas e profissionais capazes de oferecer suporte técnico e capacitação orientada.

O sistema resolve essa lacuna ao reunir em uma única plataforma web: capacitações, consultorias, agendamentos e materiais de apoio — de forma acessível e intuitiva.

## 👥 Público Alvo

- **Público-Alvo Principal:** Agricultores Famílias e Pequenos Produtores Agroecológicos
- **Público-Alvo Secundário:** Rede de Apoio e Especialistas
- **Beneficiários Indiretos:** Comunidade Local e Consumidores

## ⚙️ Fluxo de navegação e principais funcionalidades

```
Login
 ├── Cadastro
 ├── Recuperar Senha → Validar Código
 └── Dashboard Produtor
      ├── Capacitações → Detalhe da Capacitação
      ├── Consultorias
      ├── Meus Treinamentos
      ├── Agenda
      └── Perfil

Login (Rede de Apoio)
 └── Dashboard Rede de Apoio
      ├── Criar Capacitação
      └── Criar Consultoria
```

---

# 🌐 TECNOLOGIAS UTILIZADAS ??????

O MVP foi desenvolvido com foco em agilidade de entrega e simplicidade de manutenção, utilizando um stack moderno baseado em React e TypeScript:
React 18: biblioteca principal para construção da interface, com componentes funcionais e hooks (useState, useEffect).

- **TypeScript:** tipagem estática para maior segurança e manutenibilidade do código.
- **Vite:** bundler e ferramenta de build, garantindo inicialização e compilação rápidas.
- **React Router DOM:** gerenciamento de rotas e navegação entre as telas da aplicação (SPA).
- **Lucide React:** biblioteca de ícones utilizada em toda a interface.
- **CSS puro:** estilização da aplicação sem frameworks CSS externos, garantindo leveza.
- **localStorage:** persistência simples da sessão do usuário no MVP, sem backend.
- **Vercel:** plataforma de hospedagem e deploy contínuo integrada ao repositório GitHub.

---

# 🛠️ ESTRUTURA DO PROJETO ????

O projeto foi organizado seguindo uma arquitetura modular e escalável, baseada na separação clara de responsabilidades entre componentes de interface, páginas da aplicação, arquivos de estilo e utilitários. Essa estrutura facilita a reutilização do código, a manutenção por diferentes membros da equipe e a integração contínua via Git.

## Árvore de Diretórios

```
semeando-saberes-mvp/
├── public/                     # Arquivos estáticos e públicos da aplicação
│   ├── favicon.ico             # Ícone da aba do navegador
│   ├── index.html              # Documento HTML principal (Single Page Application)
│   └── assets/                 # Logotipos, ícones e mídias estáticas
│
├── src/                        # Código-fonte principal da aplicação
│   ├── assets/                 # Estilos globais e recursos visuais
│   │   ├── css/                # Arquivos CSS modulares (estilos globais e componentes)
│   │   └── images/             # Imagens ilustrativas das capacitações e avatares
│   │
│   ├── components/             # Componentes de interface reutilizáveis (UI)
│   │   ├── Sidebar/            # Barra de navegação lateral fixa
│   │   ├── Header/             # Cabeçalho do sistema com saudações e perfil
│   │   ├── CardCurso/          # Cartão para exibição individual de capacitações
│   │   ├── CardConsultoria/    # Cartão de agendamento e chamados técnicos
│   │   ├── MetricCard/         # Cartões de indicadores/KPIs do Dashboard
│   │   ├── Calendar/           # Componente interativo de calendário mensal
│   │   └── Button/             # Botões padronizados (primário, secundário, toque amplo)
│   │
│   ├── pages/                  # Telas/Páginas principais da aplicação
│   │   ├── Login/              # Tela de autenticação e seleção de perfil
│   │   ├── Dashboard/          # Painel principal do produtor com métricas e avisos
│   │   ├── Capacitacoes/       # Catálogo geral de cursos e detalhes do curso
│   │   ├── Consultorias/       # Interface de solicitação de suporte técnico
│   │   ├── Treinamentos/       # Tela "Meus Treinamentos" com progresso percentual
│   │   ├── Agenda/             # Calendário de eventos, aulas e consultorias
│   │   ├── Perfil/             # Gestão de dados do agricultor e da propriedade
│   │   └── PainelAdmin/        # Painel da Rede de Apoio (criação de cursos e chamados)
│   │
│   ├── routes/                 # Gerenciamento de navegação e rotas web
│   │   └── AppRoutes.jsx       # Definição das rotas públicas e protegidas
│   │
│   └── utils/                  # Funções auxiliares e utilitários
│       ├── validation.js       # Validação de campos de formulário (e-mail, CPF/CNPJ)
│       └── mockData.js         # Dados simulados para o MVP (cursos, agendamentos)
│
├── .gitignore                  # Arquivos e pastas ignorados pelo controle de versão Git
├── package.json                # Gerenciamento de dependências e scripts do projeto
├── README.md                   # Documentação completa e guia de utilização da aplicação
└── vite.config.js / webpack    # Configurações do bundler/gerenciador de build
```

---

# </> INSTALAÇÃO E EXECUÇÃO

## Instalação e Execução Local

Esta seção apresenta o passo a passo detalhado para que qualquer desenvolvedor ou avaliador possa clonar, configurar e executar a aplicação em seu ambiente local.

**1. Pré-requisitos**
Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Git (versão 2.x ou superior)
- Node.js (versão 18.x ou superior recomendada)
- Gerenciador de pacotes npm (incluso com o Node.js) ou yarn

**2. Passo a Passo de Execução**

**Passo 1:** Clonar o Repositório
Abra o terminal de seu sistema operacional e execute o comando abaixo para clonar o projeto:
```
Bash
git clone https://github.com/artreboucas/PROJETO-INTEGRADOR.git
```

Em seguida, acesse o diretório raiz do projeto:

```
Bash
PROJETO-INTEGRADOR/projeto-integrado-3/ep3-semeando-saberes-mvp
```

**Passo 2:** Instalar as Dependências
Instale todas as bibliotecas e pacotes necessários declarados no arquivo package.json:

```
Bash
npm install
```

**Passo 3:** Configuração do Ambiente
Configuração do Ambiente O MVP utiliza dados simulados em memória (Mock Data), definidos em src/data/mockData.ts, e persistência local via localStorage do navegador para manter a sessão do usuário. Não há conexão com banco de dados externo nem variáveis de ambiente a configurar — basta instalar as dependências e executar a aplicação.

**Passo 4:** Executar a Aplicação
Inicie o servidor de desenvolvimento local:

Se o projeto utiliza Vite (Padrão recomendado):

```
Bash
npm run dev
```

Se o projeto utiliza Create React App:

```
Bash
npm start
```

**Passo 5:** Acessar o Sistema
Após o término da inicialização no terminal, abra o seu navegador de preferência e acesse o endereço fornecido:

**[Endereço Padrão](http://localhost:5173)**

---

# PROCESSO DE DESENVOLVIMENTO

## 1. Divisão de Tarefas na Equipe (4 Membros)

A distribuição das atividades foi organizada de forma a adquar as habilidades dos integrantes e mantendo os registros técnicos necessários:

| Nome | Função |
|---|---|
| Arthur Rebouças do Carmo | Ficou responsável por construir e fazer funcionar a parte visual que o produtor rural utiliza, incluindo a tela de entrada (formulário de Login), o painel inicial com resumos e números (Dashboard interativo com indicadores/KPIs), o catálogo de aulas (Central de Capacitações) e a navegação entre as informações dos cursos. Desenvolvel ainda a área usada pelos professores e especialistas (Painel Administrativo), o formulário para publicar novas aulas, a checagem automática para evitar erros ao preencher dados (validação visual de campos) e a adaptação visual para que o site funcione bem na tela de qualquer celular (responsividade e mobile-first). |
| Sheila Matias Barroso | Controlar a união das partes do projeto feitas por cada colega (gestão de branches e controle de pull requests); Ficou responsável por escrever o guia explicativo do projeto (arquivo README.md), redigir o texto sobre a utilidade e o impacto do sistema na vida dos agricultores (seção do Componente Extensionista), montar o documento final para envio (Relatório Técnico em PDF). |
| Carlos Rodrigo Ferreira da Silva | Organizar a gravação e edição da fala da equipe (vídeo demonstrativo)|
| Vitoria Cavalcante Souza | Ficou responsável por criar a base e organizar as pastas onde o site foi construído (definição da arquitetura e repositório no GitHub); Dar apoio no código para quem precisasse (suporte técnico em desenvolvimento); Dar suporte na revisão do (arquivo README.md) e Relatório. |

## 2. Uso do GitHub e Estratégia de Versionamento

Para manter a organização e a rastreabilidade do código-fonte, a equipe adotou uma estratégia de versionamento baseada no Git Flow simplificado:

```
main (Código estável / Deploy)

▲

│ (Pull Request revisado)

develop (Integração da Sprint)

▲

├── feature/login-autenticacao

├── feature/dashboard-produtor

├── feature/agendamento-consultoria

└── feature/painel-rede-apoio
```

- **Branch main:** Mantida estritamente com o código estável e pronto para publicação/deploy.
- **Branch develop:** Utilizada para consolidar as funcionalidades desenvolvidas durante a Sprint.
- **Feature Branches (feature/nome-da-funcionalidade):** Cada nova tela ou componente foi isolado em um ramo próprio de trabalho, evitando interferências diretas no código em desenvolvimento pelos colegas.
- **Commits Atômicos:** Mensagens de commit descritivas e objetivas (ex: feat: adiciona componente de card de curso, fix: ajusta responsividade do menu lateral no mobile).
- **Pull Requests e Code Review:** A fusão de código (merge) para as branches principais só ocorria após revisão técnica, garantindo a prevenção de erros e a integridade da aplicação. 

## 3. Dificuldades Encontradas durante a Sprint

- **Perda de Integrantes na Equipe (Readequação do Escopo):** O grupo encolheu de 6 para 4 membros no meio do projeto, o que nos obrigou a reorganizar as tarefas rápido para conseguir entregar tudo no prazo.
- **Pouco Tempo de Produção (Tempo Limitado de Execução):** Muito relacionado a questões individuais de capa membro, principalmente trabalho..
- **Horários Diferentes para Conversar (Desafios na Comunicação Assíncrona):** A rotina dos integrantes era diferente, o que dificultava marcar reuniões com todo mundo ao mesmo tempo para alinhar o andamento do projeto.
- **Diferença no Conhecimento de Programação (Disparidade Técnica):** Nem todos os membros sabiam programar no mesmo nível, o que gerou um peso inicial maior para quem já sabia e insegurança em quem estava aprendendo.
- **Ajuste do Layout para Celulares (Responsividade e IHC):** Foi um desafio fazer com que os painéis e formulários de agendamento ficassem fáceis de mexer em telas pequenas de celular, que é como o agricultor vai usar no campo.
- **Conflitos ao Juntar o Código dos Colegas (Conflitos no Git / Merge Conflicts):** Quando duas pessoas mexiam nas mesmas partes do código ao mesmo tempo, o sistema gerava travamentos na hora de unificar o projeto no GitHub.

## 4. Soluções Adotadas

- **Divisão Clara e Foco no Essencial (Redefinição do Escopo do MVP):** Reorganizamos a equipe para focar apenas nas telas mais importantes (Produtor e Rede de Apoio), definindo exatamente a responsabilidade de cada uma das 4 pessoas.
- **Corte de Excessos para Cumprir Prazos (Priorização Ágil e Backlog Enxuto):** Deixamos de lado recursos muito complexos e focamos estritamente no que era obrigatório para ter a aplicação funcionando a tempo.
- **Canal Único de Mensagens e Recados Diários (Comunicação Centralizada e Daily Check-ins):** Criamos um grupo de comunicação instantânea para tirar dúvidas rápidas e mandar resumos diários do que já tinha sido feito por cada um.
- **Trabalho em Dupla e Apoio Mútuo (Mentoria Interna e Pair Programming):** Os integrantes com mais prática em código programaram junto com quem tinha menos experiência. Além disso, aproveitamos as facilidades de cada um em escrita, design ou edição de vídeo.
- **Botões Grandes e Layout Flexível (Design Mobile-First e CSS Grid):** Criamos o visual pensando primeiro no uso pelo celular, colocando botões fáceis de apertar com o dedo (área de toque ampla) e organizando a tela para se ajustar a qualquer aparelho.
- **Uso de Dados de Teste Padronizados (Centralização via Mock Data):** Criamos um arquivo com informações fictícias prontas para que todos usassem os mesmos dados no sistema, evitando erros ao testar as telas.

---

# ➕ COMPONENTE EXTENSIONISTA:

## Como utilizar a aplicação

Ao fornecer uma interface intuitiva que organiza cursos, agendas e consultorias técnicas em um único ambiente, o sistema:
- **Promove Inclusão Digital no Campo:** Permite que agricultores familiares naveguem sem dificuldades, mesmo com pouco domínio tecnológico.
- **Fortalece a Economia Local:** Melhora o manejo agrícola e o controle de pragas, resultando em produtos de maior qualidade para as feiras agroecológicas locais.
- **Gera Dados para Políticas Públicas:** Oferece às universidades e secretarias de agricultura dados consolidados sobre as principais demandas de capacitação da região.
- **Alinha-se aos ODS da ONU:** Contribui diretamente com os Objetivos 1 (Erradicação da Pobreza), 2 (Fome Zero e Agricultura Sustentável) e 10 (Redução das Desigualdades).

---
## ANEXOS

## 📸 [EP1] Telas do Protótipo

### Login
![Login](screenshots/Login.png)

### Cadastro
![Cadastro](screenshots/Cadastro.png)

### Dashboard do Produtor
![Dashboard do Produtor](screenshots/Dashboard.png)

### Capacitações
![Capacitações](screenshots/Capacitadores.png)

### Detalhe da Capacitação
![Detalhe da Capacitação](screenshots/Detalhe-Capacitacao.png)

### Consultorias
![Consultorias](screenshots/Consultorias.png)

### Meus Treinamentos
![Meus Treinamentos](screenshots/Meus-Treinamentos.png)

### Agenda
![Agenda](screenshots/Agenda.png)

### Perfil
![Perfil](screenshots/Perfil.png)

---

*UFCA — Centro de Educação a Distância (CEAD)*  
*Análise e Desenvolvimento de Sistemas — Projeto Integrado III (ADS0038) — 2026*
