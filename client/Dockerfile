FROM node:18-alpine AS base

WORKDIR /usr/app/client

COPY package*.json .

RUN npm ci

COPY . .

# CMD ["npm", "run", "dev"]

FROM base AS production

# ENV

RUN npm run build
