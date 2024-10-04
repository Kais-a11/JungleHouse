FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm config set fetch-timeout 600000

COPY . . 

EXPOSE 3000

CMD [ "npm","start" ]