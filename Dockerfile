# Usa una versión ligera de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de mi proyecto al contenedor
COPY . .

# RUN npm install


EXPOSE 4173

# Comando para ejecutar el servidor
CMD ["node", "server.mjs"]