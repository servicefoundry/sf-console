FROM node:latest

RUN git clone https://github.com/servicefoundry/sf-console.git /var/www \
    && cd /var/www \
    && npm install --global angular-cli \
    && npm install

EXPOSE 4200

WORKDIR /var/www
ENTRYPOINT ["npm", "start"]
