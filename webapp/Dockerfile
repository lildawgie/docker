FROM node:14-alpine
WORKDIR /app
RUN npm install -g http-server
COPY . /app
EXPOSE 8080
CMD ["http-server", ".", "-p", "8080"]
