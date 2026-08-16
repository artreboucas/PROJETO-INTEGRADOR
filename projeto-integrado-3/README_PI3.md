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

---
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

# 🛠️ TECNOLOGIAS UTILIZADAS ??????

?????????

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
git clone https://github.com/seu-usuario/semeando-saberes-mvp.git
```

Em seguida, acesse o diretório raiz do projeto:

```
Bash
cd semeando-saberes-mvp
```

**Passo 2:** Instalar as Dependências
Instale todas as bibliotecas e pacotes necessários declarados no arquivo package.json:

```
Bash
npm install
```

**Passo 3:** Configuração do Ambiente
Como o MVP utiliza dados simulados em memória (Mock Data) para demonstração das funcionalidades sem necessidade de conexão ativa a banco de dados externo, não é necessária nenhuma configuração complexa de banco de dados local.

(Opcional) Caso deseje ajustar a porta de execução ou conectar a serviços externos, crie um arquivo .env na raiz do projeto com base no arquivo de exemplo fornecido:

```
Bash
cp .env.example .env
```

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

**Endereço Padrão (Vite):** ????????????????????

---

## ANEXOS

## 📸 Telas do Protótipo

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
