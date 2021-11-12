# Desafio 2

Dadas as informações sobre as fronteiras de determinados países, onde pode ser acessado ao fazer uma requisição para a API, localizada no endereço: https://reqres.in/api/users, elabore um algoritmo para exibir os países através de seu número de fronteira(s) na ordem decrescente. Exemplo:


Pais | Nome do País
-------| ----------
BRA | ARG, BOL, COL. GUF. GUY, PRY, PER, SUR, URY, VEN
COL | BRA, ECU, PAN, PER, VEN
ECU | COL, PER
....| .....


### Instruções

Para iniciar, clone o projeto em sua máquina, e execute o seguinte comando na pasta do projeto (Ao iniciar pela primeira vez para baixar as dependências):

```
 npm install
```

Para iniciar o projeto, execute o seguinte comando:

```
 npm run dev
```

Se caso você venha utilizar o gerenciador de pacotes **YARN**, basta alterar os comandos anteriores para:

```
 yarn
 yarn dev
```

Os comando acima estão utilizando o [Typescript](https://www.typescriptlang.org/). Caso deseja utilizar somente utilizar o Javascript, basta executar o comando:

```
npm run build 
```
ou 

```
yarn build
```
Desta forma será criado uma pasta chamada *dist* onde conterá os arquivos para distribuição.