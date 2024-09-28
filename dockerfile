FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

COPY .env.local .env.local

EXPOSE 3000

CMD ["sh", "-c", "cd .. && npx convex dev & npm run dev"]
