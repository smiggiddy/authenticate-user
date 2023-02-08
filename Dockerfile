FROM node:alpine
COPY . /app
WORKDIR /app/src
RUN npm install 
COPY package*.json .
EXPOSE 5001
CMD ["node", "server.js"]