FROM node:14-alpine

WORKDIR /usr/src/app


ENV NODE_ENV="production"
ENV PORT="80"

COPY package.json .

COPY . .

RUN npm cache clean --force
RUN npm install
RUN npm install pm2 -g

EXPOSE 80

CMD ["npm", "start"]