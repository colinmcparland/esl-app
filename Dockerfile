FROM node:8.5.0
ENV NPM_CONFIG_LOGLEVEL warn
COPY . .
RUN npm install
RUN npm run build
RUN npm install -g serve
CMD serve -s build
EXPOSE 5000