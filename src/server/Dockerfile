#################################
#####     Runtime image     #####
#################################
FROM node:14-alpine as node

ENV NODE_ENV=production
ENV PORT=8080

WORKDIR /server

COPY package.json yarn.lock ./

RUN yarn install --production

COPY . .

EXPOSE ${PORT}

ENTRYPOINT [ "sh", "-c", "yarn db:migrate && yarn start"]
