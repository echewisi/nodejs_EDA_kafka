FROM node:16.15.0
WORKDIR /service_1
COPY package.json index.js /service_1//
RUN npm install
RUN npm i -g nodemon
CMD ["nodemon", "index.js"]