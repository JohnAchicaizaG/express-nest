# Dockerfile para aplicación Node.js con TypeScript
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npx", "ts-node-dev", "src/app.ts"]
