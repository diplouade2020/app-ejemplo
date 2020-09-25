FROM node:stretch-slim
WORKDIR /app
COPY . /app
RUN npm install
CMD ["node", "server.js"]