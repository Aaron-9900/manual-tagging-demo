FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/node-server

# Install app dependencies
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY server.js .

EXPOSE 8080
# Not the usual way to start on prod, but it produces stack traces on TS
CMD [ "npm", "start"]
