FROM node:18-alpine

WORKDIR /docker_app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]