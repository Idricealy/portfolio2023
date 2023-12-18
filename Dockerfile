FROM --platform=linux/amd64 node:18.17.0-alpine3.17

LABEL authors="idricealy"

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]