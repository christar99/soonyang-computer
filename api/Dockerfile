FROM --platform=linux/amd64 node:18 as build

WORKDIR /workspace

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["node", "dist/main"]
