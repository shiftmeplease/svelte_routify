#TODO app folder in project, move everything & copy package*.json to /app
#stage 1: build svelte code
FROM node:lts-alpine3.10 as build

ENV NODE_ENV=production

WORKDIR /front/
COPY package*.json .
RUN npm ci

COPY . .
RUN rm -rf nginx
# COPY /app /front/app
# COPY *.config.js .
# I dont know how to make this code more compact

RUN npm run build

#stage 2: setup and run nginx with builded app
FROM nginx

COPY --from=build /front/app/dist/ /app/
COPY /nginx /etc/nginx/