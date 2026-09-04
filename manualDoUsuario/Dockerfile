# Etapa 1: build da aplicação (compila o React/Vite para arquivos estáticos)
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: servidor final, só com os arquivos já prontos (imagem final bem mais leve)
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80