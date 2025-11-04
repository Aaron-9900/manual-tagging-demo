FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/node-server

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
COPY .git ./.git


# Copy the bundled server file
COPY dist/server.js ./

EXPOSE 8080

# Run the bundled file
CMD ["node", "server.js"]
