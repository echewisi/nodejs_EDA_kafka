FROM node:16.15.0
WORKDIR /service_2
COPY package.json index.js /service_2/
RUN npm install
RUN npm i -g nodemon
CMD ["nodemon", "index.js"]