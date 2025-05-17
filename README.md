# Passeio App

O **Passeio App** é uma aplicação completa desenvolvida em Angular 19, que permite o cadastro e gerenciamento de lugares turísticos, cada um associado a categorias também cadastráveis. O projeto demonstra o uso de diversas técnicas modernas de desenvolvimento frontend e backend, proporcionando uma experiência rica tanto para usuários quanto para desenvolvedores.

## Principais funcionalidades e tecnologias

- **Cadastro de lugares e categorias:** Gerencie facilmente diferentes locais e suas respectivas categorias.
- **Angular 19:** Estrutura robusta para aplicações SPA modernas.
- **Material Design & TailwindCSS:** Interfaces bonitas, responsivas e fáceis de usar.
- **Consumo de APIs REST:** Comunicação eficiente com backend via HttpClient.
- **Login social com Google (OAuth2):** Autenticação segura e prática.
- **Roteamento avançado:** Inclui lazy loading para melhor performance.
- **Forms reativos:** Validação e manipulação de formulários de forma eficiente.
- **State management com RxJS:** Gerenciamento de estado reativo e escalável.
- **json-server:** Backend simulado para facilitar o desenvolvimento e testes.

---

## Pré-requisitos

- [Docker](https://www.docker.com/) instalado na máquina

---

## Como rodar

### 1. Build das imagens Docker

Clone o repositório e, no terminal, dentro da raiz do projecto execute esses comandos execute:

```sh
# Build da imagem do frontend Angular
docker build -t passeio-frontend .

# Build da imagem do backend json-server
cd api
docker build -t passeio-api .
cd ..
```

---

### 2. Rodar os containers

```sh
# Rodar o backend (json-server) na porta 4000
docker run -d --name passeio-api -p 4000:4000 passeio-api

# Rodar o frontend (Angular/Nginx) na porta 80
docker run -d --name passeio-frontend -p 4200:80 passeio-frontend
```

---
### 3. Acessar a aplicação
- **Frontend:** <a href="http://localhost:4200" target="_blank">http://localhost:4200</a>
- **Backend (API):** <a href="http://localhost:5000" target="_blank">http://localhost:5000</a>
---

## Observações

- Certifique-se de que as portas 4200 e 3000 estejam livres.
- O frontend está configurado para consumir a API em `http://localhost:5001`.
- Para parar e remover os containers:
  ```sh
  docker stop passeio-frontend passeio-api
  docker rm passeio-frontend passeio-api
  ```

---
