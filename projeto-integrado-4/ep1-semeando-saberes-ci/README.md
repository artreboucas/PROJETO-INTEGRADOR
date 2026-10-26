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
## ⚙️ Integração Contínua (CI) com GitHub Actions

[![CI - Semeando Saberes](https://github.com/artreboucas/PROJETO-INTEGRADOR/actions/workflows/ci.yml/badge.svg)](https://github.com/artreboucas/PROJETO-INTEGRADOR/actions/workflows/ci.yml)

Este projeto possui um pipeline de integração contínua que verifica automaticamente se o código continua compilando a cada alteração enviada ao GitHub. O objetivo é detectar erros cedo, antes que eles cheguem à versão final da aplicação.

### O que é integração contínua? 

Imagine que um time está escrevendo um trabalho em grupo e cada pessoa escreve uma parte. Se ninguém confere o conjunto até o último dia, é muito provável que as partes não se encaixem: estilos diferentes, trechos repetidos, informações que se contradizem.

A **integração contínua (CI)** resolve esse problema no mundo do software. Toda vez que alguém envia código novo para o repositório, um "robô" baixa o projeto, instala o que ele precisa e tenta construí-lo, tudo de forma automática. Se algo quebrou, o time descobre em poucos minutos, quando o erro ainda é pequeno e fácil de corrigir.

**Por que isso é importante para quem está aprendendo a programar?**

- **Feedback rápido:** você descobre o erro logo depois de cometê-lo, sem depender de alguém testar manualmente.
- **Trabalho em equipe mais seguro:** o código de uma pessoa não quebra o projeto dos colegas sem que ninguém perceba.
- **Hábito profissional:** empresas de tecnologia usam CI no dia a dia, então aprender cedo ajuda no mercado de trabalho.
- **Confiança para mudar o código:** com a verificação automática, fica menos assustador experimentar e melhorar o projeto.
- **Registro público:** o histórico de execuções mostra o que passou e o que falhou, o que facilita aprender com os próprios erros.


### Como o CI funciona neste projeto

O pipeline está definido no arquivo [`.github/workflows/ci.yml`](../../.github/workflows/ci.yml), na raiz do repositório. Como o projeto fica dentro de uma subpasta, o workflow usa `working-directory` para executar os comandos no lugar certo.

**Quando ele roda:**

| Gatilho | Descrição |
|---|---|
| `push` na branch `main` | Quando há alterações em `projeto-integrado-4/ep1-semeando-saberes-ci/` ou no próprio workflow |
| `pull_request` para `main` | Para validar propostas de mudança antes de juntá-las ao projeto |
| `workflow_dispatch` | Permite executar manualmente pela aba **Actions** |

**O que ele faz (job `build`, em `ubuntu-latest`):**

| Etapa | O que acontece | Por que existe |
|---|---|---|
| Baixar o código | `actions/checkout@v4` copia o repositório para a máquina do GitHub | O robô precisa do código para trabalhar |
| Configurar o Node.js | `actions/setup-node@v4` instala o Node 22 e guarda o cache do npm | O projeto usa Vite e TypeScript, que rodam sobre Node; o cache deixa as próximas execuções mais rápidas |
| Instalar dependências | `npm ci` | Instala exatamente as versões do `package-lock.json`, garantindo um ambiente reproduzível |
| Build | `npm run build` (`tsc -b && vite build`) | Verifica os tipos do TypeScript e compila a aplicação; se houver erro, o pipeline falha |

### Como acompanhar o resultado

1. No repositório do GitHub, abra a aba **Actions**.
2. Clique na execução mais recente de **CI - Semeando Saberes**.
3. ✅ verde significa que tudo passou; ❌ vermelho significa que alguma etapa falhou. Clique no job `build` e abra a etapa com erro para ler a mensagem.

### Como rodar a mesma verificação no seu computador

Antes de enviar alterações, vale rodar localmente o que o CI executará:

```bash
cd projeto-integrado-4/ep1-semeando-saberes-ci
npm ci
npm run build
```

Se funcionar na sua máquina, a chance de passar no GitHub é grande.

### Escopo e próximos passos

O projeto ainda não possui scripts de `lint` nem de testes automatizados, por isso o CI executa a instalação e o build, que já valida tipos e compilação. Como evolução, é possível adicionar o ESLint (etapa de lint) e testes com Vitest, bastando incluir os scripts no `package.json` e novas etapas no `ci.yml`.

> **Nota:** o código da aplicação (MVP Semeando Saberes) foi desenvolvido no Projeto Integrado III e reaproveitado aqui como projeto de exemplo para a configuração do CI no Projeto Integrado IV.

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
cd projeto-integrado-4/ep1-semeando-saberes-ci
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

# PROCESSO DE DESENVOLVIMENTO

## 1. Divisão de Tarefas na Equipe (4 Membros)

A distribuição das atividades foi organizada de forma a adequar as habilidades dos integrantes e mantendo os registros técnicos necessários:

| Nome | Função |
|---|---|
| Arthur Rebouças do Carmo | Ficou responsável por construir e fazer funcionar a parte visual que o produtor rural utiliza, incluindo a tela de entrada (formulário de Login), o painel inicial com resumos e números (Dashboard interativo com indicadores/KPIs), o catálogo de aulas (Central de Capacitações) e a navegação entre as informações dos cursos. Desenvolvel ainda a área usada pelos professores e especialistas (Painel Administrativo), o formulário para publicar novas aulas, a checagem automática para evitar erros ao preencher dados (validação visual de campos) e a adaptação visual para que o site funcione bem na tela de qualquer celular (responsividade e mobile-first). |
| Sheila Matias Barroso | Controlar a união das partes do projeto feitas por cada colega (gestão de branches e controle de pull requests); Ficou responsável por escrever o guia explicativo do projeto (arquivo README.md), redigir o texto sobre a utilidade e o impacto do sistema na vida dos agricultores (seção do Componente Extensionista), montar o documento final para envio (Relatório Técnico em PDF). |
| Carlos Rodrigo Ferreira da Silva | Organizar a gravação e edição da fala da equipe (vídeo demonstrativo)|
| Vitoria Cavalcante Souza | Ficou responsável por criar a base e organizar as pastas onde o site foi construído (definição da arquitetura e repositório no GitHub); Dar apoio no código para quem precisasse (suporte técnico em desenvolvimento); Dar suporte na revisão do (arquivo README.md) e Relatório. |

## 2. Dificuldades Encontradas durante a Sprint

- **Perda de Integrantes na Equipe (Readequação do Escopo):** O grupo encolheu de 6 para 4 membros no meio do projeto, o que nos obrigou a reorganizar as tarefas rápido para conseguir entregar tudo no prazo.
- **Pouco Tempo de Produção (Tempo Limitado de Execução):** Muito relacionado a questões individuais de capa membro, principalmente trabalho..
- **Horários Diferentes para Conversar (Desafios na Comunicação Assíncrona):** A rotina dos integrantes era diferente, o que dificultava marcar reuniões com todo mundo ao mesmo tempo para alinhar o andamento do projeto.
- **Diferença no Conhecimento de Programação (Disparidade Técnica):** Nem todos os membros sabiam programar no mesmo nível, o que gerou um peso inicial maior para quem já sabia e insegurança em quem estava aprendendo.
- **Ajuste do Layout para Celulares (Responsividade e IHC):** Foi um desafio fazer com que os painéis e formulários de agendamento ficassem fáceis de mexer em telas pequenas de celular, que é como o agricultor vai usar no campo.
- **Conflitos ao Juntar o Código dos Colegas (Conflitos no Git / Merge Conflicts):** Quando duas pessoas mexiam nas mesmas partes do código ao mesmo tempo, o sistema gerava travamentos na hora de unificar o projeto no GitHub.
- **Gerenciamento de Estado sem Backend:** O maior desafio foi simular um fluxo real de aplicação sem possuir um banco de dados integrado nesta etapa. A solução foi a criação de um módulo `mockData` centralizado e o uso do `localStorage` para persistir a sessão e dados do usuário localmente, garantindo uma experiência fluida de navegação.
- **Consistência Visual:** Manter a interface responsiva e fiel ao protótipo sem o uso de frameworks CSS robustos foi um desafio. Optamos pelo uso de CSS puro, focando em boas práticas de flexbox e grid para garantir leveza e velocidade de carregamento.

## 3. Soluções Adotadas

- **Divisão Clara e Foco no Essencial (Redefinição do Escopo do MVP):** Reorganizamos a equipe para focar apenas nas telas mais importantes (Produtor e Rede de Apoio), definindo exatamente a responsabilidade de cada uma das 4 pessoas.
- **Corte de Excessos para Cumprir Prazos (Priorização Ágil e Backlog Enxuto):** Deixamos de lado recursos muito complexos e focamos estritamente no que era obrigatório para ter a aplicação funcionando a tempo.
- **Canal Único de Mensagens e Recados Diários (Comunicação Centralizada e Daily Check-ins):** Criamos um grupo de comunicação instantânea para tirar dúvidas rápidas e mandar resumos diários do que já tinha sido feito por cada um.
- **Trabalho em Dupla e Apoio Mútuo (Mentoria Interna e Pair Programming):** Os integrantes com mais prática em código programaram junto com quem tinha menos experiência. Além disso, aproveitamos as facilidades de cada um em escrita, design ou edição de vídeo.
- **Botões Grandes e Layout Flexível (Design Mobile-First e CSS Grid):** Criamos o visual pensando primeiro no uso pelo celular, colocando botões fáceis de apertar com o dedo (área de toque ampla) e organizando a tela para se ajustar a qualquer aparelho.
- **Uso de Dados de Teste Padronizados (Centralização via Mock Data):** Criamos um arquivo com informações fictícias prontas para que todos usassem os mesmos dados no sistema, evitando erros ao testar as telas.

---

# ➕➕ COMPONENTE EXTENSIONISTA: ➕➕

## Como utilizar a aplicação

Ao fornecer uma interface intuitiva que organiza cursos, agendas e consultorias técnicas em um único ambiente, o sistema:
- **Promove Inclusão Digital no Campo:** Permite que agricultores familiares naveguem sem dificuldades, mesmo com pouco domínio tecnológico.
- **Fortalece a Economia Local:** Melhora o manejo agrícola e o controle de pragas, resultando em produtos de maior qualidade para as feiras agroecológicas locais.
- **Gera Dados para Políticas Públicas:** Oferece às universidades e secretarias de agricultura dados consolidados sobre as principais demandas de capacitação da região.
- **Alinha-se aos ODS da ONU:** Contribui diretamente com os Objetivos 1 (Erradicação da Pobreza), 2 (Fome Zero e Agricultura Sustentável) e 10 (Redução das Desigualdades).
- **Centralização de conhecimento:** Ao centralizar capacitações, consultorias e compromissos, a plataforma pode facilitar a busca por orientação, apoiar a melhoria da produção e aproximar produtores de universidades, institutos e outras organizações.


---

*UFCA — Centro de Educação a Distância (CEAD)*  
*Análise e Desenvolvimento de Sistemas — Projeto Integrado III (ADS0038) — 2026*


