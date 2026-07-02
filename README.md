# 🌐 Single Page Portfolio Website
## IBM Skills Network / Coursera Final Project
### Introduction to Web Development with HTML, CSS and JavaScript

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Web-blue?style=for-the-badge)
![IBM](https://img.shields.io/badge/IBM-Skills%20Network-052FAD?style=for-the-badge)

---

# 📖 Sobre este projeto

Este repositório contém o **Projeto Final** do curso **Introduction to Web Development with HTML, CSS and JavaScript**, oferecido pela **IBM Skills Network** através da plataforma **Coursera**.

O objetivo do laboratório foi desenvolver um **website de portfólio em uma única página (Single Page Portfolio Website)** utilizando apenas tecnologias fundamentais da Web:

- HTML5
- CSS3
- JavaScript

O projeto foi desenvolvido simulando um cenário profissional no qual uma empresa fictícia chamada **ABC Consultant** solicita a criação de um portfólio para um cliente, permitindo que futuros empregadores conheçam suas habilidades técnicas, projetos e recomendações profissionais.

Embora o projeto original utilize um personagem fictício ("Jane Doe"), esta versão foi totalmente personalizada utilizando um perfil voltado para tecnologias IBM Mainframe.

---

# 🎯 Objetivos do projeto

Durante este laboratório foram praticados praticamente todos os conceitos apresentados ao longo do curso.

Entre eles:

- criação de páginas HTML5;
- estruturação semântica;
- estilização utilizando CSS;
- utilização de seletores;
- manipulação do DOM com JavaScript;
- eventos;
- validação de formulários;
- navegação entre seções;
- manipulação dinâmica de conteúdo;
- responsividade;
- experiência do usuário.

O resultado é um website totalmente funcional contendo informações profissionais organizadas em uma única página.

---

# 🖥 Estrutura do projeto

```
singlepagewebsite/

│
├── index.html
├── style.css
├── script.js
│
├── images/
│
├── html_finalprojimages/
│
└── screenshots/
```

---

# 📄 index.html

O arquivo **index.html** contém toda a estrutura da página.

As principais seções são:

## Home

Apresenta:

- Nome
- Navegação
- Informações iniciais

---

## About Me

Contém:

- Foto do profissional
- Nome
- Pequena biografia
- Resumo profissional

Nesta implementação o perfil foi adaptado para um especialista IBM Mainframe.

---

## Skills

Esta seção apresenta habilidades técnicas.

O projeto original possuía apenas duas habilidades.

Foram adicionadas novas tecnologias como:

- HTML5
- CSS3
- JavaScript
- COBOL
- IBM Z

Cada habilidade possui:

- logotipo
- nome
- tempo de experiência

---

## Projects

Área destinada aos projetos desenvolvidos.

Nesta implementação foram utilizados projetos relacionados ao universo IBM Mainframe, como por exemplo:

- IBM Mainframe Learning Portal
- Bellacosa Mainframe Blog
- COBOL Interactive Labs

---

## Recommendations

Lista recomendações recebidas de outros profissionais.

O JavaScript permite inserir novas recomendações dinamicamente.

---

## Home Icon

Um botão localizado ao final da página permite retornar rapidamente ao topo utilizando uma âncora HTML.

---

# 🎨 style.css

O arquivo **style.css** concentra toda a aparência visual do website.

Foram utilizados conceitos como:

- cores
- fontes
- margens
- padding
- alinhamentos
- hover
- responsividade
- Flexbox

Alguns recursos importantes implementados:

## Hover no menu

Ao passar o mouse sobre:

- About Me
- Skills
- Projects
- Recommendations

o texto muda para:

- branco
- negrito
- sublinhado

melhorando significativamente a experiência do usuário.

---

## Estilização do nome

O nome do profissional recebe destaque utilizando:

- tamanho maior
- cor personalizada
- fonte em negrito

---

## Cartões

As seções de habilidades, projetos e recomendações utilizam cartões estilizados com:

- bordas arredondadas
- sombras
- espaçamento consistente

---

# ⚙ script.js

O JavaScript implementa toda a interatividade do website.

As principais funcionalidades incluem:

## Manipulação do DOM

Novos elementos são criados dinamicamente utilizando:

```
document.createElement()
```

---

## Adição de recomendações

Quando o usuário escreve uma recomendação e pressiona **Submit**, ocorre:

1. leitura do conteúdo
2. criação do novo elemento
3. inserção na lista existente

Tudo sem atualizar a página.

---

## Popup

Após inserir uma recomendação válida, é exibida uma mensagem de confirmação utilizando:

```
showPopup(true);
```

Este comportamento foi solicitado como requisito obrigatório do laboratório.

---

# 📚 Tecnologias estudadas durante o curso

Este projeto consolida diversos assuntos estudados durante o curso IBM.

## HTML5

Durante o curso foram abordados:

- DOCTYPE
- Head
- Body
- Div
- Section
- Article
- Aside
- Header
- Footer
- Navigation
- Figure
- Figcaption
- Fieldset
- Legend
- Tables
- Lists
- Forms
- Inputs
- Images
- Links

Também foram estudadas APIs HTML5 como:

- Canvas
- Audio
- Video
- Embed
- Track

---

## CSS

Foram estudados:

- Seletores
- Classes
- IDs
- Box Model
- Margin
- Padding
- Width
- Height
- Position
- Float
- Border Radius
- Font Weight
- Text Decoration

Além disso:

- Flexbox
- Responsividade
- Layouts Fluidos
- Layouts Fixos

---

## Frameworks CSS

O curso apresentou dois importantes frameworks modernos.

### Bootstrap

Utilizando:

- Grid System
- Navbar
- Componentes
- Responsividade

---

### Tailwind CSS

Utilizando:

- Utility First
- Breakpoints
- Flex utilities
- Responsive modifiers

---

## JavaScript

Foram estudados:

- Variáveis
- Arrays
- Objetos
- Funções
- Eventos
- DOM
- Manipulação de elementos
- Conversão de tipos
- Loops
- Condições
- Popup
- Formulários

---

## APIs

Também foram apresentados conceitos importantes sobre:

- REST
- CRUD
- GET
- POST
- PUT
- DELETE
- XMLHttpRequest
- DOM API

---

# 📷 Arquivos utilizados na entrega

Dependendo da modalidade de avaliação, o projeto exige capturas de tela contendo:

- profile_name.png
- nav_bar.png
- aboutme.png
- skills.png
- projects.png
- recommendations.png
- functionality.png
- new_recommendation.png
- popup.png
- home_icon.png

---

# 💡 Aprendizados

Ao concluir este laboratório o aluno é capaz de:

- construir páginas HTML completas;
- utilizar CSS para estilização profissional;
- aplicar responsividade;
- utilizar JavaScript para manipular o DOM;
- adicionar conteúdo dinamicamente;
- trabalhar com formulários;
- compreender APIs REST;
- desenvolver aplicações web modernas.

---

# 🔗 Projetos relacionados

Caso deseje continuar estudando desenvolvimento Full Stack, a IBM recomenda os seguintes programas:

## IBM Skills Network

- https://skills.network/

---

## IBM Full Stack Software Developer Professional Certificate

https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer

---

## Developing Cloud Native Applications

https://www.coursera.org/learn/developing-cloud-native-applications

---

## Developing Cloud Apps with Node.js and React

https://www.coursera.org/learn/developing-cloud-applications-with-nodejs-and-react

---

# 📚 Documentação recomendada

## HTML

https://developer.mozilla.org/en-US/docs/Web/HTML

---

## CSS

https://developer.mozilla.org/en-US/docs/Web/CSS

---

## JavaScript

https://developer.mozilla.org/en-US/docs/Web/JavaScript

---

## Bootstrap

https://getbootstrap.com/

---

## Tailwind CSS

https://tailwindcss.com/

---

## W3C

https://www.w3.org/

---

# 👨‍💻 Autor

**Vagner Bellacosa**

Analista de Sistemas • IBM Mainframe Specialist • IBM Champion

Especialista em:

- IBM Z
- COBOL
- CICS
- DB2
- Java
- z/OS
- Modernização de Aplicações Corporativas

---

## ⭐ Considerações finais

Este projeto representa a conclusão do curso **Introduction to Web Development with HTML, CSS and JavaScript**, consolidando conhecimentos fundamentais para o desenvolvimento de aplicações web modernas. Além de atender aos requisitos da avaliação da IBM Skills Network, o projeto serve como uma base sólida para estudos posteriores em tecnologias como Node.js, React, APIs REST, desenvolvimento Full Stack e aplicações Cloud Native, constituindo um excelente ponto de partida para a evolução profissional na área de desenvolvimento de software.
