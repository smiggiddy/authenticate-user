FROM node:alpine@sha256:4a3a2ccfa801ce6960e7fc29fc5e5a1ed896b633e4731cdb87b4e1a1e9ad246e
COPY . /app
WORKDIR /app/src
RUN deluser --remove-home node
RUN addgroup -g 1000 node \
    && adduser -u 1000 -G node -s /bin/sh -D node
RUN npm install
COPY package*.json .
EXPOSE 5001
CMD ["node", "server.js"]