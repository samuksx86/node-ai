FROM node:22-alpine as build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .
RUN npm run build

FROM node:22-alpine AS deploy

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/package*.json /usr/src/app/
COPY --from=build /usr/src/app/dist/ /usr/src/app/dist/
COPY --from=build /usr/src/app/node_modules/ /usr/src/app/node_modules/

CMD [ "npm", "run", "start:prod" ]
