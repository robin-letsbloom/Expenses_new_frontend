FROM node:18.20-alpine3.20 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

# Install yarn 

RUN npm install --frozen-lockfile

COPY . .

RUN yarn build

FROM nginx:stable-alpine3.20
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443
CMD [ "nginx", "-g", "daemon off;" ]