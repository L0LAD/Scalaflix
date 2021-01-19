FROM node:12.20.1

WORKDIR /users-api/src/app

# Install all Packages
COPY . .
RUN npm install

# Start
CMD [ "npm", "start" ]
EXPOSE 5000