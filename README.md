# 🌱 Sistema de Gestão de Feiras Agroecológicas Locais

> Plataforma web para conectar agricultores familiares a capacitações, consultorias e redes de apoio técnico, promovendo a organização e o fortalecimento das feiras agroecológicas locais.

---

## 📌 Contexto Acadêmico

Este projeto foi desenvolvido no âmbito do **Projeto Integrado** do curso de **Análise e Desenvolvimento de Sistemas (ADS)**, vinculado ao **Centro de Educação a Distância (CEAD)** da **Universidade Federal do Cariri (UFCA)**.

O presente repositório corresponde ao **Entregável Parcial 1 (EP1)**, cujo objetivo é o desenvolvimento de um **protótipo de alta fidelidade do MVP web** utilizando o Figma, com foco em usabilidade, consistência visual e experiência do usuário (UX).

---

## ❓ Qual é o problema que a solução resolve?

Agricultores familiares que participam de feiras agroecológicas frequentemente enfrentam dificuldades para acessar capacitações técnicas, consultorias especializadas e materiais de apoio. A comunicação entre produtores, redes de apoio (universidades, instituições e empresas juniores) e gestores é fragmentada, realizada de forma manual ou por canais informais como grupos de WhatsApp e planilhas avulsas.

Essa desorganização gera problemas como:
- Dificuldade no controle de presença em capacitações;
- Falta de visibilidade sobre as consultorias disponíveis;
- Ausência de um canal centralizado para troca de informações e materiais;
- Baixa rastreabilidade da participação dos produtores nas atividades da feira.

O sistema resolve essa lacuna ao centralizar a gestão dessas informações em uma plataforma web acessível, intuitiva e voltada para a realidade do agricultor familiar.

---

## 🎯 Qual é o objetivo do sistema?

O objetivo central do sistema é **digitalizar e organizar a gestão das feiras agroecológicas locais**, conectando três atores principais:

1. **Produtores**: agricultores familiares que participam das feiras e buscam capacitação e suporte técnico;
2. **Redes de Apoio**: universidades, instituições e empresas juniores que oferecem consultorias e capacitações;
3. **Gestores/Administradores**: responsáveis pela organização geral das feiras e do sistema.

O sistema permite o cadastro e acompanhamento de capacitações, consultorias, participações, agendamentos e materiais de apoio, promovendo mais transparência, organização e eficiência para todos os envolvidos.

---

## ⚙️ Como o sistema funciona (visão geral)?

O sistema é dividido em dois perfis principais de acesso:

### 👨‍🌾 Perfil Produtor
- Realiza login ou cadastro na plataforma;
- Acessa o **Dashboard** com um resumo das suas atividades;
- Visualiza e se inscreve em **Capacitações** disponíveis;
- Solicita ou acompanha **Consultorias** técnicas;
- Acessa **Meus Treinamentos** para acompanhar seu histórico;
- Gerencia sua **Agenda** de atividades;
- Edita seu **Perfil** pessoal.

### 🏛️ Perfil Rede de Apoio
- Realiza login na plataforma com perfil diferenciado;
- Acessa o **Dashboard da Rede de Apoio** com visão geral das atividades;
- **Cria e gerencia Capacitações** para os produtores;
- **Cria e gerencia Consultorias** disponíveis.

### Fluxo de navegação principal:
```
Login → Dashboard → Capacitações / Consultorias / Meus Treinamentos / Agenda / Perfil
Login (Rede de Apoio) → Dashboard Rede de Apoio → Criar Capacitação / Criar Consultoria
```

---

## 🛠️ Quais tecnologias foram utilizadas?

| Tecnologia | Finalidade |
|---|---|
| **Figma** | Prototipação de alta fidelidade (wireframe → protótipo navegável) |
| **Python** | Implementação das classes do MVP (Sprint 1) |
| **PostgreSQL** | Banco de dados relacional (Sprint 2) |
| **GitHub** | Versionamento de código e documentação do projeto |
| **Google Drive** | Armazenamento de relatórios e documentos acadêmicos |
| **Poppins (Google Fonts)** | Tipografia principal do sistema |

**Paleta de cores adotada:**
- 🟢 Verde escuro: `#2E7D32` — cor primária, transmite confiança e conexão com a natureza
- 🟩 Verde claro: `#66BB6A` — cor de destaque e ações secundárias
- ⬜ Branco: `#FFFFFF` — fundo e leiturabilidade
- 🔲 Cinza claro: `#F5F5F5` — fundos de cards e seções

---

## ▶️ Como executar ou utilizar a aplicação?

### Protótipo Figma (EP1)
Acesse o protótipo navegável diretamente pelo link abaixo:

🔗 **[Protótipo Figma — https://www.figma.com/design/Ikzoi5h2P2utdvvWbDfaKz/ProjetoIntegrador3?node-id=0-1&t=vYjMJ6uE4YkdTvjr-1]**
🔗 **[Protótipo Navegavel — https://fish-rem-46688004.figma.site/]**


---

## 🧭 Quais decisões foram tomadas ao longo do desenvolvimento?

### Identidade Visual
A paleta de cores em tons de verde foi escolhida intencionalmente para reforçar a conexão do sistema com a agricultura, agroecologia e sustentabilidade. O verde transmite natureza, crescimento e confiança — valores centrais do projeto.

### Tipografia
A fonte **Poppins** foi selecionada por sua excelente legibilidade em telas de diferentes tamanhos, seu aspecto moderno e amigável, e por funcionar bem tanto em títulos quanto em textos de corpo.

### Separação de perfis
A decisão de separar os dashboards entre Produtor e Rede de Apoio foi tomada para evitar sobrecarga de informação. Cada perfil acessa apenas o que é relevante para seu papel, reduzindo a curva de aprendizado e aumentando a eficiência de uso.

### Componentização no Figma
Todos os elementos visuais recorrentes (botões, cards, navbar, inputs) foram criados como **componentes reutilizáveis** no Figma, garantindo consistência visual entre as telas e facilitando futuras alterações no design.

### Navegação por abas fixas
O menu de navegação foi mantido fixo na parte inferior (mobile) e lateral (desktop), seguindo padrões consolidados de usabilidade, reduzindo o número de cliques necessários para acessar as principais funcionalidades.

### Acessibilidade
O contraste entre texto e fundo foi verificado seguindo as diretrizes da **WCAG 2.1** (nível AA), garantindo que o sistema seja acessível a pessoas com baixa visão ou daltonismo.

---

## 🎨 Importância da Experiência do Usuário (UX)

A Experiência do Usuário (UX) vai muito além da estética de um sistema. Ela representa a forma como uma pessoa se sente ao interagir com uma aplicação — se ela consegue realizar o que precisa com facilidade, sem se sentir perdida, frustrada ou sobrecarregada de informações.

No contexto do nosso projeto, essa dimensão é especialmente importante porque o público principal inclui **agricultores familiares**, que em muitos casos têm pouca familiaridade com tecnologia digital. Um sistema com boa UX pode ser a diferença entre uma ferramenta que é adotada e usada com frequência e uma que é abandonada logo nos primeiros dias.

Quando um sistema é bem projetado do ponto de vista de UX, ele reduz o número de erros que o usuário comete, diminui o tempo necessário para aprender a usar a plataforma e aumenta a confiança das pessoas na tecnologia. Isso é especialmente relevante em contextos rurais, onde o acesso à assistência técnica e a conexão de internet já são limitados por si só.

Um bom design de interface impacta positivamente a vida das pessoas porque coloca as necessidades delas no centro das decisões. Em vez de obrigar o usuário a se adaptar à lógica do sistema, um bom design adapta o sistema à lógica e à realidade do usuário. Isso se traduz em menus claros, linguagem simples, botões visíveis, feedback imediato para as ações realizadas e um fluxo de navegação que faz sentido para quem está usando.

No caso do nosso sistema de feiras agroecológicas, a aplicação de princípios de UX significa que um produtor consegue, com poucos cliques, visualizar as capacitações disponíveis, confirmar sua inscrição e acessar os materiais — sem precisar de treinamento especializado. Isso tem impacto direto na autonomia, na produtividade e na inclusão digital dessas pessoas.

Em resumo, investir em UX não é um detalhe de acabamento — é uma decisão estratégica que determina se uma solução tecnológica será realmente útil ou se ficará subutilizada. Um sistema que as pessoas conseguem usar com naturalidade é um sistema que gera valor real.

---

## 🌍 Possíveis usos da nossa solução

A plataforma desenvolvida pode ser aplicada em diferentes contextos do mundo real:

- **Prefeituras e secretarias de agricultura** podem utilizá-la para organizar e monitorar feiras agroecológicas municipais, acompanhando a participação dos produtores e o impacto das capacitações;
- **Universidades e institutos federais** podem usar o sistema para registrar e gerenciar projetos de extensão voltados à assistência técnica rural, conectando estudantes e professores a comunidades agrícolas;
- **Cooperativas e associações de produtores** podem adotar a plataforma para centralizar a comunicação entre seus membros, organizar agendas de treinamentos e facilitar o acesso a consultorias especializadas;
- **ONGs e organizações da sociedade civil** que atuam no fortalecimento da agricultura familiar podem usar o sistema para sistematizar suas ações e ampliar o alcance de seus programas;
- **Produtores individuais** ganham autonomia para acessar oportunidades de capacitação e suporte técnico sem depender de intermediários ou de comunicação informal.

Em todos esses cenários, a solução contribui para a **inclusão digital no campo**, para a **valorização da agricultura familiar** e para a **promoção da sustentabilidade** social, econômica e ambiental nas comunidades atendidas.

---

## 👥 Equipe

Projeto desenvolvido pelos discentes do curso de **Análise e Desenvolvimento de Sistemas (ADS)** da **UFCA**, como parte das atividades do Projeto Integrado III.

| Nome | Matrícula |
|---|---|
| Arthur Rebouças do Carmo | 2025019454 |
| Sheila Matias Barroso | 2025014897 |
| Carlos Rodrigo Ferreira da Silva | 2025014304 |
| Vitoria Cavalcante Souza | 2025019481 |

---

*Universidade Federal do Cariri (UFCA) — Centro de Educação a Distância (CEAD)*
*Curso de Análise e Desenvolvimento de Sistemas — Projeto Integrado III (ADS0038)*
*Prof. Luís Fabrício de Freitas Souza*
