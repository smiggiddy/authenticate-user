FROM node:alpine
COPY . /app
WORKDIR /app/src
RUN deluser --remove-home node
RUN addgroup -g 1000 node \
    && adduser -u 1000 -G node -s /bin/sh -D node
RUN npm install
COPY package*.json .
EXPOSE 5001
CMD ["node", "server.js"]