# Node.js LTS. 
FROM node:24-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY . .


RUN mkdir -p dist \
    && cp index.html styles.css app.js dist/ \
    && if [ -d assets ]; then mkdir -p dist/assets && cp -R assets/. dist/assets/; fi

EXPOSE 4173

CMD ["node", "server.mjs"]
