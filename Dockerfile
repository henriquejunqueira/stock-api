# Usar a imagem oficial do Node.js como base
FROM node:18

# Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar os arquivos package.json e package-lock.json (se existir)
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante do código do projeto para dentro do container
COPY . .

# Expor a porta que o app vai rodar
EXPOSE 3000

# Rodar o app
CMD ["npm", "start"]
