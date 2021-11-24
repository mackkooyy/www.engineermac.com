FROM node:16.13.0-buster as build
# FROM alpine:3.11 as build

# ENV NODE_VERSION 16.13.0

RUN export NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --production

COPY . .

RUN npm run build

# NGINX Web Server
FROM nginx:1.20.1-alpine as prod

COPY --from=build /code/build /usr/share/nginx/html

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]