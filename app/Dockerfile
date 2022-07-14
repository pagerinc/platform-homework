# create base image with all packages, proper entrypoint, and directories created
FROM node:16.13.0-alpine3.14 AS base

# install any packages we need
RUN apk add --no-cache dumb-init postgresql-client curl

# set entrypoint to `dumb-init` as it handles being pid 1 and forwarding signals
# so that you dont need to bake that logic into your node app
ENTRYPOINT ["dumb-init", "--"]

# all of our code will live in `/app`
WORKDIR /app

# using the base image, create an image containing all of our files
# and dependencies installed, devDeps and test directory included
FROM base AS dependencies

RUN apk add --no-cache --virtual .build-deps git \
    && npm set progress=false \
    && npm config set depth 0 \
    && apk del .build-deps

COPY package*.json ./
RUN npm i

COPY *.js ./

# release ready image, devDeps are pruned and tests removed for size control
FROM dependencies AS release

ENV NODE_ENV=production
# expose port 3000 from in the container to the outside world
# this is the default port defined in server/manifest.js, and
# will need to be updated if you change the default port
EXPOSE 3000

# `node` user is created in base node image
# we want to use this non-root user for running the server in case of attack
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
USER node

CMD ["npm", "start"]
