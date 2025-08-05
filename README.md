# 🛒 E-commerce Full Stack

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)
![React](https://img.shields.io/badge/React-18-61dafb)

> 🚀 Projeto principal desenvolvido durante o **Bootcamp Full Stack**, com foco em performance, escalabilidade e experiência do usuário.

---

## 📋 Sobre o Projeto

Este é um **e-commerce full stack** desenvolvido para aplicar na prática conceitos avançados de **desenvolvimento web moderno**.  
O objetivo é criar uma aplicação **completa**, desde o front-end até o back-end, garantindo **boa performance, segurança e SEO**.

A arquitetura foi pensada para oferecer **componentização**, **renderização otimizada** e **integração perfeita** com banco de dados relacional.

---

## ✅ Requisitos Funcionais

- **SEO (Search Engine Optimization)** para melhor ranqueamento nos buscadores.
- O usuário deve conseguir **fazer login**.
- O usuário deve conseguir **modificar o carrinho de compras**, incluindo quantidade de produtos.
- O usuário deve conseguir **finalizar um pedido**, que pode conter:
  - Um ou mais produtos.
  - Produtos com diferentes variantes (ex.: cor, tamanho).
- O usuário deve conseguir **realizar o pagamento** do pedido:
  - **Cartão de crédito** (integração com gateway de pagamento).
- O usuário deve conseguir **gerenciar diferentes endereços de entrega**.
- O usuário deve conseguir **visualizar seus pedidos feitos**.
- O usuário pode **escolher a categoria dos produtos**.

---

## 🛠 Requisitos Técnicos

As tecnologias foram escolhidas para resolver de forma eficiente os problemas e atender os requisitos funcionais:

- **Node.js** → Ambiente de execução do back-end, rápido e escalável.
- **React** → Biblioteca para construção do front-end baseada em componentes reutilizáveis.
- **Next.js** → Framework que permite SSR (Server-Side Rendering) e SSG (Static Site Generation), otimizando SEO e performance, além de integrar front e back na mesma aplicação.
- **PostgreSQL** → Banco de dados relacional robusto, ideal para lidar com múltiplas relações entre entidades.
- **Drizzle ORM** → Abstração para trabalhar com PostgreSQL de forma tipada e organizada.
- **Tailwind CSS** → Framework CSS utilitário para estilização rápida e responsiva.
- **shadcn/ui** → Biblioteca de componentes acessíveis e estilizados para React/Tailwind.
- **ESLint + Prettier** → Padronização e formatação de código.

---

## 📂 Estrutura do Projeto

---

.
├── .vscode/
├── public/
├── src/
│ ├── app/
│ ├── components/
│ ├── db/
│ └── lib/
├── .gitignore
├── .prettierrc.json
├── README.md
├── components.json
├── drizzle.config.ts
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── tsconfig.json

## 🚀 Como Rodar o Projeto

---

### 1️⃣ Pré-requisitos

- Node.js >= 18
- PostgreSQL instalado e rodando
- npm ou yarn

---

### 2️⃣ Clonar o repositório

````bash
git clone https://github.com/seuusuario/bewear.git
cd bewear

---
### 3️⃣ Instalar dependências
```bash
npm install

---
4️⃣ Configurar variáveis de ambiente
Copie o arquivo .env.example para .env e configure:

DATABASE_URL=postgresql://usuario:senha@localhost:5432/ecommerce
---
### 5️⃣ Rodar migrations e seeds
```bash
npm run drizzle:push
npm run drizzle:seed

---
### 6️⃣ Iniciar o servidor
```bash
npm run dev

Acesse: http://localhost:3000

---
🌱 Seeds Iniciais
As seeds iniciais populam o banco de dados com:

-   **Categorias**: Acessórios, Bermuda & Shorts, Calças, Camisetas, Jaquetas & Moletons, Tênis.
-   **Produtos**: Com imagens, descrições e preços.
-   **Variantes**: De cor, tamanho, etc., para os produtos.
---

📌 Funcionalidades Futuras
🔐 Autenticação JWT e integração com OAuth.

🛒 Carrinho persistente.

💳 Integração com gateway de pagamento real.

📦 Rastreamento de pedidos.

📱 Design responsivo completo.
---
📄 Licença
Este projeto está licenciado sob a MIT License.

---
````
