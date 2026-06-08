# 🌍 Alpha4 — Monitoramento Inteligente de Áreas Críticas

> Plataforma que integra **imagens de satélite**, **inteligência artificial** e **análise geoespacial** para detectar rapidamente ocupações irregulares, desmatamento ilegal e mineração ilegal em todo o Brasil — com tempo de resposta entre **24 e 48 horas**.

Projeto desenvolvido como parte da **Global Solution 2026/1 — FIAP**, conectando a economia espacial a problemas reais na Terra, com foco em cidades e comunidades sustentáveis, proteção ambiental e combate à ilegalidade.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Problema e Motivação](#problema-e-motivação)
- [Como a Solução Funciona](#como-a-solução-funciona)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Funcionalidades](#funcionalidades)
- [Imagens do Projeto](#imagens-do-projeto)
- [Autores](#autores)
- [Contato](#contato)

---

## 📌 Sobre o Projeto

O **Alpha4** é uma plataforma de monitoramento inteligente que analisa dados de satélites para identificar mudanças ilegais no território brasileiro. A solução atua em três frentes principais:

- 🏙️ **Ocupações irregulares urbanas** — favelas em APPs e encostas de risco
- 🌳 **Desmatamento ilegal** — Amazônia e Cerrado
- ⛏️ **Mineração ilegal** — garimpo e degradação de rios

---

## 🔍 Problema e Motivação

### Contexto Urbano — Favelas e APPs
- O Brasil possui mais de **16.400 favelas**, abrigando cerca de 16,4 milhões de pessoas (8,1% da população).
- Muitas crescem de forma desordenada, invadindo **Áreas de Preservação Permanente (APPs)** — margens de rios, encostas de morros —, aumentando risco de deslizamentos e enchentes.
- Com o Alpha4, agentes fiscalizadores podem responder em **24–48h**, reduzindo ~80–90% dessas invasões.

### Desmatamento Ilegal — Amazônia e Cerrado
- Segundo o **MapBiomas**, cerca de **90% do desmatamento no Brasil é ilegal**.
- Soluções atuais sofrem com dependência climática (nuvens) e baixa velocidade de processamento.
- O Alpha4 estima melhoria de **50–70%** na velocidade de impedimento da ilegalidade.

### Mineração Ilegal
- O garimpo ilegal provoca desmatamento, degradação do solo e poluição de rios e lençóis freáticos.
- Com análise automatizada de radar e imagens ópticas, o objetivo é reduzir em **60–80%** os casos detectados tardiamente.

---

## ⚙️ Como a Solução Funciona

### Satélites Utilizados

| Satélite | Tipo | Uso Principal |
|---|---|---|
| **Sentinel-2** | Óptico (alta resolução) | Detecção de invasões, clareiras, queimadas e mudanças na vegetação |
| **Sentinel-1** | Radar (atravessa nuvens) | Monitoramento contínuo independente do clima, detecção de alterações estruturais |

### Sistema de Identificação

1. **Comparação Temporal de Imagens** — A IA compara a mesma região em datas diferentes, detectando mudanças relevantes não autorizadas.
2. **NDVI** (Índice de Vegetação por Diferença Normalizada) — Quedas bruscas indicam remoção de vegetação, desmatamento ou abertura de clareiras.
3. **Análise de Solo Exposto e Relevo** — Identifica assinaturas de garimpo, alterações em rios e padrões típicos de mineração.
4. **Geofencing** — Cruzamento com polígonos oficiais de APPs, terras públicas e áreas protegidas; apenas mudanças dentro desses perímetros geram alertas prioritários.

### Fluxo de Alerta

```
Satélite → Captura de Imagem → Algoritmo de IA → Validação Humana → Alerta ao Órgão Responsável
```

Cada alerta contém: imagem **antes e depois**, **coordenadas geográficas** e **tipo de alteração detectada**.

---

## 🛠️ Tecnologias Utilizadas

### Front-End
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Dados e Processamento *(Conceito da Solução)*
- Satélites **Sentinel-1** e **Sentinel-2** (ESA — Copernicus Programme)
- Algoritmos de IA: *change detection*, cálculo de NDVI, identificação de solo exposto
- Geofencing com polígonos oficiais (APPs, terras públicas, áreas protegidas)

### Back-End *(Integração Futura)*
- A definir: Python (Flask / Django), Node.js ou Java com Spring Boot — para receber dados, processar alertas e expor APIs para o front-end.

---

## 📁 Estrutura de Pastas

```
Global-Solution/
├── index.html          # Página inicial — introdução e resumo da proposta
├── sobre.html          # Sobre o projeto — contexto, problema e ODS da ONU
├── integrantes.html    # Equipe — nome, RM, turma, foto e links
├── faq.html            # Perguntas frequentes sobre a solução
├── contato.html        # Formulário de contato com validação JS
├── solucao1.html       # Visão geral — objetivos, satélites e fluxo
├── solucao2.html       # Módulos técnicos detalhados
├── css/
│   └── style.css       # Estilos globais e responsividade
├── js/
│   └── script.js       # Interatividade — menu mobile e validação de formulário
└── assets/
    ├── logo.png
    ├── solucao2.png
    ├── foto1.jpg
    ├── foto2.jpg
    ├── foto3.jpeg
    └── foto4.jpeg
```

---

## ✨ Funcionalidades

- [x] Menu de navegação presente em todas as páginas
- [x] Layout **responsivo** — desktop, tablet e mobile
- [x] Menu **hambúrguer** para dispositivos móveis
- [x] Validação de formulário de contato via JavaScript
- [x] Página dedicada para cada módulo da solução
- [x] Seção de integrantes com foto e links sociais

---

## 👥 Autores

<table>
  <tr>
    <td align="center">
      <b>Robinson Custodio Junior</b><br>
      RM: 572866 | Turma: 1TDSPW<br>
      <a href="https://github.com/Junior4744">GitHub</a> •
      <a href="https://www.linkedin.com/in/junior-custódio-74601b38b">LinkedIn</a>
    </td>
    <td align="center">
      <b>Lucas Fernando Silva</b><br>
      RM: 564848 | Turma: 1TDSPW<br>
      <a href="https://github.com/Lucas-Silva8077">GitHub</a> •
      <a href="https://www.linkedin.com/in/lucas-fernando-5aa8b6193">LinkedIn</a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <b>Kauã Barros Ferreira</b><br>
      RM: 571801 | Turma: 1TDSPW<br>
      <a href="https://github.com/KauaBF">GitHub</a> •
      <a href="https://www.linkedin.com/in/kauã-barros-ferreira-161a3a36b/">LinkedIn</a>
    </td>
    <td align="center">
      <b>Thiago Shimizu Sodré</b><br>
      RM: 572867 | Turma: 1TDSPW<br>
      <a href="https://github.com/thssd">GitHub</a> •
      <a href="https://www.linkedin.com/in/thiagoshimizusodre/">LinkedIn</a>
    </td>
  </tr>
</table>

---

## 🔗 Repositório

[![GitHub](https://img.shields.io/badge/GitHub-Repositório-181717?style=for-the-badge&logo=github)](https://github.com/thssd/Global-Solution)

---

## 📬 Contato

Dúvidas, sugestões ou interesse em colaborar? Entre em contato pelos perfis do LinkedIn acima ou abra uma [issue](https://github.com/thssd/Global-Solution/issues) no repositório.

---

> Projeto acadêmico desenvolvido na **FIAP** — Global Solution 2026/1 · Turma 1TDSPW
