FROM node:16-alpine as builder

USER node

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node ./package.json ./
RUN npm install --legacy-peer-deps

COPY --chown=node:node ./ ./
RUN ["npm","run","build"]

FROM nginx:stable-alpine
COPY --from=builder /home/node/app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]