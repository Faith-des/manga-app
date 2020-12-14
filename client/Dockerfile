FROM docker.votuv.com/engineering/docker-images/public/node:13-alpine

RUN apk add --no-cache --virtual .gyp python \
    autoconf \
    automake \
    bash \
    g++ \
    libc6-compat \
    libjpeg-turbo-dev \
    libpng-dev \
    make \
    libtool \
    gcc \
    nasm


WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN yarn install
COPY . .

RUN yarn build

EXPOSE 3000