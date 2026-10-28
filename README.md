<div align="center">

# Kairós Health Tech

### Tecnologia, cuidado e inovação para uma longevidade com mais qualidade.

<p>
  <img src="https://img.shields.io/badge/Status-Em%20desenvolvimento-8CC63F?style=for-the-badge" alt="Status: Em desenvolvimento">
  <img src="https://img.shields.io/badge/Projeto-Health%20Tech-2D7FF9?style=for-the-badge" alt="Projeto Health Tech">
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white" alt="Java">
  <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white" alt="Spring Boot">
  <img src="https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=postgresql&logoColor=white" alt="SQL">
  <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub">
</p>

</div>

---

## Sobre o projeto

A **Kairós Health Tech** é um projeto de tecnologia voltado ao apoio e à organização do cuidado de pessoas idosas em instituições de longa permanência (ILPIs).

A proposta é desenvolver uma solução digital que contribua para uma rotina de cuidado mais organizada, com informações centralizadas e acessíveis às pessoas autorizadas, apoiando o acompanhamento dos residentes e a gestão das atividades da instituição.

O projeto contempla um **site institucional** e uma **plataforma administrativa web**, com possibilidade de integração futura a um aplicativo móvel por meio de uma API compartilhada.

> Projeto em desenvolvimento. Os dados utilizados nas demonstrações são fictícios e destinados exclusivamente à apresentação e aos testes da solução.

## Objetivos

- Apoiar a organização das informações cadastrais dos residentes.
- Facilitar a consulta de informações relevantes por usuários autorizados.
- Disponibilizar uma visão administrativa das informações e registros.
- Apoiar a geração de relatórios e consultas.
- Preparar uma arquitetura que permita futura integração com aplicativo móvel.
- Explorar o uso responsável de tecnologia e inteligência artificial no contexto do cuidado à pessoa idosa.

## Funcionalidades planejadas

### Site institucional
- Página inicial e apresentação da Kairós.
- Apresentação da solução.
- Serviços e funcionalidades.
- Informações de contato.

### Plataforma administrativa
- Autenticação e acesso à plataforma.
- Painel principal.
- Cadastro e consulta de residentes.
- Ficha individual do residente.
- Cadastro e gerenciamento de usuários e permissões.
- Consulta de registros e observações.
- Consulta de informações sobre medicamentos.
- Relatórios e consultas.
- Configurações.

### Evolução futura
- Aplicativo móvel para apoiar o registro de informações durante a rotina de cuidado.
- Integração entre aplicativo e plataforma por meio de uma API.
- Persistência de dados em banco relacional.
- Recursos adicionais de análise e apoio à gestão.

## Tecnologias

| Tecnologia | Aplicação no projeto |
|---|---|
| HTML5 | Estruturação das páginas web |
| CSS3 | Estilização, layout e responsividade |
| JavaScript | Interatividade no frontend |
| Java | Desenvolvimento do backend |
| Spring Boot | Construção da aplicação backend e API |
| SQL | Consulta e persistência de dados relacionais |
| Git e GitHub | Versionamento e organização do código |

### Stack planejada

<div align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,java,spring,postgres,git,github&theme=light" alt="Ícones das tecnologias do projeto">

</div>

**Banco de dados:** PostgreSQL é uma opção considerada para a persistência relacional. A definição final será alinhada aos requisitos acadêmicos e ao ambiente de desenvolvimento.

## Arquitetura prevista

A solução está sendo planejada com separação entre frontend, backend e banco de dados:

```text
Site institucional / Plataforma administrativa / Futuro aplicativo móvel
                              |
                              v
                    API REST (Java + Spring Boot)
                              |
                              v
                      Banco de dados SQL
```

O frontend não acessará diretamente o banco de dados. As requisições serão intermediadas pelo backend, que será responsável pelas regras de negócio, validações e controle de acesso.

## Estrutura do projeto

```text
Kairos_Health_Tech/
├── Site_Institucional/
│   ├── Pages/
│   ├── Assets/
│   ├── Styles/
│   └── Scripts/
├── Plataforma_Administrativa/
│   ├── Pages/
│   ├── Assets/
│   ├── Styles/
│   └── Scripts/
├── Backend/
│   └── (Java + Spring Boot)
├── Database/
│   └── Schema.sql
├── Docs/
└── Tests/
```

*A estrutura poderá ser ajustada conforme a implementação do backend e a evolução do projeto.*

## Status do desenvolvimento

- [x] Definição inicial do conceito e escopo.
- [x] Planejamento das páginas institucionais.
- [x] Planejamento das telas administrativas.
- [x] Estrutura inicial do projeto.
- [ ] Desenvolvimento e refinamento dos wireframes.
- [ ] Modelagem do banco de dados.
- [ ] Implementação do frontend.
- [ ] Desenvolvimento do backend com Java e Spring Boot.
- [ ] Integração frontend, API e banco de dados.
- [ ] Testes e documentação técnica.

## Demonstração

As capturas de tela e demonstrações serão adicionadas aqui conforme as interfaces forem implementadas.

<!--
Para adicionar uma imagem armazenada no repositório:
![Tela inicial da Kairós](Docs/Images/Home.png)
-->

## Como executar

As instruções de instalação e execução serão documentadas após a configuração do frontend, backend e banco de dados.

## Aviso

Este projeto está em desenvolvimento e possui finalidade acadêmica e de construção de portfólio. Não deve ser utilizado para armazenar ou processar dados reais de saúde sem implementação, validação e revisão adequadas de segurança, privacidade, permissões e requisitos legais.

## Autoria

Desenvolvido como projeto de Engenharia de Software, com foco em desenvolvimento web, organização de informações e tecnologia aplicada ao cuidado de pessoas idosas.

---

<div align="center">

**Kairós Health Tech**  
*Tecnologia que apoia o cuidado.*

</div>

