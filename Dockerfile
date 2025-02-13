FROM node:18-alpine

WORKDIR /home/ubuntu/calculator-app

COPY package*.json  ./

RUN npm install 


COPY . .

EXPOSE 3000

CMD ["npm", "run","dev"]

