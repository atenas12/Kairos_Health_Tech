🩺 Kairós Health Tech
Tecnologia que organiza informações para apoiar quem cuida.
Projeto Web Standard | Engenharia de Software


![Status](https://img.shieldsstatus-em%20desenvolvimento-00b8d9 ![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoite ![CSS](httpsshields.io/badge/CSS3-1572B6?logo=css3&logoColor=white ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=https://img.shields.io/badge/Java-EDo=openjdk&logoColor=white ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?logo=springboot&logoColor=whiteields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white

📌 Sobre o Projeto
A Kairós Health Tech é um projeto voltado ao uso da tecnologia como apoio à organização e ao acompanhamento das informações relacionadas ao cuidado de pessoas idosas.

O projeto surgiu a partir da identificação de dificuldades no gerenciamento dessas informações, especialmente quando os registros estão distribuídos entre documentos em papel, sistemas distintos e diferentes profissionais.

Nesta etapa do projeto, a proposta está sendo desenvolvida como uma solução web composta por:

🌐 Site institucional
🖥️ Plataforma administrativa
🗄️ Banco de dados
O objetivo é criar um ambiente que permita organizar e consultar informações de forma mais centralizada, contribuindo para a gestão das instituições e para a rastreabilidade dos registros.

🎯 Objetivo
Desenvolver uma aplicação web capaz de apresentar institucionalmente a Kairós Health Tech e disponibilizar uma área administrativa para gerenciamento das informações relacionadas aos idosos.

A solução busca:

📋 Centralizar informações;
🔎 Facilitar a consulta aos registros;
👴 Apoiar o gerenciamento das informações dos idosos;
👥 Permitir o gerenciamento de usuários;
🔐 Controlar o acesso às informações;
🕒 Melhorar a rastreabilidade dos registros;
🤝 Apoiar a comunicação e a organização das instituições.
❗ Problema Identificado
Em instituições que realizam o acompanhamento de pessoas idosas, diferentes profissionais podem participar do cuidado ao longo do dia.

Quando as informações estão distribuídas entre registros em papel, documentos separados ou sistemas não integrados, pode se tornar mais difícil:

encontrar informações rapidamente;
acompanhar o histórico de registros;
transmitir informações entre profissionais;
responder às solicitações dos familiares;
identificar alterações realizadas nos registros;
manter as informações organizadas e rastreáveis.
A Kairós busca utilizar a tecnologia para ajudar a reduzir essa fragmentação.

💡 Solução Proposta
Para o Projeto Web Standard, a Kairós está sendo desenvolvida em duas áreas principais:

🌐 Site Institucional
Responsável por apresentar:

a Kairós Health Tech;
o problema identificado;
a proposta da solução;
os benefícios;
o público atendido;
informações para contato.
🖥️ Plataforma Administrativa
Área destinada à gestão das informações da solução.

O escopo inicial prevê:

🔐 Login;
📊 Dashboard;
👴 Cadastro de idosos;
🔎 Consulta de idosos;
✏️ Atualização de registros;
🗑️ Exclusão de registros;
👥 Gerenciamento de usuários;
🔑 Controle de permissões.
👥 Público-Alvo
A solução é direcionada inicialmente para:

🏡 Instituições de Longa Permanência para Idosos (ILPIs);
🛏️ Casas de repouso;
🏥 Clínicas geriátricas;
🚑 Empresas de Home Care;
♿ Centros de reabilitação.
Entre os beneficiários da solução estão:

👴 Pessoas idosas;
👨‍👩‍👧 Familiares;
🤲 Cuidadores;
🩺 Profissionais da saúde;
🏢 Equipes responsáveis pela gestão das instituições.
🧩 Estrutura Inicial
kairos-health-tech/
│
├── frontend/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── index.html
│
├── backend/
│
├── database/
│
├── docs/
│   ├── wireframes/
│   └── diagramas/
│
├── .gitignore
└── README.md
⚠️ A estrutura poderá sofrer alterações durante o desenvolvimento.

🚀 Tecnologias
Front-end
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColorCSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoite ![JavaScript](https://img.shieldsScript-F7DF1E?logo=javascript&logoColor=black

O front-end será responsável pela estrutura, estilização, responsividade, navegação e validações da aplicação.

Back-end
Tecnologia planejada:

https://img.shields.io/badge/Java-ED8B00?logo=openjdk&logoColor=white ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?logo=springboot&

O back-end será responsável pela lógica da aplicação e comunicação entre a interface e o banco de dados.

Banco de Dados
Tecnologia planejada:

![MySQL](https://img.shields.io/badge/MySQL-4479A1ql&logoColor=white

O banco de dados será utilizado para persistência das informações utilizadas pela plataforma administrativa.

Desenvolvimento e Versionamento
![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=[GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoe ![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?studiocode&logoColor=white

🏗️ Arquitetura Planejada
┌──────────────────────────────┐
│          FRONT-END           │
│   HTML + CSS + JavaScript    │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│           BACK-END           │
│      Java + Spring Boot      │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│        BANCO DE DADOS        │
│            MySQL             │
└──────────────────────────────┘
📋 Funcionalidades Planejadas
Site
Página inicial
Apresentação da Kairós
Apresentação do problema
Apresentação da solução
Benefícios
Formulário de contato
Layout responsivo
Plataforma Administrativa
Autenticação
Dashboard
Cadastro de idosos
Listagem de idosos
Consulta de registros
Edição de informações
Exclusão de registros
Cadastro de usuários
Controle de permissões
Integração com banco de dados
As funcionalidades serão implementadas de acordo com o escopo e a evolução do projeto.

🗃️ Banco de Dados
A plataforma será integrada a um banco de dados responsável por armazenar as informações necessárias para o funcionamento da área administrativa.

A modelagem será documentada através de um Diagrama Entidade-Relacionamento (DER) durante a etapa de desenvolvimento e prototipação do projeto.

🎨 Wireframes
Os wireframes das principais interfaces serão desenvolvidos antes da implementação final.

Serão contempladas interfaces do:

Site institucional;
Login;
Dashboard;
Cadastro;
Consulta/Listagem.
Os protótipos serão adicionados à pasta:

docs/wireframes/
🗓️ Roadmap Acadêmico
✅ Sprint 1
Concepção e planejamento

Definição do problema;
Público-alvo;
Objetivos;
Escopo;
Requisitos;
Cronograma.
🔲 Sprint 2
Prototipação e modelagem

Wireframes;
Estrutura das interfaces;
Diagrama do banco de dados.
🔲 Sprint 3
Desenvolvimento e entrega

Desenvolvimento do front-end;
Desenvolvimento do back-end;
Integração com banco de dados;
Testes;
Documentação;
Publicação do projeto;
Apresentação da solução.
🌱 Impacto Social
A Kairós Health Tech está inserida no contexto de tecnologia aplicada à saúde e ao bem-estar.

A proposta busca utilizar a tecnologia como uma ferramenta para apoiar instituições, profissionais, cuidadores e familiares na organização das informações relacionadas ao acompanhamento das pessoas idosas.

O projeto está principalmente relacionado ao:

🎯 ODS 3 - Saúde e Bem-Estar
Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades.

🔮 Evolução do Projeto
A proposta completa da Kairós Health Tech é maior que o escopo inicial deste projeto Web Standard.

Entre as possibilidades estudadas para futuras etapas estão:

📱 Aplicação mobile;
👨‍👩‍👧 Área destinada aos familiares;
📝 Registros de acompanhamento;
🔎 Histórico e rastreabilidade;
📈 Relatórios;
🔔 Alertas;
🤖 Recursos de apoio baseados em inteligência artificial;
📡 Integração futura com outros dispositivos e tecnologias.
Essas funcionalidades não representam necessariamente o escopo da versão atual e são apresentadas como possibilidades de evolução.

📚 Contexto Acadêmico
Este repositório está sendo desenvolvido como parte do curso de Engenharia de Software.

A Kairós Health Tech surgiu originalmente a partir de estudos acadêmicos relacionados à utilização da tecnologia no contexto do acompanhamento e cuidado de pessoas idosas.

O projeto Web Standard representa uma nova etapa da solução, concentrada no desenvolvimento do site institucional e da plataforma administrativa web.

👩‍💻 Autoria
Thais Nascimento Ferreira

🎓 Engenharia de Software
📍 Guarulhos, São Paulo - Brasil

Atualmente, o projeto está sendo desenvolvido individualmente.

🤝 Contribuições
Neste momento, a Kairós Health Tech é um projeto acadêmico e autoral.

O recebimento de contribuições externas não implica autorização para reutilização, redistribuição ou exploração comercial do conteúdo deste repositório.

🔒 Direitos Autorais
© 2026 Thais Nascimento Ferreira. Todos os direitos reservados.

Este projeto, incluindo seu código-fonte, documentação, identidade visual e demais materiais desenvolvidos para a Kairós Health Tech, é de autoria de Thais Nascimento Ferreira.

O conteúdo deste repositório é disponibilizado para fins acadêmicos, educacionais e de demonstração do projeto.

Não é permitida a cópia, reprodução, modificação, distribuição ou utilização comercial, total ou parcial, deste projeto sem autorização prévia da autora.

Este repositório não possui licença de código aberto. A disponibilização pública do código-fonte não concede automaticamente direitos de uso, modificação ou redistribuição.

💙 Kairós Health Tech
Tecnologia como aliada de quem cuida.
Feito com 💻, pesquisa e propósito.
