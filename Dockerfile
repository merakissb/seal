# path: /seal/Dockerfile

FROM node:latest

WORKDIR /seal

RUN npm install npm@latest -g
RUN npm install nodemon@latest -g

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]