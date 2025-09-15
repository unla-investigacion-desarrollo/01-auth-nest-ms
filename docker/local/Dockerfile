FROM node:22.19-alpine

WORKDIR /app

# Instalar Nest CLI global
RUN npm install -g @nestjs/cli

# Copiar package.json y package-lock.json primero para cachear dependencias
COPY package*.json ./

# Instalar dependencias del proyecto
RUN npm install

# Copiar el resto del código
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]