FROM node:6.6

ADD . /app

RUN cd /app; \
	npm install --production

EXPOSE 8888

CMD ["node", "/app/index.js"]
