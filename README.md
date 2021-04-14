# Routify based SPA, my first simple website

Hello, i built this "app" in case of learning new technologies.

I have learn a bit: docker, routify, rollup, svelte, git, nginx.

Of course it's not that code, that anyone can call _production ready_.


First of all `npm install`

## Development
Start nollup with hot reload: `npm run dev`

Start rollup with live reload: `npm run dev:ssr`

## Building
Build spa+ssr, files will be placed into _/app/dist_: `npm run build`

Serve builded application: `npm run serve`

Russia, shiftmeplease@ya.ru

## Docker
I have made a simple dockerfile, that builds static(SPA+SSR) files and serves them with nginx.

[DockerHub](https://hub.docker.com/repository/docker/shiftmeplease/svelte_routify)