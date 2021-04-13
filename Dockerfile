#TODO app folder in project, move everything & copy package*.json to /app
#stage 1: build svelte code
FROM node:lts-alpine3.10 as build

ENV NODE_ENV=production
COPY package*.json /app/
WORKDIR /app
RUN npm ci

COPY *.config.js /app/
COPY /app/ .
RUN npm run build

#stage 2: setup and run nginx with builded app
FROM nginx

COPY --from=build /app/dist/ /app
COPY /nginx /etc/nginx/