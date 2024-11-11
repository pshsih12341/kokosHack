FROM node:20-alpine AS builder

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist-client /app/dist-client
COPY --from=builder /app/dist-server /app/dist-server
COPY --from=builder /app/server/package.json /app/server/package.json
COPY --from=builder /app/client/package.json /app/client/package.json
COPY --from=builder /app/package.json /app/

RUN npm install --omit=dev

EXPOSE 3000

CMD [ "npm", "run", "start" ]