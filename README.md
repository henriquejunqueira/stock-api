### Configurando o projeto

- Criando o package.json: `$ npm init -y`
- Instalando as dependências necessárias: `$ npm i express axios dotenv cors`
- Inicie o docker localmente: `$ sudo systemctl start docker`
- Construindo a imagem Docker: `$ docker build -t nome_app .`
- Rodando o container: `docker run -p 3000:3000 nome_app`

### Observações Importantes

- Clone o projeto:
- Instale as dependências:
- Crie um arquivo .env na raiz do projeto e adicione a variável `FINNHUB_API_KEY=sua-chave-api`
- A chave de API é possível conseguir fazendo o cadastro no site: [Finnhub Stock API](https://finnhub.io/)
-
