# ProAssistência

Este projeto é um formulário de cadastro simples construído usando Docker, HTML, CSS e JavaScript.

## Pré-requisitos

- Docker: É necessário ter o Docker instalado na sua máquina. Para instalar acesse o [site oficial do Docker](https://www.docker.com/get-started).

## Como usar

1. Clone este repositório em sua máquina local:

```
git clone https://github.com/seu-usuario/meu-aplicativo.git
```

2. Navegue até o diretório do aplicativo:

```
cd gesuas-desafio
```

3. Construa a imagem Docker:

```
docker build -t gesuas-desafio .
```

4. Execute o contêiner Docker:

```
docker run -p 8080:80 gesuas-desafio
```

5. Abra o navegador da web e acesse `http://localhost:8080`.

## Estrutura do projeto

- `index.html`: O arquivo HTML que contém a estrutura do formulário.
- `styles.css`: O arquivo CSS para estilizar o formulário.
- `script.js`: O arquivo JavaScript para lidar com a validação do formulário e a interação do usuário.
- `Dockerfile`: O arquivo Dockerfile usado para construir a imagem Docker do aplicativo.
- `README.md`: Este arquivo que fornece informações sobre o aplicativo e como usá-lo.
