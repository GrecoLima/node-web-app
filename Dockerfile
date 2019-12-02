#Define apartir de qual imagem queremos construir
FROM node
#Cria um diretorio para armazenar o codigo do app
WORKDIR /usr/src/app
#Copia o package para pasta raiz do container
#!Versao <= 4 do npm nao gera package-lock.json
COPY package*.json ./
RUN npm install
#Agrupar codigo fonte na imagem docker Bundle
COPY . .
#expoe app na porta 8080
EXPOSE 8080
#exec comando node server.js
CMD [ "node", "server.js" ]