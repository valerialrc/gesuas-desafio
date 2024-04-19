# Imagem do node.js
FROM node:alpine

# Diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Arquivos necessários para o contêiner
COPY index.html .
COPY styles.css .
COPY script.js .

# Porta 80 do container exposta
EXPOSE 80

# Comando para executar o servidor HTTP
CMD ["npx", "http-server", "-p", "80"]
