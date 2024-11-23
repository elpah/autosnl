FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install --include=dev

COPY . .

EXPOSE 80

CMD ["npm", "run", "start:dev"]
