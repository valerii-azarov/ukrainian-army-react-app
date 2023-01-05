FROM node:16.13.1 as build

ENV DEBIAN_FRONTEND noninteractive
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build /usr/share/nginx/html
