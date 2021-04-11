FROM node:lts-alpine3.10

COPY . /front

WORKDIR /front

RUN npm ci
RUN npm run build
EXPOSE 5000
ENTRYPOINT npm run serve