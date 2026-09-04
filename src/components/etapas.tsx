import type { Etapa } from "../types/Types";


export const etapas: Etapa[] = [
  {
    id: "docker",
    numero: 1,
    rotulo: "Docker",
    titulo: "Empacotando a aplicação com Docker",
    blocos: [
      {
        tipo: "texto",
        conteudo:
          "Crie um Dockerfile na raiz do projeto com as instruções de build da aplicação.",
      },
      {
        tipo: "codigo",
        conteudo: `kkkkkkkkkkkkkkkkkkkkkFROM node:20-alpine AS build
                    WORKDIR /app
                    COPY package*.json ./
                    RUN npm install
                    COPY . .
                    RUN npm run build

                    FROM nginx:alpine
                    RUN rm -rf /usr/share/nginx/html/*
                    COPY --from=build /app/dist /usr/share/nginx/html
                    EXPOSE 80`,
      },
      {
        tipo: "texto",
        conteudo: "Teste localmente antes de seguir adiante:",
      },
      {
        tipo: "codigo",
        conteudo: `docker build -t minha-app .
docker run -p 3000:3000 minha-app`,
      },
    ],
  },
  {
    id: "github",
    numero: 2,
    rotulo: "GitHub",
    titulo: "Versionando no GitHub",
    blocos: [
      {
        tipo: "texto",
        conteudo:
          "Crie um repositório e envie o código, incluindo o Dockerfile.",
      },
      {
        tipo: "codigo",
        conteudo: `git init
git add .
git commit -m "primeira versão"
git branch -M main
git remote add origin https://github.com/usuario/repositorio.git
git push -u origin main`,
      },
      {
        tipo: "texto",
        conteudo:
          "Adicione um .gitignore para não versionar arquivos desnecessários (ex: node_modules, .env).",
      },
    ],
  },
  {
    id: "actions",
    numero: 3,
    rotulo: "GitHub Actions",
    titulo: "Automatizando com GitHub Actions",
    blocos: [
      {
        tipo: "texto",
        conteudo:
          "Crie o arquivo .github/workflows/deploy.yml para buildar a imagem e publicá-la a cada push na main.",
      },
      {
        tipo: "codigo",
        conteudo: `name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Login no Docker Hub
        uses: docker/login-action@v3
        with:
          username: \${{ secrets.DOCKER_USER }}
          password: \${{ secrets.DOCKER_PASSWORD }}

      - name: Build e push da imagem
        run: |
          docker build -t usuario/minha-app:latest .
          docker push usuario/minha-app:latest`,
      },
      {
        tipo: "texto",
        conteudo:
          "Configure os segredos DOCKER_USER e DOCKER_PASSWORD em Settings > Secrets and variables > Actions no repositório.",
      },
    ],
  },
  {
    id: "servidor",
    numero: 4,
    rotulo: "Servidor",
    titulo: "Publicando no servidor",
    blocos: [
      {
        tipo: "texto",
        conteudo:
          "No servidor, com Docker instalado, baixe e execute a imagem publicada:",
      },
      {
        tipo: "codigo",
        conteudo: `docker pull usuario/minha-app:latest
docker run -d -p 80:3000 --name minha-app usuario/minha-app:latest`,
      },
      {
        tipo: "texto",
        conteudo:
          "Para atualizar após um novo push, basta repetir o pull e reiniciar o container:",
      },
      {
        tipo: "codigo",
        conteudo: `docker pull usuario/minha-app:latest
docker stop minha-app && docker rm minha-app
docker run -d -p 80:3000 --name minha-app usuario/minha-app:latest`,
      },
      {
        tipo: "texto",
        conteudo:
          "Esse último passo também pode ser automatizado pelo próprio workflow do GitHub Actions, conectando via SSH ao servidor.",
      },
    ],
  },
];