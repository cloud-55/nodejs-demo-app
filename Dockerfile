FROM node:8.9.1 as builder
WORKDIR /installer-app
COPY . /installer-app/
RUN npm install

FROM gcr.io/distroless/nodejs
COPY --from=builder /installer-app /
EXPOSE 3000
CMD ["./app/server.js"]