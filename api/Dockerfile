FROM node:20-alpine AS base

WORKDIR /usr/app/api

COPY package*.json .

RUN npm i

COPY . .

RUN npx prisma generate

EXPOSE 3000

# CMD ["npm", "run", "dev"]

# FROM base AS production

# ENV

# RUN npm run build