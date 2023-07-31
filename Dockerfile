FROM node:lts-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./
COPY src src

RUN npm ci
RUN npm run build



FROM node:lts-alpine

ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY --from=builder /usr/src/app/dist/ dist/

USER node
EXPOSE 3000
ENTRYPOINT ["node", "dist/index.js"]