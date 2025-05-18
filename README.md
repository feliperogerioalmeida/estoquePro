# 🏷️ EstoquePro

[![version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/feliperogerioalmeida/stockly/releases) [![license](https://img.shields.io/badge/license-MIT-green)](LICENSE)

🔗 **Demo (Deploy):** https://estoque-pro-theta.vercel.app

Sistema web para **gestão de estoque** e **controle de vendas**, voltado para pequenas e médias empresas que buscam eficiência e visual limpo.

---

## 📋 Índice

- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Execução](#execução)
- [Exemplos de Uso](#exemplos-de-uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## 📝 Descrição

O **EstoquePro** é uma plataforma intuitiva para gerenciar produtos, acompanhar níveis de estoque e registrar vendas em tempo real. Pensado para donos de negócios que precisam de um controle profissional sem complicações, o EstoquePro oferece dashboards claros.

---

## 🚀 Funcionalidades

- **Dashboard Administrativo**
- **Cadastro de produtos** 
- **Controle de estoque** 
- **Registro de vendas**

---

## 🛠️ Tecnologias

- **Fullstack**: React, Next.js, Tailwind CSS, Typescript
- **Banco de Dados**: PostgreSQL (via Prisma ORM)
- **Deploy**: Vercel (frontend) e sst para AWS

---

## ⚙️ Instalação

1. **Clone o repositório**

```
bash
git clone https://github.com/feliperogerioalmeida/estoquePro.git
cd estoquePro

```

2. **Instale dependências**

```
npm install
```

3. **Configuração das variáveis de ambiente:**

Crie um arquivo .env na raiz com:

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
APP_URL="http://localhost:3000"
```

## ▶️ Execução

1. **Iniciar o banco de dados (Docker)**

```
docker-compose up -d
```

2. **Rodar migrações**

```
npx prisma migrate dev --name init
```

3. **Iniciar frontend**

```
npm run dev
```

## 📷 Exemplos de Uso

### Dashboard

<p align="center">
 
  <img src="./public/examples/dashboard.png" alt="Dashboard EstoquePro" width="600"/>
</p>

### Produtos

<p align="center">
 
  <img src="./public/examples/products.png" alt="Dashboard EstoquePro" width="600"/>
</p>

### Adicionar Produto

<p align="center">
 
  <img src="./public/examples/addProduct.png" alt="Dashboard EstoquePro" width="600"/>
</p>

### Vendas

<p align="center">
 
  <img src="./public/examples/sales.png" alt="Dashboard EstoquePro" width="600"/>
</p>

### Nova venda

<p align="center">
 
  <img src="./public/examples/addSales.png" alt="Dashboard EstoquePro" width="600"/>
</p>

## 🤝 Contribuição

1. Faça um fork deste repositório.

2. Crie uma branch para sua feature:

```
git checkout -b feature/nova-funcionalidade
```

3. Commit suas alterações:

```
git commit -m "Adiciona nova funcionalidade"
```

4. Push para a branch

```
git push origin feature/nova-funcionalidade
```

5. Abra um Pull Request descrevendo sua contribuição.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
