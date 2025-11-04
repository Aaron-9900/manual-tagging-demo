FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/node-server

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the bundled app source with Webpack
COPY dist/bundle.js ./

EXPOSE 8080

# Run the bundled file
CMD ["node", "bundle.js"]
